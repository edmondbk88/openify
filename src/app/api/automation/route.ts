import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'No auténticado' }, { status: 401 })
    }

    const projectId = request.nextUrl.searchParams.get('project_id')
    if (!projectId) {
      return NextResponse.json({ error: 'project_id requerido' }, { status: 400 })
    }

    const admin = createAdminClient()

    // Verify project ownership
    const { data: project } = await admin
      .from('projects')
      .select('id')
      .eq('id', projectId)
      .eq('user_id', user.id)
      .single()

    if (!project) {
      return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 })
    }

    // Fetch rule
    const { data: rule } = await admin
      .from('automation_rules')
      .select('*')
      .eq('project_id', projectId)
      .single()

    // Fetch contacts if rule exists
    let contacts: unknown[] = []
    if (rule) {
      const { data: contactsData } = await admin
        .from('automation_contacts')
        .select('*')
        .eq('rule_id', rule.id)
        .order('created_at', { ascending: false })

      contacts = contactsData || []
    }

    return NextResponse.json({ rule: rule || null, contacts })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'No auténticado' }, { status: 401 })
    }

    const body = await request.json()
    const admin = createAdminClient()

    // Handle add-contacts action
    if (body.action === 'add-contacts') {
      const { rule_id, contacts } = body

      if (!rule_id || !contacts || !Array.isArray(contacts)) {
        return NextResponse.json({ error: 'rule_id y contacts requeridos' }, { status: 400 })
      }

      // Verify rule ownership
      const { data: rule } = await admin
        .from('automation_rules')
        .select('id, delay_days, project_id')
        .eq('id', rule_id)
        .single()

      if (!rule) {
        return NextResponse.json({ error: 'Regla no encontrada' }, { status: 404 })
      }

      const { data: project } = await admin
        .from('projects')
        .select('id')
        .eq('id', rule.project_id)
        .eq('user_id', user.id)
        .single()

      if (!project) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
      }

      // Create contacts with scheduled_at based on delay_days
      const now = new Date()
      const scheduledAt = new Date(now.getTime() + rule.delay_days * 24 * 60 * 60 * 1000)

      const contactRecords = contacts.map((c: { name?: string; email: string }) => ({
        rule_id,
        email: c.email,
        name: c.name || null,
        scheduled_at: scheduledAt.toISOString(),
        status: 'pending',
      }))

      const { data: insertedContacts, error } = await admin
        .from('automation_contacts')
        .insert(contactRecords)
        .select()

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }

      return NextResponse.json({ contacts: insertedContacts })
    }

    // Handle create/update rule
    const { project_id, rule_id, is_active, delay_days, email_subject, email_body } = body

    if (!project_id) {
      return NextResponse.json({ error: 'project_id requerido' }, { status: 400 })
    }

    // Verify project ownership
    const { data: project } = await admin
      .from('projects')
      .select('id')
      .eq('id', project_id)
      .eq('user_id', user.id)
      .single()

    if (!project) {
      return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 })
    }

    const ruleData = {
      project_id,
      is_active: is_active ?? true,
      delay_days: delay_days ?? 7,
      email_subject: email_subject || 'Nos encantaría conocer tu opinión',
      email_body:
        email_body ||
        'Hola, nos encantaría que nos dejaras tu testimonio sobre tu experiencia con nosotros.',
      updated_at: new Date().toISOString(),
    }

    let rule
    if (rule_id) {
      // Update existing rule
      const { data, error } = await admin
        .from('automation_rules')
        .update(ruleData)
        .eq('id', rule_id)
        .select()
        .single()

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
      rule = data
    } else {
      // Create new rule
      const { data, error } = await admin
        .from('automation_rules')
        .insert(ruleData)
        .select()
        .single()

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
      rule = data
    }

    return NextResponse.json({ rule })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
