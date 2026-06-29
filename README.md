# Map Fun

Historical and data maps, split out of [upstream.land](https://github.com/YunjieLi/yunjieli.github.io) into their own repo. Uses the same React + Vite + Tailwind + shadcn scaffold as the parent site; the individual maps under `src/maps/*` remain standalone vanilla HTML/JS pages (mapbox-gl, d3, deck.gl) loaded via an iframe (`src/pages/LegacyPage.tsx`).

## Setup

```
npm install
cp .env.example .env   # add your Mapbox public token (pk.*)
npm run dev
```

## Maps

- `kings` — 王者荣耀 hero map
- `swordsmen` — 笑傲江湖 locations, built on Mapbox GL
- `spanish-missions` — California mission chain on Mapbox Outdoors
- `deck-tests` / `liancheng` — deck.gl arc maps

## Scripts

- `npm run swordsmen:sync-geojson` — sync swordsmen events/locations geojson
- `npm run spanish-missions:regions` / `:presidios` / `:mexico` — rebuild Spanish Missions geojson layers (Python, see `scripts/newspain/`)
