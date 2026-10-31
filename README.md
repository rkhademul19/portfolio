# Md Khademul Islam — Portfolio

A simple one-page developer portfolio built with Next.js, TypeScript, Tailwind CSS, Lucide React and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Deploy

The easiest option is [Vercel](https://vercel.com): push this folder to a GitHub repository, import it in Vercel, and click Deploy. No configuration is needed.

## Editing content

All text (profile, about, skills, experience, projects, education) lives in one file:

```
data/portfolio.ts
```

Update it there and every section updates automatically.

## Structure

```
app/
  layout.tsx       Fonts, metadata, theme provider
  page.tsx         Assembles the sections
  globals.css      Tailwind + dark mode variant
components/
  Navbar.tsx       Sticky nav with mobile menu
  ThemeToggle.tsx  Dark / light switch
  Hero.tsx  About.tsx  Skills.tsx  Experience.tsx
  Projects.tsx  Education.tsx  Contact.tsx  Footer.tsx
  Section.tsx      Shared section wrapper + heading
  Reveal.tsx       Small fade-in animation
  Providers.tsx    next-themes + reduced-motion support
data/
  portfolio.ts     All your content
```
