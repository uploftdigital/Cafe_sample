import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: 'Chai & Chaat | Authentic Indian Cafe in Mumbai',
  description: 'Experience authentic masala chai, South Indian filter coffee, and beloved street food at Chai & Chaat, Bandra. Your neighbourhood adda since 2018.',
  keywords: ['chai', 'cafe', 'mumbai', 'bandra', 'filter coffee', 'street food', 'samosa', 'vada pav', 'indian cafe'],
  openGraph: {
    title: 'Chai & Chaat | Authentic Indian Cafe in Mumbai',
    description: 'Authentic masala chai, filter coffee & street food in Bandra, Mumbai.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  themeColor: '#3d2817',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
