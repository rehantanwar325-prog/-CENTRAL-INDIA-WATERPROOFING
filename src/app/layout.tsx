import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Central India Waterproofing - Professional Waterproofing Solutions in Central India',
  description: 'Professional waterproofing solutions for residential and commercial properties in Central India. Expert roof, basement, bathroom, and terrace waterproofing services.',
  keywords: ['waterproofing', 'waterproofing services', 'roof waterproofing', 'basement waterproofing', 'bathroom waterproofing', 'terrace waterproofing', 'Central India', 'waterproofing contractors'],
  authors: [{ name: 'Central India Waterproofing' }],
  openGraph: {
    title: 'Central India Waterproofing - Professional Waterproofing Solutions',
    description: 'Professional waterproofing solutions for residential and commercial properties in Central India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Central India Waterproofing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central India Waterproofing - Professional Waterproofing Solutions',
    description: 'Professional waterproofing solutions for residential and commercial properties in Central India.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}