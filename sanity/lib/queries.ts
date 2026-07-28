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

export const aboutPageQuery = groq`
  *[_type == "aboutPage" && _id == "aboutPage"][0]{
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    storyTitle,
    storyBody,
    vision,
    mission,
    values,
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


export const whySwitchPageQuery = groq`
  *[_type == "whySwitchPage" && _id == "whySwitchPage"][0]{
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    reasons,
    seo
  }
`;
