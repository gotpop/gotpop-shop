import { Dispatch, SetStateAction, useContext } from "react"

import MenuContext from "@context/MenuContext"
import { set } from "@utilities/setPropsOnRoot"

type Menu = {
  open: boolean | null
}

type MenuContextType = {
  setMenu: Dispatch<SetStateAction<Menu | null>>
}

export const useCloseMenu = () => {
  const { setMenu } = useContext(MenuContext) as MenuContextType

  const handleCloseMenu = () => {
    setMenu((prevState) => {
      const newState = !prevState?.open
  
      newState
        ? set('--menu-state', 'var(--menu-open)')
        : set('--menu-state', 'var(--menu-closed)')
  
      return { open: newState }
    })
  }
  
  return {
    handleCloseMenu
  }
}
