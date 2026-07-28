import { groq } from "next-sanity";

export const homepageQuery = groq`
  *[_type == "homepage" && _id == "homepage"][0]{
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    primaryCtaText,
    primaryCtaUrl,
    secondaryCtaText,
    secondaryCtaUrl,
    audiences,
    seo
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    title,
    shortDescription,
    longDescription,
    order,
    "slug": slug.current,
    seo
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    siteName,
    tagline,
    email,
    phone,
    address,
    linkedin,
    footerText
  }
`;
