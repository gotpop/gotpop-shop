import { signOut, useSession } from 'next-auth/react'

import { AiOutlineLogout } from 'react-icons/ai'
import ButtonIcon from '@components/ui/ButtonIcon'
import { CSSProperties } from 'react'
import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { NextPage } from 'next'
import { ProfileCard } from '@components/ui/ProfileCard'

const buttonRemoveVars = {
  ['--local-font-size']: 'var(--font-size-sm)',
  ['--local-bg-colour']: 'var(--error)',
  ['--local-svg-width']: '1.5em'
} as CSSProperties

const Account: NextPage = () => {
  const { data: session } = useSession()

  return (
    <LayoutStandard>
      <>
        <Meta />
        <section>
          <h2>Account</h2>
          {session ? <ProfileCard session={session} /> : null}
          <ButtonIcon
            text={'Sign out'}
            vars={buttonRemoveVars}
            handleClick={() => signOut()}
            icon={<AiOutlineLogout />}
            testing={`button-sign-out`}
          />
        </section>
      </>
    </LayoutStandard>
  )
}

export default Account
