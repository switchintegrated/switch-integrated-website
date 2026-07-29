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
    ecosystemEyebrow,
    ecosystemTitle,
    ecosystemDescription,
    ecosystemItems,
    audienceEyebrow,
    audienceTitle,
    audienceDescription,
    audienceCards,
    howWeWorkEyebrow,
    howWeWorkTitle,
    howWeWorkDescription,
    howWeWorkSteps,
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
    iconType,
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
    scaleCardTitle,
    scaleCardDescription,
    outcomeCardTitle,
    outcomeCardDescription,
    seo
  }
`;


export const solutionsPageQuery = groq`
  *[_type == "solutionsPage" && _id == "solutionsPage"][0]{
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    heroImage,
    heroImageAlt,
    serviceCardCtaText,
    customEyebrow,
    customHeadline,
    customDescription,
    customImage,
    customImageAlt,
    customCtaText,
    customCtaUrl,
    seo
  }
`;

export const partnershipPageQuery = groq`
  *[_type == "partnershipPage" && _id == "partnershipPage"][0]{
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    heroImage,
    heroImageAlt,
    partnerEyebrow,
    partnerHeadline,
    partnerBody,
    audienceEyebrow,
    audienceHeadline,
    partnerTypes,
    ctaHeadline,
    ctaDescription,
    ctaButtonText,
    ctaButtonUrl,
    ctaImage,
    ctaImageAlt,
    seo
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage" && _id == "contactPage"][0]{
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    heroImage,
    heroImageAlt,
    reachEyebrow,
    reachHeadline,
    reachDescription,
    serviceOptions,
    formButtonText,
    successMessage,
    seo
  }
`;
