import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "Switch Integrated",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Where Businesses Connect, Engage, and Grow.",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "info@switchipl.com",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      initialValue: "+234-913-958-0126",
    }),
    defineField({
      name: "address",
      title: "Office Address",
      type: "text",
      initialValue: "42, Ashiek Jarma Street, Jabi, Abuja.",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
      initialValue: "https://linkedin.com/company/switch-integrated",
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "text",
      initialValue:
        "Helping businesses across Africa communicate better, reach further, and grow with confidence.",
    }),
  ],
});
