import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardShell from './dashboard-shell'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, email, avatar_url, plan')
    .eq('id', user.id)
    .single()

  const userInfo = {
    full_name: profile?.full_name ?? null,
    email: profile?.email ?? user.email ?? '',
    avatar_url: profile?.avatar_url ?? null,
    plan: (profile?.plan ?? 'free') as string,
  }

  return <DashboardShell user={userInfo}>{children}</DashboardShell>
}
