export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden text-center py-20 md:pt-20 md:pb-[180px]">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/footer-bg.png')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-7 flex flex-col items-center">
        {/* Eyebrow */}
        <p className="reveal text-[20px] uppercase text-white/35 mb-2">
          Let's Work Together
        </p>

        {/* Heading */}
        <h2 className="reveal reveal-d1 font-heading font-bold text-[24px] md:text-[44px] tracking-tight text-white mb-4 md:mb-10 leading-tight">
          Have a project in mind?
        </h2>

        {/* Subtext */}
        <p className="reveal reveal-d2 text-[13px] md:text-[20px] text-white/45 mb-6 md:mb-8">
          I'm currently available for freelance &amp; full-time roles.
        </p>

        {/* Buttons */}
        <div className="reveal reveal-d3 flex flex-wrap justify-center gap-3 md:gap-8 mb-6 md:mb-10">
          <a
            href="mailto:jimishra043@gmail.com"
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3 rounded-[11px] bg-accent text-[#1a1305] text-[14px] md:text-[20px] font-semibold underline underline-offset-2 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,197,24,0.3)] transition-all duration-200"
          >
            Send me an email
          </a>
          <a
            href="/sachinmishra.pdf"
            download
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3 rounded-[11px] bg-transparent text-white text-[14px] md:text-[20px] font-medium border border-white/28 underline underline-offset-2 hover:border-white/60 hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
          >
            Download CV
          </a>
        </div>

        {/* Contact links */}
        <div className="reveal reveal-d4 flex flex-wrap justify-center gap-7">
          <a
            href="https://linkedin.com/in/sachin-mishra-8250b51a1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[16px] text-white/65 underline underline-offset-2 hover:text-white transition-colors"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 rounded-md object-contain flex-shrink-0" />
            Reach Out on Linkedin
          </a>
          <a
            href="tel:8957590093"
            className="inline-flex items-center gap-2 text-[16px] text-white/65 hover:text-white transition-colors"
          >
            <img src="/phone.png" alt="Phone" className="w-10 h-10 rounded-md object-cover object-[8px_2px] flex-shrink-0" />
            Phone: 8957590093
          </a>
        </div>
      </div>
    </footer>
  )
}
