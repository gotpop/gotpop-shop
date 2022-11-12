import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { introForm1Content, introForm2Content } from '@data/intro'

import Form1 from '@features/Form1'
import Form2 from '@features/Form2'
import Intro from '@ui/Intro'
import LayoutStandard from '@layouts/LayoutStandard'
import Loading from '@ui/Loading'
import Meta from '@head/Meta'
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
