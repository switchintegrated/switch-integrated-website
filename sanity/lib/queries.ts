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
