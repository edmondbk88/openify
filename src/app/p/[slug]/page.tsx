import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import type { Project, Plan } from '@/types'
import { PLAN_LIMITS } from '@/lib/constants'
import Image from 'next/image'
import { CollectionPageClient } from './collection-page-client'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getProject(slug: string): Promise<Project | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  return data as Project | null
}

async function getAllowVideo(userId: string): Promise<boolean> {
  const supabase = createAdminClient()
  const { data: profile } = await supabase
    .from('profiles')
    .select('plan')
    .eq('id', userId)
    .single()

  const plan = (profile?.plan as Plan) || 'free'
  return PLAN_LIMITS[plan].video
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return { title: 'No encontrado' }
  }

  return {
    title: `Deja tu testimonio - ${project.name}`,
    description: project.collection_title,
    robots: { index: false, follow: false },
  }
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-lg px-4 py-12 sm:py-16">
        {/* Project Logo */}
        {project.logo_url && (
          <div className="mb-8 flex justify-center">
            <Image
              src={project.logo_url}
              alt={project.name}
              width={120}
              height={56}
              className="h-14 w-auto object-contain"
            />
          </div>
        )}

        {/* Project Name */}
        <p
          className="text-center text-sm font-medium"
          style={{ color: project.brand_color }}
        >
          {project.name}
        </p>

        {/* Collection Title */}
        <h1 className="mt-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          {project.collection_title}
        </h1>

        {/* Collection Description */}
        {project.collection_description && (
          <p className="mt-3 text-center text-base text-gray-500">
            {project.collection_description}
          </p>
        )}

        {/* Testimonial Form */}
        <div className="mt-8">
          <CollectionPageClient
            slug={slug}
            projectId={project.id}
            brandColor={project.brand_color}
            allowVideo={await getAllowVideo(project.user_id)}
          />
        </div>

        {/* Powered by Opinafy */}
        <div className="mt-12 text-center">
          <a
            href="https://opinafy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-gray-600"
          >
            Powered by
            <span className="font-semibold">Opinafy</span>
          </a>
        </div>
      </div>
    </div>
  )
}
