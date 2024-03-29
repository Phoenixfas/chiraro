import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '../styles/globals.css'
import Preloader from './Preloader'
import { SpeedInsights } from '@vercel/speed-insights/next';
import HandleProvider from './HandleProvider';

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Preloader>
          <HandleProvider>
            {children}
            <SpeedInsights />
          </HandleProvider>
        </Preloader>
      </body>
    </html>
  )
}
