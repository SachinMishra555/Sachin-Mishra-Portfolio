export default function Hero() {
  return (
    <section id="top" className="relative px-3 pb-3 pt-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:min-h-[650px] py-8 md:py-16">

          {/* ── Left copy ── */}
          <div className="reveal order-2 md:order-1 max-w-[650px]">
            <h1 className="font-heading font-bold text-[28px] md:text-[50px] leading-tight tracking-tight text-white mb-1 animate-revealUp opacity-0">
              
            </h1>

            {/* Role + badge */}
            <div className="flex items-start gap-3 mb-4 flex-wrap relative">
              <span className="font-accent italic text-accent text-[32px] md:text-[68px] leading-none font-bold">
                Product Designer
              </span>
              <span className="inline-block right-0 top-[-10px] absolute px-3 py-1 text-[11px] md:text-[18px] font-medium text-white/70 bg-black/40 border border-white/12 rounded-[12px] md:rounded-[18px] whitespace-nowrap rotate-badge animate-badgePop opacity-0">
                UX/UI
              </span>
            </div>

            {/* Description */}
            <p className="reveal reveal-d1 text-white/70 text-[14px] md:text-[20px] leading-relaxed max-w-[650px] mb-5 md:mb-7">
              I create thoughtful digital experiences that connect strategy, usability,
              and visual clarity, helping brands transform complex ideas into intuitive
              products people love to use.
            </p>

            {/* Buttons */}
            <div className="reveal reveal-d2 flex flex-wrap gap-3 md:gap-8 mb-5 md:mb-6">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3.5 rounded-[11px] bg-accent text-[#1a1305] text-[14px] md:text-[18px] font-semibold underline-offset-2 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,197,24,0.3)] transition-all duration-200"
              >
                Explore Projects
              </a>
              <a
                href="/sachinmishra.pdf"
                download
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3.5 rounded-[11px] bg-transparent text-white text-[14px] md:text-[18px] font-medium border border-white/35 underline underline-offset-2 hover:border-white/70 hover:bg-white/6 hover:-translate-y-0.5 transition-all duration-200"
              >
                Download CV
              </a>
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sachin-mishra-8250b51a1"
              target="_blank"
              rel="noreferrer"
              className="reveal reveal-d3 inline-flex items-center gap-2 text-[13px] md:text-[18px] text-white/80 hover:text-white transition-colors"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8 rounded-md object-contain" />
              <span className="underline">Linkedin Profile</span>
            </a>
          </div>

          {/* ── Right portrait ── */}
          <div className="reveal reveal-d1 order-1 md:order-2 flex justify-center md:justify-end md:pr-[60px]">
            <div className="relative w-full max-w-[220px] md:max-w-[340px]">

              {/* Stat chip — top right */}
              <div
                className="absolute -top-3 -right-[20%] md:-right-[30%] z-10 flex items-center gap-2 px-3 py-3 md:px-4 md:py-4 rounded-[12px] md:rounded-[16px] border border-white/10 backdrop-blur-md animate-floatY"
                style={{ backgroundImage: 'url(/hero-stat.png)', backgroundSize: 'cover', backgroundColor: 'rgba(26,26,26,0.92)' }}
              >
                <span className="font-medium text-[18px] md:text-[28px] text-white leading-none">12+</span>
                <span className="text-[10px] md:text-[14px] text-white/55 leading-snug">Live Products<br />Designed</span>
              </div>

              {/* Portrait */}
              <div className="aspect-[728/952] rounded-[24px] md:rounded-[24px] overflow-hidden bg-elevated2 hover:scale-[1.015] transition-transform duration-500">
                <img
                  src="/sachin-portrait.png"
                  alt="Sachin Mishra"
                  className="w-full h-full object-contain"
                  fetchpriority="high"
                  decoding="async"
                />
              </div>

              {/* Stat chip — bottom left */}
              <div
                className="absolute -bottom-3 -left-[20%] md:-left-[36%] z-10 flex items-center gap-2 px-3 py-3 md:px-4 md:py-4 rounded-[12px] md:rounded-[16px] border border-white/10 backdrop-blur-md animate-floatY2"
                style={{ backgroundImage: 'url(/hero-stat.png)', backgroundSize: 'cover', backgroundColor: 'rgba(26,26,26,0.92)' }}
              >
                <span className="text-[10px] md:text-[14px] text-white/55 leading-snug">Years crafting<br />digital products</span>
                <span className="font-medium text-[18px] md:text-[28px] text-white leading-none">3+</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
