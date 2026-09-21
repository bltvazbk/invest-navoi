# Invest Navoi — One Gateway Investment Portal

A modern, trilingual (EN / RU / UZ) investment-promotion portal for the **Navoi
region of Uzbekistan**, built on the *One Gateway* principle: everything an
investor needs — sectors, flagship projects, the Free Economic Zone, incentives,
the step-by-step process and a contact channel — on a single page.

Design inspiration: [invest.gov.uz](https://invest.gov.uz/en).

---

## 🇺🇿 Qisqacha (Uzbek)

- Sayt **React + Vite + TypeScript + Tailwind CSS** da yozilgan.
- Barcha matnlar 3 tilda: **Inglizcha, Ruscha, O‘zbekcha** (yuqori o‘ngdagi til
  almashtirgichi).
- Butun **kontent** (raqamlar, tarmoqlar, loyihalar, imtiyozlar) bitta faylda:
  [`src/data/content.ts`](src/data/content.ts). O‘zgartirish uchun shu faylni
  tahrirlang — dizaynga tegmasdan.
- **⚠️ Ishga tushirishdan oldin** raqamlarni (statistika, investitsiya
  summalari) va telefon raqamini rasmiy ma’lumotlar bilan yangilang.

---

## Tech stack

| Layer      | Choice                          |
| ---------- | ------------------------------- |
| Framework  | React 18 + TypeScript           |
| Build tool | Vite 6                          |
| Styling    | Tailwind CSS 3                  |
| Forms      | Netlify Forms (no backend)      |
| Hosting    | Netlify (static `dist/` output) |

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
npm run typecheck# TypeScript check (no emit)
```

## Editing content

All substantive content lives in **[`src/data/content.ts`](src/data/content.ts)**
— stats, advantages, sectors, projects, open opportunities, FEZ benefits,
incentives and the process steps. Every text field is localised:

```ts
title: { en: 'Mining & Metallurgy', ru: 'Горное дело', uz: 'Kon-metallurgiya' }
```

UI labels (navigation, headings, buttons) live in
[`src/i18n/translations.ts`](src/i18n/translations.ts). Any missing `ru`/`uz`
string automatically falls back to English.

## Before you go live — update these

- [ ] **Statistics** in `content.ts` (`stats`) — verify against official data.
- [ ] **Investment estimates** (`opportunities[].capex`) — replace placeholders.
- [ ] **Phone number** in [`src/components/Contact.tsx`](src/components/Contact.tsx)
      (`CONTACTS`) — currently a placeholder `+998 79 000 00 00`.
- [ ] **Address / working hours** in `translations.ts` (`contact.address`,
      `contact.hours`).
- [ ] Optional: add a real **Investment Guide PDF** and link the hero's
      "Download Investment Guide" button to it.

## Deployment (Netlify)

This repo is Netlify-ready via [`netlify.toml`](netlify.toml):

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- SPA redirect + Node 20 are preconfigured.

Two ways to deploy:

1. **Git-based (recommended):** push this repo to GitHub, then in Netlify choose
   *Add new site → Import an existing project* and pick the repo. Netlify reads
   `netlify.toml` automatically. Every push to the main branch redeploys.
2. **Manual:** run `npm run build` and drag the `dist/` folder into the Netlify
   dashboard.

### Contact form

The enquiry form uses **Netlify Forms**. Submissions appear under
*Site → Forms* in the Netlify dashboard once deployed. A hidden detection form
lives in [`index.html`](index.html); the live form is rendered by React in
`Contact.tsx`. (Forms only work on Netlify, not in local `npm run dev`.)

---

*This is an informational portal. All figures are indicative and must be
verified with official sources before publication.*
