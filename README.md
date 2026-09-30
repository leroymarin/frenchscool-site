# French's Cool — learnfrench.co

A fast, content-led website for **French's Cool**: learn French free, then speak it
1-to-1 with Xavier.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** with light/dark mode

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/learn` | Learning hub (games, videos, articles, resources) |
| `/lessons` | Method + pricing + book |
| `/about` | About Xavier |
| `/reviews` | Testimonials |
| `/faq` | Frequently asked questions |
| `/contact` | Book a trial / get in touch |
| `/privacy`, `/terms` | Legal (placeholders — fill in before launch) |

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

The site is fully static — all routes prerender at build time.

```bash
npm run build
npm run start      # serve the production build
```

## Deploy

Deploy anywhere Next.js runs (Vercel, Netlify, etc.). No environment variables
or database are required.
