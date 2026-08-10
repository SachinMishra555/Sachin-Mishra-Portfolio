import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full bg-accent text-[#1a1305] flex items-center justify-center shadow-[0_8px_24px_rgba(245,197,24,0.35)] hover:bg-accent-hover hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(245,197,24,0.45)] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </button>
  )
}
