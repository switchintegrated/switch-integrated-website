import {defineField, defineType} from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Contact",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      initialValue: "We’re ready when you are.",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "officeAddress",
      title: "Office Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
