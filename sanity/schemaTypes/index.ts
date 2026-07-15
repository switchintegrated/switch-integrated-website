import { contactLead } from "./contactLead";
import { homepage } from "./homepage";
import { service } from "./service";
import { siteSettings } from "./siteSettings";

export const schema = {
  types: [siteSettings, homepage, service, contactLead],
};
