import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { introForm1Content, introForm2Content } from '@data/intro'

import Form1 from '@components/Form1'
import Form2 from '@components/Form2'
import Intro from '@components/Intro'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import Meta from '@components/Meta'
import { server } from '@config'
import { useRouter } from 'next/router'

interface Props {
  form: object
}

const FormPage: NextPage<Props> = ({ form }) => {
  const { query } = useRouter()

  return (
    <LayoutStandard>
      <Meta />
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

export default FormPage

export const getStaticProps: GetStaticProps = async context => {
  const res = await fetch(`${server}/api/forms/${context.params.id}`)
  const form = await res.json()

  return {
    props: {
      form
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/forms`)
  const forms = await res.json()

  const ids = forms.map(form => form.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}
