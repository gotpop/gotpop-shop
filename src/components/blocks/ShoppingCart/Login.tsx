import { BiLogInCircle } from 'react-icons/bi'
import ButtonIcon from '@components/ui/ButtonIcon'
import { CSSProperties } from 'react'
import { signIn } from 'next-auth/react'
import styles from './Login.module.css'

const buttonSignInVars = {
  ['--local-font-size']: 'var(--font-size-sm)',
  ['--local-bg-colour']: 'var(--success)',
  ['--local-svg-width']: '1.5em'
} as CSSProperties

export const Login = () => (
  <section className={styles.login}>
    <p>Login & start shopping!</p>
    <ButtonIcon
      text={'Sign in'}
      vars={buttonSignInVars}
      handleClick={() =>
        signIn(undefined, {
          callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/shop`
        })
      }
      icon={<BiLogInCircle />}
      testing={`button-sign-in-cart`}
    />
  </section>
)
