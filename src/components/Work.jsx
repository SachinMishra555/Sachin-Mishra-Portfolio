import { ArrowRight } from 'lucide-react'

const PROJECTS = [
  {
    id: 'omarieden',
    title: 'Omarieden',
    subtitle: 'Luxury Fashion & Lifestyle Retail Platform',
    description: 'How might we create a premium omnichannel shopping experience for modern luxury consumers in Saudi Arabia?',
    role: 'Lead UX/UI Designer',
    tags: ['Design System', 'Style Guide', 'Luxury E-commerce', 'Responsive Design', 'UX Research'],
    reverse: false,
    image: '/omarieden-cover.png',
    imageBg: 'linear-gradient(160deg,#3a1a10 0%,#1c0c08 100%)',
    figmaLink: 'https://www.figma.com/design/gxtEdjzCNBJWQW6vAHp8Wa/Omariedean-Website?node-id=0-1&t=EeSdyneoJ7k2ggSH-1',
  },
  {
    id: 'punjab-startup',
    title: 'Punjab Startup App',
    subtitle: 'Entrepreneurship Learning & Startup Platform',
    description: 'How might we help students transform from job seekers into real-world entrepreneurs through action-based digital learning?',
    role: 'Product Designer – UX Strategy & UI Design',
    tags: ['Ed-Tech', 'Startup Ecosystem', 'UX Strategy', 'Responsive Design', 'UI Design'],
    reverse: true,
    image: '/punjab-cover.png',
    imageBg: 'linear-gradient(160deg,#2f5fd6 0%,#16327a 100%)',
    figmaLink: 'https://www.figma.com/design/JMhjvVUgpILvS2mrfMNtXQ/Punjab-Startup-App?node-id=0-1&p=f&t=yL8f2cV5gV3MUsHK-0',
  },
  {
    id: 'salescoach',
    title: 'SalesCoach',
    subtitle: 'AI-Powered Sales Performance',
    description: 'How might we help sales representatives improve conversations and team productivity through real-time AI assistance?',
    role: 'Product Designer',
    tags: ['AI SaaS', 'Data Visualization', 'Enterprise Platform', 'Complex Workflows', 'UX Research'],
    reverse: false,
    image: '/salescoach-cover.png',
    imageBg: 'linear-gradient(160deg,#0d1117 0%,#161b22 100%)',
    figmaLink: 'https://www.figma.com/design/B3jmnqFIUbfYluNND3UXfi/Sales-Coach-Portfolio-File?node-id=0-1&t=0CyR5EjUHy24p5bt-1',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="reveal grid grid-cols-1 md:grid-cols-2 bg-elevated rounded-[16px] overflow-hidden md:min-h-[480px] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)] transition-all duration-300 p-3 md:p-[30px] gap-3 md:gap-6">
      {/* Media */}
      <div
        className={`relative md:rounded-xl overflow-hidden min-h-[200px] md:min-h-[420px] ${project.reverse ? 'md:order-2' : 'md:order-1'}`}
        style={{ background: project.imageBg }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center p-4 md:p-0 ${project.reverse ? 'md:order-1' : 'md:order-2'}`}>
        <h3 className="font-heading font-bold text-[18px] md:text-[40px] text-white tracking-tight mb-2 md:mb-3">
          {project.title}
        </h3>
        <p className="font-accent italic text-accent text-[13px] md:text-[24px] mb-2 md:mb-3">{project.subtitle}</p>
        <p className="text-white/45 text-[12px] md:text-[18px] leading-relaxed mb-2 md:mb-6">{project.description}</p>
        <p className="text-white/70 text-[12px] md:text-[20px] mb-3 md:mb-6">My Role: {project.role}</p>

        <div className="flex flex-wrap gap-1.5 md:gap-6 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11.5px] md:text-[18px] text-white/70 border border-white/10 rounded-[11px] px-3 py-1.5 hover:border-accent hover:text-accent transition-colors duration-200">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.figmaLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-[11px] bg-accent text-[#1A1C1E] text-[18px] font-medium underline underline-offset-2 hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200"
        >
          Explore in Figma <ArrowRight size={15} strokeWidth={2.2} />
        </a>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-3 py-16 md:py-20">
      <div className="max-w-[1240px] mx-auto">
        <p className="reveal text-center text-[20px] uppercase text-white/35 mb-2">
          Selected Work
        </p>
        <h2 className="reveal reveal-d1 font-heading font-bold text-center text-[28px] md:text-[40px] tracking-tight text-white mb-10">
          Projects that made a difference
        </h2>
        <div className="flex flex-col gap-4 md:gap-8">
          {PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
