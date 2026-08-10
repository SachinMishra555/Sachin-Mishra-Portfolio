const SKILL_GROUPS = [
  {
    title: 'Product & UX Strategy',
    tags: ['User Research', 'Wireframing', 'Information Architecture', 'Usability Testing', 'Interaction Design', 'User Flows'],
  },
  {
    title: 'Interface & Visual Design',
    tags: ['UI Design', 'Design Systems', 'Micro Interactions', 'Color Theory', 'Typography', 'Responsive Design'],
  },
  {
    title: 'Collaboration & Delivery',
    tags: ['Developer Handoff', 'Stakeholder Presentation', 'A/B Testing', 'Cross-functional Collaboration'],
  },
]

const TOOLS = [
  { name: 'Figma',       icon: '/figma.png' },
  { name: 'Adobe XD',    icon: '/Adobe-XD.png' },
  { name: 'Photoshop',   icon: '/photoshop.png' },
  { name: 'Sketch',      icon: '/skill-fourth.png' },
  { name: 'Illustrator', icon: '/illustrator.png' },
  { name: 'Canva',       icon: '/canva.png' },
  { name: 'ChatGPT',     icon: '/chatgpt.png' },
  { name: 'Gemini',      icon: '/gemini.png' },
  { name: 'AI Tools',    icon: '/skill-eight.png' },
]

export default function Skills() {
  return (
    <section className="px-3 py-10 md:py-[60px] bg-[#1B1B1B]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-20 items-start">

          {/* ── Skill groups ── */}
          <div className="flex flex-col gap-6">
            {SKILL_GROUPS.map((group, i) => (
              <div
                key={group.title}
                className={`reveal reveal-d${i + 1} bg-[#121212] rounded-[16px] border-l-[3px] border-accent p-7 hover:translate-x-1 transition-transform duration-250`}
              >
                <h3 className="font-heading font-bold text-[18px] md:text-[32px] text-white mb-3 md:mb-6 tracking-tight">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-6">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11.5px] md:text-[18px] text-white/70 border border-white/10 rounded-[11px] px-3 py-1.5 hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Tools panel ── */}
          <div className="reveal pt-1">
            <h3 className="font-heading font-bold text-[20px] md:text-[32px] text-white mb-4 md:mb-8 tracking-tight">
              Tools I Use
            </h3>
            <div className="grid grid-cols-3 gap-3 md:gap-8">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  title={tool.name}
                  className="aspect-square bg-[#121212] rounded-[16px] flex items-center justify-center p-7 border border-transparent hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-200 cursor-default"
                >
                  <div className="bg-[#2A332E] rounded-xl p-3">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
