import { GetStaticProps, NextPage } from 'next'

import Hero from '@components/ui/Hero'
import { IPage } from '@types'
import LayoutFull from '@components/layouts/LayoutFull'
import Meta from '@head/Meta'
import Panel from '@components/ui/Panel'
import booksPic from '@images/books.png'
import { getImage } from '@utils/getComponent'
import htmlPic from '@images/html.png'
import keyboardPic from '@images/keyboard.png'
import macPic from '@images/mac.png'
import { server } from '@config'

interface Props {
  pageData: IPage[]
}

const imagesMap = new Map([
  [1, booksPic],
  [2, htmlPic],
  [3, keyboardPic],
  [4, macPic]
])

const Brochure: NextPage<Props> = ({ pageData }) => {
  return (
    <LayoutFull>
      <Meta />
      <Hero />
      <div
        style={{
          borderRadius: '100px 100px 0 0',
          overflow: 'hidden',
          paddingTop: '2rem'
        }}
      >
        {pageData.map((page: IPage, i) => (
          <Panel key={i} image={getImage(imagesMap, page.id)} page={page} />
        ))}
      </div>
    </LayoutFull>
  )
}

export default Brochure

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/pages`)
  const pageData = await res.json()

  return {
    props: {
      pageData
    }
  }
}
