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
  const [isThemeInit, setTehemeInit] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const { changeTheme } = useMenuTheme()

  useImperativeHandle(ref, () => ({
    onNext() {
      setCurrentPage(getPageNumber(currentPage + 1))
    },
  }))

  const getPageNumber = (number) => {
    const childrenLength = Array.isArray(children) ? children.length + 1 : 1
    return Math.max(Math.min(childrenLength, number), 0)
  }

  const setThemeByChildren = (page) => {
    const currentChild = Array.isArray(children) ? children[page] : children
    changeTheme(currentChild?.props?.menuTheme || 'dark')
  }

  const handlePageChange = (number) => {
    const page = getPageNumber(number)
    setCurrentPage(page)
    changeNext()
    if (typeof onPageChange === 'function') onPageChange(page)
  }

  const handleBeforePageScroll = (page) => {
    if (typeof onBeforePageScroll === 'function') onBeforePageScroll(page)
    if (!children) return
    setThemeByChildren(page)
  }

  useEffect(() => {
    if (currentPage >= children.length) setCurrentPage(children.length + 1)
    if (currentPage < 0) setCurrentPage(0)
  }, [currentPage])

  useEffect(() => {
    if (isThemeInit) return
    setTehemeInit(true)
    setThemeByChildren(0)
  }, [isThemeInit, handlePageChange])

  const isLast = currentPage === children.length - 1
  const isFirst = currentPage === 0

  return (
    <div>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
        onBeforePageScroll={handleBeforePageScroll}
        blockScrollUp={isFirst}
        blockScrollDown={isLast}
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
