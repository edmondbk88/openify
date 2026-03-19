'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'

type RecorderState = 'idle' | 'previewing' | 'recording' | 'review' | 'uploading' | 'done'

const MAX_RECORDING_SECONDS = 120

interface VideoUploadProps {
  value?: string
  onChange: (url: string | undefined) => void
  brandColor?: string
}

export function VideoUpload({ value, onChange, brandColor }: VideoUploadProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playbackRef = useRef<HTMLVideoElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const [state, setState] = useState<RecorderState>(value ? 'done' : 'idle')
  const [error, setError] = useState<string | null>(null)
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null)
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [uploadProgress, setUploadProgress] = useState(0)

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopAllTracks()
      if (timerRef.current) clearInterval(timerRef.current)
      if (recordedUrl) URL.revokeObjectURL(recordedUrl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const stopAllTracks = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
  }, [])

  const startPreview = useCallback(async () => {
    setError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 640, max: 1280 },
          height: { ideal: 480, max: 720 },
          frameRate: { ideal: 24, max: 30 },
        },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.muted = true
        await videoRef.current.play()
      }
      setState('previewing')
    } catch {
      setError('Necesitas dar permiso a tu cámara y micrófono para grabar un video testimonio.')
    }
  }, [])

  const cancelPreview = useCallback(() => {
    stopAllTracks()
    setState('idle')
  }, [stopAllTracks])

  const startRecording = useCallback(() => {
    if (!streamRef.current) return
    setError(null)
    chunksRef.current = []
    setElapsedSeconds(0)

    // Clean up previous recorded URL
    if (recordedUrl) {
      URL.revokeObjectURL(recordedUrl)
      setRecordedUrl(null)
    }
    setRecordedBlob(null)

    // Use VP9 for best compression, fallback to VP8
    const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
      ? 'video/webm;codecs=vp9,opus'
      : MediaRecorder.isTypeSupported('video/webm;codecs=vp8,opus')
        ? 'video/webm;codecs=vp8,opus'
        : 'video/webm'

    // Low bitrate for small file size (~1MB per minute)
    const mediaRecorder = new MediaRecorder(streamRef.current, {
      mimeType,
      videoBitsPerSecond: 500_000,  // 500kbps video (very compressed)
      audioBitsPerSecond: 64_000,   // 64kbps audio
    })
    mediaRecorderRef.current = mediaRecorder

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data)
    }

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'video/webm' })
      const url = URL.createObjectURL(blob)
      setRecordedBlob(blob)
      setRecordedUrl(url)
      setState('review')
      stopAllTracks()
    }

    mediaRecorder.start(1000) // collect data every second
    setState('recording')

    // Start timer
    const startTime = Date.now()
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      setElapsedSeconds(elapsed)
      if (elapsed >= MAX_RECORDING_SECONDS) {
        mediaRecorder.stop()
        if (timerRef.current) clearInterval(timerRef.current)
      }
    }, 250)
  }, [recordedUrl, stopAllTracks])

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const reRecord = useCallback(() => {
    if (recordedUrl) URL.revokeObjectURL(recordedUrl)
    setRecordedBlob(null)
    setRecordedUrl(null)
    startPreview()
  }, [recordedUrl, startPreview])

  const uploadVideo = useCallback(async () => {
    if (!recordedBlob) return
    setState('uploading')
    setUploadProgress(0)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', recordedBlob, 'testimonio.webm')
      formData.append('type', 'video')

      // Simulate progress since fetch doesn't support upload progress natively
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => Math.min(prev + 8, 90))
      }, 300)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      clearInterval(progressInterval)
      setUploadProgress(100)

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Error al subir el vídeo')
      }

      const data = await res.json()
      onChange(data.url)
      setState('done')

      // Clean up recorded URL
      if (recordedUrl) URL.revokeObjectURL(recordedUrl)
      setRecordedUrl(null)
      setRecordedBlob(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al subir el vídeo')
      setState('review')
    }
  }, [recordedBlob, recordedUrl, onChange])

  const handleRemove = useCallback(() => {
    onChange(undefined)
    if (recordedUrl) URL.revokeObjectURL(recordedUrl)
    setRecordedBlob(null)
    setRecordedUrl(null)
    setElapsedSeconds(0)
    setState('idle')
  }, [onChange, recordedUrl])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const remainingSeconds = MAX_RECORDING_SECONDS - elapsedSeconds

  const accentColor = brandColor || '#4f46e5'

  return (
    <div className="w-full">
      {/* Error message */}
      {error && (
        <div className="mb-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Idle state */}
      {state === 'idle' && (
        <button
          type="button"
          onClick={startPreview}
          className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-300 bg-gray-900/5 px-6 py-8 transition-colors hover:border-gray-400 hover:bg-gray-900/10"
        >
          <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          <span className="text-sm font-medium text-gray-600">Grabar video testimonio</span>
        </button>
      )}

      {/* Preview state - camera on, ready to record */}
      {state === 'previewing' && (
        <div className="overflow-hidden rounded-xl bg-gray-900">
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              playsInline
              muted
              autoPlay
            />
          </div>
          <div className="flex items-center justify-center gap-3 px-4 py-3">
            <button
              type="button"
              onClick={cancelPreview}
              className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={startRecording}
              className="flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: '#dc2626' }}
            >
              <span className="inline-block h-3 w-3 rounded-full bg-white" />
              Empezar grabación
            </button>
          </div>
        </div>
      )}

      {/* Recording state */}
      {state === 'recording' && (
        <div className="overflow-hidden rounded-xl bg-gray-900">
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              playsInline
              muted
              autoPlay
            />
            {/* Recording indicator */}
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
              <span className="text-xs font-semibold text-white">REC</span>
            </div>
            {/* Timer */}
            <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1">
              <span className={cn(
                'text-sm font-mono font-semibold',
                remainingSeconds <= 10 ? 'text-red-400' : 'text-white'
              )}>
                {formatTime(elapsedSeconds)} / {formatTime(MAX_RECORDING_SECONDS)}
              </span>
            </div>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
              <div
                className="h-full bg-red-500 transition-all duration-300"
                style={{ width: `${(elapsedSeconds / MAX_RECORDING_SECONDS) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-3">
            <button
              type="button"
              onClick={stopRecording}
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="6" width="12" height="12" rx="2" />
              </svg>
              Detener
            </button>
          </div>
        </div>
      )}

      {/* Review state */}
      {state === 'review' && recordedUrl && (
        <div className="overflow-hidden rounded-xl bg-gray-900">
          <div className="relative aspect-video w-full">
            <video
              ref={playbackRef}
              src={recordedUrl}
              className="h-full w-full object-cover"
              controls
              playsInline
            />
          </div>
          <div className="flex items-center justify-center gap-3 px-4 py-3">
            <button
              type="button"
              onClick={reRecord}
              className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800"
            >
              Grabar de nuevo
            </button>
            <button
              type="button"
              onClick={uploadVideo}
              className="rounded-lg px-5 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              Usar este video
            </button>
          </div>
        </div>
      )}

      {/* Uploading state */}
      {state === 'uploading' && (
        <div className="overflow-hidden rounded-xl bg-gray-900">
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-4">
            <Spinner className="h-8 w-8 text-white" />
            <p className="text-sm text-gray-300">Subiendo video...</p>
            <div className="mx-auto w-48 overflow-hidden rounded-full bg-gray-700">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%`, backgroundColor: accentColor }}
              />
            </div>
            <p className="text-xs text-gray-500">{uploadProgress}%</p>
          </div>
        </div>
      )}

      {/* Done state */}
      {state === 'done' && value && (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative">
            <video
              src={value}
              className="aspect-video w-full object-cover"
              controls
              playsInline
            />
            {/* Checkmark overlay */}
            <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-white shadow-md">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-xs text-green-600 font-medium">Video grabado correctamente</span>
            <button
              type="button"
              onClick={handleRemove}
              className="text-sm text-red-600 hover:text-red-700 underline"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
