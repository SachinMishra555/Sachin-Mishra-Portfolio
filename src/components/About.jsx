
export default function About() {
  return (
    <section id="about" className="px-3 pt-8 pb-0">
      <div className="max-w-[1240px] mx-auto">
        <div className="reveal bg-elevated rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 p-6 md:p-[60px] items-start">

            {/* Left: Text */}
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

              <p className="text-white/60 text-[13px] md:text-[20px] leading-[1.8] mb-3 md:mb-4">
                Over the past 3+ years, I’ve worked on 20+ digital
                products across AI, SaaS, e-commerce, D2C, enterprise,
                retail, healthcare, and logistics, collaborating with teams
                and clients across India and the Middle East. From designing
                complex retail and inventory workflows to working on AI-powered
                products at Master’s Union, each project has taught me something
                different about solving problems, making trade-offs,
                and turning ideas into experiences people can actually use.
              </p>

              <p className="text-white/60 text-[13px] md:text-[20px] leading-[1.8]">
                Beyond design, I'm someone who loves exploring creativity in
                everyday life, whether that's discovering new cafes, observing
                people and interactions, experimenting with visuals, or constantly
                learning how great experiences are built.
              </p>
            </div>

            {/* Right: Three Portraits + Career Timeline */}
            <div className="flex w-full flex-col gap-5 md:gap-6">

              {/* Three portraits */}
              <div className="grid grid-cols-3 items-start gap-3 md:gap-4">
                <div className="group aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111311]">
                  <img
                    src="/about-first.png"
                    alt="Creative journey"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="group aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111311]">
                  <img
                    src="/about-second.png"
                    alt="Portrait of Sachin"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="group aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111311]">
                  <img
                    src="/about-third.png"
                    alt="Design and creativity"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Career Timeline */}
              <div className="w-full rounded-2xl border border-white/10 bg-[#111311] p-5 md:p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="font-heading text-lg font-bold text-white md:text-xl">
                    Career Journey
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 md:text-xs">
                    DESIGN → PRODUCT
                  </span>
                </div>

                <div className="space-y-0">
                  <div className="relative border-l border-accent/50 pb-5 pl-5">
                    <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-[#111311]" />
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-semibold text-white md:text-base">
                        Master’s Union
                      </h4>
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-medium tracking-wide text-accent">
                        CURRENT
                      </span>
                    </div>
                    <p className="text-xs text-white/55 md:text-sm">
                      Product Designer
                    </p>
                  </div>

                  <div className="relative border-l border-white/15 pb-5 pl-5">
                    <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-white/45 ring-4 ring-[#111311]" />
                    <h4 className="mb-1 text-sm font-semibold text-white/90 md:text-base">
                      Skyview Smart Solutions
                    </h4>
                    <p className="text-xs text-white/55 md:text-sm">
                      UX/UI Designer
                    </p>
                  </div>

                  <div className="relative pl-5">
                    <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-white/45 ring-4 ring-[#111311]" />
                    <h4 className="mb-1 text-sm font-semibold text-white/90 md:text-base">
                      JB Daruka Papers Ltd.
                    </h4>
                    <p className="text-xs text-white/55 md:text-sm">
                      Graphic Designer
                    </p>
                  </div>
                </div>
              </div>

            </div>
            {/* End right column */}

          </div>
          {/* End grid */}
        </div>
        {/* End card */}
      </div>
      {/* End container */}
    </section>
  );
}
