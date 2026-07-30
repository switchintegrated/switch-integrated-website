import {defineArrayMember, defineField, defineType} from "sanity";

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
      type: "text",
      initialValue: "What it feels like to work with the right partner.",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 4,
      initialValue:
        "Choosing a digital solutions partner is about more than capability. It’s about who shows up, how they work, and whether they’re genuinely invested in your success.",
    }),
    defineField({
      name: "reasons",
      title: "Reasons",
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
      name: "scaleCardTitle",
      title: "Scale Card Title",
      type: "string",
      initialValue: "We’re Built for Your Scale",
    }),
    defineField({
      name: "scaleCardDescription",
      title: "Scale Card Description",
      type: "text",
      rows: 4,
      initialValue:
        "Whether you are running thousands of messages a day or millions, Switch Integrated is positioned as a partner that can grow with you.",
    }),
    defineField({
      name: "outcomeCardTitle",
      title: "Outcome Card Title",
      type: "string",
      initialValue: "We’re Genuinely Invested in Your Outcomes",
    }),
    defineField({
      name: "outcomeCardDescription",
      title: "Outcome Card Description",
      type: "text",
      rows: 4,
      initialValue:
        "Switch Integrated is positioned as a long-term partner, not just a vendor. That means every engagement should reinforce trust, clarity, responsiveness, and business growth.",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
