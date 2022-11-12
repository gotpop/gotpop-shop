import { GetStaticProps, NextPage } from 'next'

import Card from '@components/Card'
import { IForm } from '@types'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import Meta from '@components/Meta'
import { server } from '@config'

interface Props {
  forms: object[];
}

const Forms: NextPage<Props> = ({ forms }) => {
  return (
    <LayoutStandard>
      <Meta />
      {forms ? (
        forms.map((form: IForm) => (
          <Card
            key={form.id}
            content={form}
            fullCard={false}
            childPath={'forms'}
          />
        ))
      ) : (
        <Loading />
      )}
    </LayoutStandard>
  )
}

export default Forms

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/forms`)
  const forms = await res.json()

  return {
    props: {
      forms
    }
  }
}
