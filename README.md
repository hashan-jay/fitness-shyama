# Fitness with Shyama

A modern Zumba fitness website for **Fitness with Shyama** — Nayakakanda, Wattala, Sri Lanka.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Folder Structure (Easy to Edit)

```
src/
├── config/                  ← Site settings & images
│   ├── site.js              ← Name, phone, WhatsApp, nav links, credits
│   └── images.js            ← All image URLs (change here)
│
├── content/                 ← Page text & data
│   ├── packages.js          ← Package names & features
│   ├── amenities.js         ← Amenity list
│   ├── testimonials.js      ← Member quotes
│   ├── stats.js             ← Stats numbers
│   ├── join-info.js         ← Join modal text
│   └── messages.js          ← Reusable notes (WhatsApp message, etc.)
│
├── components/
│   ├── cards/
│   │   └── PackageCard.jsx  ← Package card with image
│   ├── layout/              ← Navbar, Footer, Layout
│   ├── ui/                  ← Button, SectionHeading, PageHero
│   └── JoinNowModal.jsx
│
├── pages/                   ← One file per page (+ its CSS)
│   ├── Home.jsx / Home.css
│   ├── Amenities.jsx
│   ├── Packages.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── styles/
│   ├── global.css           ← Colors, fonts, spacing
│   ├── animations.css       ← Keyframe animations
│   └── responsive.css       ← Mobile, tablet, laptop, TV breakpoints
│
└── utils/
    └── motion.js            ← Reusable Framer Motion presets
```

## What to Edit

| Change | File |
|--------|------|
| WhatsApp number | `src/config/site.js` |
| Packages | `src/content/packages.js` |
| Amenities | `src/content/amenities.js` |
| Images | `src/config/images.js` |
| Colors & spacing | `src/styles/global.css` |
| Footer credit | `src/config/site.js` → `CREDITS` |

## Responsive Breakpoints

- **Mobile**: up to 767px
- **Tablet**: 768px – 1023px
- **Laptop**: 1024px – 1439px
- **Large / TV**: 1440px+

## Build

```bash
npm run build
npm run preview
```
