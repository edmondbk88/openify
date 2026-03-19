import { createClient } from '@supabase/supabase-js'
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const supabase = createClient(
  'https://rckjevsqxkfixkdloqjv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJja2pldnNxeGtmaXhrZGxvcWp2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Mzg4MTI2MCwiZXhwIjoyMDg5NDU3MjYwfQ.4Yk1j-4evr-ERfR2ivTEHcNSorXH1OFZ2nHaxVlKnZI'
)

// Search queries for each article - English queries work better on Unsplash
const articles = [
  { slug: 'que-son-testimonios-clientes-importancia', query: 'customer review stars' },
  { slug: 'como-recopilar-testimonios-clientes-estrategias', query: 'feedback survey form' },
  { slug: 'prueba-social-que-es-como-usarla', query: 'crowd people social' },
  { slug: 'testimonios-en-pagina-web-donde-colocarlos', query: 'website laptop design' },
  { slug: 'como-pedir-testimonios-clientes-plantillas', query: 'email business communication' },
  { slug: 'testimonios-video-guia-completa', query: 'video camera recording' },
  { slug: 'widgets-testimonios-web-guia', query: 'code programming screen' },
  { slug: 'estadisticas-testimonios-datos-conversion', query: 'analytics data dashboard' },
  { slug: 'testimonios-ecommerce-aumentar-ventas', query: 'ecommerce online shopping' },
  { slug: 'diferencia-testimonios-resenas-opiniones', query: 'comparison choice options' },
  { slug: 'como-aumentar-confianza-clientes-online', query: 'trust handshake business' },
  { slug: 'testimonios-para-coaches-consultores', query: 'coaching consulting office' },
  { slug: 'wall-of-love-que-es-como-crear', query: 'wall post-it notes board' },
  { slug: 'testimonios-restaurantes-hosteleria', query: 'restaurant dining food' },
  { slug: 'como-responder-testimonios-negativos', query: 'negative feedback response' },
  { slug: 'testimonios-clinicas-salud', query: 'healthcare clinic medical' },
  { slug: 'seo-testimonios-mejora-posicionamiento', query: 'seo search engine optimization' },
  { slug: 'automatizar-recopilacion-testimonios', query: 'automation workflow robot' },
  { slug: 'testimonios-saas-software', query: 'software dashboard computer' },
  { slug: 'psicologia-prueba-social-ventas', query: 'psychology brain thinking' },
  { slug: 'testimonios-inmobiliarias-agentes', query: 'real estate house property' },
  { slug: 'carousel-testimonios-web-mejores-practicas', query: 'web design interface ui' },
  { slug: 'testimonios-abogados-despachos', query: 'lawyer legal office books' },
  { slug: 'caso-estudio-testimonios-conversion', query: 'growth chart success' },
  { slug: 'testimonios-agencias-marketing', query: 'marketing team creative agency' },
  { slug: 'testimonios-tiendas-fisicas-negocios-locales', query: 'local shop store front' },
  { slug: 'como-usar-testimonios-redes-sociales', query: 'social media phone apps' },
  { slug: 'testimonios-b2b-empresas', query: 'corporate business meeting' },
  { slug: 'landing-pages-testimonios-conversion', query: 'landing page website mockup' },
  { slug: 'testimonios-academias-formacion', query: 'education classroom learning' },
  { slug: 'medir-roi-testimonios', query: 'roi metrics finance numbers' },
  { slug: 'testimonios-fotografia-bodas', query: 'wedding photography love' },
  { slug: 'user-generated-content-testimonios', query: 'content creator smartphone' },
  { slug: 'testimonios-veterinarias-clinicas', query: 'veterinary pet dog cat' },
  { slug: 'badges-confianza-sellos-web', query: 'security badge certificate' },
  { slug: 'testimonios-gimnasios-centros-fitness', query: 'gym fitness workout' },
  { slug: 'email-marketing-testimonios', query: 'email newsletter marketing' },
  { slug: 'testimonios-dentistas-odontologia', query: 'dentist dental smile teeth' },
  { slug: 'storytelling-testimonios-clientes', query: 'storytelling book narrative' },
  { slug: 'testimonios-peluquerias-estetica', query: 'hair salon beauty' },
  { slug: 'testimonios-wordpress-como-integrar', query: 'wordpress website blog' },
  { slug: 'testimonios-shopify-ecommerce', query: 'shopify ecommerce store' },
  { slug: 'nps-net-promoter-score-testimonios', query: 'survey rating score' },
  { slug: 'testimonios-hoteles-alojamientos', query: 'hotel room hospitality' },
  { slug: 'diseno-tarjetas-testimonios', query: 'card design creative layout' },
  { slug: 'testimonios-apps-moviles', query: 'mobile app smartphone' },
  { slug: 'testimonios-contadores-asesores-fiscales', query: 'accounting finance office' },
  { slug: 'inteligencia-artificial-testimonios', query: 'artificial intelligence technology' },
  { slug: 'testimonios-startups-primeros-clientes', query: 'startup entrepreneur launch' },
  { slug: 'guia-completa-social-proof-2026', query: 'strategy planning guide' },
]

const TEMP_DIR = '/tmp/blog-images'

async function searchAndDownload(query, page = 1) {
  // Use Unsplash search without API key via their public endpoint
  const searchUrl = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=1&page=${page}&orientation=landscape`
  const resp = await fetch(searchUrl, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
    }
  })
  if (!resp.ok) return null
  const data = await resp.json()
  if (!data.results || data.results.length === 0) return null

  const photo = data.results[0]
  // Use the regular size URL with custom dimensions
  const imageUrl = photo.urls.regular || photo.urls.small
  return imageUrl
}

async function main() {
  if (!existsSync(TEMP_DIR)) mkdirSync(TEMP_DIR, { recursive: true })

  let successCount = 0
  const imageUrls = {}

  for (let i = 0; i < articles.length; i++) {
    const { slug, query } = articles[i]
    const filename = `${slug}.jpg`
    const filepath = join(TEMP_DIR, filename)

    try {
      console.log(`[${i + 1}/50] Searching: "${query}" for ${slug}...`)

      const imageUrl = await searchAndDownload(query, i % 3 + 1)
      if (!imageUrl) {
        console.log(`  SKIP: No results for "${query}"`)
        continue
      }

      // Download the image
      const imgResp = await fetch(imageUrl)
      if (!imgResp.ok) {
        console.log(`  SKIP: Download failed`)
        continue
      }

      const buffer = Buffer.from(await imgResp.arrayBuffer())
      writeFileSync(filepath, buffer)
      console.log(`  Downloaded: ${(buffer.length / 1024).toFixed(0)}KB`)

      // Upload to Supabase
      const { error } = await supabase.storage
        .from('blog-images')
        .upload(filename, buffer, {
          contentType: 'image/jpeg',
          upsert: true,
        })

      if (error) {
        console.log(`  ERROR uploading: ${error.message}`)
        continue
      }

      const { data: urlData } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filename)

      imageUrls[slug] = urlData.publicUrl
      successCount++
      console.log(`  Uploaded: ${urlData.publicUrl}`)

      // Rate limit - be respectful
      await new Promise(r => setTimeout(r, 1000))
    } catch (err) {
      console.log(`  ERROR: ${err.message}`)
    }
  }

  console.log(`\n=== Done: ${successCount}/50 images uploaded ===`)
  writeFileSync('/tmp/blog-image-urls.json', JSON.stringify(imageUrls, null, 2))
  console.log('URLs saved to /tmp/blog-image-urls.json')
}

main()
