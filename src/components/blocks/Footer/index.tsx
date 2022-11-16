import { AiFillHome } from 'react-icons/ai'
import { GoZap } from 'react-icons/go'
import Nav from '@ui/Nav'
import { TfiGithub } from 'react-icons/tfi'
import { navSecondary } from 'data/nav-secondary'
import styles from './Footer.module.css'

const icons = new Map([
  [1, AiFillHome],
  [2, TfiGithub],
  [3, GoZap]
])

const Footer = ({ vars }) => {
  return (
    <footer className={styles.footer} style={vars}>
      <Nav navItems={navSecondary} iconsMap={icons} />
      <span>Copyright © {new Date().getFullYear()}. All rights reserved.</span>
    </footer>
  )
}

Footer.defaultProps = {
  vars: {}
}

export default Footer
