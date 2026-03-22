import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export default function TestimonialsIndustryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavbarEn />
      {children}
      <FooterEn />
    </>
  )
}
