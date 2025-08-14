# Next + Tailwind Styled Starter

Drop this into a new GitHub repo and connect to Vercel. It will deploy with styles enabled.

## Why this fixes "everything turned white"
- `app/layout.jsx` imports `./globals.css`, ensuring Tailwind CSS is included at the root.
- `tailwind.config.js` covers all common folders so classes are not purged.
- `postcss.config.js` includes `tailwindcss` + `autoprefixer` so Tailwind is built in production.

## How to use
1. Push this folder as your repo root (or upload the zip to GitHub as-is).
2. On Vercel, set **Build Command**: `next build` and **Output**: `.next` (defaults are fine).
3. Redeploy. You should see the styled blue UI. Then copy your pages/components into `app/` and keep the `globals.css` import in `app/layout.jsx`.

