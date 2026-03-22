import { createClient } from '@/lib/supabase/server'
import type { Locale } from '@/lib/i18n'

export async function getUserLocale(): Promise<Locale> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return 'es'
  const { data } = await supabase.from('profiles').select('locale').eq('id', user.id).single()
  return (data?.locale as Locale) || 'es'
}
