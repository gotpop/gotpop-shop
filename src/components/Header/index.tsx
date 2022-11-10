import { AiOutlineForm } from 'react-icons/ai'
import { CgCardSpades } from 'react-icons/cg'
import { DiSmashingMagazine } from 'react-icons/di'
import Logo from '@components/Logo'
import Nav from '@components/Nav'
import { RiDashboard3Line } from 'react-icons/ri'
import { navPrimary } from 'data/nav-primary'
import styles from './Header.module.css'

const icons = new Map([
  [1, CgCardSpades],
  [2, AiOutlineForm],
  [3, DiSmashingMagazine],
  [4, RiDashboard3Line]
])

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav navItems={navPrimary} iconsMap={icons} />
    </header>
  )
}
