import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="preconnect" href="https://rckjevsqxkfixkdloqjv.supabase.co" />
      <Navbar />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  )
}
