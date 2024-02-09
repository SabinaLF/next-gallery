import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './_styles/globals.css'
import ReduxProvider from '@/app/_providers/Providers'
import Header from './_components/Header'

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
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
