import { GetStaticProps, NextPage } from 'next'
import prisma, { PanelWithPhotos } from '@lib/prisma'
import { useEffect, useState } from 'react'

import Hero from '@components/ui/Hero'
import LayoutFull from '@components/layouts/LayoutFull'
import Meta from '@head/Meta'
import Panel from '@components/ui/Panel'
import { useTrackPad } from '@hooks/useTrackPad'

type Props = {
  panelData: PanelWithPhotos[]
}

const Brochure = ({ panelData }: Props) => {
  const { isTrackPad } = useTrackPad()

  return (
    <LayoutFull>
      <>
        <Meta />
        <Hero />
        {panelData.map((page, i) => (
          <Panel page={page} key={i} i={i} compact={isTrackPad} />
        ))}
      </>
    </LayoutFull>
  )
}

export default Brochure

export const getStaticProps: GetStaticProps = async () => {
  const panelData = await prisma.panel.findMany({
    include: {
      photos: true
    }
  })

  return {
    props: {
      panelData: panelData
    }
  }
}
