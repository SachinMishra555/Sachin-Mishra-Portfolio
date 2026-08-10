const STEPS = [
  { icon: '/compass.png',   title: 'Discover',   description: 'Understanding users, business goals & pain points',          iconBg: '#332A38' },
  { icon: '/define.png',    title: 'Define',     description: 'Structuring workflows and identifying opportunities',          iconBg: '#444B4E' },
  { icon: '/ideate.png',    title: 'Ideate',     description: 'Exploring concepts, flows & interaction patterns',            iconBg: '#2A332E' },
  { icon: '/prototype.png', title: 'Prototype',  description: 'Building intuitive and testable experiences',                iconBg: '#2A332E' },
  { icon: '/rocket.png',    title: 'Test & Ship', description: 'Refining through feedback and developer collaboration',      iconBg: '#2A332E' },
]

function StepCard({ step }) {
  return (
    <div className="reveal flex-1 min-w-[160px] max-w-[300px] bg-elevated2 rounded-xl p-5 md:p-8 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-300 group">
      <div
        className="w-12 h-12 md:w-20 md:h-20 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: step.iconBg }}
      >
        <img src={step.icon} alt={step.title} className="w-7 h-7 md:w-12 md:h-12 object-contain" loading="lazy" decoding="async" />
      </div>
      <h3 className="font-heading font-bold text-[16px] md:text-[24px] text-white mb-2 md:mb-3">{step.title}</h3>
      <p className="text-[12px] md:text-[18px] leading-relaxed text-white/42 max-w-[220px]">{step.description}</p>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="px-3 py-16 md:pb-20 pt-0">
      <div className="max-w-[1240px] mx-auto">
        <p className="reveal text-center text-[20px] uppercase text-white/35 mb-2">
          How I Work
        </p>
        <h2 className="reveal reveal-d1 font-heading font-bold text-center text-[28px] md:text-[40px] tracking-tight text-white mb-10">
          My design process
        </h2>

        {/* Row 1 — 3 cards */}
        <div className="flex flex-wrap justify-center gap-3.5 md:gap-8 mb-4 md:mb-8">
          {STEPS.slice(0, 3).map((s) => <StepCard key={s.title} step={s} />)}
        </div>

        {/* Row 2 — 2 cards centered at same width */}
        <div className="flex flex-wrap justify-center gap-3.5 md:gap-8">
          {STEPS.slice(3).map((s) => <StepCard key={s.title} step={s} />)}
        </div>
      </div>
    </section>
  )
}
