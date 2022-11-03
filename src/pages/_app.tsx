import '../styles/app.css'
import { MenuProvider } from '@context/MenuContext'

export default function CssApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  )
}
