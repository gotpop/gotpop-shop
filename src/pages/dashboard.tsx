import LayoutStandard from '@components/LayoutStandard'
import Meta from '@components/Meta'
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