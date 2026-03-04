import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Biena Engenharia e Consultoria | Projetos BIM em São Luís - MA',
  description:
    'Projetos de instalações prediais compatibilizados em BIM para construtoras, investidores e gestores de obras. Previsibilidade total de custos e prazos. Referência em BIM no Maranhão.',
  generator: 'Next.js',
  keywords: [
    'BIM',
    'projetos de instalações prediais',
    'engenharia',
    'consultoria BIM',
    'compatibilização de projetos',
    'São Luís',
    'Maranhão',
    'construção civil',
    'projetos hospitalares',
    'HVAC',
    'hidráulica',
    'elétrica',
  ],
  authors: [{ name: 'Biena Engenharia e Consultoria' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://biena.com.br',
    siteName: 'Biena Engenharia e Consultoria',
    title: 'Biena Engenharia e Consultoria | Projetos BIM',
    description:
      'Previsibilidade total de custos e prazos através de projetos compatibilizados em BIM. Referência em engenharia digital no Maranhão.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#212349',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
