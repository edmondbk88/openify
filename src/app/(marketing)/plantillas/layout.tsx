import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

export default function PlantillasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Load Google Fonts for template previews */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap"
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
