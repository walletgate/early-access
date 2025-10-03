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
  title: 'WalletGate — EU Digital Identity Wallet Verification API | EUDI Integration',
  description: 'Verify European Digital Identity Wallets (EUDI) with 5 lines of code. Official EU LOTL integration, OpenID4VP, ISO 18013-5, eIDAS 2.0 compliant. Production-ready EUDI wallet verification API for developers.',
  verification: {
    google: 'cm1lSkQ6nOGu6C5EOuDqqa-UmMoH_1ZRrbD1HZcIAlg',
  },
  keywords: [
    'EUDI',
    'EUDI wallet',
    'EU Digital Identity Wallet',
    'European digital identity',
    'digital identity verification',
    'EU wallet verification',
    'eIDAS 2.0',
    'OpenID4VP',
    'ISO 18013-5',
    'mDL verification',
    'mobile driving license',
    'SD-JWT VC',
    'EU LOTL',
    'trust anchor',
    'age verification',
    'identity verification API',
    'European identity wallet',
    'digital wallet verification',
    'eIDAS wallet',
    'EU identity verification',
    'EUDI integration',
    'EUDI API',
    'European wallet API',
    'Privacy',
  ],
  authors: [{ name: 'WalletGate' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'EUDI Wallet Verification API — Verify European Digital Identity in 5 Lines',
    description: 'Production-ready EU Digital Identity Wallet (EUDI) verification. Official EU LOTL integration, eIDAS 2.0 compliant, OpenID4VP support. Ship in minutes, not months.',
    url: 'https://www.walletgate.app',
    siteName: 'WalletGate',
    type: 'website',
    locale: 'en_EU',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WalletGate - EU Digital Identity Wallet Verification API',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@walletgate',
    title: 'EUDI Wallet Verification API — Verify European Digital Identity in 5 Lines',
    description: 'Production-ready EU Digital Identity Wallet (EUDI) verification. Official EU LOTL integration, eIDAS 2.0 compliant, OpenID4VP support. Ship in minutes, not months.',
    images: ['/og-image.png'],
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
  alternates: {
    canonical: 'https://www.walletgate.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload fonts cross-origin for faster paint */}
        <link rel="preload" as="font" href="https://a.hypofriend.de/fonts/fonts/PTSerif-bold.woff" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="https://a.hypofriend.de/fonts/fonts/woff2/TT_Norms_Pro_Regular.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="https://a.hypofriend.de/fonts/fonts/woff2/TT_Norms_Pro_Medium.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="https://a.hypofriend.de/fonts/fonts/woff2/TT_Norms_Pro_Bold.woff2" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}
