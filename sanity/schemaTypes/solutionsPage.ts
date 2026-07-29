import {defineField, defineType} from "sanity";

export const solutionsPage = defineType({
  name: "solutionsPage",
  title: "Solutions Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Our Solutions",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "text",
      initialValue: "Solutions Built Around How Africa Communicates",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 4,
      initialValue:
        "Whether you’re sending transaction alerts, verifying users, running customer engagement campaigns, or scaling mobile communication infrastructure, Switch Integrated has solutions to support you.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "heroImageAlt",
      title: "Hero Image Alt Text",
      type: "string",
      initialValue:
        "Abstract digital communication interface showing SMS, OTP, USSD and API channels connected through one layer",
    }),
    defineField({
      name: "serviceCardCtaText",
      title: "Service Card CTA Text",
      type: "string",
      initialValue: "Discuss this solution",
    }),
    defineField({
      name: "customEyebrow",
      title: "Custom Section Eyebrow",
      type: "string",
      initialValue: "Custom Requirements",
    }),
    defineField({
      name: "customHeadline",
      title: "Custom Section Headline",
      type: "text",
      initialValue: "Something specific in mind? Let’s build it together.",
    }),
    defineField({
      name: "customDescription",
      title: "Custom Section Description",
      type: "text",
      rows: 4,
      initialValue:
        "For businesses looking to expand through new channels, platforms, or mobile technology integrations, Switch Integrated can explore partnership structuring, telecom integrations, and bespoke solution development.",
    }),
    defineField({
      name: "customImage",
      title: "Custom Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "customImageAlt",
      title: "Custom Section Image Alt Text",
      type: "string",
      initialValue: "Digital communication channels connected through infrastructure",
    }),
    defineField({
      name: "customCtaText",
      title: "Custom CTA Text",
      type: "string",
      initialValue: "Start a Conversation",
    }),
    defineField({
      name: "customCtaUrl",
      title: "Custom CTA URL",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
