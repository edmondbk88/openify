import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <Link href="/" className="mb-8">
        <Image src="/logo-opinafy.png?v=2" alt="Opinafy" width={140} height={40} className="h-10 w-auto" />
      </Link>
      <div className="w-full max-w-md">{children}</div>
    </div>
  )
}
