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
              </p>
               <p className="text-white/60 text-[13px] md:text-[20px] leading-[1.8]">
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
                Most recently, I worked on Interview AI and Sales Coach AI, 
                exploring how AI can make interview preparation and sales 
                training more effective. A big part of that work was figuring 
                out how to turn large amounts of AI-generated information into clear,
                useful experiences without overwhelming people.
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
