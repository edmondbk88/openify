import { createAdminClient } from '@/lib/supabase/admin'
import { PLAN_LIMITS } from '@/lib/constants'
import { Plan } from '@/types'

/**
 * Enforces downgrade limits when a user's plan changes.
 *
 * - Deactivates projects beyond the new plan's limit (keeps the most recent ones active).
 * - Resets premium widget layouts to 'carousel' if no longer allowed.
 * - Forces show_branding = true if the new plan doesn't allow branding removal.
 */
export async function enforceDowngradeLimits(userId: string, newPlan: Plan) {
  const supabase = createAdminClient()
  const limits = PLAN_LIMITS[newPlan]

  // 1. Deactivate extra projects beyond the plan limit
  if (limits.projects !== Infinity) {
    // Fetch all projects ordered by most recent first
    const { data: projects } = await supabase
      .from('projects')
      .select('id')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (projects && projects.length > limits.projects) {
      // Keep the first N (most recent) active, deactivate the rest
      const toKeepActive = projects.slice(0, limits.projects).map((p) => p.id)
      const toDeactivate = projects.slice(limits.projects).map((p) => p.id)

      // Activate the ones that should stay active
      if (toKeepActive.length > 0) {
        await supabase
          .from('projects')
          .update({ is_active: true, updated_at: new Date().toISOString() })
          .eq('user_id', userId)
          .in('id', toKeepActive)
      }

      // Deactivate the rest
      if (toDeactivate.length > 0) {
        await supabase
          .from('projects')
          .update({ is_active: false, updated_at: new Date().toISOString() })
          .eq('user_id', userId)
          .in('id', toDeactivate)
      }
    }
  }

  // 2. Reset premium layouts not allowed in the new plan
  const allowedLayouts = limits.layouts
  const premiumLayouts = ['wall', 'single', 'badge'] as const
  const disallowedLayouts = premiumLayouts.filter(
    (l) => !allowedLayouts.includes(l)
  )

  if (disallowedLayouts.length > 0) {
    // Get all project IDs for this user
    const { data: userProjects } = await supabase
      .from('projects')
      .select('id')
      .eq('user_id', userId)

    if (userProjects && userProjects.length > 0) {
      const projectIds = userProjects.map((p) => p.id)

      // Reset widget configs with disallowed layouts to 'carousel'
      await supabase
        .from('widget_configs')
        .update({ layout: 'carousel', updated_at: new Date().toISOString() })
        .in('project_id', projectIds)
        .in('layout', disallowedLayouts)
    }
  }

  // 3. Hide video testimonials if plan doesn't support video
  if (!limits.video) {
    const { data: userProjects } = await supabase
      .from('projects')
      .select('id')
      .eq('user_id', userId)

    if (userProjects && userProjects.length > 0) {
      const projectIds = userProjects.map((p) => p.id)

      // Set video testimonials to 'rejected' status so they don't appear in widget
      // We use a special status approach: keep them but mark them hidden
      // Actually, simpler: null out video_url so they become text-only testimonials
      // The video data stays in storage but isn't shown
      await supabase
        .from('testimonials')
        .update({ video_url: null, updated_at: new Date().toISOString() })
        .in('project_id', projectIds)
        .not('video_url', 'is', null)
    }
  }

  // 4. Force branding if plan doesn't allow removal
  if (!limits.removeBranding) {
    const { data: userProjects } = await supabase
      .from('projects')
      .select('id')
      .eq('user_id', userId)

    if (userProjects && userProjects.length > 0) {
      const projectIds = userProjects.map((p) => p.id)

      await supabase
        .from('widget_configs')
        .update({ show_branding: true, updated_at: new Date().toISOString() })
        .in('project_id', projectIds)
        .eq('show_branding', false)
    }
  }
}
