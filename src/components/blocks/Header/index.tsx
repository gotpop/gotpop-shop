import { AiOutlineForm } from 'react-icons/ai'
import { BiStore } from 'react-icons/bi'
import { CSSProperties } from 'react'
import Grid from '@ui/Grid'
import GridWrap from '@ui/GridWrap'
import LogoSVG from '@ui/LogoSVG'
import Nav from '@ui/Nav'
import { navPrimary } from 'data/nav-primary'
import styles from './Header.module.css'

const icons = new Map([
  [1, AiOutlineForm],
  [2, BiStore]
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
            <LogoSVG />
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
