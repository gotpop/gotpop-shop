import React, { CSSProperties } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

import { AiOutlineLogout } from 'react-icons/ai'
import { BiLogInCircle } from 'react-icons/bi'
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

  return (
    <LayoutStandard>
      <>
        <Meta />
        <article>
          <h2>Login</h2>
          <div>
            {session ? (
              <>
                <p>Youre not logged in!</p>
                <ButtonIcon
                  text={'Sign out'}
                  vars={buttonRemoveVars}
                  handleClick={() => signOut()}
                  icon={<AiOutlineLogout />}
                  testing={`button-sign-out`}
                />
              </>
            ) : (
              <>
                <p>Log in and start shopping!</p>
                <ButtonIcon
                  text={'Sign in'}
                  vars={buttonSignInVars}
                  handleClick={() =>
                    signIn(undefined, {
                      callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/shop`
                    })
                  }
                  icon={<BiLogInCircle />}
                  testing={`button-sign-in`}
                />
              </>
            )}
          </div>
        </article>
      </>
    </LayoutStandard>
  )
}

export default Login
