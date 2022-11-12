import Card from '@components/Card'
import { IForm } from '@types'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import Meta from '@components/Meta'
import { server } from '@config'
import useSWR from 'swr'

// const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Forms({ forms }) {
  // const { data: forms, error } = useSWR('/api/forms', fetcher)

  return (
    <LayoutStandard>
      <Meta />
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

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/forms`)
  const forms = await res.json()

  return {
    props: {
      forms
    }
  }
}
