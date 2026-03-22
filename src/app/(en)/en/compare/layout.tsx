import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavbarEn />
      <main className="min-h-screen bg-white pt-16">{children}</main>
      <FooterEn />
    </>
  )
}
