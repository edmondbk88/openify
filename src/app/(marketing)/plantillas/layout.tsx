import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  other: {
    // Preconnect to Google Fonts for faster loading
    'link-preconnect': 'https://fonts.googleapis.com',
  },
}

export default function PlantillasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
