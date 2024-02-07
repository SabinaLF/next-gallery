import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import Template from '@/app/template'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Products gallery',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Template>{children}</Template>
      </body>
    </html>
  )
}
