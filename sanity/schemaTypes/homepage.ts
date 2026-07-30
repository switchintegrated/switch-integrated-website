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
      title: "Hero Audience Labels",
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

    defineField({
      name: "ecosystemEyebrow",
      title: "Ecosystem Eyebrow",
      type: "string",
      initialValue: "Built for Africa",
    }),
    defineField({
      name: "ecosystemTitle",
      title: "Ecosystem Title",
      type: "text",
      initialValue:
        "One communication layer connecting businesses to customers.",
    }),
    defineField({
      name: "ecosystemDescription",
      title: "Ecosystem Description",
      type: "text",
      rows: 4,
      initialValue:
        "Africa’s digital economy is mobile-first, fast-moving, and deeply relationship-driven. Switch Integrated sits between businesses and their customers, helping teams connect, verify, engage, and scale through the channels people already use.",
    }),
    defineField({
      name: "ecosystemItems",
      title: "Ecosystem Items",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      initialValue: [
        "Business messaging",
        "Customer verification",
        "Mobile engagement",
        "Infrastructure support",
      ],
    }),

    defineField({
      name: "audienceEyebrow",
      title: "Audience Section Eyebrow",
      type: "string",
      initialValue: "Who We Serve",
    }),
    defineField({
      name: "audienceTitle",
      title: "Audience Section Title",
      type: "text",
      initialValue:
        "Built for teams that need communication to work at scale.",
    }),
    defineField({
      name: "audienceDescription",
      title: "Audience Section Description",
      type: "text",
      rows: 4,
      initialValue:
        "Switch Integrated supports organisations that depend on reliable customer reach, verification, and mobile-first engagement.",
    }),
    defineField({
      name: "audienceCards",
      title: "Audience Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        }),
      ],
      initialValue: [
        {
          title: "Enterprises & Large Brands",
          description: "Reliable, high-volume communication at scale",
        },
        {
          title: "Fintechs",
          description: "Security, OTP verification, and a trusted delivery partner",
        },
        {
          title: "Financial Institutions",
          description:
            "Dependable messaging infrastructure for customer-critical operations",
        },
        {
          title: "Telecom Operators",
          description:
            "Integration capability and a shared vision for Africa’s digital future",
        },
        {
          title: "Startups & SMEs",
          description: "Flexible solutions that grow with your business",
        },
      ],
    }),

    defineField({
      name: "howWeWorkEyebrow",
      title: "How We Work Eyebrow",
      type: "string",
      initialValue: "How We Work",
    }),
    defineField({
      name: "howWeWorkTitle",
      title: "How We Work Title",
      type: "text",
      initialValue: "Getting started is simpler than you think.",
    }),
    defineField({
      name: "howWeWorkDescription",
      title: "How We Work Description",
      type: "text",
      rows: 4,
      initialValue:
        "From first conversation to going live, the process is designed to be clear, collaborative, and practical.",
    }),
    defineField({
      name: "howWeWorkSteps",
      title: "How We Work Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Step Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Step Description",
              type: "text",
              rows: 3,
            }),
          ],
        }),
      ],
      initialValue: [
        {
          title: "Tell Us Your Challenge",
          description:
            "We start by understanding your business, your customers, and where communication needs to improve.",
        },
        {
          title: "We Scope the Right Solution",
          description:
            "We shape the right mix of messaging, verification, mobile engagement, infrastructure, or custom support.",
        },
        {
          title: "You’re Live in Weeks",
          description:
            "We keep implementation practical, focused, and structured so you can move quickly.",
        },
        {
          title: "We Stay With You",
          description:
            "After go-live, we continue supporting performance, reliability, and improvement.",
        },
      ],
    }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
