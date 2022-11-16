import Footer from '@blocks/Footer'
import Header from '@blocks/Header'
import Trigger from '@ui/Trigger'
import { getScrollBarWidth } from '@utils/scrollBarWidth'
import styles from './Site.module.css'
import { useEffect } from 'react'

export default function LayoutFull({ children }) {
  const varsHeader = {
    ['--local-position']: 'fixed',
    ['--local-colour']: 'var(--hwb-grape-5)'
  }

  const varsTrigger = {
    ['--local-position']: 'absolute'
  }

  const varsFooter = {
    ['--local-mt']: '0',
    ['--local-radius']: '0'
  }

  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <div className={styles.site}>
      <Header vars={varsHeader} />
      <main>
        <Trigger vars={varsTrigger} />
        {children}
      </main>
      <Footer vars={varsFooter} />
    </div>
  )
}
