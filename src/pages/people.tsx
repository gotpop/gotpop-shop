import useSWR from 'swr'
import PersonComponent from '@components/Person'
import { Person } from 'types'
import Layout from '@components/layout/layout'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <ul>
        {data.map((p: Person) => (
          <PersonComponent key={p.id} person={p} />
        ))}
      </ul>
    </Layout>
  )
}
