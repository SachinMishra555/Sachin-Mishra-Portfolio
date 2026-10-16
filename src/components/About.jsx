import { useEffect, useRef, useState } from "react";

export default function About() {
  const journeyRef = useRef(null);
  const [activeJob, setActiveJob] = useState(0);

  useEffect(() => {
    const container = journeyRef.current;

    if (!container) return;

    const items = Array.from(
      container.querySelectorAll(".journey-item")
    );

    if (items.length === 0) return;

    let animationFrameId = null;

    const updateActiveJob = () => {
      animationFrameId = null;

      const targetY = window.innerHeight * 0.5;
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - targetY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = Number(item.dataset.index);
        }
      });

      setActiveJob((current) =>
        current === closestIndex ? current : closestIndex
      );
    };

    const handleScroll = () => {
      if (animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(updateActiveJob);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    updateActiveJob();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const jobs = [
    {
      company: "Master’s Union",
      role: "Product Designer",
      date: "Oct 2025 — Present",
    },
    {
      company: "Skyview Smart Solutions",
      role: "UX/UI Designer",
      date: "Apr 2024 — Oct 2025",
    },
    {
      company: "JB Daruka Papers Ltd.",
      role: "Graphic Designer",
      date: "Nov 2021 — Nov 2022",
    },
  ];

  return (
    <section id="about" className="px-3 pt-8 pb-0">
      <div className="max-w-[1240px] mx-auto">
        <div className="reveal bg-elevated rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 p-6 md:p-[60px] items-start">
            {/* Left: About Text */}
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
                everyday life, whether that's discovering new cafe's, observing
                people and interactions, experimenting with visuals, or constantly
                learning how great experiences are built.
              </p>
            </div>

            {/* Right: Floating Collage + Career Journey */}
            <div className="flex w-full flex-col gap-5 md:gap-6">
              {/* Original Floating Image Collage */}
              <div className="relative h-[240px] md:h-[410px]">
                {/* Workspace — top left */}
                <div className="absolute top-0 left-0 w-[60%] h-[54%] animate-floatY hover:scale-105 transition-transform duration-300 z-10">
                  <img
                    src="/about-first.png"
                    alt="Workspace"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Portrait — top right */}
                <div className="absolute top-0 right-0 w-[35%] h-[76%] animate-floatY2 hover:scale-105 transition-transform duration-300 z-20">
                  <img
                    src="/about-second.png"
                    alt="Portrait"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Detail — bottom left */}
                <div className="absolute bottom-0 left-[25%] w-[35%] h-[43%] animate-floatY3 hover:scale-105 transition-transform duration-300 z-10">
                  <img
                    src="/about-third.png"
                    alt="Creative detail"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Career Journey — Free-standing Timeline */}
              <div ref={journeyRef} className="w-full py-6 md:py-8">
                <div className="mb-8 md:mb-10">
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-accent mb-3">
                    Career Journey
                  </p>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white">
                    From visuals to products.
                  </h3>
                </div>

                <div className="relative">
                  {/* Background timeline line */}
                  <div className="absolute left-[31%] md:left-[29%] top-2 bottom-2 w-px bg-white/10">
                    {/* Yellow progress line */}
                    <div
                      className="w-full bg-accent transition-all duration-500 ease-out"
                      style={{
                        height: `${(activeJob / (jobs.length - 1)) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="space-y-10 md:space-y-14">
                    {jobs.map((job, index) => {
                      const isActive = activeJob === index;

                      return (
                        <div
                          key={job.company}
                          data-index={index}
                          className={`journey-item grid grid-cols-[31%_1fr] md:grid-cols-[29%_1fr] gap-4 md:gap-5 transition-opacity duration-500 ${
                            isActive ? "opacity-100" : "opacity-40"
                          }`}
                        >
                          {/* Date */}
                          <p
                            className={`text-right text-[10px] md:text-sm leading-relaxed pt-0.5 transition-colors duration-500 ${
                              isActive ? "text-white/80" : "text-white/50"
                            }`}
                          >
                            {job.date}
                          </p>

                          {/* Timeline dot + Job details */}
                          <div className="relative pl-6 md:pl-7">
                            <span
                              className={`absolute left-[-4px] top-1 h-[9px] w-[9px] rounded-full transition-all duration-500 ${
                                isActive
                                  ? "bg-accent scale-125 shadow-[0_0_12px_rgba(255,204,0,0.8)]"
                                  : "bg-white/30"
                              }`}
                            />

                            <h4
                              className={`text-sm md:text-lg font-semibold leading-snug transition-colors duration-500 ${
                                isActive ? "text-white" : "text-white/80"
                              }`}
                            >
                              {job.company}
                            </h4>

                            <p className="mt-1 text-xs md:text-sm text-white/55">
                              {job.role}
                            </p>

                            {index === 0 && (
                              <span
                                className={`inline-block mt-2 text-[9px] uppercase tracking-[0.18em] text-accent transition-opacity duration-500 ${
                                  isActive ? "opacity-100" : "opacity-0"
                                }`}
                              >
                                Current Role
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* End Career Journey */}
            </div>
            {/* End Right Column */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card */}
      </div>
      {/* End Container */}
    </section>
  );
}
