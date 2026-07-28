import {defineField, defineType} from "sanity";

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
      type: "string",
      initialValue: "Let’s build something that lasts.",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "introTitle",
      title: "Intro Title",
      type: "string",
    }),
    defineField({
      name: "introBody",
      title: "Intro Body",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "partnerTypes",
      title: "Partner Types",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {name: "title", title: "Title", type: "string"},
            {name: "description", title: "Description", type: "text", rows: 3},
          ],
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
