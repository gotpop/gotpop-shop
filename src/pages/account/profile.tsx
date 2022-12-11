import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { NextPage } from 'next'
import { useScrollToTop } from '@hooks/useScrollToTop'

const Profile: NextPage = () => {
  useScrollToTop()
  
  return (
    <LayoutStandard>
      <>
        <Meta />
        <h2>Profile</h2>
      </>
    </LayoutStandard>
  )
}

export default Profile
