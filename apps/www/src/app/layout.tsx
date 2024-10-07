import AllInOneWidget from '@/components/all-in-one-widget'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Think Thank Media',
    default: 'Think Thank Media - Understand every story',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Think Thank Media Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="antialiased text-gray-950">{children}
        <AllInOneWidget />
      </body>
    </html>
  )
}
