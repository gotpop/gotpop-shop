import Card from '@components/Card'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import { server } from '@config'
import { useRouter } from 'next/router'

// import useSWR from 'swr'

// const fetcher = async (url: string) => {
//   const res = await fetch(url)
//   const data = await res.json()

//   if (res.status !== 200) {
//     throw new Error(data.message)
//   }
//   return data
// }

export default function CardPage({ card }) {
  // const { query } = useRouter()
  // const { data: cards, error } = useSWR(
  //   () => query.id && `/api/cards/${query.id}`,
  //   fetcher
  // )

  return (
    <LayoutStandard>
      {card && <Card content={card} fullCard={true} />}
    </LayoutStandard>
  )
}

export const getStaticProps = async (context) => {
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

  const ids = cards.map((card) => card.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}