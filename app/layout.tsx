import React from 'react'
import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Navbar } from './components/nav'
import Footer from './components/footer'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || ''),
  title: {
    default: 'Scott Stahl',
    template: '%s | Scott Stahl',
  },
  description: '',
  openGraph: {
    title: 'Scott Stahl',
    description: '',
    url: process.env.BASE_URL,
    siteName: 'Scott Stahl',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // TODO: is it possible to change bg color with theme?
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable,
        'min-w-360px'
      )}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider themes={['light', 'dark', 'y2k']}>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
