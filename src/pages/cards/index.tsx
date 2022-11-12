import { GetStaticProps, NextPage } from 'next'

import Card from '@ui/Card'
import { Card as ICard } from '@types'
import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { server } from '@config'

interface Props {
  cards: object[]
}

const Cards: NextPage<Props> = ({ cards }) => {
  return (
    <LayoutStandard>
      <Meta />
      {cards.map((card: ICard) => (
        <Card key={card.id} content={card} fullCard={false} />
      ))}
    </LayoutStandard>
  )
}

export default Cards

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/cards`)
  const cards = await res.json()

  return {
    props: {
      cards
    }
  }
}
