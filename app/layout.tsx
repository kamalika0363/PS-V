import './globals.css'
import { Inter } from 'next/font/google'
import { Notable } from 'next/font/google'

const notable = Notable({
  subsets: ['latin'],
  weight: '400'
});


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Resume',
  description: 'PS-V Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notable.className}>{children}</body>
    </html>
  )
}
