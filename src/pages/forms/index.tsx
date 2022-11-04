import useSWR from 'swr'
import { Card as CardType, IForm } from 'types'
import Layout from '@components/Layout/layout'
import Card from '@components/Card'
import Loading from '@components/Loading'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Cards() {
  const { data: forms, error } = useSWR('/api/forms', fetcher)

  return (
    <Layout>
      {error && <div>Failed to load</div>}
      {!forms && <Loading />}
      {forms?.map((form: IForm) => (
        <Card
          key={form.id}
          content={form}
          fullCard={false}
          childPath={'forms'}
        />
      ))}
    </Layout>
  )
}
