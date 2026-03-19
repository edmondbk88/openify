import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

export default function TestimoniosIndustriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
