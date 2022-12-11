import { CSSProperties, ReactElement, useEffect } from 'react'

import Footer from '@blocks/Footer'
import Header from '@blocks/Header'
import Main from '@components/ui/Main'
import Trigger from '@components/ui/Trigger'
import { getScrollBarWidth } from '@utilities/scrollBarWidth'
import styles from './Site.module.css'

type props = {
  children: ReactElement
}

export const varsHeader = { ['--local-position']: 'fixed' }
export const varsFooter = { ['--local-scroll-snap-align']: 'end' }
const varsTrigger = { ['--local-position']: 'absolute' }

export default function LayoutFull({ children }: props) {
  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <div className={styles.site}>
      <Header vars={varsHeader as CSSProperties} />
      <Main fullWidth={true}>
        <>
          <Trigger vars={varsTrigger as CSSProperties} />
          {children}
        </>
      </Main>
      <Footer vars={varsFooter as CSSProperties} />
    </div>
  )
}
