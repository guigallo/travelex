import { useEffect } from 'react'

function useLockScrollFirstPage() {
  useEffect(() => {
    const scrollToSecondPage = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop < window.innerHeight) {
        window.requestAnimationFrame(scrollToSecondPage)
        window.scrollTo(0, scrollTop + 15)
      }
    }

    const onScroll = (e) => {
      if (window.scrollY === 0) {
        e.preventDefault()
        if (e.deltaY > 0) scrollToSecondPage()
        return
      }
    }

    window.addEventListener('wheel', onScroll, { passive: false })

    return () => {
      window.removeEventListener('wheel', onScroll)
    }
  }, [])

  return null
}

export default useLockScrollFirstPage
