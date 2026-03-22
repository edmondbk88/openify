import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { z } from 'zod'
import { triggerWebhook } from '@/lib/webhook'

const updateTestimonialSchema = z.object({
  status: z.enum(['pending', 'approved', 'rejected']).optional(),
  is_featured: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  owner_reply: z.string().nullable().optional(),
})

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    // Get testimonial and verify ownership through project
    const { data: testimonial } = await supabase
      .from('testimonials')
      .select('id, project_id')
      .eq('id', id)
      .single()

    if (!testimonial) {
      return NextResponse.json({ error: 'Testimonio no encontrado' }, { status: 404 })
    }

    const { data: project } = await supabase
      .from('projects')
      .select('id')
      .eq('id', testimonial.project_id)
      .eq('user_id', user.id)
      .single()

    if (!project) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
    }

    const body = await request.json()
    const parsed = updateTestimonialSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const updateData: Record<string, unknown> = { ...parsed.data, updated_at: new Date().toISOString() }
    if ('owner_reply' in updateData && updateData.owner_reply) {
      updateData.owner_reply_at = new Date().toISOString()
    } else if ('owner_reply' in updateData && !updateData.owner_reply) {
      updateData.owner_reply_at = null
    }

    const { data: updated, error } = await supabase
      .from('testimonials')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Trigger webhook on status change
    if (parsed.data.status === 'approved' || parsed.data.status === 'rejected') {
      try {
        const admin = createAdminClient()
        const { data: fullProject } = await admin
          .from('projects')
          .select('webhook_url, webhook_events, name')
          .eq('id', testimonial.project_id)
          .single()

        if (fullProject) {
          const event = parsed.data.status === 'approved' ? 'testimonial_approved' : 'testimonial_rejected'
          await triggerWebhook(
            { webhook_url: fullProject.webhook_url, webhook_events: fullProject.webhook_events || [] },
            event,
            { id: updated.id, author_name: updated.author_name, rating: updated.rating, status: updated.status, project_name: fullProject.name }
          )
        }
      } catch {
        // silent fail
      }
    }

    return NextResponse.json(updated)
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    // Get testimonial and verify ownership through project
    const { data: testimonial } = await supabase
      .from('testimonials')
      .select('id, project_id')
      .eq('id', id)
      .single()

    if (!testimonial) {
      return NextResponse.json({ error: 'Testimonio no encontrado' }, { status: 404 })
    }

    const { data: project } = await supabase
      .from('projects')
      .select('id')
      .eq('id', testimonial.project_id)
      .eq('user_id', user.id)
      .single()

    if (!project) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
    }

    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
