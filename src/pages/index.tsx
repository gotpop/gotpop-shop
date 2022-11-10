import Intro from '@components/Intro'
import LayoutStandard from '@components/LayoutStandard'
import Meta from '@components/Meta'
import type { NextPage } from 'next'
import { introContent } from '@data/intro'

export default function Home() {
  return (
    <LayoutStandard>
      <Meta />
      <Intro content={introContent} />
    </LayoutStandard>
  )
}
