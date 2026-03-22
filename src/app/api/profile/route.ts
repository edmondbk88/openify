import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const profileUpdateSchema = z.object({
  full_name: z.string().min(2).max(100).optional(),
  bio: z.string().max(200).optional().nullable(),
  website_url: z.string().url('URL inv\u00e1lida').optional().nullable().or(z.literal('')),
  minisite_config: z.record(z.string(), z.unknown()).optional().nullable(),
  locale: z.enum(['es', 'en']).optional(),
})

export async function PATCH(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const parsed = profileUpdateSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const updateData: Record<string, unknown> = {}
    if (parsed.data.full_name !== undefined) updateData.full_name = parsed.data.full_name
    if (parsed.data.bio !== undefined) updateData.bio = parsed.data.bio
    if (parsed.data.website_url !== undefined) {
      updateData.website_url = parsed.data.website_url === '' ? null : parsed.data.website_url
    }
    if (parsed.data.minisite_config !== undefined) {
      updateData.minisite_config = parsed.data.minisite_config
    }
    if (parsed.data.locale !== undefined) {
      updateData.locale = parsed.data.locale
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'No hay datos para actualizar' }, { status: 400 })
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .update(updateData)
      .eq('id', user.id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(profile)
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
