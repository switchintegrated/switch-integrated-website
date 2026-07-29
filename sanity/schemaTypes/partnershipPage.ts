import {defineArrayMember, defineField, defineType} from "sanity";

export const partnershipPage = defineType({
  name: "partnershipPage",
  title: "Partnership Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Partnership",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "text",
      initialValue: "Let’s build something that lasts.",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 4,
      initialValue:
        "Africa’s digital future will be built through intentional collaboration between enterprises, fintechs, technology innovators, operators, and service providers who are willing to grow together.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {hotspot: true},
    }),
    defineField({
      name: "heroImageAlt",
      title: "Hero Image Alt Text",
      type: "string",
      initialValue:
        "Abstract partnership bridge connecting business and technology organisations",
    }),

    defineField({
      name: "partnerEyebrow",
      title: "Partner Section Eyebrow",
      type: "string",
      initialValue: "How We Partner",
    }),
    defineField({
      name: "partnerHeadline",
      title: "Partner Section Headline",
      type: "text",
      initialValue: "Relationships before transactions.",
    }),
    defineField({
      name: "partnerBody",
      title: "Partner Section Body",
      type: "text",
      rows: 6,
      initialValue:
        "Switch Integrated is committed to building the kind of partnerships shaped by shared vision, mutual investment, and a genuine belief that what we build together will matter.\n\nWe are not looking for one-off transactions. We work with businesses and partners that want reliable communication systems, practical digital solutions, and long-term growth across African markets.",
    }),

    defineField({
      name: "audienceEyebrow",
      title: "Audience Section Eyebrow",
      type: "string",
      initialValue: "Who We Work With",
    }),
    defineField({
      name: "audienceHeadline",
      title: "Audience Section Headline",
      type: "text",
      initialValue:
        "Built for organisations ready to connect, engage, and grow.",
    }),
    defineField({
      name: "partnerTypes",
      title: "Partner Types",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "ctaHeadline",
      title: "CTA Headline",
      type: "text",
      initialValue: "Ready to start a conversation?",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
      rows: 4,
      initialValue:
        "If you are a business looking for a reliable communication partner, a fintech scaling your digital infrastructure, or a startup ready to build on solid foundations, Switch Integrated would love to start a conversation.",
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Let’s Build Together",
    }),
    defineField({
      name: "ctaButtonUrl",
      title: "CTA Button URL",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "ctaImage",
      title: "CTA Image",
      type: "image",
      options: {hotspot: true},
    }),
    defineField({
      name: "ctaImageAlt",
      title: "CTA Image Alt Text",
      type: "string",
      initialValue: "Partnership bridge visual",
    }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
