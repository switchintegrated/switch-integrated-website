import nextEnv from "@next/env";
import {createClient} from "@sanity/client";

const {loadEnvConfig} = nextEnv;
loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-15";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error("Missing Sanity environment variables.");
  console.error("Required: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const documents = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Switch Integrated",
    tagline: "Connect. Engage. Grow.",
    email: "info@switchipl.com",
    phone: "+234-913-958-0126",
    address: "42, Ashiek Jarma Street, Jabi, Abuja.",
    linkedin: "https://linkedin.com/company/switch-integrated",
    footerText:
      "Switch Integrated helps African businesses connect, engage, and grow through digital communication and customer engagement infrastructure.",
  },
  {
    _id: "homepage",
    _type: "homepage",
    heroEyebrow: "Where Businesses Connect, Engage, and Grow.",
    heroHeadline:
      "We Help African Businesses Communicate Better, Reach Further, and Grow Faster.",
    heroSubheadline:
      "Switch Integrated delivers digital solutions and customer engagement technology, from enterprise messaging to mobile infrastructure, designed specifically for the way Africa does business.",
    primaryCtaText: "Explore Solutions",
    primaryCtaUrl: "/solutions",
    secondaryCtaText: "Start a Conversation",
    secondaryCtaUrl: "/contact",
    audiences: [
      "Enterprises",
      "Fintechs",
      "Financial Institutions",
      "Telecom Operators",
      "Startups & SMEs",
    ],
    seo: {
      title: "Switch Integrated | Digital Communication Solutions for African Businesses",
      description:
        "Switch Integrated helps African businesses communicate better, reach further, and grow through messaging, OTP, USSD, APIs, and customer engagement infrastructure.",
    },
  },
  {
    _id: "aboutPage",
    _type: "aboutPage",
    heroEyebrow: "About Switch Integrated",
    heroHeadline:
      "Africa’s businesses deserve communication infrastructure that actually works for them.",
    heroSubheadline:
      "Switch Integrated is a digital solutions company built to help businesses communicate better, serve customers faster, and grow with confidence.",
    storyTitle: "Who We Are",
    storyBody:
      "Switch Integrated is a digital solutions and customer engagement company helping African businesses connect with customers through reliable messaging, verification, mobile engagement, and communication infrastructure.",
    vision:
      "To become a trusted African technology partner for businesses that want to connect, engage, and grow across the continent.",
    mission:
      "To provide digital communication and engagement solutions that help businesses reach customers more effectively, operate more efficiently, and scale with confidence.",
    values: [
      {
        title: "Partnership First",
        description:
          "We work closely with businesses to understand their goals and build solutions that support real outcomes.",
      },
      {
        title: "Innovation With Purpose",
        description:
          "We use technology to solve practical communication, engagement, and growth challenges.",
      },
      {
        title: "Candour",
        description:
          "We believe in clarity, honesty, and straightforward communication.",
      },
      {
        title: "Growth Together",
        description:
          "Our success is tied to the growth and success of the businesses we serve.",
      },
    ],
    seo: {
      title: "About Switch Integrated | African Digital Solutions Partner",
      description:
        "Learn about Switch Integrated, a digital solutions and customer engagement partner helping African businesses communicate, engage, and grow.",
    },
  },
  {
    _id: "whySwitchPage",
    _type: "whySwitchPage",
    heroEyebrow: "Why Switch Integrated",
    heroHeadline: "What it feels like to work with the right partner.",
    heroSubheadline:
      "Switch Integrated combines practical experience, scalable infrastructure, and a partner-first approach to help businesses communicate better.",
    reasons: [
      {
        title: "We Know This Space Deeply",
        description:
          "We understand the communication, engagement, and infrastructure realities African businesses face.",
      },
      {
        title: "We’re Built for Your Scale",
        description:
          "Our solutions are designed to support growing businesses, established enterprises, and high-volume communication needs.",
      },
      {
        title: "We Think Continentally",
        description:
          "We build with Africa’s wider business and communication landscape in mind.",
      },
      {
        title: "We Make Integration Straightforward",
        description:
          "We focus on practical implementation, clear processes, and solutions that are easy to adopt.",
      },
      {
        title: "We’re Genuinely Invested in Your Outcomes",
        description:
          "We approach every engagement as a long-term partnership, not just a one-time service delivery.",
      },
    ],
    seo: {
      title: "Why Switch Integrated | Reliable Communication Infrastructure",
      description:
        "See why businesses choose Switch Integrated for scalable messaging, verification, USSD, APIs, and customer engagement solutions.",
    },
  },
  {
    _id: "partnershipPage",
    _type: "partnershipPage",
    heroEyebrow: "Partnership",
    heroHeadline: "Let’s build something that lasts.",
    heroSubheadline:
      "Switch Integrated partners with enterprises, fintechs, telecom operators, startups, and SMEs to build communication solutions that support growth.",
    introTitle: "Partnership is how we work.",
    introBody:
      "We believe strong technology outcomes come from clear collaboration. Whether you need customer engagement infrastructure, mobile communication services, or custom digital solutions, we work with you to shape the right path.",
    partnerTypes: [
      {
        title: "Enterprises & Large Brands",
        description:
          "For organisations that need dependable communication infrastructure, reliability, and scale.",
      },
      {
        title: "Fintechs & Financial Institutions",
        description:
          "For businesses that need secure verification, customer messaging, and trusted digital engagement.",
      },
      {
        title: "Telecom & Technology Partners",
        description:
          "For strategic collaborations around infrastructure, integrations, and shared market opportunities.",
      },
      {
        title: "Startups & Growing Businesses",
        description:
          "For ambitious teams that need accessible communication tools and room to grow.",
      },
    ],
    seo: {
      title: "Partner With Switch Integrated | Digital Communication Partnerships",
      description:
        "Partner with Switch Integrated to build messaging, verification, USSD, API, and customer engagement solutions for African businesses.",
    },
  },
  {
    _id: "contactPage",
    _type: "contactPage",
    heroEyebrow: "Contact",
    heroHeadline: "We’re ready when you are.",
    heroSubheadline:
      "Tell us what you’re building, where communication is slowing you down, or what kind of customer engagement support you need.",
    email: "info@switchipl.com",
    phone: "+234-913-958-0126",
    officeAddress: "42, Ashiek Jarma Street, Jabi, Abuja.",
    linkedin: "https://linkedin.com/company/switch-integrated",
    seo: {
      title: "Contact Switch Integrated | Start a Conversation",
      description:
        "Contact Switch Integrated for messaging, OTP, USSD, APIs, customer engagement, and digital communication infrastructure solutions.",
    },
  },
  {
    _id: "service-messaging-verification",
    _type: "service",
    title: "Messaging & Verification",
    slug: {current: "messaging-verification"},
    shortDescription:
      "Reach customers with reliable SMS, transactional alerts, OTP, and verification services.",
    longDescription:
      "Switch Integrated supports businesses with bulk SMS, transactional notifications, marketing campaigns, OTP authentication, and customer verification solutions.",
    order: 1,
    seo: {
      title: "Messaging & Verification | Switch Integrated",
      description:
        "Reliable SMS, transactional notifications, OTP authentication, and customer verification services for African businesses.",
    },
  },
  {
    _id: "service-ussd-mobile-engagement",
    _type: "service",
    title: "USSD & Mobile Engagement",
    slug: {current: "ussd-mobile-engagement"},
    shortDescription:
      "Create mobile-first customer journeys that work across devices and access levels.",
    longDescription:
      "Switch Integrated helps businesses deliver mobile engagement experiences through USSD services, customer service flows, campaigns, information delivery, and financial access journeys.",
    order: 2,
    seo: {
      title: "USSD & Mobile Engagement | Switch Integrated",
      description:
        "Build USSD and mobile engagement services for customer access, support, campaigns, and information delivery.",
    },
  },
  {
    _id: "service-digital-communication-infrastructure",
    _type: "service",
    title: "Digital Communication Infrastructure",
    slug: {current: "digital-communication-infrastructure"},
    shortDescription:
      "Build scalable communication infrastructure for customer engagement and business growth.",
    longDescription:
      "Switch Integrated provides digital communication infrastructure, integrations, and performance-focused systems that support customer engagement at scale.",
    order: 3,
    seo: {
      title: "Digital Communication Infrastructure | Switch Integrated",
      description:
        "Scalable digital communication infrastructure, integrations, and customer engagement systems for growing businesses.",
    },
  },
  {
    _id: "service-strategic-partnerships-custom-solutions",
    _type: "service",
    title: "Strategic Partnerships & Custom Solutions",
    slug: {current: "strategic-partnerships-custom-solutions"},
    shortDescription:
      "Shape custom technology partnerships and digital solutions around your business needs.",
    longDescription:
      "Switch Integrated supports partnership structuring, telecom integrations, bespoke solution development, and custom digital communication projects.",
    order: 4,
    seo: {
      title: "Strategic Partnerships & Custom Solutions | Switch Integrated",
      description:
        "Custom digital solutions, telecom integrations, and strategic partnership support for African businesses.",
    },
  },
];

for (const doc of documents) {
  await client.createOrReplace(doc);
  console.log(`Seeded: ${doc._id}`);
}

console.log("Sanity seed completed.");
