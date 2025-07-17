import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zakaria Ibne Rafiq',
  description: 'Portfolio of Zakaria Ibne Rafiq',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
