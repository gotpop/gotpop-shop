import Form1 from '@components/Form1'
import LayoutStandard from '@components/LayoutStandard'
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
    <LayoutStandard>
      {error && <div>{error.message}</div>}
      {!form && <Loading />}
      <h2>{form?.title}</h2>
      <p>{form?.text}</p>
      <Form1 />
    </LayoutStandard>
  )
}
