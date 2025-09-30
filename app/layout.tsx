import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.walletgate.app'),
  title: 'WalletGate - EU Digital Identity, made simple',
  description: 'WalletGate is a developer-first SDK for privacy-preserving EUDI verification. EU-ready, eIDAS-aligned, privacy-first.',
  keywords: ['EUDI', 'Digital Identity', 'eIDAS', 'OpenID4VP', 'Verification', 'Privacy'],
  authors: [{ name: 'WalletGate' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'WalletGate - EU Digital Identity, made simple',
    description: 'Developer-first SDK for privacy-preserving EUDI verification',
    url: 'https://www.walletgate.app',
    siteName: 'WalletGate',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'WalletGate - EU Digital Identity SDK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WalletGate - EU Digital Identity, made simple',
    description: 'Developer-first SDK for privacy-preserving EUDI verification',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}