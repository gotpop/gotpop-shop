import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Card from '@components/Card'
import LayoutStandard from '@components/LayoutStandard'
import Meta from '@components/Meta'
import { server } from '@config'

interface Props {
  card: object
}

const CardPage: NextPage<Props> = ({ card }) => {
  return (
    <LayoutStandard>
      <Meta />
      <Card content={card} fullCard={true} />
    </LayoutStandard>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await fetch(`${server}/api/cards/${context.params.id}`)
  const card = await res.json()

  return {
    props: {
      card
    }
  }
}

export default CardPage

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/cards`)
  const cards = await res.json()

  const ids = cards.map(card => card.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}
