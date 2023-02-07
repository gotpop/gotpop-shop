import prisma, { PanelWithPhotos } from '@lib/prisma'

import Hero from '@components/ui/Hero'
import LayoutFull from '@components/layouts/LayoutFull'
import Meta from '@head/Meta'
import { GetStaticProps, NextPage } from 'next'
import Panel from '@components/ui/Panel'

type Props = {
  panelData: PanelWithPhotos[]
}

const Brochure: NextPage<Props> = ({ panelData }: Props) => {
  return (
    <LayoutFull>
      <>
        <Meta />
        <Hero />
        {panelData.map((page, i) => (
          <Panel page={page} key={i} i={i} />
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
