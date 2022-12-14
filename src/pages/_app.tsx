import '../styles/app.css'

import { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { MenuProvider } from '@context/MenuContext'
import { ShoppingCartProvider } from '@context/ShoppingCartContext'

const inter = Inter({ subsets: ['latin'] })

export default function StarterApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <ShoppingCartProvider>
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </ShoppingCartProvider>
    </div>
  )
}
