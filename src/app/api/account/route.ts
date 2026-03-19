import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function DELETE() {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const adminClient = createAdminClient()

    // Delete all user's testimonials (through their projects)
    const { data: projects } = await adminClient
      .from('projects')
      .select('id')
      .eq('user_id', user.id)

    if (projects && projects.length > 0) {
      const projectIds = projects.map((p) => p.id)

      // Delete testimonials
      await adminClient
        .from('testimonials')
        .delete()
        .in('project_id', projectIds)

      // Delete widget configs
      await adminClient
        .from('widget_configs')
        .delete()
        .in('project_id', projectIds)

      // Delete widget impressions
      await adminClient
        .from('widget_impressions')
        .delete()
        .in('project_id', projectIds)

      // Delete projects
      await adminClient
        .from('projects')
        .delete()
        .eq('user_id', user.id)
    }

    // Delete profile
    await adminClient
      .from('profiles')
      .delete()
      .eq('id', user.id)

    // Delete auth user
    const { error: deleteError } = await adminClient.auth.admin.deleteUser(user.id)

    if (deleteError) {
      return NextResponse.json({ error: deleteError.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
