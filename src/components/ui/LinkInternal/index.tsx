import { ILinkInternal } from '@types'
import styles from './LinkIcon.module.css'

const LinkInternal = ({ children, href, vars }: ILinkInternal) => {
  return (
    <a href={href} className={styles.link}>
      <span style={vars}>{children}</span>
    </a>
  )
}

LinkInternal.defaultProps = {
  vars: null,
  icon: null
}

export default LinkInternal
