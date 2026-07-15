import { defineArrayMember, defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Where Businesses Connect, Engage, and Grow.",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "text",
      initialValue:
        "We Help African Businesses Communicate Better, Reach Further, and Grow Faster.",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      initialValue:
        "Switch Integrated delivers digital solutions and customer engagement technology, from enterprise messaging to mobile infrastructure, designed specifically for the way Africa does business.",
    }),
    defineField({
      name: "primaryCtaText",
      title: "Primary CTA Text",
      type: "string",
      initialValue: "Explore Solutions",
    }),
    defineField({
      name: "primaryCtaUrl",
      title: "Primary CTA URL",
      type: "string",
      initialValue: "/solutions",
    }),
    defineField({
      name: "secondaryCtaText",
      title: "Secondary CTA Text",
      type: "string",
      initialValue: "Start a Conversation",
    }),
    defineField({
      name: "secondaryCtaUrl",
      title: "Secondary CTA URL",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "audiences",
      title: "Audience Labels",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      initialValue: [
        "Enterprises",
        "Fintechs",
        "Financial Institutions",
        "Telecom Operators",
        "Startups & SMEs",
      ],
    }),
  ],
});
