import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/proyectos', '/configuracion', '/facturacion', '/forgot-password', '/login', '/registro'],
      },
    ],
    sitemap: 'https://opinafy.com/sitemap.xml',
  }
}
