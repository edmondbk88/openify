import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES, ACCEPTED_VIDEO_TYPES, MAX_VIDEO_SIZE, ACCEPTED_AUDIO_TYPES, MAX_AUDIO_SIZE } from '@/lib/constants'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const type = (formData.get('type') as string) || 'avatar'

    if (!file) {
      return NextResponse.json({ error: 'No se proporcionó ningún archivo' }, { status: 400 })
    }

    let bucket: string
    let acceptedTypes: string[]
    let maxSize: number
    let sizeLabel: string

    if (type === 'video') {
      bucket = 'videos'
      acceptedTypes = ACCEPTED_VIDEO_TYPES
      maxSize = MAX_VIDEO_SIZE
      sizeLabel = '50MB'
    } else if (type === 'audio') {
      bucket = 'videos'
      acceptedTypes = ACCEPTED_AUDIO_TYPES
      maxSize = MAX_AUDIO_SIZE
      sizeLabel = '10MB'
    } else {
      bucket = (formData.get('bucket') as string) || 'avatars'
      acceptedTypes = ACCEPTED_IMAGE_TYPES
      maxSize = MAX_FILE_SIZE
      sizeLabel = '5MB'
    }

    // Validate file type
    if (!acceptedTypes.includes(file.type)) {
      const allowed = type === 'video' ? 'MP4 o WebM' : type === 'audio' ? 'WebM, OGG o MP4' : 'JPEG, PNG o WebP'
      return NextResponse.json(
        { error: `Tipo de archivo no permitido. Usa ${allowed}.` },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: `El archivo es demasiado grande. Máximo ${sizeLabel}.` },
        { status: 400 }
      )
    }

    // Generate unique filename
    const ext = file.name.split('.').pop() || 'jpg'
    const uniqueName = `${crypto.randomUUID()}.${ext}`
    const filePath = `${uniqueName}`

    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false,
      })

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 })
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath)

    return NextResponse.json({ url: publicUrl })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
