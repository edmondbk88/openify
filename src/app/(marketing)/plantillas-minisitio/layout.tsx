import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

export default function PlantillasMinisitioLayout({
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
