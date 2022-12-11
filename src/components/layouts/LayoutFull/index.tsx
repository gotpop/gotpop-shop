import { CSSProperties, ReactElement, useEffect } from 'react'

import Footer from '@blocks/Footer'
import Header from '@blocks/Header'
import Main from '@components/ui/Main'
import Trigger from '@components/ui/Trigger'
import styles from './Site.module.css'
import { useScrollBarWidth } from '@hooks/useScrollBarWidth'

type props = {
  children: ReactElement
}

export const varsHeader = { ['--local-position']: 'fixed' } as CSSProperties
export const varsFooter = { ['--local-scroll-snap-align']: 'end' } as CSSProperties
const varsTrigger = { ['--local-position']: 'absolute' } as CSSProperties

export default function LayoutFull({ children }: props) {
  useScrollBarWidth()

  return (
    <div className={styles.site}>
      <Header vars={varsHeader} />
      <Main fullWidth={true}>
        <>
          <Trigger vars={varsTrigger} />
          {children}
        </>
      </Main>
      <Footer vars={varsFooter} />
    </div>
  )
}
