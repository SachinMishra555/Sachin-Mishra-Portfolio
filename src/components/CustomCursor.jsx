import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const pos      = useRef({ x: -100, y: -100 })
  const ring     = useRef({ x: -100, y: -100 })
  const rafId    = useRef(null)
  const hovering = useRef(false)

  useEffect(() => {
    // hide native cursor
    document.documentElement.style.cursor = 'none'

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onEnter = () => {
      hovering.current = true
      if (ringRef.current) ringRef.current.classList.add('cursor-hover')
      if (dotRef.current)  dotRef.current.classList.add('cursor-dot-hover')
    }
    const onLeave = () => {
      hovering.current = false
      if (ringRef.current) ringRef.current.classList.remove('cursor-hover')
      if (dotRef.current)  dotRef.current.classList.remove('cursor-dot-hover')
    }

    // Smooth ring follow with lerp
    const lerp = (a, b, n) => a + (b - a) * n
    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    document.addEventListener('mousemove', onMove)

    // Hover effect on interactive elements
    const targets = document.querySelectorAll('a, button, [role="button"]')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    // Re-bind on DOM changes via MutationObserver
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.documentElement.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 z-[9998] w-2 h-2 rounded-full bg-accent pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      />
      {/* Ring — follows with lag */}
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 z-[9997] w-9 h-9 rounded-full border-2 border-accent/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,opacity] duration-200"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
