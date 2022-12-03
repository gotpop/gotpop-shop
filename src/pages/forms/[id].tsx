import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { getComponent } from 'utilities/getComponent'
import { server } from '@config'
import { useRouter } from 'next/router'

// import Form1 from '@features/Form1'
// import Form2 from '@features/Form2'






interface Props {
  form: object
}

// const formsMap = new Map([
//   [1, Form1],
//   [2, Form2]
// ])

const FormPage: NextPage<Props> = ({ form }) => {
  const { query } = useRouter()

  return (
    <LayoutStandard>
      <>
        <Meta />
        {/* {getComponent(formsMap, query.id)} */}
      </>
    </LayoutStandard>
  )
}

export default FormPage

// export const getStaticProps: GetStaticProps = async context => {
//   const res = await fetch(`${server}/api/forms/${context.params.id}`)
//   const form = await res.json()

//   return {
//     props: {
//       form
//     }
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`${server}/api/forms`)
//   const forms = await res.json()

//   const ids = forms.map(form => form.id)
//   const paths = ids.map(id => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false
//   }
// }
