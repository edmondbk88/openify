'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'

type RecorderState = 'idle' | 'recording' | 'review' | 'uploading' | 'done'

const MAX_RECORDING_SECONDS = 180 // 3 minutes

interface AudioUploadProps {
  value?: string
  onChange: (url: string | undefined) => void
  brandColor?: string
}

export function AudioUpload({ value, onChange, brandColor }: AudioUploadProps) {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animFrameRef = useRef<number | null>(null)

  const [state, setState] = useState<RecorderState>(value ? 'done' : 'idle')
  const [error, setError] = useState<string | null>(null)
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null)
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [uploadProgress, setUploadProgress] = useState(0)

  useEffect(() => {
    return () => {
      stopAllTracks()
      if (timerRef.current) clearInterval(timerRef.current)
      if (recordedUrl) URL.revokeObjectURL(recordedUrl)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const stopAllTracks = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current)
      animFrameRef.current = null
    }
  }, [])

  const drawWaveform = useCallback(() => {
    const analyser = analyserRef.current
    const canvas = canvasRef.current
    if (!analyser || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const draw = () => {
      animFrameRef.current = requestAnimationFrame(draw)
      analyser.getByteTimeDomainData(dataArray)

      ctx.fillStyle = '#1f2937'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.lineWidth = 2
      ctx.strokeStyle = brandColor || '#6366f1'
      ctx.beginPath()

      const sliceWidth = canvas.width / bufferLength
      let x = 0

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0
        const y = (v * canvas.height) / 2

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
        x += sliceWidth
      }

      ctx.lineTo(canvas.width, canvas.height / 2)
      ctx.stroke()
    }

    draw()
  }, [brandColor])

  const startRecording = useCallback(async () => {
    setError(null)
    chunksRef.current = []
    setElapsedSeconds(0)

    if (recordedUrl) {
      URL.revokeObjectURL(recordedUrl)
      setRecordedUrl(null)
    }
    setRecordedBlob(null)

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      })
      streamRef.current = stream

      // Set up audio analyser for waveform
      const audioContext = new AudioContext()
      const source = audioContext.createMediaStreamSource(stream)
      const analyser = audioContext.createAnalyser()
      analyser.fftSize = 2048
      source.connect(analyser)
      analyserRef.current = analyser

      // Choose mime type
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')
          ? 'audio/ogg;codecs=opus'
          : 'audio/webm'

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType,
        audioBitsPerSecond: 64_000,
      })
      mediaRecorderRef.current = mediaRecorder

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data)
      }

      mediaRecorder.onstop = () => {
        const ext = mimeType.includes('ogg') ? 'ogg' : 'webm'
        const blob = new Blob(chunksRef.current, { type: `audio/${ext}` })
        const url = URL.createObjectURL(blob)
        setRecordedBlob(blob)
        setRecordedUrl(url)
        setState('review')
        stopAllTracks()
      }

      mediaRecorder.start(1000)
      setState('recording')
      drawWaveform()

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
    } catch {
      setError('Necesitas dar permiso a tu microfono para grabar un audio testimonio.')
    }
  }, [recordedUrl, stopAllTracks, drawWaveform])

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
    startRecording()
  }, [recordedUrl, startRecording])

  const uploadAudio = useCallback(async () => {
    if (!recordedBlob) return
    setState('uploading')
    setUploadProgress(0)
    setError(null)

    try {
      const ext = recordedBlob.type.includes('ogg') ? 'ogg' : 'webm'
      const formData = new FormData()
      formData.append('file', recordedBlob, `testimonio-audio.${ext}`)
      formData.append('type', 'audio')

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
        throw new Error(data?.error || 'Error al subir el audio')
      }

      const data = await res.json()
      onChange(data.url)
      setState('done')

      if (recordedUrl) URL.revokeObjectURL(recordedUrl)
      setRecordedUrl(null)
      setRecordedBlob(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al subir el audio')
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
      {error && (
        <div className="mb-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Idle state */}
      {state === 'idle' && (
        <button
          type="button"
          onClick={startRecording}
          className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-300 bg-gray-900/5 px-6 py-6 transition-colors hover:border-gray-400 hover:bg-gray-900/10"
        >
          <svg className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
          <span className="text-sm font-medium text-gray-600">Grabar audio testimonio</span>
        </button>
      )}

      {/* Recording state */}
      {state === 'recording' && (
        <div className="overflow-hidden rounded-xl bg-gray-900">
          <div className="relative w-full p-4">
            {/* Waveform */}
            <canvas
              ref={canvasRef}
              width={400}
              height={80}
              className="w-full rounded-lg"
            />
            {/* Recording indicator */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-red-500" />
                <span className="text-xs font-semibold text-white">Grabando</span>
              </div>
              <span className={cn(
                'text-sm font-mono font-semibold',
                remainingSeconds <= 10 ? 'text-red-400' : 'text-white'
              )}>
                {formatTime(elapsedSeconds)} / {formatTime(MAX_RECORDING_SECONDS)}
              </span>
            </div>
            {/* Progress bar */}
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-700">
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
          <div className="p-4">
            <audio
              src={recordedUrl}
              controls
              className="w-full"
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
              onClick={uploadAudio}
              className="rounded-lg px-5 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              Usar este audio
            </button>
          </div>
        </div>
      )}

      {/* Uploading state */}
      {state === 'uploading' && (
        <div className="overflow-hidden rounded-xl bg-gray-900">
          <div className="flex w-full flex-col items-center justify-center gap-4 p-8">
            <Spinner className="h-8 w-8 text-white" />
            <p className="text-sm text-gray-300">Subiendo audio...</p>
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
          <div className="relative p-4">
            <audio
              src={value}
              controls
              className="w-full"
            />
            <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-white shadow-md">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-xs font-medium text-green-600">Audio grabado correctamente</span>
            <button
              type="button"
              onClick={handleRemove}
              className="text-sm text-red-600 underline hover:text-red-700"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
