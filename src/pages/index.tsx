import type { NextPage } from 'next'
import Layout from '@components/layout/layout'
import Intro from '@components/Intro'
import Card from '@components/Card'
import { cards } from '@content/cards'
import { introContent } from '@content/intro'

export default function Home() {
  return (
    <Layout>
      <Intro content={introContent} />
      {cards.map(card => (
        <Card key={card.id} content={card} />
      ))}
    </Layout>
  )
}
