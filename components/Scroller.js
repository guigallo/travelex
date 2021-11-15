import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
import ReactPageScroller from 'react-page-scroller'
import { useMenuTheme } from '@/contexts/LayoutContext'

// eslint-disable-next-line react/display-name
const Scroller = forwardRef((props, ref) => {
  const {
    children,
    onBeforePageScroll = undefined,
    onPageChange = undefined,
    changeNext = () => {},
  } = props
  const [currentPage, setCurrentPage] = useState()
  const { changeTheme } = useMenuTheme()

  useImperativeHandle(ref, () => ({
    onNext() {
      setCurrentPage(currentPage + 1)
    },
  }))

  const handlePageChange = (number) => {
    if (typeof onPageChange === 'function') onPageChange(number)
    setCurrentPage(number)
    changeNext()
  }

  const handleBeforePageScroll = (page) => {
    if (typeof onBeforePageScroll === 'function') onBeforePageScroll(page)
    if (!children) return
    const currentChild = Array.isArray(children) ? children[page] : children
    changeTheme(currentChild?.props?.menuTheme || 'dark')
  }

  useEffect(() => {
    handleBeforePageScroll(0)
  }, [])

  return (
    <div>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
        onBeforePageScroll={handleBeforePageScroll}
      >
        {children}
      </ReactPageScroller>
    </div>
  )
})

function ScrollerSection({
  children,
  className = undefined,
  menuTheme = 'dark',
}) {
  return (
    <div
      className={className}
      data-menu-theme={menuTheme} // prevent unused var
    >
      {children}
    </div>
  )
}

export default Scroller
export { ScrollerSection }
