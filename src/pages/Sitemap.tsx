import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Home,
  Layers,
  Briefcase,
  Users,
  Mail,
  HelpCircle,
  Globe,
  Smartphone,
  Bot,
  Rocket,
  Cloud,
  Palette,
  FileText,
  ShieldCheck,
  Cookie,
  Map,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

const sections: {
  label: string;
  color: string;
  accent: string;
  pages: {
    href: string;
    label: string;
    desc: string;
    icon: React.ReactNode;
    external?: boolean;
  }[];
}[] = [
  {
    label: "Main",
    color: "bg-accent/10 border-accent/30",
    accent: "text-accent",
    pages: [
      {
        href: "/",
        label: "Home",
        desc: "Hero, services overview, process, stats, and contact CTA.",
        icon: <Home className="h-5 w-5" />,
      },
    ],
  },
  {
    label: "Services",
    color: "bg-blue-500/10 border-blue-500/30",
    accent: "text-blue-500",
    pages: [
      {
        href: "/services",
        label: "All Services",
        desc: "Full overview of everything Arevionx builds and ships.",
        icon: <Layers className="h-5 w-5" />,
      },
      {
        href: "/services/web-development",
        label: "Web Development",
        desc: "Production-grade SaaS dashboards, marketing sites, and internal tools.",
        icon: <Globe className="h-5 w-5" />,
      },
      {
        href: "/services/mobile-apps",
        label: "Mobile Apps",
        desc: "Native iOS, Android, and cross-platform apps in Flutter & React Native.",
        icon: <Smartphone className="h-5 w-5" />,
      },
      {
        href: "/services/ai-products",
        label: "AI Products",
        desc: "RAG pipelines, LLM agents, and fine-tuned models that move metrics.",
        icon: <Bot className="h-5 w-5" />,
      },
      {
        href: "/services/mvp-development",
        label: "MVP Development",
        desc: "Fixed-scope startup sprints — idea to launchable product in 6 weeks.",
        icon: <Rocket className="h-5 w-5" />,
      },
      {
        href: "/services/cloud-devops",
        label: "Cloud & DevOps",
        desc: "AWS, GCP, Cloudflare infrastructure with CI/CD and observability.",
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        href: "/services/design-branding",
        label: "Design & Branding",
        desc: "Product design, identity systems, and conversion-driven landing pages.",
        icon: <Palette className="h-5 w-5" />,
      },
    ],
  },
  {
    label: "Company",
    color: "bg-violet-500/10 border-violet-500/30",
    accent: "text-violet-500",
    pages: [
      {
        href: "/portfolio",
        label: "Portfolio",
        desc: "Case studies, shipped projects, and client testimonials.",
        icon: <Briefcase className="h-5 w-5" />,
      },
      {
        href: "/about",
        label: "About Us",
        desc: "Who we are, our values, and the senior team behind the work.",
        icon: <Users className="h-5 w-5" />,
      },
      {
        href: "/contact",
        label: "Contact",
        desc: "Start a conversation — get a quote or kick off a discovery sprint.",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        href: "/faq",
        label: "FAQ",
        desc: "Common questions about our process, pricing, and timelines.",
        icon: <HelpCircle className="h-5 w-5" />,
      },
    ],
  },
  {
    label: "Legal",
    color: "bg-muted/60 border-border",
    accent: "text-muted-foreground",
    pages: [
      {
        href: "/terms",
        label: "Terms of Service",
        desc: "The rules and agreements that govern use of Arevionx services.",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        href: "/privacy",
        label: "Privacy Policy",
        desc: "How we collect, use, and protect your personal data.",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
      {
        href: "/cookies",
        label: "Cookie Policy",
        desc: "What cookies we use and how to manage your preferences.",
        icon: <Cookie className="h-5 w-5" />,
      },
    ],
  },
  {
    label: "Utility",
    color: "bg-muted/60 border-border",
    accent: "text-muted-foreground",
    pages: [
      {
        href: "/sitemap",
        label: "Sitemap",
        desc: "This page — a full index of all pages on arevionx.com.",
        icon: <Map className="h-5 w-5" />,
      },
      {
        href: "/sitemap.xml",
        label: "sitemap.xml",
        desc: "Machine-readable XML sitemap for search engine crawlers.",
        icon: <Globe className="h-5 w-5" />,
        external: true,
      },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function Sitemap() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Map className="h-3.5 w-3.5 text-accent" />
            Site index
          </div>
          <h1 className="text-5xl md:text-6xl font-normal mb-5">Sitemap</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A full index of every page on{" "}
            <span className="text-foreground font-medium">arevionx.com</span> — useful
            for navigation and search engine discovery.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl space-y-14">
          {sections.map((section) => (
            <div key={section.label}>
              {/* Section header */}
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {section.label}
                </h2>
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground tabular-nums">
                  {section.pages.length} {section.pages.length === 1 ? "page" : "pages"}
                </span>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.pages.map((page) => {
                  const inner = (
                    <div
                      className={`group flex flex-col gap-3 rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${section.color} bg-background`}
                    >
                      {/* Icon + arrow */}
                      <div className="flex items-start justify-between">
                        <span className={`${section.accent}`}>{page.icon}</span>
                        <span className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                          →
                        </span>
                      </div>

                      {/* Label */}
                      <div>
                        <p className={`font-medium text-sm ${section.accent}`}>
                          {page.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {page.desc}
                        </p>
                      </div>

                      {/* URL badge */}
                      <div className="mt-auto pt-2 border-t border-border/50">
                        <code className="text-[11px] text-muted-foreground/70 font-mono">
                          arevionx.com{page.href}
                        </code>
                      </div>
                    </div>
                  );

                  return page.external ? (
                    <a
                      key={page.href}
                      href={page.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${page.label} — opens in new tab`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link key={page.href} to={page.href} aria-label={page.label}>
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* XML Sitemap CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-border bg-card/60 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-medium text-sm mb-1">Looking for the XML sitemap?</p>
              <p className="text-sm text-muted-foreground">
                The machine-readable version for search engines is available at{" "}
                <code className="text-xs font-mono text-accent">
                  arevionx.com/sitemap.xml
                </code>
              </p>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent/10 hover:border-accent/40 transition-colors"
            >
              <Globe className="h-4 w-4 text-accent" />
              View sitemap.xml
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
