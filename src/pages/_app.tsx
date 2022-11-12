import '../styles/app.css'

import { AppProps } from 'next/app'
import { MenuProvider } from '@context/MenuContext'

export default function StarterApp({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  )
}
