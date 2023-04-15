import { useState, useEffect, useRef } from 'react'

export function useParallax({ ref }) {
  const [scroll, setScroll] = useState(0)
  const observerRef = useRef(null)
  const timerRef = useRef(null)

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
      }

      timerRef.current = setInterval(handleScroll, 16)
      return () => clearInterval(timerRef.current)
    }

    const options = { root: null, rootMargin: '0px', threshold: 0 }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fromUp = entry.boundingClientRect.y < entry.rootBounds.y
          handleScene({ fromUp })

          console.log('Entra', entry.target, 'fromUp:', fromUp)
        } else {
          console.log('Sale', entry.target)
        }
      })
    }

    observerRef.current = new IntersectionObserver(handleIntersection, options)
    observerRef.current.observe(current)
    return () => {
      observerRef.current.unobserve(current)
      clearInterval(timerRef.current)
    }
  }, [ref])

  return { scroll }
}
