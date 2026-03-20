'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Sidebar from '@/components/dashboard/sidebar'

interface DashboardShellProps {
  user: { full_name: string | null; email: string; avatar_url: string | null; plan: string }
  children: React.ReactNode
}

export default function DashboardShell({ user, children }: DashboardShellProps) {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar user={user} onLogout={handleLogout} />
      <main className="lg:pl-64">
        <div className="px-4 py-8 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}
