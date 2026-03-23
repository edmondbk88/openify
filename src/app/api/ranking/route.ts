import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
  try {
    const admin = createAdminClient()

    // Fetch all projects with show_on_minisite = true from paid users
    const { data: projects, error: projectsError } = await admin
      .from('projects')
      .select('id, name, slug, user_id, brand_color, logo_url, certification_tier, show_on_minisite')
      .eq('show_on_minisite', true)
      .eq('is_active', true)

    if (projectsError || !projects || projects.length === 0) {
      return NextResponse.json({ ranking: [] })
    }

    // Filter to only paid plan users
    const userIds = Array.from(new Set(projects.map((p) => p.user_id)))
    const { data: profiles } = await admin
      .from('profiles')
      .select('id, username, plan')
      .in('id', userIds)
      .neq('plan', 'free')

    if (!profiles || profiles.length === 0) {
      return NextResponse.json({ ranking: [] })
    }

    const paidUserMap = new Map(profiles.map((p) => [p.id, p]))
    const paidProjects = projects.filter((p) => paidUserMap.has(p.user_id))

    if (paidProjects.length === 0) {
      return NextResponse.json({ ranking: [] })
    }

    // Fetch approved testimonials for these projects
    const projectIds = paidProjects.map((p) => p.id)
    const { data: testimonials } = await admin
      .from('testimonials')
      .select('project_id, rating')
      .eq('status', 'approved')
      .in('project_id', projectIds)

    if (!testimonials || testimonials.length === 0) {
      return NextResponse.json({ ranking: [] })
    }

    // Aggregate: count and avg rating per project
    const statsMap = new Map<string, { count: number; totalRating: number }>()
    for (const t of testimonials) {
      const existing = statsMap.get(t.project_id) || { count: 0, totalRating: 0 }
      existing.count++
      existing.totalRating += t.rating || 5
      statsMap.set(t.project_id, existing)
    }

    // Filter projects with >= 5 approved testimonials
    const ranking = paidProjects
      .map((p) => {
        const stats = statsMap.get(p.id)
        if (!stats || stats.count < 5) return null
        const profile = paidUserMap.get(p.user_id)
        return {
          project_name: p.name,
          slug: p.slug,
          username: profile?.username || '',
          brand_color: p.brand_color,
          logo_url: p.logo_url,
          certification_tier: p.certification_tier || 'none',
          testimonial_count: stats.count,
          avg_rating: Math.round((stats.totalRating / stats.count) * 10) / 10,
        }
      })
      .filter(Boolean)
      .sort((a, b) => {
        // Sort by avg rating desc, then by count desc
        if (b!.avg_rating !== a!.avg_rating) return b!.avg_rating - a!.avg_rating
        return b!.testimonial_count - a!.testimonial_count
      })
      .slice(0, 50)

    return NextResponse.json({ ranking })
  } catch {
    return NextResponse.json({ ranking: [] })
  }
}
