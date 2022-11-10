import Card from '@components/Card'
import { Card as CardType } from '@types'
import LayoutStandard from '@components/LayoutStandard'
import { server } from '@config'

export default function Cards({ cards }) {
  return (
    <LayoutStandard>
      {cards.map((card: CardType) => (
        <Card key={card.id} content={card} fullCard={false} />
      ))}
    </LayoutStandard>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/cards`)
  const cards = await res.json()

  return {
    props: {
      cards
    }
  }
}
