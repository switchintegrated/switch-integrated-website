<<<<<<< HEAD
# switch-integrated-website

# Switch Integrated Website

Corporate website and CMS foundation for **Switch Integrated**.

Switch Integrated is positioned as a digital solutions and customer engagement company helping businesses across Africa communicate better, reach further, and grow with confidence.

The website is built with a clean, modern, Intuit-inspired structure while leaving room for final brand assets such as logo, colour palette, typography, graphics, and real company imagery.

---

## Project Status

Current status: **Frontend foundation + CMS setup in progress**

Completed:

- Next.js project setup
- Homepage structure
- About page
- Solutions page
- Why Switch page
- Partnership page
- Contact page
- Mobile navigation
- Sanity Studio embedded at `/studio`
- Initial CMS schemas created
- Lint passing
- Production build passing

Pending:

- Final logo
- Final brand colour palette
- Final typography/fonts
- Brand graphics and custom icons
- Real company/team/office images, if provided
- Full CMS content connection to frontend
- Contact form submission handling
- Temporary preview deployment
- Final production deployment

---

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Sanity
- **Icons:** Lucide React
- **Package Manager:** npm

---

## Project Structure

```txt
app/
  page.tsx
  about/
    page.tsx
  solutions/
    page.tsx
  why-switch/
    page.tsx
  partnership/
    page.tsx
  contact/
    page.tsx
  studio/
    [[...tool]]/
      page.tsx

src/
  components/
    home/
    layout/
    shared/
  data/
    site.ts

sanity/
  env.ts
  lib/
  schemaTypes/
  structure.ts
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> b3ccc03 (Initial commit from Create Next App)
