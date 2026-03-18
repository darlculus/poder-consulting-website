import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Poder Consulting - Expert Business Solutions for Nigerian Enterprises',
  description: 'Professional business consulting services including accounting, tax compliance, payroll, and ERP solutions. NRS compliant and tailored for Nigerian businesses.',
  keywords: 'business consulting, accounting services, tax compliance, payroll management, ERP solutions, NRS, Nigerian business, PAYE, corporate services',
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
