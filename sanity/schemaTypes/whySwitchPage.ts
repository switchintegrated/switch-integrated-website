import {defineField, defineType} from "sanity";

export const whySwitchPage = defineType({
  name: "whySwitchPage",
  title: "Why Switch Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Why Switch Integrated",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      initialValue: "What it feels like to work with the right partner.",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "reasons",
      title: "Reasons",
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
