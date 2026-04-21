# Black62 Commodities — Astro Site

Static marketing site for Black62 Commodities (Pty) Ltd, built with Astro and deployed on Cloudflare Pages. The contact form posts to a Cloudflare Pages Function.

## Stack

- **Astro 5** — static site generator (`output: 'static'`)
- **Cloudflare Pages** — hosting
- **Cloudflare Pages Functions** — `functions/api/contact.ts` handles enquiry POSTs
- **Vanilla CSS + JS** — no framework runtime ships to the browser

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/
npm run preview   # serves the built dist/
```

Node 20+ required.

## Project layout

```
astro-new/
├── astro.config.mjs       # static output, site URL
├── functions/
│   └── api/
│       └── contact.ts     # Cloudflare Pages Function (POST /api/contact)
├── public/
│   ├── assets/            # logo + photography (served as-is)
│   └── favicon.{ico,svg}
├── src/
│   ├── components/        # Header, Footer, Hero, TrustBar, About,
│   │                      # Commodities, Logistics, WhyUs, Contact
│   ├── layouts/Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── company-profile.astro
│   │   └── privacy-policy.astro
│   └── styles/global.css
└── package.json
```

## Cloudflare Pages deployment

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo. If this project lives in a subdirectory, set **Root directory** to `astro-new`.
4. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version** (env var `NODE_VERSION`): `20`
5. Save & deploy. Cloudflare Pages auto-discovers `functions/` and deploys `POST /api/contact` as an edge function.

No `wrangler.toml` is required for Pages-from-Git deploys.

### Custom domain

Under **Pages → your project → Custom domains**, add `www.black62.co.za` (and `black62.co.za` if desired). Cloudflare provisions certs automatically.

## Contact form delivery

`functions/api/contact.ts` currently validates the payload and returns `200`. To actually deliver enquiries to `info@black62.co.za`, uncomment the MailChannels block inside the function — it's free for Workers/Pages and requires no external account. Alternative integrations (Resend, SendGrid, webhook to Slack/Teams, Cloudflare KV storage) are all one fetch call away.

If you need secrets (API keys), add them under **Pages → Settings → Environment variables → Production/Preview**, then read them from the `env` parameter in the function.

## Parity with the old site

- Design, copy and SVGs are preserved 1:1 from the original `styles.css` / `index.html` / `company-profile.html` / `privacy-policy.html`.
- The enquiry form posts to `/api/contact`; the old static `main.js` fell through to a success message regardless — this version actually reaches the edge function but still shows success on fetch failure so the UX never looks broken.
- Subpages (`/company-profile/`, `/privacy-policy/`) render as native Astro pages instead of standalone HTML files.
