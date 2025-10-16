# Vitsin — Earthy Organic React + Vite + Tailwind Starter

This project is a ready-to-run React + Vite + Tailwind website for **Vitsin** (Earthy Organic theme).
It includes a Hero carousel, Product catalog, About page, and a Cart (localStorage).

## Quick start (VS Code)
1. Ensure Node.js is installed (v18+ recommended).
2. Open this project folder in VS Code.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```
5. Open the local URL (usually http://localhost:5173).

## Build & Deploy to GitHub Pages
1. Create a GitHub repo (e.g. `vitsin`) and push your code.
2. Ensure `vite.config.js` `base` is set to `'/vitsin/'` (if your repo name is different, change it).
3. Install gh-pages (already in devDependencies) and run:
   ```bash
   npm run build
   npm run deploy
   ```
4. Your site will be available at: `https://<your-github-username>.github.io/vitsin/`

## Notes
- Images are SVG placeholders (earthy theme). Replace files in `public/images/` with real photos if you want.
- To use real photos, put them in `public/images/` and keep filenames used in `src/App.jsx` or update paths accordingly.
