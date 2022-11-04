import Card from '@components/Card'
import Layout from '@components/layout/layout'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
  const { query } = useRouter()
  const { data: cards, error } = useSWR(
    () => query.id && `/api/cards/${query.id}`,
    fetcher
  )

  return (
    <Layout>
      {error && <div>{error.message}</div>}
      {!cards && <div>Loading...</div>}
      <Card content={cards} fullCard={true} />
    </Layout>
  )
}
