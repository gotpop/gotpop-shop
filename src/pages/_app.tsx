import '../styles/app.css'

import { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { MenuProvider } from '@context/MenuContext'

const inter = Inter({ subsets: ['latin'] })

export default function StarterApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </>
  )
}
