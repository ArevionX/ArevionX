import React from "react"
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

export const metadata: Metadata = {
  title: 'ArevionX | Premium Software Development Solutions',
  description:
    'Build scalable, innovative software solutions for startups to enterprises. Web development, mobile apps, Shopify stores, ERP systems, and custom software.',
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'ERP solutions',
    'Shopify store development',
    'custom software',
    'SaaS product development',
  ],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/arevionx-logo.png',
    shortcut: '/arevionx-logo.png',
    apple: '/arevionx-logo.png',
  },
  openGraph: {
    title: 'ArevionX | Premium Software Development Solutions',
    description:
      'Build scalable, innovative software solutions. From startups to enterprises.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#f973f9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
