import useSWR from 'swr'
import { Card as cardy } from 'types'
import Layout from '@components/layout/layout'
import Card from '@components/Card'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Cards() {
  const { data: cards, error } = useSWR('/api/cards', fetcher)

  return (
    <Layout>
      {error && <div>Failed to load</div>}
      {!cards && <div>Loading...</div>}
      {cards?.map((card: cardy) => (
        <Card key={card.id} content={card} fullCard={false} />
      ))}
    </Layout>
  )
}
