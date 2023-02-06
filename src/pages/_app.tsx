import '../styles/app.css'

import { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { MenuProvider } from '@context/MenuContext'
import { SessionProvider } from 'next-auth/react'
import { ShoppingCartProvider } from '@context/ShoppingCartContext'

const inter = Inter({ subsets: ['latin'] })

export default function StarterApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <div className={inter.className}>
      <SessionProvider session={session}>
        <ShoppingCartProvider>
          <MenuProvider>
            <Component {...pageProps} />
          </MenuProvider>
        </ShoppingCartProvider>
      </SessionProvider>
    </div>
  )
}
