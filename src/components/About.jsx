export default function About() {
  return (
    <section id="about" className="px-3 pt-8 pb-0">
      <div className="max-w-[1240px] mx-auto">
        <div className="reveal bg-elevated rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 p-6 md:p-[60px] items-center">

            {/* ── Left: Text ── */}
            <div>
              <h2 className="font-heading font-bold text-[22px] md:text-[44px] leading-tight tracking-tight text-white mb-4 md:mb-5">
                Designing is how I think. Building is how i prove it.
              </h2>
              <p className="text-white/60 text-[13px] md:text-[20px] leading-[1.8] mb-3 md:mb-4">
                I started my career in graphic design,
                learning how visuals communicate ideas and 
                shape the way people perceive things.
                But over time, I became more interested in
                what happens beyond how something looks,
                how people use a product, where they get stuck, 
                and what makes an experience feel effortless.
                That curiosity led me to UX/UI and eventually Product Design.
              </p>
              <p className="text-white/60 text-[13px] md:text-[20px] leading-[1.8]">
                Over the past 3+ years, I’ve worked on 20+ digital 
                products across AI, SaaS, e-commerce, D2C, enterprise,
                retail, and healthcare, logistics collaborating with teams 
                and clients across India and the Middle East. From designing
                complex retail and inventory workflows to working on AI-powered 
                products at Master’s Union, each project has taught me something 
                different about solving problems, making trade-offs, 
                and turning ideas into experiences people can actually use.
              </p>
              <p className="text-white/60 text-[13px] md:text-[20px] leading-[1.8]">
                Beyond design, I'm someone who loves exploring creativity in
                everyday life, whether that's discovering new cafe's, observing
                people and interactions, experimenting with visuals, or constantly
                learning how great experiences are built.
              </p>
             </div>

            {/* ── Right: Portrait + Career Timeline ── */}
            <div className="flex flex-col gap-5 md:gap-6">

              {/* Portrait */}
              <div className="relative flex justify-center md:justify-end">
                <div className="group relative w-[150px] h-[170px] sm:w-[180px] sm:h-[200px] md:w-[200px] md:h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#111311]">
                  <img
                    src="/about-second.png"
                    alt="Portrait of Sachin"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Career timeline */}
              <div className="rounded-2xl border border-white/10 bg-[#111311] p-5 md:p-6">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-white">
                    Career Journey
                  </h3>
                  <span className="text-[10px] md:text-xs uppercase tracking-wider text-white/40">
                    Design → Product
                  </span>
                </div>

                <div className="space-y-0">
                  {/* Master’s Union */}
                  <div className="relative pl-5 pb-5 border-l border-accent/50">
                    <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-[#111311]" />
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-sm md:text-base font-semibold text-white">
                        Master’s Union
                      </h4>
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-medium tracking-wide text-accent">
                        CURRENT
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-white/55">
                      Product Designer
                    </p>
                  </div>

                  {/* Skyview */}
                  <div className="relative pl-5 pb-5 border-l border-white/15">
                    <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-white/45 ring-4 ring-[#111311]" />
                    <h4 className="text-sm md:text-base font-semibold text-white/90 mb-1">
                      Skyview Smart Solutions
                    </h4>
                    <p className="text-xs md:text-sm text-white/55">
                      UX/UI Designer
                    </p>
                  </div>

                  {/* JB Daruka */}
                  <div className="relative pl-5">
                    <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-white/45 ring-4 ring-[#111311]" />
                    <h4 className="text-sm md:text-base font-semibold text-white/90 mb-1">
                      JB Daruka Papers Ltd.
                    </h4>
                    <p className="text-xs md:text-sm text-white/55">
                      Graphic Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div> {/* End grid */}
        </div>   {/* End elevated card */}
      </div>     {/* End container */}
    </section>
  )
}
