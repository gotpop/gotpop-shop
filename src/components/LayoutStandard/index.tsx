import * as React from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Trigger from '@components/Trigger'
import styles from './Site.module.css'
import stylesMain from './Main.module.css'
import { getScrollBarWidth } from '@utils/scrollBarWidth'
import { useEffect } from 'react'
import Breadcrumbs from '@components/BreadCrumbs'
import { useRouter } from 'next/router'

export default function LayoutStandard({ children }) {
  const { pathname } = useRouter()

  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <>
      <Head>
        <title>CSS 2023</title>
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
