import Breadcrumbs from '@ui/BreadCrumbs'
import Footer from '@blocks/Footer'
import Header from '@blocks/Header'
import Trigger from '@ui/Trigger'
import { getScrollBarWidth } from '@utils/scrollBarWidth'
import styles from './Site.module.css'
import stylesMain from './Main.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function LayoutFull({ children }) {
  const { pathname } = useRouter()

  const vars = [
    { var: '--local-mt', value: '0' },
    { var: '--local-radius', value: '0' }
  ]

  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <div className={styles.site}>
      <Header />
      <main className={stylesMain.main}>
        <Trigger />
        {children}
      </main>
      <Footer properties={vars} />
    </div>
  )
}
