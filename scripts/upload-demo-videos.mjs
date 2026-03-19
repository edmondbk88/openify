/**
 * Download free demo videos from Mixkit and upload to Supabase Storage (videos bucket).
 *
 * Videos are CC0 / Mixkit Free License - no attribution needed.
 * Run: node scripts/upload-demo-videos.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { writeFile, readFile, unlink, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const SUPABASE_URL = 'https://rckjevsqxkfixkdloqjv.supabase.co'
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var')
  console.error('Run: SUPABASE_SERVICE_ROLE_KEY=... node scripts/upload-demo-videos.mjs')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

const VIDEOS = [
  {
    name: 'demo-testimonial-1.mp4',
    url: 'https://assets.mixkit.co/videos/10442/10442-720.mp4',
    description: 'Woman talking on video call on a terrace',
  },
  {
    name: 'demo-testimonial-2.mp4',
    url: 'https://assets.mixkit.co/videos/49976/49976-720.mp4',
    description: 'Young man talking on a video call',
  },
  {
    name: 'demo-testimonial-3.mp4',
    url: 'https://assets.mixkit.co/videos/49972/49972-720.mp4',
    description: 'Businesswoman in an office talking in a video call',
  },
  {
    name: 'demo-testimonial-4.mp4',
    url: 'https://assets.mixkit.co/videos/47004/47004-720.mp4',
    description: 'Woman talking on a video call',
  },
]

const BUCKET = 'videos'
const TMP_DIR = '/tmp/opinafy-demo-videos'

async function downloadFile(url, dest) {
  console.log(`  Downloading ${url} ...`)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await writeFile(dest, buf)
  console.log(`  Saved to ${dest} (${(buf.length / 1024 / 1024).toFixed(2)} MB)`)
  return buf
}

async function main() {
  if (!existsSync(TMP_DIR)) await mkdir(TMP_DIR, { recursive: true })

  const results = []

  for (const video of VIDEOS) {
    console.log(`\nProcessing: ${video.name}`)
    const localPath = path.join(TMP_DIR, video.name)

    try {
      // Download
      const buf = await downloadFile(video.url, localPath)

      // Upload to Supabase
      const storagePath = `demos/${video.name}`
      console.log(`  Uploading to Supabase bucket "${BUCKET}" as ${storagePath} ...`)

      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(storagePath, buf, {
          contentType: 'video/mp4',
          upsert: true,
        })

      if (uploadError) {
        console.error(`  Upload error: ${uploadError.message}`)
        results.push({ name: video.name, error: uploadError.message })
        continue
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(storagePath)

      console.log(`  Public URL: ${publicUrl}`)
      results.push({ name: video.name, url: publicUrl, description: video.description })

      // Clean up temp file
      await unlink(localPath)
    } catch (err) {
      console.error(`  Error: ${err.message}`)
      results.push({ name: video.name, error: err.message })
    }
  }

  console.log('\n=== Results ===')
  console.log(JSON.stringify(results, null, 2))
}

main().catch(console.error)
