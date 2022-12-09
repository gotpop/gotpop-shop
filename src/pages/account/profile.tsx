import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { NextPage } from 'next'

const Profile: NextPage = () => {
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
