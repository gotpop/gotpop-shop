import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { NextPage } from 'next'

const Account: NextPage = () => {
  return (
    <LayoutStandard>
      <>
        <Meta />
        <h2>Account</h2>
      </>
    </LayoutStandard>
  )
}

export default Account
