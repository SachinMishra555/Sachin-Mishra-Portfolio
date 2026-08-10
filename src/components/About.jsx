export default function About() {
  return (
    <section id="about" className="px-3 pt-8 pb-0">
      <div className="max-w-[1240px] mx-auto">
        <div className="reveal bg-elevated rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 p-6 md:p-[60px] items-center">

            {/* ── Left: Text ── */}
            <div>
              <h2 className="font-heading font-bold text-[22px] md:text-[44px] leading-tight tracking-tight text-white mb-4 md:mb-5">
                I design experiences that feel inevitable.
              </h2>
              <p className="text-white/60 text-[13px] md:text-[20px] leading-[1.8] mb-3 md:mb-4">
                For the past 3+ years, I've been designing digital products that
                balance business goals with real human experiences. From AI-powered
                platforms and enterprise dashboards to student-focused applications,
                I enjoy transforming complex workflows into interfaces that feel
                simple, intuitive, and meaningful.
              </p>
              <p className="text-white/60 text-[13px] md:text-[20px] leading-[1.8]">
                Beyond design, I'm someone who loves exploring creativity in
                everyday life, whether that's discovering new cafe's, observing
                people and interactions, experimenting with visuals, or constantly
                learning how great experiences are built.
              </p>
            </div>

            {/* ── Right: Collage with floating animations ── */}
            <div className="relative h-[240px] md:h-[410px]">
              {/* Workspace — top left, floats slowly */}
              <div className="absolute top-0 left-0 w-[60%] h-[54%] animate-floatY hover:scale-105 transition-transform duration-300 z-10">
                <img src="/about-first.png" alt="Workspace" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>

              {/* Portrait — top right, floats medium */}
              <div className="absolute top-0 right-0 w-[35%] h-[76%] animate-floatY2 hover:scale-105 transition-transform duration-300 z-20">
                <img src="/about-second.png" alt="Portrait" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>

              {/* Detail — bottom left, floats fast */}
              <div className="absolute bottom-0 left-[25%] w-[35%] h-[43%] animate-floatY3 hover:scale-105 transition-transform duration-300 z-10">
                <img src="/about-third.png" alt="Detail" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
