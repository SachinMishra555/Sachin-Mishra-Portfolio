import { useEffect, useState } from 'react'

export default function Loader() {
  const [hide, setHide] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1800)
    const t2 = setTimeout(() => setDone(true), 2200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111] transition-opacity duration-500 ${hide ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Animated logo mark */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer spinning ring */}
        <div className="absolute w-20 h-20 rounded-full border-2 border-transparent border-t-accent border-r-accent animate-spin" />
        {/* Inner pulsing dot */}
        <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center animate-pulse">
          <div className="w-4 h-4 rounded-full bg-accent" />
        </div>
      </div>

      {/* Name */}
      <p className="font-heading font-bold text-[18px] text-white tracking-tight">
        Sachin Mishra
      </p>
      <p className="text-[12px] text-white/35 mt-1 tracking-widest uppercase">UX / UI Designer</p>

      {/* Progress bar */}
      <div className="mt-8 w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-accent rounded-full animate-[progress_1.6s_ease-out_forwards]" />
      </div>
    </div>
  )
}
