import type { Metadata, Viewport } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: 'DevStar Labs | Desarrollo de Software a Medida',
  description: 'Desarrollo de software web, backend y soluciones tecnológicas a medida. Transformamos tus ideas en realidad digital con Laravel, Vue.js, Node.js y más.',
  keywords: ['desarrollo web', 'software', 'Laravel', 'Vue.js', 'Node.js', 'backend', 'frontend', 'México'],
  authors: [{ name: 'DevStar Labs' }],
  creator: 'DevStar Labs',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title: 'DevStar Labs | Desarrollo de Software a Medida',
    description: 'Desarrollo de software web, backend y soluciones tecnológicas a medida.',
    siteName: 'DevStar Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevStar Labs | Desarrollo de Software a Medida',
    description: 'Desarrollo de software web, backend y soluciones tecnológicas a medida.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
