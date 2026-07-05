# Merit Ventures — Landing Page

Marketing site for Merit Ventures ("We invest in execution, not pedigree").
Rebuilt from the original Lovable project as a clean, dependency-light stack.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`, no config file needed)
- lucide-react for icons
- Fonts: Space Grotesk (headings), Inter (body), Instrument Serif (italic quotes) via Google Fonts

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Deploy (GitHub + Vercel)

1. Create an empty repo on GitHub, then from this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/merit-ventures.git
   git push -u origin main
   ```
2. On vercel.com → Add New Project → import the repo.
   Vercel auto-detects Vite (build: `npm run build`, output: `dist`). No config needed.

## Assets to add

- `public/orb.png` — the glowing orb PNG exported from Lovable.
  Until it's added, a CSS-generated orb renders as a fallback automatically.
- If the site used a second image anywhere else, drop it in `public/` and reference it.

## TODO / placeholders to review

- **FAQ answers** (`src/components/Faq.tsx`): written in the site's voice as placeholders,
  since the accordions were closed in the reference screenshots. Replace with original copy if needed.
- **Apply for Funding**: navbar + hero buttons scroll to the final CTA (`#apply`);
  the final CTA button points to `mailto:apply@meritventures.com`. Swap in the real
  destination (form page, Typeform, etc.).
- **Newsletter form** (`src/components/FinalCta.tsx`): currently shows a local success state.
  Wire it to Formspree or another backend (TODO comment marks the spot).
- **Social links** (footer): `href="#"` placeholders.

## Structure

```
src/
  App.tsx                    # assembles all sections
  index.css                  # design tokens (@theme) + custom animations
  components/
    Navbar.tsx               # fixed header, mobile menu
    Hero.tsx                 # particles, gradient headline, orb
    WhyWeExist.tsx           # strikethrough proxy pills
    Principles.tsx           # 6 conviction cards
    WhatWeLookFor.tsx        # requirements vs not-required + rotating validation pills
    HowWeEvaluate.tsx        # 5-step vertical timeline
    ExecutionScore.tsx       # animated score ring + 7 progress bars
    FounderStories.tsx       # 3 testimonial cards
    Faq.tsx                  # accordion
    FinalCta.tsx             # closing CTA + footer + newsletter
    Reveal.tsx               # scroll-reveal wrapper
```
