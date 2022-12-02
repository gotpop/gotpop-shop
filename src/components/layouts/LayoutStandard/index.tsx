import Breadcrumbs from '@ui/BreadCrumbs'
import Footer from '@blocks/Footer'
import Header from '@blocks/Header'
import Trigger from '@ui/Trigger'
import { getScrollBarWidth } from '@utilities/scrollBarWidth'
import styles from './Site.module.css'
import stylesMain from './Main.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function LayoutStandard({ children }) {
  const { pathname } = useRouter()

  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <div className={styles.site}>
      <Header />
      <div className={stylesMain.mainwrap}>
        <Trigger />
        <main className={stylesMain.main}>
          {pathname === '/' ? null : <Breadcrumbs />}
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
