import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const { projectId } = await params
    const admin = createAdminClient()

    const { data: project } = await admin
      .from('projects')
      .select('id, name, certification_tier')
      .eq('id', projectId)
      .single()

    if (!project) {
      return new NextResponse('Project not found', { status: 404 })
    }

    const tier = project.certification_tier || 'none'

    if (tier === 'none') {
      return new NextResponse('No certification', { status: 404 })
    }

    const tierConfig: Record<string, { color: string; bgColor: string; textColor: string; label: string; desc: string }> = {
      bronze: { color: '#CD7F32', bgColor: '#FFF3E0', textColor: '#5D3A1A', label: 'BRONZE', desc: '5+ Verified Testimonials' },
      silver: { color: '#C0C0C0', bgColor: '#F5F5F5', textColor: '#424242', label: 'SILVER', desc: '20+ Verified Testimonials' },
      gold: { color: '#FFD700', bgColor: '#FFFDE7', textColor: '#5D4E00', label: 'GOLD', desc: '50+ Verified Testimonials' },
      platinum: { color: '#B0BEC5', bgColor: '#ECEFF1', textColor: '#37474F', label: 'PLATINUM', desc: '200+ Verified Testimonials' },
    }

    const config = tierConfig[tier]
    if (!config) {
      return new NextResponse('Invalid tier', { status: 400 })
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="80" viewBox="0 0 280 80">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${config.bgColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:white;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="280" height="80" rx="12" fill="url(#bg)" stroke="${config.color}" stroke-width="2"/>
  <circle cx="40" cy="40" r="22" fill="${config.color}" opacity="0.15"/>
  <text x="40" y="46" font-family="Arial, sans-serif" font-size="20" fill="${config.color}" text-anchor="middle" font-weight="bold">&#9733;</text>
  <text x="72" y="30" font-family="Arial, sans-serif" font-size="11" fill="${config.textColor}" font-weight="bold">Opinafy ${config.label}</text>
  <text x="72" y="46" font-family="Arial, sans-serif" font-size="10" fill="${config.textColor}">${config.desc}</text>
  <text x="72" y="62" font-family="Arial, sans-serif" font-size="9" fill="#9CA3AF">opinafy.com/certificacion</text>
</svg>`

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch {
    return new NextResponse('Error', { status: 500 })
  }
}
