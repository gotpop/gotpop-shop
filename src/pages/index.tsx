import type { NextPage } from 'next'
import Intro from '@components/Intro'
import { introContent } from '@content/intro'
import LayoutStandard from '@components/LayoutStandard'

export default function Home() {
  return (
    <LayoutStandard>
      <Intro content={introContent} />
    </LayoutStandard>
  )
}
