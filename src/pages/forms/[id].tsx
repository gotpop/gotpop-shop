import { introForm1Content, introForm2Content } from '@data/intro'

import Form1 from '@components/Form1'
import Form2 from '@components/Form2'
import Intro from '@components/Intro'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import Meta from '@components/Meta'
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

export default function FormPage() {
  const { query } = useRouter()
  const { data: form, error } = useSWR(
    () => query.id && `/api/forms/${query.id}`,
    fetcher
  )

  return (
    <LayoutStandard>
      <Meta />
      {error && <div>{error.message}</div>}
      {form ? (
        <>
          {query.id === '1' ? (
            <>
              <Intro content={introForm1Content} />
              <Form1 />
            </>
          ) : (
            <>
              <Intro content={introForm2Content} />
              <Form2 />
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </LayoutStandard>
  )
}
