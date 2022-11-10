import Card from '@components/Card'
import LayoutStandard from '@components/LayoutStandard'
import Meta from '@components/Meta'
import { server } from '@config'

export default function CardPage({ card }) {
  return (
    <LayoutStandard>
      <Meta />
      <Card content={card} fullCard={true} />
    </LayoutStandard>
  )
}

export const getStaticProps = async context => {
  const res = await fetch(`${server}/api/cards/${context.params.id}`)
  const card = await res.json()

  return {
    props: {
      card
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/cards`)
  const cards = await res.json()

  const ids = cards.map(card => card.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}
