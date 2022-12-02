// import { GetComponent } from '@utilities/getComponent'

import { IconType } from 'react-icons'
import styles from './NavFooter.module.css'

type NavItem = {
  id: string
  href: string
  test: string
  text: string
}

type Props = {
  navItems: NavItem[]
  iconsMap: Map<number, IconType>
}

export function NavFooter({ navItems, iconsMap }: Props) {
  return (
    <nav className={styles.navfooter}>
      {navItems?.map(item => (
        <a key={item.id} href={item.href} data-test={item.test}>
          <>
            <span>{item.text}</span>
            {/* <GetComponent componentsMap={iconsMap} id={item.id} /> */}
          </>
        </a>
      ))}
    </nav>
  )
}
