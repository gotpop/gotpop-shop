import * as React from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

const getIcon = (iconsMap, id) => {
  const icon = iconsMap.get(parseInt(id))

  return icon ? icon() : null
}

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
