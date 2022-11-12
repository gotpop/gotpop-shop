import Link from 'next/link'
import { getIcon } from '@utils/getIcon'
import styles from './Nav.module.css'

export default function Nav({ navItems, iconsMap }) {
  return (
    <nav className={styles.nav}>
      {navItems?.map(item => (
        <Link key={item.id} href={item.href}>
          <span>{item.text}</span>
          {getIcon(iconsMap, item.id)}
        </Link>
      ))}
    </nav>
  )
}
