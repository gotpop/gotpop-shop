import Intro from '@ui/Intro'
import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
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
