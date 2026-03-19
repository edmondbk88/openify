import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import AdminSidebar from '@/components/admin/admin-sidebar'

export const metadata = {
  title: {
    default: 'Admin | Opinafy',
    template: '%s | Admin Opinafy',
  },
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
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

  const admin = createAdminClient()
  const { data: profile } = await admin
    .from('profiles')
    .select('full_name, email, avatar_url, is_admin')
    .eq('id', user.id)
    .single()

  if (!profile?.is_admin) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar
        user={{
          full_name: profile.full_name || '',
          email: profile.email || '',
          avatar_url: profile.avatar_url || undefined,
        }}
      />
      <main className="lg:ml-64 pt-14 lg:pt-0 min-h-screen">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}
