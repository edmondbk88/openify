'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  generateInstagramPost,
  generateTwitterPost,
  generateLinkedInPost,
  generateFacebookPost,
  generateEmailSnippet,
} from '@/lib/social-post-templates'

interface Testimonial {
  id: string
  content: string
  author_name: string
  author_company: string | null
  author_role: string | null
  rating: number
  status: string
}

interface GeneratedPost {
  platform: string
  icon: string
  content: string
  color: string
}

export default function SocialPostsPage() {
  const params = useParams()
  const slug = params.slug as string
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [posts, setPosts] = useState<GeneratedPost[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  useEffect(() => {
    async function load() {
      try {
        // Fetch all projects to find the one matching slug
        const projRes = await fetch('/api/projects')
        if (!projRes.ok) return
        const projects = await projRes.json()
        const project = projects.find((p: { slug: string }) => p.slug === slug)
        if (!project?.id) return

        // Fetch testimonials for this project
        const res = await fetch(`/api/testimonials?projectId=${project.id}`)
        if (!res.ok) return
        const data = await res.json()
        const all = Array.isArray(data) ? data : data.data || []
        // Filter approved only
        setTestimonials(all.filter((t: Testimonial) => t.status === 'approved'))
      } catch {
        // silent
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [slug])

  function handleGenerate(t: Testimonial) {
    setSelectedId(t.id)
    const projectUrl = 'https://opinafy.com'
    const data = {
      content: t.content,
      author_name: t.author_name,
      author_company: t.author_company,
      author_role: t.author_role,
      rating: t.rating,
    }
    setPosts([
      { platform: 'Instagram', icon: '\uD83D\uDCF7', content: generateInstagramPost(data, projectUrl), color: 'border-pink-300 bg-pink-50' },
      { platform: 'Twitter / X', icon: '\uD83D\uDC26', content: generateTwitterPost(data, projectUrl), color: 'border-sky-300 bg-sky-50' },
      { platform: 'LinkedIn', icon: '\uD83D\uDCBC', content: generateLinkedInPost(data, projectUrl), color: 'border-blue-300 bg-blue-50' },
      { platform: 'Facebook', icon: '\uD83D\uDC4D', content: generateFacebookPost(data, projectUrl), color: 'border-blue-300 bg-blue-50' },
      { platform: 'Email', icon: '\u2709\uFE0F', content: generateEmailSnippet(data), color: 'border-gray-300 bg-gray-50' },
    ])
  }

  async function handleCopy(text: string, index: number) {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          href={`/proyectos/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Volver al proyecto
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-900">Generar Posts para Redes Sociales</h1>
      <p className="mt-1 text-sm text-gray-500">
        Selecciona un testimonio aprobado y genera posts listos para publicar en tus redes sociales.
      </p>

      {loading ? (
        <div className="mt-8 flex justify-center">
          <svg className="h-8 w-8 animate-spin text-indigo-600" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="mt-8 rounded-lg border border-gray-200 bg-white p-8 text-center">
          <p className="text-gray-500">No hay testimonios aprobados todavia.</p>
          <Link href={`/proyectos/${slug}`} className="mt-3 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">
            Volver al proyecto
          </Link>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Testimonios aprobados</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`cursor-pointer rounded-lg border p-4 transition-all hover:shadow-md ${
                  selectedId === t.id ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200' : 'border-gray-200 bg-white'
                }`}
                onClick={() => handleGenerate(t)}
              >
                <p className="line-clamp-3 text-sm text-gray-700">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    {t.author_name}{t.author_company ? `, ${t.author_company}` : ''}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-yellow-500">{'\u2B50'.repeat(t.rating)}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleGenerate(t) }}
                  className="mt-3 inline-flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                  Generar posts
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {posts.length > 0 && (
        <div className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Posts generados</h2>
          <div className="space-y-4">
            {posts.map((post, i) => (
              <div key={i} className={`rounded-lg border ${post.color} p-5`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">
                    {post.icon} {post.platform}
                  </h3>
                  <button
                    onClick={() => handleCopy(post.content, i)}
                    className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    {copiedIndex === i ? (
                      <>
                        <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Copiado
                      </>
                    ) : (
                      <>
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>
                        Copiar
                      </>
                    )}
                  </button>
                </div>
                <pre className="mt-3 whitespace-pre-wrap rounded-md bg-white/50 p-3 text-sm text-gray-700">
                  {post.content}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
