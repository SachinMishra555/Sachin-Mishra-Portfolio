import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Work',    href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = () => setOpen(false)

  return (
    /* sticky wrapper — always sticks to top after hero-bg wrapper scrolls off */
    <header
      className={`sticky top-0 z-50 px-3 pt-3 pb-1 transition-all duration-300 ${
        scrolled ? 'bg-[#111111]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* ── Pill bar ── */}
        <nav
          className={`flex items-center justify-between p-3 pl-7 rounded-xl bg-elevated3 transition-all duration-300 ${
            scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.6)]' : ''
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="font-heading font-bold text-[20px] md:text-[32px] text-white tracking-tight hover:opacity-80 transition-opacity"
          >
            Sachin Mishra
          </a>

          {/* Desktop links + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <ul className="flex items-center gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[16px] p-2.5 text-white/50 hover:text-[#1a1305] rounded-lg relative hover:bg-accent transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-[11px] bg-accent text-[#1a1305] text-[16px] font-semibold hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,197,24,0.3)] transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* ── Mobile dropdown ── */}
        {open && (
          <div className="md:hidden mt-2 rounded-xl bg-elevated3 border border-white/10 overflow-hidden animate-fadeIn">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleLink}
                    className="block px-6 py-4 text-[15px] text-white/60 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="p-4">
                <a
                  href="#contact"
                  onClick={handleLink}
                  className="flex items-center justify-center w-full py-3 rounded-[11px] bg-accent text-[#1a1305] text-[15px] font-semibold hover:bg-accent-hover transition-colors"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
