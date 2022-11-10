import Breadcrumbs from '@components/BreadCrumbs'
import Footer from '@components/Footer'
import Head from 'next/head'
import Header from '@components/Header'
import Trigger from '@components/Trigger'
import { getScrollBarWidth } from '@utils/scrollBarWidth'
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
    <>
      <Head>
        <title>Starter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <div className={styles.site}>
        <Header />
        <div className={stylesMain.mainwrap}>
          <main className={stylesMain.main}>
            {pathname === '/' ? null : <Breadcrumbs />}
            <Trigger />
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
