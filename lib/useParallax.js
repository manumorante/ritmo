import { useState, useEffect } from 'react'

export function useParallax({ ref, visibleDefault = false }) {
  const [scroll, setScroll] = useState(0)
  const [visible, setVisible] = useState(visibleDefault)

  useEffect(() => {
    const current = ref.current

    if (!current) return

    function handleScene({ fromUp }) {
      const { height } = current.getBoundingClientRect()
      const startTop = fromUp ? height : 0

      const handleScroll = () => {
        const { top, height } = current.getBoundingClientRect()
        const relativeTop = top - startTop
        let scroll = Math.abs(relativeTop / height) * 100
        if (fromUp) scroll = Math.abs(100 - scroll)
        setScroll(scroll)
        requestAnimationFrame(handleScroll)
      }

      requestAnimationFrame(handleScroll)
      return () => cancelAnimationFrame(handleScroll)
    }

    const options = { root: null, rootMargin: '0px', threshold: 0 }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setVisible(true)
            const fromUp = entry.boundingClientRect.y < entry.rootBounds.y

            handleScene({ fromUp })

            console.log('Entra', entry.target, 'fromUp:', fromUp)
          })
        } else {
          requestAnimationFrame(() => {
            setVisible(false)

            console.log('Sale', entry.target)
          })
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, options)
    observer.observe(current)
    return () => observer.unobserve(current)
  }, [ref])

  return { scroll, visible }
}
