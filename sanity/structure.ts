import type {StructureResolver} from "sanity/structure";

const singleton = (
  S: Parameters<StructureResolver>[0],
  title: string,
  schemaType: string,
  documentId: string
) =>
  S.listItem()
    .title(title)
    .schemaType(schemaType)
    .child(
      S.document()
        .schemaType(schemaType)
        .documentId(documentId)
        .title(title)
    );

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Content")
    .items([
      singleton(S, "Website Settings", "siteSettings", "siteSettings"),
      singleton(S, "Homepage", "homepage", "homepage"),
      singleton(S, "About Page", "aboutPage", "aboutPage"),
      singleton(S, "Solutions Page", "solutionsPage", "solutionsPage"),
      S.divider(),
      S.documentTypeListItem("service").title("Solutions / Services"),
      singleton(S, "Why Switch Page", "whySwitchPage", "whySwitchPage"),
      singleton(S, "Partnership Page", "partnershipPage", "partnershipPage"),
      singleton(S, "Contact Page", "contactPage", "contactPage"),
      S.divider(),
      S.documentTypeListItem("contactLead").title("Contact Leads"),
    ]);
