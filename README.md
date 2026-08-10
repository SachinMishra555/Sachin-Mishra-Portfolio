# Sachin Mishra — Portfolio

A React + Vite build of the portfolio, matched to the uploaded design (dark theme,
gold accent, Inter + Instrument Serif type).

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy anywhere (Vercel,
Netlify, GitHub Pages, etc.).

## Things to swap in with your real content

I didn't have access to your actual images, so these are styled placeholders.
Search each file for the noted spot and drop in your files:

- **Your headshot** — `src/components/Hero.jsx`, the `.hero-portrait-placeholder` div.
  Recommended ~560×680px photo, replace with an `<img>`.
- **About collage photos** (workspace / portrait / detail shots) —
  `src/components/About.jsx`, the three `.collage-item` divs.
- **Project thumbnails** for Omarieden, Punjab Startup App, and SalesCoach —
  `src/components/Work.jsx`, inside `ProjectMedia`. Swap each gradient div for
  an `<img>` of the real project shot.
- **Tool icons** — `src/components/Skills.jsx` uses simple colored monograms
  (Fi, Xd, Ps...) instead of real brand logo files, to avoid shipping
  trademarked assets. Swap in your own SVG logos if you'd like the exact marks.
- **Links** — update the LinkedIn URL, email address, and CV file path in
  `Hero.jsx` and `Footer.jsx` (currently placeholders: `linkedin.com`,
  `hello@sachinmishra.com`, `/sachinmishra.pdf`). Drop your actual CV PDF
  into the `public/` folder with that filename, or update the path.
- **Phone number** — carried over as shown in your screenshot (8957590093);
  update if it's out of date.

## Structure

```
src/
├── App.jsx              # assembles all sections
├── index.css             # design tokens (colors, fonts, spacing) + shared utilities
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Work.jsx           # 3 project rows
    ├── Process.jsx        # 5-step design process
    ├── Skills.jsx         # skill tags + tools grid
    └── Footer.jsx
```

Colors, spacing, and type scale all live as CSS variables at the top of
`src/index.css` — tweak those to fine-tune anything site-wide.

## Note on fidelity

This was built from a screenshot of the Figma file rather than the file's
live design data (exact hex values, spacing tokens, and font names weren't
directly readable). It should be very close, but if you reconnect the Figma
MCP connector I can pull exact values and tighten up any spacing/color
differences.
