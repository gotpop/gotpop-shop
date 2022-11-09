import '../styles/app.css'
import { MenuProvider } from '@context/MenuContext'

export default function StarterApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  )
}
