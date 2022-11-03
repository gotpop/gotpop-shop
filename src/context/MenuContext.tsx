import { createContext, useState } from 'react'

const MenuContext = createContext(null)

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState({ open: false })

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
