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

function Login() {
  const { data: session } = useSession()
  console.log('session :', session);
  
  return (
    <LayoutStandard>
      <>
        <Meta />
        <article>
          <h2>Login</h2>
          <div>{session ? <>Youre logged in!</> : <>Youre not logged in!!!!</>}</div>
          {/* <div>Hello, {session?.user.email ?? session?.user.name}</div> */}
          {/* {session.user.name} */}
          <ButtonIcon
            text={'Sign in'}
            vars={buttonRemoveVars}
            handleClick={() => signIn()}
            icon={<BsTrash />}
            testing={`button-sign-in`}
          />
        </article>
      </>
    </LayoutStandard>
  )
}

export default Login
