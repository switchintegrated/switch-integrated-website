import { defineField, defineType } from "sanity";

export const contactLead = defineType({
  name: "contactLead",
  title: "Contact Lead",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
    }),
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
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
      name: "serviceInterest",
      title: "Service Interest",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["New", "Contacted", "Qualified", "Closed", "Spam"],
      },
      initialValue: "New",
    }),
  ],
});
