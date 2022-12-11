import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { NextPage } from 'next'
import { useScrollToTop } from '@hooks/useScrollToTop'

const Account: NextPage = () => {
  useScrollToTop()
  
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
