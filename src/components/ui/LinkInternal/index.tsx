import { ILinkInternal } from '@types'
import styles from './LinkIcon.module.css'

const LinkInternal = ({ children, href, icon, vars }: ILinkInternal) => {
  return (
    <a href={href} className={styles.link}>
      <>
        <span style={vars}>{children}</span>
        {icon}
      </>
    </a>
  )
}

LinkInternal.defaultProps = {
  vars: null,
  icon: null
}

export default LinkInternal
