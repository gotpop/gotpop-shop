import type { NextPage } from 'next'
import Layout from '@components/layout/layout'
import Intro from '@components/Intro'
import { introContent } from '@content/intro'

export default function Home() {
  return (
    <Layout>
      <Intro content={introContent} />
    </Layout>
  )
}
