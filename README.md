# Anthem

A modern, animated single-page marketing site built with Next.js, React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **[Next.js 16](https://nextjs.org)** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **[Framer Motion](https://www.framer.com/motion/)** for scroll and reveal animations
- **TypeScript**

## Sections

The landing page (`src/app/page.tsx`) is composed of modular components in `src/components/`:

- `Navbar` — top navigation
- `ScrollProgress` — reading progress indicator
- `Hero` — hero / intro section
- `RibbonFlight` — animated ribbon wrapping the About, Services, and Work sections
- `About` · `Services` · `Work` — content sections
- `Founders` — team / founders section
- `Contact` — contact section
- `Footer` — site footer
- `Reveal` — reusable scroll-reveal wrapper

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-updates as you edit files.

## Scripts

| Command         | Description                  |
| --------------- | --------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Run the production server    |
| `npm run lint`  | Lint the project with ESLint |

## Deployment

Deploy easily on [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

