import {defineArrayMember, defineField, defineType} from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Contact Us",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "text",
      initialValue: "We’re ready when you are.",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 4,
      initialValue:
        "Every great partnership starts with a conversation. Whether you have a specific brief in mind or you’re still exploring what’s possible, our team is ready to listen, advise, and help you find the right path forward.",
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
        "Abstract customer communication and support signal interface",
    }),

    defineField({
      name: "reachEyebrow",
      title: "Reach Out Eyebrow",
      type: "string",
      initialValue: "Reach Out",
    }),
    defineField({
      name: "reachHeadline",
      title: "Reach Out Headline",
      type: "text",
      initialValue: "Let’s see what we can build together.",
    }),
    defineField({
      name: "reachDescription",
      title: "Reach Out Description",
      type: "text",
      rows: 4,
      initialValue:
        "Use the form or contact Switch Integrated directly through any of the details below.",
    }),

    defineField({
      name: "serviceOptions",
      title: "Service Options",
      type: "array",
      of: [defineArrayMember({type: "string"})],
      initialValue: [
        "Messaging & Verification",
        "USSD & Mobile Engagement",
        "Digital Communication Infrastructure",
        "Strategic Partnerships & Custom Solutions",
      ],
    }),

    defineField({
      name: "formButtonText",
      title: "Form Button Text",
      type: "string",
      initialValue: "Start the Conversation",
    }),

    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "text",
      rows: 3,
      initialValue:
        "Thank you. Your message has been received and our team will get back to you shortly.",
    }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
