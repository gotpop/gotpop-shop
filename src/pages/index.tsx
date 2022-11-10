import Intro from '@components/Intro'
import LayoutStandard from '@components/LayoutStandard'
import type { NextPage } from 'next'
import { introContent } from '@data/intro'

export default function Home() {
  return (
    <LayoutStandard>
      <Intro content={introContent} />
    </LayoutStandard>
  )
}
