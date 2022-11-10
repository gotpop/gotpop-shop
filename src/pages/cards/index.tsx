import Card from '@components/Card'
import { Card as CardType } from '@types'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import { server } from '@config'
// import useSWR from 'swr'

// const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Cards({ cards }) {
  // const { data: cards, error } = useSWR('', fetcher)

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
