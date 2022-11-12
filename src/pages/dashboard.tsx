import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { NextPage } from 'next'

const Dashboard: NextPage = () => {
  return (
    <LayoutStandard>
      <Meta />
      <h1>Dashboard</h1>
    </LayoutStandard>
  )
}

export default Dashboard