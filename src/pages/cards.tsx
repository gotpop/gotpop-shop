import useSWR from 'swr'
import PersonComponent from '@components/Person'
import { Card as cardy } from 'types'
import Layout from '@components/layout/layout'
import Card from '@components/Card'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Cards() {
  const { data: cards, error } = useSWR('/api/cards', fetcher)

  if (error) return <div>Failed to load</div>
  if (!cards) return <div>Loading...</div>

  return (
    <Layout>
      {cards.map((card: cardy) => (
        <Card key={card.id} content={card} />
      ))}
    </Layout>
  )
}
