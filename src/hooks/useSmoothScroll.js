/**
 * useSmoothScroll
 * Intercepts all <a href="#section"> clicks on the page,
 * scrolls to the target smoothly, and keeps the URL clean (no hash).
 */
import { useEffect } from 'react'

export default function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const target = document.querySelector(href)
      if (!target) return

      e.preventDefault()

      target.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // Keep URL clean — no hash added, no history entry pushed
      window.history.replaceState(null, '', window.location.pathname)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}
