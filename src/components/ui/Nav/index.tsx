import Link from 'next/link'
import { getComponent } from 'utilities/getComponent'
import styles from './Nav.module.css'

export default function Nav({ navItems, iconsMap }) {
  return (
    <nav className={styles.nav}>
      {navItems?.map(item => (
        <Link key={item.id} href={item.href} data-test={item.test}>
          <span>{item.text}</span>
          {getComponent(iconsMap, item.id)}
        </Link>
      ))}
    </nav>
  )
}
