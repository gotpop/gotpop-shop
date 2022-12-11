import {
  AiOutlineForm,
  AiOutlineHome,
  AiOutlineShoppingCart
} from 'react-icons/ai'

import { CSSProperties } from 'react'
import { CgCardSpades } from 'react-icons/cg'
import Grid from '@ui/Grid'
import GridWrap from '@ui/GridWrap'
import Logo from '@ui/Logo'
import Nav from '@ui/Nav'
import { navPrimary } from 'data/nav-primary'
import styles from './Header.module.css'

const icons = new Map([
  [1, CgCardSpades],
  [2, AiOutlineForm],
  [3, AiOutlineHome],
  [4, AiOutlineShoppingCart]
])

type Props = {
  vars: CSSProperties | undefined
}

const Header = ({ vars }: Props) => {
  return (
    <header className={styles.header} style={vars}>
      <GridWrap>
        <Grid>
          <>
            <Logo />
            <Nav navItems={navPrimary} iconsMap={icons} />
          </>
        </Grid>
      </GridWrap>
    </header>
  )
}

Header.defaultProps = {
  vars: undefined
}

export default Header
