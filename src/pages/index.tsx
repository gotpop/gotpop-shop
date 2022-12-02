import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

import Hero from '@components/ui/Hero'
import { IPage } from '@types'
import LayoutFull from '@components/layouts/LayoutFull'
import Main from '@components/ui/Main'
import Meta from '@head/Meta'
import Panel from '@components/ui/Panel'
import booksPic from '@images/books.png'
import { getImage } from 'utilities/getComponent'
import htmlPic from '@images/html.png'
import keyboardPic from '@images/keyboard.png'
import macPic from '@images/mac.png'
import prisma from '@lib/prisma'
import { useTrackPad } from '@hooks/useTrackPad'

// import { server } from '@config'

interface Props {
  pageData: IPage[]
}

const imagesMap = new Map([
  [1, booksPic],
  [2, htmlPic],
  [3, keyboardPic],
  [4, macPic]
])

const trackPadActive = () => {
  localStorage.setItem('trackPad', 'true')
  document.documentElement.style.setProperty('--scroll-type', 'proximity')
}

const Brochure: NextPage<Props> = ({ pageData }) => {
  const isTrackPad = useTrackPad()
  const [trackPadTrigger, setTrackPadTrigger] = useState(false)

  useEffect(() => {
    if (isTrackPad) {
      setTrackPadTrigger(true)
      trackPadActive()
    }
  }, [isTrackPad])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LayoutFull>
      <>
        <Meta />
        <Hero />
        <Main>
          {pageData.map((page: IPage, i) => (
            <Panel
              key={i}
              compact={trackPadTrigger}
              image={getImage(imagesMap, page.id)}
              page={page}
            />
          ))}
        </Main>
      </>
    </LayoutFull>
  )
}

export default Brochure

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await prisma.navItem.findMany()
  const pageData = await prisma.panel.findMany()

  // console.log('pageData :', pageData)

  return {
    props: {
      pageData: pageData,
      navItems: navItems
    }
  }
}
