import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

const MenuContext = createContext<MenuContextType | null>(null)

type Props = {
  children: ReactNode
}

type Menu = {
  open: boolean | null
}

type MenuContextType = {
  menu: Menu | null
  setMenu: Dispatch<SetStateAction<Menu | null>>
}

export function MenuProvider({ children }: Props) {
  const [menu, setMenu] = useState<Menu | null>({ open: false })

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
