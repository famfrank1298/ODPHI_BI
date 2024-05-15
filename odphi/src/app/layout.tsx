import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CSPostHogProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omega Delta Phi',
  description: 'Omega Delta Phi - B.I Chapter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={inter.className}>{children}</body>
      </CSPostHogProvider>
    </html>
  )
}
