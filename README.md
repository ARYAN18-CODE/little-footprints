# Little Footprints 🌱

A concept landing site for **Little Footprints** — a product that shows everyday
shoppers the **carbon footprint of the things they buy**, aimed at the people who
care most: new parents, pet parents, and conscious shoppers.

## What's here

A fully static website (no build step, no dependencies to install):

| File | Purpose |
|------|---------|
| `index.html` | The page markup and content |
| `styles.css` | All styling (responsive, mobile-first) |
| `app.js` | Interactive footprint demo, mobile menu, waitlist form |

### Highlights
- **Live demo** — pick a product (onesie, baby wipes, dog food, bottle) and see a
  footprint grade, kg CO₂e, a breakdown, and a lower-impact swap.
- **"Our method"** section explaining how a footprint is estimated
  (materials → manufacturing → transport → packaging → end of life) and how we
  stay honest about uncertainty.

> ⚠️ All footprint figures in the demo are **illustrative sample data**, not real
> life-cycle assessments.

## Run it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Hosting

This site is designed to be hosted on **GitHub Pages** straight from the repo root.

## Next steps
- Connect the waitlist form to a real service (Formspree, Buttondown, etc.) — it's
  currently front-end only.
- Replace the sample product data in `app.js` with sourced estimates.
