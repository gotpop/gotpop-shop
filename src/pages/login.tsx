import React, { CSSProperties } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

import { BsTrash } from 'react-icons/bs'
import ButtonIcon from '@components/ui/ButtonIcon'
import LayoutStandard from '@components/layouts/LayoutStandard'
import Meta from '@components/head/Meta'

const buttonRemoveVars = {
  ['--local-font-size']: 'var(--font-size-sm)',
  ['--local-bg-colour']: 'var(--error)',
  ['--local-svg-width']: '1.5em'
} as CSSProperties

const buttonSignInVars = {
  ['--local-font-size']: 'var(--font-size-sm)',
  ['--local-bg-colour']: 'var(--success)',
  ['--local-svg-width']: '1.5em'
} as CSSProperties

function Login() {
  const { data: session } = useSession()
  console.log('session :', session)

  return (
    <LayoutStandard>
      <>
        <Meta />
        <article>
          <h2>Login</h2>
          <div>
            {session ? (
              <>
                Youre logged in!
                <ButtonIcon
                  text={'Sign out'}
                  vars={buttonRemoveVars}
                  handleClick={() => signOut()}
                  icon={<BsTrash />}
                  testing={`button-sign-out`}
                />
              </>
            ) : (
              <>
                <ButtonIcon
                  text={'Sign in'}
                  vars={buttonSignInVars}
                  handleClick={() => signIn()}
                  icon={<BsTrash />}
                  testing={`button-sign-in`}
                />
                Youre not logged in!!!!
              </>
            )}
          </div>
        </article>
      </>
    </LayoutStandard>
  )
}

export default Login
