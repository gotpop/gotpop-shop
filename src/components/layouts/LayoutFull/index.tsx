import Footer from '@blocks/Footer'
import Header from '@blocks/Header'
import Trigger from '@ui/Trigger'
import { getScrollBarWidth } from '@utils/scrollBarWidth'
import styles from './Site.module.css'
import { useEffect } from 'react'

export default function LayoutFull({ children }) {
  const varsHeader = [
    { var: '--local-position', value: 'fixed' },
    { var: '--local-colour', value: 'var(--hwb-grape-5)' }
  ]

  const varsTrigger = [{ var: '--local-position', value: 'absolute' }]

  const varsFooter = [
    { var: '--local-mt', value: '0' },
    { var: '--local-radius', value: '0' }
  ]

  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <div className={styles.site}>
      <Header properties={varsHeader} />
      <main>
        <Trigger properties={varsTrigger} />
        {children}
      </main>
      <Footer properties={varsFooter} />
    </div>
  )
}
