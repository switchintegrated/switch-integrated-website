import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "iconType",
      title: "Icon Type",
      type: "string",
      options: {
        list: [
          { title: "Messaging", value: "messaging" },
          { title: "USSD / Mobile", value: "ussd" },
          { title: "Infrastructure", value: "infrastructure" },
          { title: "Partnerships", value: "partnerships" },
        ],
        layout: "radio",
      },
      initialValue: "messaging",
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
