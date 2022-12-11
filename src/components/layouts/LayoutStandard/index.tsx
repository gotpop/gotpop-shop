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

const area = (value: string) => ({ ['--local-grid-area']: `${value}` })

export default function LayoutStandard({ children }: props) {
  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <div className="site">
      <Header />
      <Main fullWidth={false}>
        <>
          <Trigger />
          {children}
        </>
      </Main>
      <Footer />
    </div>
  )
}
