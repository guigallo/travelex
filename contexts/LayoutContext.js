import { createContext, useContext, useState } from 'react'

const LayoutContext = createContext(undefined)

function LayoutProvider({ children }) {
  const [menuTheme, setMenuTheme] = useState('dark')

  const changeMenuTheme = (theme) => {
    const isValidTheme = ['light', 'dark'].includes(theme)
    if (!isValidTheme) {
      throw new Error('Invalid theme. light or dark is available')
    }

    setMenuTheme(theme)
  }

  return (
    <LayoutContext.Provider value={{ menuTheme, changeMenuTheme }}>
      {children}
    </LayoutContext.Provider>
  )
}

function useMenuTheme() {
  const { menuTheme: theme, changeMenuTheme: changeTheme } =
    useContext(LayoutContext)

  return { theme, changeTheme }
}

export default LayoutProvider
export { useMenuTheme }
