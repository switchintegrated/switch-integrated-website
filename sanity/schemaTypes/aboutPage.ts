import {defineField, defineType} from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "About Switch Integrated",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      initialValue: "Africa’s businesses deserve communication infrastructure that actually works for them.",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "storyTitle",
      title: "Story Section Title",
      type: "string",
      initialValue: "Who We Are",
    }),
    defineField({
      name: "storyBody",
      title: "Story Body",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "values",
      title: "Core Values",
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
