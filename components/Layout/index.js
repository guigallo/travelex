import LayoutProvider from '@/contexts/LayoutContext'
import Menu from './Menu'

function Layout({ children }) {
  return (
    <LayoutProvider>
      <Menu />
      {children}
    </LayoutProvider>
  )
}

export default Layout
