import ReactPageScroller from 'react-page-scroller'
import Footer from './Footer'
import Menu from './Menu'

function Layout({ children }) {
  return (
    <>
      <Menu />
      <ReactPageScroller>
        {children}
        <Footer />
      </ReactPageScroller>
    </>
  )
}

export default Layout
