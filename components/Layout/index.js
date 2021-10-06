import Content from './Content'
import Footer from './Footer'
import Menu from './Menu'

function Layout({ children }) {
  return (
    <>
      <Menu />
      <Content>
        {children}
        <Footer />
      </Content>
    </>
  )
}

export default Layout
