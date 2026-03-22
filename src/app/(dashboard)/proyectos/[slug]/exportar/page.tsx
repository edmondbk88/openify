import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import type { Testimonial } from '@/types'
import ExportClient from './export-client'

export const metadata = {
  title: 'Exportar testimonios - Opinafy',
}

export default async function ExportarPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('user_id', user.id)
    .single()

  if (!project) {
    notFound()
  }

  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('project_id', project.id)
    .eq('status', 'approved')
    .order('is_featured', { ascending: false })
    .order('created_at', { ascending: false })

  return (
    <ExportClient
      project={project}
      testimonials={(testimonials as Testimonial[]) ?? []}
    />
  )
}
