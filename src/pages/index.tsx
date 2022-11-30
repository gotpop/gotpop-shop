import { GetStaticProps, NextPage } from 'next'

import Hero from '@components/ui/Hero'
import { IPage } from '@types'
import LayoutFull from '@components/layouts/LayoutFull'
import Main from '@components/ui/Main'
import Meta from '@head/Meta'
import Panel from '@components/ui/Panel'
import { PrismaClient } from '@prisma/client'
import booksPic from '@images/books.png'
import { getImage } from '@utils/getComponent'
import htmlPic from '@images/html.png'
import keyboardPic from '@images/keyboard.png'
import macPic from '@images/mac.png'
import { server } from '@config'

const prisma = new PrismaClient()

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
      <Main>
        {pageData.map((page: IPage, i) => (
          <Panel key={i} image={getImage(imagesMap, page.id)} page={page} />
        ))}
      </Main>
    </LayoutFull>
  )
}

export default Brochure

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await prisma.navItem.findMany()
  console.log('navItems :', navItems)

  const res = await fetch(`${server}/api/pages`)
  const pageData = await res.json()

  return {
    props: {
      pageData: pageData,
      navItems: navItems
    }
  }
}
