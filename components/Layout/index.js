import Menu from './Menu'

function Layout({ children }) {
  return (
    <>
      <Menu />
      {children}
    </>
  )
}

export default Layout
