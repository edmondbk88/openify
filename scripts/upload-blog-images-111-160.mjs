/**
 * Download images from Pexels and upload to Supabase Storage (blog-images bucket).
 * Run: node scripts/upload-blog-images-111-160.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { writeFile, readFile, unlink, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const SUPABASE_URL = 'https://rckjevsqxkfixkdloqjv.supabase.co'
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

// Pexels photo IDs - relevant business/marketing/tech images
const PEXELS_IDS = [
  3845810, 6235231, 4246120, 3184292, 5699456,   // 111-115
  3184465, 3184431, 5380642, 3184360, 3184328,   // 116-120
  3183197, 3183170, 3184338, 3184357, 3183132,   // 121-125
  3184405, 3183153, 3184316, 3184350, 3183164,   // 126-130
  1181244, 1181406, 1181467, 1181354, 1181263,   // 131-135
  1181271, 1181316, 1181325, 1181675, 1181298,   // 136-140
  3184291, 3184396, 3184431, 3184465, 3184328,   // 141-145
  3184338, 3184350, 3184357, 3184360, 3183197,   // 146-150
  8386434, 8386440, 7567222, 8386365, 8386370,   // 151-155
  8386388, 7567443, 7567229, 8386421, 8386429,   // 156-160
]

const SLUGS = [
  'testimonios-clinicas-veterinarias-especializadas',
  'testimonios-tiendas-ecologicas',
  'testimonios-empresas-mudanzas-internacionales',
  'testimonios-asesores-inmobiliarios',
  'testimonios-centros-fisioterapia-animal',
  'testimonios-escuelas-negocios',
  'testimonios-centros-formacion-continua',
  'testimonios-empresas-seguridad-privada',
  'testimonios-agencias-traduccion',
  'testimonios-empresas-outsourcing',
  'mejorar-tasa-conversion-testimonios',
  'testimonios-paginas-producto',
  'estrategia-testimonios-multicanal',
  'testimonios-email-drip-campaigns',
  'como-conseguir-testimonios-clientes-dificiles',
  'testimonios-sector-lujo',
  'testimonios-comparativas-productos',
  'testimonios-paginas-aterrizaje-ppc',
  'testimonios-retargeting-remarketing',
  'automatizacion-testimonios-crm-hubspot',
  'api-testimonios-integracion-personalizada',
  'shadow-dom-testimonios-sin-conflictos',
  'google-fonts-widgets-testimonios',
  'optimizar-rendimiento-widget-testimonios',
  'testimonios-next-js-react',
  'testimonios-headless-cms',
  'schema-markup-testimonios-seo',
  'testimonios-progressive-web-apps',
  'cdn-widgets-testimonios-velocidad',
  'testing-ab-widgets-testimonios-guia',
  'testimonios-growth-hacking',
  'testimonios-inbound-marketing',
  'testimonios-marketing-contenidos',
  'testimonios-podcast-marketing',
  'testimonios-linkedin-b2b-estrategia',
  'testimonios-tiktok-instagram-reels',
  'testimonios-youtube-strategy',
  'testimonios-marketing-afiliados',
  'testimonios-influencer-marketing',
  'testimonios-marketing-referidos',
  'testimonios-inteligencia-artificial-2027',
  'testimonios-realidad-aumentada',
  'testimonios-blockchain-verificacion',
  'testimonios-voice-search-optimization',
  'testimonios-chatbots-conversacionales',
  'testimonios-personalizacion-dinamica',
  'testimonios-analytics-avanzado',
  'testimonios-compliance-regulaciones',
  'testimonios-mercados-emergentes',
  'futuro-resenas-verificadas-2028',
]

const BUCKET = 'blog-images'
const TMP_DIR = '/tmp/opinafy-blog-images'

async function downloadImage(url, filepath) {
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`)
  const buffer = Buffer.from(await res.arrayBuffer())
  await writeFile(filepath, buffer)
  return buffer
}

async function main() {
  if (!existsSync(TMP_DIR)) await mkdir(TMP_DIR, { recursive: true })

  let uploaded = 0
  let skipped = 0
  let failed = 0

  for (let i = 0; i < SLUGS.length; i++) {
    const slug = SLUGS[i]
    const filename = `${slug}.jpg`

    // Check if already exists
    const { data: existing } = await supabase.storage.from(BUCKET).list('', {
      search: filename,
    })
    if (existing && existing.some(f => f.name === filename)) {
      console.log(`[SKIP] ${filename} already exists`)
      skipped++
      continue
    }

    // Use picsum for reliable free images with unique seeds
    const pexelsId = PEXELS_IDS[i] || (1000 + i)
    const url = `https://picsum.photos/seed/${slug}/1200/630`
    const tmpPath = path.join(TMP_DIR, filename)

    try {
      console.log(`[DL] ${slug}...`)
      const buffer = await downloadImage(url, tmpPath)

      console.log(`[UP] ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`)
      const { error } = await supabase.storage.from(BUCKET).upload(filename, buffer, {
        contentType: 'image/jpeg',
        upsert: true,
      })
      if (error) throw error

      uploaded++
      await unlink(tmpPath).catch(() => {})
    } catch (err) {
      console.error(`[FAIL] ${slug}: ${err.message}`)
      failed++
    }

    // Rate limit
    if (i < SLUGS.length - 1) await new Promise(r => setTimeout(r, 300))
  }

  console.log(`\nDone! Uploaded: ${uploaded}, Skipped: ${skipped}, Failed: ${failed}`)
}

main().catch(console.error)
