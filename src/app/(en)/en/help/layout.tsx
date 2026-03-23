import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarEn />
      <main>{children}</main>
      <FooterEn />
    </>
  )
}
