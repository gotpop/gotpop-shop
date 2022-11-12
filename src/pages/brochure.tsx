import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { NextPage } from 'next'

const Brochure: NextPage = () => {
  return (
    <LayoutStandard>
      <Meta />
      <h1>Brochure</h1>
    </LayoutStandard>
  )
}

export default Brochure
