'use client'

import { useRouter } from 'next/navigation'
import { CollectionForm } from '@/components/collection/collection-form'

interface CollectionPageClientProps {
  slug: string
  projectId: string
  brandColor: string
}

export function CollectionPageClient({
  slug,
  projectId,
  brandColor,
}: CollectionPageClientProps) {
  const router = useRouter()

  return (
    <CollectionForm
      projectId={projectId}
      brandColor={brandColor}
      onSuccess={() => router.push(`/p/${slug}/gracias`)}
    />
  )
}
