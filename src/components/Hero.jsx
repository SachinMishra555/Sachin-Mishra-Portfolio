export default function Hero() {
  return (
    <section id="top" className="relative px-3 pb-3 pt-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:min-h-[650px] py-8 md:py-16">

         {/* ── Left copy ── */}
<div className="reveal order-2 md:order-1 max-w-[650px]">

  {/* Greeting */}
  <p className="text-white/90 text-[18px] md:text-[28px] mb-5 md:mb-7">
    नमस्ते! <span className="font-accent italic">Hello!</span>{" "}
    <span className="font-accent italic">Bonjour!</span>
  </p>

  {/* Name */}
  <h1 className="font-heading font-bold text-[38px] md:text-[64px] leading-[1.05] tracking-tight text-white mb-3 md:mb-4 animate-revealUp opacity-0">
    I am Sachin,
  </h1>

  {/* Role + existing badge */}
  <div className="flex items-start gap-3 mb-5 md:mb-6 flex-wrap relative">
    <span className="font-accent italic text-accent text-[32px] md:text-[68px] leading-none font-bold">
      Product Designer
    </span>

    <span className="inline-block right-0 top-[-10px] absolute px-3 py-1 text-[11px] md:text-[18px] font-medium text-white/70 bg-black/40 border border-white/12 rounded-[12px] md:rounded-[18px] whitespace-nowrap rotate-badge animate-badgePop opacity-0">
      AI & SaaS
    </span>
  </div>

  {/* Design background */}
  <p className="reveal reveal-d1 text-white/70 text-[14px] md:text-[20px] leading-relaxed max-w-[650px] mb-3">
    Mid-level Designer with a Graphic & Visual Design background.
  </p>

  {/* Personal introduction */}
  <p className="reveal reveal-d2 text-white/70 text-[14px] md:text-[20px] leading-relaxed max-w-[650px] mb-4 md:mb-5">
    I create thoughtful digital experiences across AI, SaaS, e-commerce,
    and enterprise products, turning complex problems into intuitive
    experiences people love to use.
  </p>

  {/* Day / Night statement */}
  <p className="reveal reveal-d3 text-white/80 text-[15px] md:text-[21px] leading-relaxed max-w-[650px]">
    Driving growth at{" "}
    <span className="inline-flex items-center align-middle mx-1 px-3 py-1.5 rounded-full bg-black text-white text-[12px] md:text-[15px] font-semibold whitespace-nowrap">
      Master’s Union
    </span>{" "}
    by day, exploring AI and building smarter experiences by night.
  </p>

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
                  className="absolute inset-0 w-full h-full object-cover scale-[1.07]"
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
