import { CSSProperties, ReactElement } from 'react'

import Footer from '@blocks/Footer'
import Header from '@blocks/Header'
import Main from '@components/ui/Main'
import styles from './Site.module.css'
import { useScrollBarWidth } from '@hooks/useScrollBarWidth'

type props = {
  children: ReactElement
}

const footerVars = {
  ['--local-top-margin']: '4rem'
} as CSSProperties

export default function LayoutStandard({ children }: props) {
  useScrollBarWidth()

  return (
    <div className={styles.site}>
      <Header />
      <Main fullWidth={false}>
        <>
          {children}
        </>
      </Main>
      <Footer vars={footerVars}/>
    </div>
  )
}
