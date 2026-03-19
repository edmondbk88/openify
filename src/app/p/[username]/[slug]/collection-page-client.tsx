'use client'

import { useRouter } from 'next/navigation'
import { CollectionForm } from '@/components/collection/collection-form'

interface CollectionPageClientProps {
  username: string
  slug: string
  projectId: string
  brandColor: string
  allowVideo?: boolean
}

export function CollectionPageClient({
  username,
  slug,
  projectId,
  brandColor,
  allowVideo = false,
}: CollectionPageClientProps) {
  const router = useRouter()

  return (
    <CollectionForm
      projectId={projectId}
      brandColor={brandColor}
      allowVideo={allowVideo}
      onSuccess={(verificationPending) => {
        const params = verificationPending ? '?verificacion=pendiente' : ''
        router.push(`/p/${username}/${slug}/gracias${params}`)
      }}
    />
  )
}
