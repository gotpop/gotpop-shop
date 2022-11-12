import Card from '@components/Card'
import { IForm } from '@types'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import Meta from '@components/Meta'
import { server } from '@config'

export default function Forms({ forms }) {

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

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/forms`)
  const forms = await res.json()

  return {
    props: {
      forms
    }
  }
}
