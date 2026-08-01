import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

type AboutPreviewContent = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  storyTitle?: string;
  storyBody?: string;
  vision?: string;
  mission?: string;
  values?: {
    title?: string;
    description?: string;
  }[];
};

const fallbackContent: Required<Omit<AboutPreviewContent, "values">> & {
  values: {
    title: string;
    description: string;
  }[];
} = {
  heroEyebrow: "About Switch Integrated",
  heroHeadline: "Built to help businesses communicate better and grow faster.",
  heroSubheadline:
    "Switch Integrated delivers digital solutions and customer engagement technology for businesses that need reliable communication infrastructure, mobile engagement, verification, and strategic digital support.",
  storyTitle: "Our Story",
  storyBody:
    "That’s the belief Switch Integrated was built on. We are a Nigerian-based digital solutions and customer engagement company, working at the crossroads of mobile technology, digital infrastructure, and customer experience. Our focus is simple: helping organisations across Africa reach their customers reliably, communicate at scale, and build the kind of digital engagement that drives real growth. Our roots are deep in the digital communication and value-added services industry, a space we know intimately. But we have always believed that the opportunity is bigger than any single category. Today, Switch Integrated is building toward a broader vision: a full-service digital solutions company with the capacity to support businesses across communication, infrastructure, engagement, and growth. With almost a decade of experience, we understand what it takes to make communication work in the real conditions of this market. We work closely with our clients, not just as vendors, but as partners invested in their outcomes. We take the time to understand what businesses need, bring solutions that are practical and scalable, and stay committed for the long term. This is a continent of extraordinary possibility. We’re here to help you access it.",
  vision:
    "To become a trusted African technology partner for businesses that want to connect, engage, and grow across the continent.",
  mission:
    "To provide digital communication and engagement solutions that help businesses reach customers more effectively, operate more efficiently, and scale with confidence.",
  values: [
    {
      title: "Partnership First",
      description: "We work closely with clients as long-term partners.",
    },
    {
      title: "Innovation With Purpose",
      description: "We build practical solutions around real business needs.",
    },
    {
      title: "Candour",
      description: "We communicate clearly and work with openness.",
    },
    {
      title: "Growth Together",
      description: "We stay invested in outcomes that help businesses scale.",
    },
  ],
};

const blockMeta = [
  {
    number: "01",
    title: "The belief",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Customer reach",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Market roots",
    icon: Network,
  },
  {
    number: "04",
    title: "Partnership in practice",
    icon: UsersRound,
  },
  {
    number: "05",
    title: "Africa’s possibility",
    icon: Globe2,
  },
];

function splitStory(body: string) {
  const sentences = body
    .split(/(?<=\.)\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentences.length < 6) {
    return [
      {
        ...blockMeta[0],
        body,
      },
    ];
  }

  const blocks = [
    sentences.slice(0, 2).join(" "),
    sentences.slice(2, 3).join(" "),
    sentences.slice(3, 6).join(" "),
    sentences.slice(6, 9).join(" "),
    sentences.slice(9).join(" "),
  ].filter(Boolean);

  return blocks.map((body, index) => ({
    ...blockMeta[Math.min(index, blockMeta.length - 1)],
    body,
  }));
}

