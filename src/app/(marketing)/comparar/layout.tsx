import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

export default function CompararLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  )
}
