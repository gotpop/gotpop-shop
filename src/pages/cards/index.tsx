import Card from '@components/Card'
import { Card as CardType } from '@types'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Cards() {
  const { data: cards, error } = useSWR('/api/cards', fetcher)

  return (
    <LayoutStandard>
      {error && <div>Failed to load</div>}
      {!cards && <Loading />}
      {cards?.map((card: CardType) => (
        <Card key={card.id} content={card} fullCard={false} />
      ))}
    </LayoutStandard>
  )
}
