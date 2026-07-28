import {aboutPage} from "./aboutPage";
import {contactLead} from "./contactLead";
import {contactPage} from "./contactPage";
import {homepage} from "./homepage";
import {partnershipPage} from "./partnershipPage";
import {seo} from "./seo";
import {service} from "./service";
import {siteSettings} from "./siteSettings";
import {whySwitchPage} from "./whySwitchPage";

export const schema = {
  types: [
    seo,
    siteSettings,
    homepage,
    aboutPage,
    service,
    whySwitchPage,
    partnershipPage,
    contactPage,
    contactLead,
  ],
};
