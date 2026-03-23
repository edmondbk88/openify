import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { projectId } = await params
  const admin = createAdminClient()

  // Fetch project info
  const { data: project } = await admin
    .from('projects')
    .select('name')
    .eq('id', projectId)
    .single()

  if (!project) {
    return new NextResponse('Project not found', { status: 404 })
  }

  // Fetch approved testimonials for this project
  const { data: testimonials } = await admin
    .from('testimonials')
    .select('rating')
    .eq('project_id', projectId)
    .eq('status', 'approved')

  const count = testimonials?.length ?? 0
  const avgRating =
    count > 0
      ? (testimonials!.reduce((sum, t) => sum + (t.rating ?? 5), 0) / count).toFixed(1)
      : '0.0'

  // Generate stars (full, half, empty) based on rating
  const rating = parseFloat(avgRating)
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  let starsHtml = ''
  const starY = 44
  let starX = 10

  for (let i = 0; i < fullStars; i++) {
    starsHtml += `<polygon points="${starX},${starY - 5} ${starX + 3},${starY + 1} ${starX + 7},${starY + 1} ${starX + 4},${starY + 5} ${starX + 5},${starY + 11} ${starX},${starY + 7} ${starX - 5},${starY + 11} ${starX - 4},${starY + 5} ${starX - 7},${starY + 1} ${starX - 3},${starY + 1}" fill="#FBBF24" stroke="#F59E0B" stroke-width="0.5"/>`
    starX += 18
  }

  if (hasHalf) {
    starsHtml += `<polygon points="${starX},${starY - 5} ${starX + 3},${starY + 1} ${starX + 7},${starY + 1} ${starX + 4},${starY + 5} ${starX + 5},${starY + 11} ${starX},${starY + 7} ${starX - 5},${starY + 11} ${starX - 4},${starY + 5} ${starX - 7},${starY + 1} ${starX - 3},${starY + 1}" fill="#E5E7EB" stroke="#F59E0B" stroke-width="0.5"/>`
    starsHtml += `<clipPath id="half"><rect x="${starX - 7}" y="${starY - 6}" width="7" height="18"/></clipPath>`
    starsHtml += `<polygon clip-path="url(#half)" points="${starX},${starY - 5} ${starX + 3},${starY + 1} ${starX + 7},${starY + 1} ${starX + 4},${starY + 5} ${starX + 5},${starY + 11} ${starX},${starY + 7} ${starX - 5},${starY + 11} ${starX - 4},${starY + 5} ${starX - 7},${starY + 1} ${starX - 3},${starY + 1}" fill="#FBBF24" stroke="#F59E0B" stroke-width="0.5"/>`
    starX += 18
  }

  for (let i = 0; i < emptyStars; i++) {
    starsHtml += `<polygon points="${starX},${starY - 5} ${starX + 3},${starY + 1} ${starX + 7},${starY + 1} ${starX + 4},${starY + 5} ${starX + 5},${starY + 11} ${starX},${starY + 7} ${starX - 5},${starY + 11} ${starX - 4},${starY + 5} ${starX - 7},${starY + 1} ${starX - 3},${starY + 1}" fill="#E5E7EB" stroke="#D1D5DB" stroke-width="0.5"/>`
    starX += 18
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="70" viewBox="0 0 220 70">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F0FDF4"/>
      <stop offset="100%" style="stop-color:#ECFDF5"/>
    </linearGradient>
  </defs>
  <rect width="220" height="70" rx="10" fill="url(#bg)" stroke="#BBF7D0" stroke-width="1.5"/>
  <!-- Checkmark circle -->
  <circle cx="26" cy="24" r="12" fill="#22C55E"/>
  <polyline points="20,24 24,28 32,20" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Text -->
  <text x="44" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#166534">Verificado por Opinafy</text>
  <text x="44" y="33" font-family="system-ui, -apple-system, sans-serif" font-size="9" fill="#6B7280">${avgRating} - ${count} testimonios verificados</text>
  <!-- Stars -->
  ${starsHtml}
</svg>`

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
