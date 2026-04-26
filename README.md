# 30-Day GenAI Builder Plan

A production-style roadmap page for completing a 15-sprint Generative AI builder plan from **27 April 2026** to **26 May 2026**.

## What It Includes

- Merged dashboard and calendar view
- 30-day timeline from Apr 27 to May 26
- Auto-highlighted current sprint based on date
- Sprint details for all 15 projects
- Detailed tools and technologies for each sprint
- AI concepts to learn for each sprint
- Source links and documentation references
- Build plan, quality bar, and portfolio proof for each project
- Responsive premium SaaS-style UI
- Manual light/dark theme switch
- Ready for Vercel deployment

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- lucide-react icons
- Static content-first architecture

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  builder-dashboard.tsx
lib/
  plan.ts
```

## Editing the Roadmap

All sprint content lives in:

```text
lib/plan.ts
```

Update that file to change project outcomes, source links, tools, build steps, or portfolio expectations.
