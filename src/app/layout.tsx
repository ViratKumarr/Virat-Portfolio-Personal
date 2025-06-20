import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Virat Portfolio',
  description: 'Personal portfolio website showcasing my work and experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="font-poppins">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 