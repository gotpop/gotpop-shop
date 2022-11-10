import Card from '@components/Card'
import { IForm } from '@types'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Forms() {
  const { data: forms, error } = useSWR('/api/forms', fetcher)

  return (
    <LayoutStandard>
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
    </LayoutStandard>
  )
}
