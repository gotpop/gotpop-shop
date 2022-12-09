import { GetStaticProps, NextPage } from 'next'

import Card from '@ui/Card'
import { IForm } from '@types'
import LayoutStandard from '@layouts/LayoutStandard'
import Loading from '@ui/Loading'
import Meta from '@head/Meta'
import { server } from '@config'

interface Props {
  forms: object[]
}

const Profile: NextPage<Props> = ({ Profile }) => {
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
