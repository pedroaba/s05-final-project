import './globals.css'

import { Header } from '@inatel/components/header'
import { ScrollArea } from '@inatel/components/ui/scroll-area'
import { cn } from '@inatel/lib/utils'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Inatel',
  description: 'Aplicação criada para a matéria de S05 - A do Inatel',
}

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700', '300'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(ubuntu.className, 'antialiased')}>
        <div className="min-h-dvh h-dvh w-dvw bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
          <Header />
          <ScrollArea className="max-h-[calc(100vh-5rem)] h-screen">
            <div className="max-w-7xl w-dvw mx-auto py-10 px-4 h-[calc(100vh-5rem)]">
              {children}
            </div>
          </ScrollArea>
        </div>
      </body>
    </html>
  )
}
