import {
  BarChart3,
  Building2,
  CheckCircle2,
  Handshake,
  Layers3,
  MessageSquareText,
  Network,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const audiences = [
  "Enterprises",
  "Fintechs",
  "Financial Institutions",
  "Telecom Operators",
  "Startups & SMEs",
];

export const solutions = [
  {
    title: "Messaging & Verification",
    description:
      "Bulk SMS, OTP authentication, transactional notifications, marketing campaigns, and customer verification built for reliability.",
    icon: MessageSquareText,
  },
  {
    title: "USSD & Mobile Engagement",
    description:
      "Custom USSD services and mobile engagement tools that help businesses reach customers across every type of device.",
    icon: Smartphone,
  },
  {
    title: "Digital Communication Infrastructure",
    description:
      "Scalable communication infrastructure that keeps customer-facing operations running smoothly from integration to performance.",
    icon: Network,
  },
  {
    title: "Strategic Partnerships & Custom Solutions",
    description:
      "Telecom integrations, partnership structuring, and bespoke solution development for businesses with specific goals.",
    icon: Handshake,
  },
];

export const heroMetrics = [
  {
    label: "Enterprise Messaging",
    value: "SMS",
    icon: MessageSquareText,
  },
  {
    label: "Secure Verification",
    value: "OTP",
    icon: ShieldCheck,
  },
  {
    label: "Mobile Engagement",
    value: "USSD",
    icon: Smartphone,
  },
  {
    label: "Scalable Infrastructure",
    value: "API",
    icon: BarChart3,
  },
];

export const flowCards = [
  {
    title: "Your Business",
    icon: Building2,
  },
  {
    title: "Switch Integrated",
    icon: Layers3,
    active: true,
  },
  {
    title: "Your Customers",
    icon: CheckCircle2,
  },
];

export const ecosystemNodes = [
  "SMS",
  "OTP",
  "USSD",
  "APIs",
  "Verification",
  "Engagement",
  "Scale",
  "Growth",
];

export const reasons = [
  {
    title: "We Know This Space Deeply",
    description:
      "We understand the rhythms, realities, and demands of digital communication across African markets.",
  },
  {
    title: "We’re Built for Your Scale",
    description:
      "Whether you are reaching thousands or millions, our approach is built to support where your business is going.",
  },
  {
    title: "We Make Integration Straightforward",
    description:
      "New technology should solve problems, not create new ones. We keep onboarding clear and practical.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Tell Us Your Challenge",
    description:
      "Every engagement starts with a conversation so we understand your context, audience, and goals.",
  },
  {
    number: "02",
    title: "We Scope the Right Solution",
    description:
      "We map a practical solution that fits your infrastructure, scale, and timeline.",
  },
  {
    number: "03",
    title: "You’re Live in Weeks",
    description:
      "We execute with clarity and speed so your business can start seeing value quickly.",
  },
  {
    number: "04",
    title: "We Stay With You",
    description:
      "Our partnership continues after launch through support, monitoring, and optimisation.",
  },
];
