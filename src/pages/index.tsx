import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

import Hero from '@components/ui/Hero'
import LayoutFull from '@components/layouts/LayoutFull'
import Meta from '@head/Meta'
import Panel from '@components/ui/Panel'
import { Panel as PanelType } from '@prisma/client'
import booksPic from '@images/books.png'
import { getImage } from 'utilities/getComponent'
import htmlPic from '@images/html.png'
import keyboardPic from '@images/keyboard.png'
import macPic from '@images/mac.png'
import prisma from '@lib/prisma'
import { useTrackPad } from '@hooks/useTrackPad'

type Props = {
  panelData: PanelType[]
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

const Brochure = ({ panelData }: Props) => {
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
        {panelData.map((page, i) => (
          <Panel
            key={i}
            compact={trackPadTrigger}
            image={getImage(imagesMap, page.id)}
            page={page}
          />
        ))}
      </>
    </LayoutFull>
  )
}

export default Brochure

export const getStaticProps: GetStaticProps = async () => {
  const panelData = await prisma.panel.findMany()

  return {
    props: {
      panelData: panelData
    }
  }
}
