# switch-integrated-website

# Switch Integrated Website

Corporate website and CMS foundation for **Switch Integrated Partners Limited**.

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
