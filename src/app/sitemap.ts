import type { MetadataRoute } from 'next'
import { blogArticles } from '@/lib/blog-data'
import { widgetTemplates } from '@/lib/widget-templates'
import { miniSiteTemplates } from '@/lib/minisite-templates'
import { industries } from '@/lib/industry-data'
import { createAdminClient } from '@/lib/supabase/admin'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://opinafy.com'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/precios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plantillas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/comparar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/comparar/opinafy-vs-testimonial-to`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/comparar/opinafy-vs-senja`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/comparar/mejores-herramientas-testimonios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const templatePages: MetadataRoute.Sitemap = widgetTemplates.map((template) => ({
    url: `${baseUrl}/plantillas/${template.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const miniSiteTemplateIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/plantillas-minisitio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const miniSiteTemplatePages: MetadataRoute.Sitemap = miniSiteTemplates.map((template) => ({
    url: `${baseUrl}/plantillas-minisitio/${template.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const industryIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/testimonios-para`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/testimonios-para/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

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

  return [...staticPages, ...blogPages, ...templatePages, ...miniSiteTemplateIndexPage, ...miniSiteTemplatePages, ...industryIndexPage, ...industryPages, ...profilePages]
}
