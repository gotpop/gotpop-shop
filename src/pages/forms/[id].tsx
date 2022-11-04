import Card from '@components/Card'
import Form1 from '@components/Form1'
import Layout from '@components/Layout/layout'
import Loading from '@components/Loading'
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

export default function CardPage() {
  const { query } = useRouter()
  const { data: form, error } = useSWR(
    () => query.id && `/api/forms/${query.id}`,
    fetcher
  )

  return (
    <Layout>
      {error && <div>{error.message}</div>}
      {!form && <Loading />}
      <h2>{form?.text}</h2>
      {/* <Form1 /> */}
    </Layout>
  )
}