export function AboutPreview({
  content,
}: {
  content?: AboutPreviewContent | null;
}) {
  const about = {
    ...fallbackContent,
    ...content,
    values:
      content?.values && content.values.length > 0
        ? content.values
        : fallbackContent.values,
  };

  const storyBlocks = splitStory(about.storyBody || about.heroSubheadline);

  const getStoryBlock = (index: number) => {
    return (
      storyBlocks[index] || {
        ...blockMeta[Math.min(index, blockMeta.length - 1)],
        body: "",
      }
    );
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-16 pb-10 lg:px-8 lg:pt-24 lg:pb-14">
      <div className="absolute left-[-12%] top-[8%] h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
      <div className="absolute right-[-12%] bottom-[-10%] h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-secondary">
              {about.heroEyebrow}
            </p>

            <h2 className="mt-5 font-heading text-4xl font-extrabold tracking-[-0.045em] text-brand-dark md:text-6xl">
              {about.storyTitle || about.heroHeadline}
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            A guided look at the belief, experience, and partnership approach behind Switch Integrated.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <article className="rounded-[2rem] border border-brand-secondary/15 bg-white p-6 shadow-sm lg:col-span-6 lg:p-8">
            <StoryBlock block={getStoryBlock(0)} featured />
          </article>

          <div className="overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-brand-soft p-2 shadow-xl shadow-brand-primary/10 lg:col-span-6">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/switch-solutions-custom-requirements.webp"
                alt="African business team discussing digital communication strategy"
                width={1600}
                height={900}
                className="h-48 w-full object-cover md:h-56 lg:h-64"
                priority={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-primary shadow-lg backdrop-blur">
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                Connect. Engage. Grow.
              </div>
            </div>
          </div>

          <article className="rounded-[2rem] border border-brand-secondary/15 bg-brand-soft/70 p-6 shadow-sm lg:col-span-6 lg:p-8">
            <StoryBlock block={getStoryBlock(1)} />
          </article>

          <article className="rounded-[2rem] border border-brand-secondary/15 bg-white p-6 shadow-sm lg:col-span-6 lg:p-8">
            <StoryBlock block={getStoryBlock(2)} />
          </article>

          <article className="grid overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-gradient-to-br from-brand-soft/90 via-white to-brand-secondary/10 shadow-sm lg:col-span-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div className="relative h-40 md:h-48 lg:h-52">
              <Image
                src="/images/switch-home-about-otp.webp"
                alt="Customer verifying a phone number on a mobile device"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative p-6 lg:px-8">
              <StoryBlock block={getStoryBlock(3)} compact />
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-brand-dark p-6 text-white shadow-sm lg:col-span-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgba(43,188,190,0.22),transparent_24%),radial-gradient(circle_at_10%_90%,rgba(43,188,190,0.14),transparent_22%)]" />

            <Image
              src="/brand/switch-icon-teal.svg"
              alt=""
              width={260}
              height={260}
              className="absolute -right-10 -top-12 h-56 w-56 opacity-10"
            />

            <div className="relative grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
              <div className="max-w-2xl">
                <StoryBlock block={getStoryBlock(4)} compact inverted />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {["Communication", "Infrastructure", "Engagement", "Growth"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-white/80 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.slice(0, 4).map((item) => (
            <div
              key={item.title}
              className="group flex items-center gap-3 rounded-2xl border border-brand-secondary/15 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-1 hover:bg-brand-soft hover:shadow-xl hover:shadow-brand-primary/10"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-primary shadow-sm transition group-hover:bg-brand-secondary">
                <CheckCircle2 className="h-5 w-5" />
              </span>

              <span className="text-sm font-bold text-brand-dark">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-4 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          Learn more about us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function StoryBlock({
  block,
  featured = false,
  compact = false,
  inverted = false,
}: {
  block: {
    number: string;
    title: string;
    body: string;
    icon: typeof Sparkles;
  };
  featured?: boolean;
  compact?: boolean;
  inverted?: boolean;
}) {
  const Icon = block.icon;

  return (
    <div>
      <div className="flex items-center gap-4">
        <div
          className={`grid h-14 w-14 shrink-0 place-items-center rounded-3xl ${
            inverted
              ? "bg-white/10 text-brand-secondary"
              : "bg-brand-soft text-brand-primary"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-secondary">
            {block.number}
          </p>

          <h3
            className={`font-heading text-2xl font-extrabold tracking-[-0.035em] ${
              inverted ? "text-white" : "text-brand-dark"
            }`}
          >
            {block.title}
          </h3>
        </div>
      </div>

      <p
        className={`mt-5 ${
          featured ? "border-l-4 border-brand-secondary pl-5" : ""
        } ${
          compact ? "text-base leading-7" : "text-lg leading-8"
        } ${inverted ? "text-white/75" : "text-slate-600"} ${
          featured ? "font-medium text-brand-dark" : ""
        }`}
      >
        {block.body}
      </p>
    </div>
  );
}
