import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
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

  const totalPages = useMemo(() => {
    if (!Array.isArray(children)) return 1

    const calcLength = children.reduce((sum, c) => {
      if (Array.isArray(c)) return sum + c.length
      return sum + 1
    }, 0)
    return calcLength
  }, [children])

  useImperativeHandle(ref, () => ({
    onNext() {
      setCurrentPage(getNewPageNumber(currentPage + 1))
    },
    goToPage(page) {
      handlePageChange(page)
    },
  }))

  const getNewPageNumber = (number) => {
    const newPage = Math.max(Math.min(totalPages, number), 0)
    return newPage
  }

  const setThemeByChildren = (page) => {
    const currentChild = Array.isArray(children) ? children[page] : children
    changeTheme(currentChild?.props?.menuTheme || 'dark')
  }

  const handlePageChange = (number) => {
    const page = getNewPageNumber(number)
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
    if (isThemeInit) return
    setTehemeInit(true)
    setThemeByChildren(0)
  }, [isThemeInit, handlePageChange])

  const isFirst = currentPage === 0
  const isLast = currentPage === totalPages - 1

  return (
    <div>
      <ReactPageScroller
        renderAllPagesOnFirstRender
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
