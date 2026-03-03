# shadcn/ui · Radix Nova · Next.js Template

A minimal Next.js starter pre-loaded with the full **shadcn/ui** component library using the **Radix Nova** style.

Initialized from [ui.shadcn.com/create](https://ui.shadcn.com/create).

---

## Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| UI components | [shadcn/ui](https://ui.shadcn.com) — Radix Nova style |
| Primitives | [Radix UI](https://www.radix-ui.com) |
| Styling | [Tailwind CSS](https://tailwindcss.com) with CSS variables |
| Icons | [Lucide](https://lucide.dev) |
| Package manager | [pnpm](https://pnpm.io) |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Edit `app/page.tsx` — the page hot-reloads as you save.

## Project Structure

```
app/
  layout.tsx      # Root layout & font setup
  page.tsx        # Entry point — edit this first
  globals.css     # Tailwind base + CSS design tokens

components/
  ui/             # shadcn/ui components (do not edit directly)

lib/
  utils.ts        # cn() helper and shared utilities

hooks/
  use-mobile.ts   # Responsive hook
```

## Adding Components

All shadcn/ui components are already installed under `components/ui/`. To add more:

```bash
pnpm dlx shadcn@latest add <component-name>
```

## Learn More

- [shadcn/ui docs](https://ui.shadcn.com/docs)
- [Next.js docs](https://nextjs.org/docs)
- [Radix UI docs](https://www.radix-ui.com/docs/primitives)
- [Tailwind CSS docs](https://tailwindcss.com/docs)
