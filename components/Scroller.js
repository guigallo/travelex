import React, { forwardRef, useImperativeHandle, useState } from 'react'
import ReactPageScroller from 'react-page-scroller'

// eslint-disable-next-line react/display-name
const Scroller = forwardRef((props, ref) => {
  const {
    children,
    onBeforePageScroll = undefined,
    onPageChange = undefined,
    changeNext = () => {},
  } = props
  const [currentPage, setCurrentPage] = useState()

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
    // const currentChild = Array.isArray(children) ? children[page] : children
    // changeTheme(currentChild?.props?.menuTheme || 'dark')
  }

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

export default Scroller
