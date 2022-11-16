import { AiOutlineLink } from 'react-icons/ai'
import { ILinkIcon } from '@types'
import Link from 'next/link'
import styles from './LinkIcon.module.css'

const LinkIcon = ({ icon, children, href, vars }: ILinkIcon) => {
  return (
    <Link className={styles.link} href={href} style={vars}>
      <>
        <span>{children}</span>
        {icon}
      </>
    </Link>
  )
}

LinkIcon.defaultProps = {
  children: 'Visit',
  href: '/',
  icon: <AiOutlineLink />,
  vars: {}
}

export default LinkIcon
