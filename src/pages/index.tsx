import Intro from '@components/Intro'
import LayoutStandard from '@components/LayoutStandard'
import Meta from '@components/Meta'
import type { NextPage } from 'next'
import { introContent } from '@data/intro'

const Home: NextPage = () => {
  return (
    <LayoutStandard>
      <Meta />
      <Intro content={introContent} />
    </LayoutStandard>
  )
}

export default Home
