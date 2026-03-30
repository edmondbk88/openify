import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Project } from '@/types'
import { detectLocale, getCollectionTexts } from '@/lib/collection-translations'

interface PageProps {
  params: Promise<{ username: string; slug: string }>
  searchParams: Promise<{ verificación?: string }>
}

async function getProject(username: string, slug: string): Promise<Project | null> {
  const supabase = await createClient()

  const { data: profile } = await supabase
    .from('profiles')
    .select('id')
    .eq('username', username)
    .single()

  if (!profile) return null

  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('user_id', profile.id)
    .eq('is_active', true)
    .single()

  return data as Project | null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username, slug } = await params
  const project = await getProject(username, slug)

  const headersList = await headers()
  const acceptLang = headersList.get('accept-language') || 'es'
  const locale = detectLocale(acceptLang)
  const t = getCollectionTexts(locale)

  if (!project) {
    return { title: t.metaNotFound }
  }

  return {
    title: `${t.metaThanks} - ${project.name}`,
    robots: { index: false, follow: false },
  }
}

export default async function GraciasPage({ params, searchParams }: PageProps) {
  const { username, slug } = await params
  const { verificación } = await searchParams
  const project = await getProject(username, slug)

  if (!project) {
    notFound()
  }

  const headersList = await headers()
  const acceptLang = headersList.get('accept-language') || 'es'
  const locale = detectLocale(acceptLang)
  const t = getCollectionTexts(locale)

  const isVerificationPending = verificación === 'pendiente'

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-lg text-center">
        {isVerificationPending ? (
          <>
            {/* Email Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
              <svg
                className="h-10 w-10 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {t.graciasCheckInbox}
            </h1>
            <p className="mt-4 text-gray-600">
              {t.graciasVerificationSent}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              {t.graciasCheckSpam}
            </p>
          </>
        ) : (
          <>
            {/* Green Checkmark Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>

            {/* Thank You Message */}
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {project.thank_you_message}
            </h1>
          </>
        )}

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href={`/p/${username}/${slug}`}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: project.brand_color }}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            {t.graciasBack}
          </Link>
        </div>

        {/* Powered by Opinafy */}
        <div className="mt-16">
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
