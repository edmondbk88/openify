import type { MetadataRoute } from 'next'
import { blogArticles } from '@/lib/blog-data'
import { blogArticlesEn } from '@/lib/blog-data-en'
import { helpGuides } from '@/lib/help-data'
import { helpGuidesEn } from '@/lib/help-data-en'
import { widgetTemplates } from '@/lib/widget-templates'
import { miniSiteTemplates } from '@/lib/minisite-templates'
import { industries } from '@/lib/industry-data'
import { industriesEn } from '@/lib/industry-data-en'
import { cities, topIndustrySlugs } from '@/lib/cities-data'
import { createAdminClient } from '@/lib/supabase/admin'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://opinafy.com'
  const now = new Date()

  // Helper to create bilingual alternates
  const bilingual = (esPath: string, enPath: string) => ({
    languages: {
      es: `${baseUrl}${esPath}`,
      en: `${baseUrl}${enPath}`,
      'x-default': `${baseUrl}${esPath}`,
    },
  })

  // Helper for Spanish-only pages (self-referencing hreflang)
  const esOnly = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      'x-default': `${baseUrl}${path}`,
    },
  })

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: bilingual('', '/en'),
    },
    {
      url: `${baseUrl}/precios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/precios', '/en/pricing'),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: bilingual('/blog', '/en/blog'),
    },
    {
      url: `${baseUrl}/plantillas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: bilingual('/plantillas', '/en/templates'),
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: bilingual('/legal', '/en/legal'),
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: bilingual('/privacidad', '/en/legal/privacy'),
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: bilingual('/terminos', '/en/legal/terms'),
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: bilingual('/cookies', '/en/legal/cookies'),
    },
    {
      url: `${baseUrl}/caracteristicas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: bilingual('/caracteristicas', '/en/features'),
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/sobre', '/en/about'),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: bilingual('/contacto', '/en/contact'),
    },
    {
      url: `${baseUrl}/comparar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/comparar', '/en/compare'),
    },
    {
      url: `${baseUrl}/comparar/opinafy-vs-testimonial-to`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/comparar/opinafy-vs-testimonial-to', '/en/compare/opinafy-vs-testimonial-to'),
    },
    {
      url: `${baseUrl}/comparar/opinafy-vs-senja`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/comparar/opinafy-vs-senja', '/en/compare/opinafy-vs-senja'),
    },
    {
      url: `${baseUrl}/comparar/mejores-herramientas-testimonios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/comparar/mejores-herramientas-testimonios', '/en/compare/best-testimonial-tools'),
    },
    {
      url: `${baseUrl}/descargas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/descargas', '/en/downloads'),
    },
    {
      url: `${baseUrl}/calculadora-roi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/calculadora-roi', '/en/roi-calculator'),
    },
    {
      url: `${baseUrl}/informe-prueba-social-2026`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/informe-prueba-social-2026', '/en/state-of-social-proof-2026'),
    },
    {
      url: `${baseUrl}/casos-de-éxito`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/casos-de-éxito', '/en/case-studies'),
    },
    {
      url: `${baseUrl}/guias`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/guias', '/en/guides'),
    },
    {
      url: `${baseUrl}/guias/wordpress`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/guias/wordpress', '/en/guides/wordpress'),
    },
    {
      url: `${baseUrl}/guias/shopify`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/guias/shopify', '/en/guides/shopify'),
    },
    {
      url: `${baseUrl}/guias/wix`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/guias/wix', '/en/guides/wix'),
    },
    {
      url: `${baseUrl}/guias/squarespace`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/guias/squarespace', '/en/guides/squarespace'),
    },
    {
      url: `${baseUrl}/guias/webflow`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/guias/webflow', '/en/guides/webflow'),
    },
    {
      url: `${baseUrl}/guias/google-tag-manager`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/guias/google-tag-manager', '/en/guides/google-tag-manager'),
    },
    {
      url: `${baseUrl}/afiliados`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/afiliados', '/en/affiliates'),
    },
    {
      url: `${baseUrl}/verificado-badge`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/verificado-badge', '/en/verified'),
    },
    {
      url: `${baseUrl}/agencias`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/agencias', '/en/agencies'),
    },
    {
      url: `${baseUrl}/health-score`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/health-score', '/en/health-score'),
    },
    {
      url: `${baseUrl}/certificacion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/certificacion', '/en/certification'),
    },
    {
      url: `${baseUrl}/ranking`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: bilingual('/ranking', '/en/ranking'),
    },
    {
      url: `${baseUrl}/actualizaciones`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: bilingual('/actualizaciones', '/en/changelog'),
    },
    {
      url: `${baseUrl}/ayuda`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: bilingual('/ayuda', '/en/help'),
    },
    {
      url: `${baseUrl}/prensa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/prensa', '/en/press'),
    },
    {
      url: `${baseUrl}/integraciones/zapier`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/integraciones/zapier', '/en/integrations/zapier'),
    },
  ]

  // Help center guide pages (ES)
  const helpPages: MetadataRoute.Sitemap = helpGuides.map((guide) => ({
    url: `${baseUrl}/ayuda/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: bilingual(`/ayuda/${guide.slug}`, `/en/help/${guide.slugEn}`),
  }))

  // Blog pages with article.date for lastmod and hreflang alternates
  // ES and EN blog articles share the same slugs
  // Filter out articles with future dates
  const blogSlugsEn = new Set(blogArticlesEn.map((a) => a.slug))
  const blogPages: MetadataRoute.Sitemap = blogArticles
    .filter((a) => new Date(a.date) <= now)
    .map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      ...(blogSlugsEn.has(article.slug)
        ? { alternates: bilingual(`/blog/${article.slug}`, `/en/blog/${article.slug}`) }
        : {}),
    }))

  const templatePages: MetadataRoute.Sitemap = widgetTemplates.map((template) => ({
    url: `${baseUrl}/plantillas/${template.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: bilingual(`/plantillas/${template.id}`, `/en/templates/${template.id}`),
  }))

  const miniSiteTemplateIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/plantillas-minisitio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: bilingual('/plantillas-minisitio', '/en/minisite-templates'),
    },
  ]

  const miniSiteTemplatePages: MetadataRoute.Sitemap = miniSiteTemplates.map((template) => ({
    url: `${baseUrl}/plantillas-minisitio/${template.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: bilingual(`/plantillas-minisitio/${template.id}`, `/en/minisite-templates/${template.id}`),
  }))

  const industryIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/testimonios-para`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: bilingual('/testimonios-para', '/en/testimonials-for'),
    },
  ]

  // Industry pages share the same slugs between ES and EN
  const industrySlugsEn = new Set(industriesEn.map((i) => i.slug))
  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/testimonios-para/${industry.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    ...(industrySlugsEn.has(industry.slug)
      ? { alternates: bilingual(`/testimonios-para/${industry.slug}`, `/en/testimonials-for/${industry.slug}`) }
      : {}),
  }))

  // English static pages (with alternates pointing back to ES)
  const englishPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: bilingual('', '/en'),
    },
    {
      url: `${baseUrl}/en/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/precios', '/en/pricing'),
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
      alternates: bilingual('/blog', '/en/blog'),
    },
    {
      url: `${baseUrl}/en/templates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: bilingual('/plantillas', '/en/templates'),
    },
    {
      url: `${baseUrl}/en/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual('/caracteristicas', '/en/features'),
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/sobre', '/en/about'),
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: bilingual('/contacto', '/en/contact'),
    },
    {
      url: `${baseUrl}/en/legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: bilingual('/legal', '/en/legal'),
    },
    {
      url: `${baseUrl}/en/legal/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: bilingual('/privacidad', '/en/legal/privacy'),
    },
    {
      url: `${baseUrl}/en/legal/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: bilingual('/terminos', '/en/legal/terms'),
    },
    {
      url: `${baseUrl}/en/legal/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: bilingual('/cookies', '/en/legal/cookies'),
    },
    {
      url: `${baseUrl}/en/compare`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/comparar', '/en/compare'),
    },
    {
      url: `${baseUrl}/en/compare/opinafy-vs-testimonial-to`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/comparar/opinafy-vs-testimonial-to', '/en/compare/opinafy-vs-testimonial-to'),
    },
    {
      url: `${baseUrl}/en/compare/opinafy-vs-senja`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/comparar/opinafy-vs-senja', '/en/compare/opinafy-vs-senja'),
    },
    {
      url: `${baseUrl}/en/compare/best-testimonial-tools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/comparar/mejores-herramientas-testimonios', '/en/compare/best-testimonial-tools'),
    },
    {
      url: `${baseUrl}/en/minisite-templates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: bilingual('/plantillas-minisitio', '/en/minisite-templates'),
    },
    {
      url: `${baseUrl}/en/downloads`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/descargas', '/en/downloads'),
    },
    {
      url: `${baseUrl}/en/roi-calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/calculadora-roi', '/en/roi-calculator'),
    },
    {
      url: `${baseUrl}/en/state-of-social-proof-2026`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/informe-prueba-social-2026', '/en/state-of-social-proof-2026'),
    },
    {
      url: `${baseUrl}/en/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/casos-de-éxito', '/en/case-studies'),
    },
    {
      url: `${baseUrl}/en/guides`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/guias', '/en/guides'),
    },
    {
      url: `${baseUrl}/en/guides/wordpress`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/guias/wordpress', '/en/guides/wordpress'),
    },
    {
      url: `${baseUrl}/en/guides/shopify`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/guias/shopify', '/en/guides/shopify'),
    },
    {
      url: `${baseUrl}/en/guides/wix`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/guias/wix', '/en/guides/wix'),
    },
    {
      url: `${baseUrl}/en/guides/squarespace`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/guias/squarespace', '/en/guides/squarespace'),
    },
    {
      url: `${baseUrl}/en/guides/webflow`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/guias/webflow', '/en/guides/webflow'),
    },
    {
      url: `${baseUrl}/en/guides/google-tag-manager`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/guias/google-tag-manager', '/en/guides/google-tag-manager'),
    },
    {
      url: `${baseUrl}/en/affiliates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/afiliados', '/en/affiliates'),
    },
    {
      url: `${baseUrl}/en/verified`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/verificado-badge', '/en/verified'),
    },
    {
      url: `${baseUrl}/en/agencies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/agencias', '/en/agencies'),
    },
    {
      url: `${baseUrl}/en/health-score`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/health-score', '/en/health-score'),
    },
    {
      url: `${baseUrl}/en/certification`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: bilingual('/certificacion', '/en/certification'),
    },
    {
      url: `${baseUrl}/en/ranking`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
      alternates: bilingual('/ranking', '/en/ranking'),
    },
    {
      url: `${baseUrl}/en/changelog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
      alternates: bilingual('/actualizaciones', '/en/changelog'),
    },
    {
      url: `${baseUrl}/en/help`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: bilingual('/ayuda', '/en/help'),
    },
    {
      url: `${baseUrl}/en/press`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: bilingual('/prensa', '/en/press'),
    },
    {
      url: `${baseUrl}/en/integrations/zapier`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: bilingual('/integraciones/zapier', '/en/integrations/zapier'),
    },
  ]

  // Help center guide pages (EN)
  const englishHelpPages: MetadataRoute.Sitemap = helpGuidesEn.map((guide) => ({
    url: `${baseUrl}/en/help/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: bilingual(`/ayuda/${guide.slugEs}`, `/en/help/${guide.slug}`),
  }))

  const englishIndustryIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/en/testimonials-for`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: bilingual('/testimonios-para', '/en/testimonials-for'),
    },
  ]

  const industrySlugsEs = new Set(industries.map((i) => i.slug))
  const englishIndustryPages: MetadataRoute.Sitemap = industriesEn.map((industry) => ({
    url: `${baseUrl}/en/testimonials-for/${industry.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    ...(industrySlugsEs.has(industry.slug)
      ? { alternates: bilingual(`/testimonios-para/${industry.slug}`, `/en/testimonials-for/${industry.slug}`) }
      : {}),
  }))

  const blogSlugsEs = new Set(blogArticles.map((a) => a.slug))
  const englishBlogPages: MetadataRoute.Sitemap = blogArticlesEn
    .filter((a) => new Date(a.date) <= now)
    .map((article) => ({
      url: `${baseUrl}/en/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      ...(blogSlugsEs.has(article.slug)
        ? { alternates: bilingual(`/blog/${article.slug}`, `/en/blog/${article.slug}`) }
        : {}),
    }))

  const englishTemplatePages: MetadataRoute.Sitemap = widgetTemplates.map((template) => ({
    url: `${baseUrl}/en/templates/${template.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
    alternates: bilingual(`/plantillas/${template.id}`, `/en/templates/${template.id}`),
  }))

  const englishMiniSiteTemplatePages: MetadataRoute.Sitemap = miniSiteTemplates.map((template) => ({
    url: `${baseUrl}/en/minisite-templates/${template.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
    alternates: bilingual(`/plantillas-minisitio/${template.id}`, `/en/minisite-templates/${template.id}`),
  }))

  // City index page
  const cityIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/testimonios-en`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: esOnly('/testimonios-en'),
    },
  ]

  // City pages (20 cities)
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/testimonios-en/${city.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: esOnly(`/testimonios-en/${city.slug}`),
  }))

  // City + Industry pages (20 cities x 20 industries = 400 pages)
  const cityIndustryPages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    topIndustrySlugs.map((industrySlug) => ({
      url: `${baseUrl}/testimonios-en/${city.slug}/${industrySlug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: esOnly(`/testimonios-en/${city.slug}/${industrySlug}`),
    }))
  )

  // Dynamic profile pages (Pro/Business users with mini sites)
  const admin = createAdminClient()
  const { data: proProfiles } = await admin
    .from('profiles')
    .select('username, updated_at')
    .neq('plan', 'free')
    .not('username', 'is', null)

  const profilePages: MetadataRoute.Sitemap = (proProfiles || []).map((p) => ({
    url: `${baseUrl}/s/${p.username}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...englishPages, ...helpPages, ...englishHelpPages, ...blogPages, ...englishBlogPages, ...templatePages, ...englishTemplatePages, ...miniSiteTemplateIndexPage, ...miniSiteTemplatePages, ...englishMiniSiteTemplatePages, ...industryIndexPage, ...industryPages, ...englishIndustryIndexPage, ...englishIndustryPages, ...cityIndexPage, ...cityPages, ...cityIndustryPages, ...profilePages]
}
