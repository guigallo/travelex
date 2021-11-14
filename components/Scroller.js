import React, { forwardRef, useImperativeHandle, useState } from 'react'
import ReactPageScroller from 'react-page-scroller'
import { useMenuTheme } from '@/contexts/LayoutContext'

// eslint-disable-next-line react/display-name
const Scroller = forwardRef((props, ref) => {
  const { children, changeNext = () => {} } = props
  const [currentPage, setCurrentPage] = useState()
  const { changeTheme } = useMenuTheme()

  const changeThemeFromChild = (page) => {
    if (!children) return
    const currentChild = Array.isArray(children) ? children[page] : children
    changeTheme(currentChild?.props?.menuTheme || 'dark')
  }

  useImperativeHandle(ref, () => ({
    onNext() {
      setCurrentPage(currentPage + 1)
    },
  }))

  const handlePageChange = (number) => {
    setCurrentPage(number)
    changeNext()
  }

  return (
    <div>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
        onBeforePageScroll={changeThemeFromChild}
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
