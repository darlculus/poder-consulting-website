import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Poder Consulting - Expert Tax Services Made Simple',
  description: 'Professional tax consulting services with transparent pricing. HMRC compliant, secure, and stress-free tax filing for individuals and businesses.',
  keywords: 'tax consulting, tax services, HMRC, tax filing, accountant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
