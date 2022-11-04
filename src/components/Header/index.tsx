import * as React from 'react'
import styles from './Header.module.css'
import Nav from '@components/Nav'
import Logo from '@components/Logo'
import { navPrimary } from '@content/nav-primary'
import { CgCardSpades } from 'react-icons/cg'
import { AiOutlineForm } from 'react-icons/ai'
import { DiSmashingMagazine } from 'react-icons/di'
import { RiDashboard3Line } from 'react-icons/ri'

const icons = new Map([
  [1, CgCardSpades],
  [2, AiOutlineForm],
  [3, DiSmashingMagazine],
  [4, RiDashboard3Line]
]);

export default function Header() { 
  return (
    <header className={styles.header}>
      <Logo />
      <Nav navItems={navPrimary} iconsMap={icons} />
    </header>
  )
}

