import React, { forwardRef, useImperativeHandle, useState } from 'react'
import ReactPageScroller from 'react-page-scroller'

// eslint-disable-next-line react/display-name
const Scroller = forwardRef((props, ref) => {
  const { children, changeNext = () => {} } = props
  const [currentPage, setCurrentPage] = useState()

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
      >
        {children}
      </ReactPageScroller>
    </div>
  )
})

export default Scroller
