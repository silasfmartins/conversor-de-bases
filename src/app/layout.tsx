import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Roboto_Condensed as RobotoCondensed,
} from 'next/font/google'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const robotoCondensed = RobotoCondensed({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-roboto-condensed',
})

export const metadata = {
  title: 'Conversor de Bases - Silas Martins',
  description: 'Site que concentra um sistema de conversor de bases.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </head>
      <body
        className={`${roboto.variable} ${robotoCondensed} bg-gray-100 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <main className="flex flex-col py-8">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
