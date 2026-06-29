import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Globe2,
  PlugZap,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceMenuItem = {
  label: string;
  desc: string;
  href: string;
  badge?: string;
  icon: LucideIcon;
  panelTitle: string;
  highlights: string[];
  animation: "development" | "reports" | "integration" | "seo";
};

export const servicesMenuItems: ServiceMenuItem[] = [
  {
    label: "Development",
    desc: "Web, mobile & platform builds from MVP to scale",
    href: "/services/web-development",
    badge: "Popular",
    icon: Code2,
    panelTitle: "Build products that ship",
    highlights: [
      "Modern React, Next.js & mobile stacks",
      "Production-ready code you fully own",
      "Fixed-scope sprints with clear milestones",
    ],
    animation: "development",
  },
  {
    label: "Report Management",
    desc: "Dashboards, analytics & live business insights",
    href: "/services/ai-automation",
    icon: BarChart3,
    panelTitle: "Turn data into decisions",
    highlights: [
      "Custom dashboards & reporting portals",
      "Real-time metrics and automated exports",
      "AI-powered summaries and trend alerts",
    ],
    animation: "reports",
  },
  {
    label: "Integration",
    desc: "APIs, third-party tools & system connections",
    href: "/services/cloud-devops",
    icon: PlugZap,
    panelTitle: "Connect your entire stack",
    highlights: [
      "CRM, payment & SaaS integrations",
      "Secure API design and webhooks",
      "Cloud infrastructure that scales with you",
    ],
    animation: "integration",
  },
  {
    label: "SEO / GEO",
    desc: "Search visibility, local growth & discoverability",
    href: "/services/ui-ux-design",
    icon: Globe2,
    panelTitle: "Get found by the right audience",
    highlights: [
      "Technical SEO & performance tuning",
      "Local GEO pages and structured data",
      "Conversion-focused landing experiences",
    ],
    animation: "seo",
  },
];

function MegaMenuAnimation({ type }: { type: ServiceMenuItem["animation"] }) {
  return (
    <div className="relative h-36 w-full overflow-hidden rounded-xl border border-border/60 bg-foreground/[0.03]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.85 0.01 95) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {type === "development" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full border border-accent/30 animate-mega-orbit" />
            <div className="absolute -inset-3 rounded-full border border-accent/20 animate-mega-orbit-reverse" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background shadow-lg animate-mega-float">
              <Code2 className="h-6 w-6" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex gap-1.5">
            {[72, 48, 88, 56].map((w, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-accent/60 animate-mega-bar"
                style={{ width: w, animationDelay: `${i * 120}ms` }}
              />
            ))}
          </div>
        </div>
      )}

      {type === "reports" && (
        <div className="absolute inset-0 flex items-end justify-center gap-2 px-8 pb-6 pt-10">
          {[40, 64, 48, 80, 56, 72].map((h, i) => (
            <div
              key={i}
              className="w-5 rounded-t-md bg-accent/70 animate-mega-chart origin-bottom"
              style={{ height: h, animationDelay: `${i * 100}ms` }}
            />
          ))}
          <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-medium text-accent">
            <Sparkles className="h-3 w-3" />
            Live
          </div>
        </div>
      )}

      {type === "integration" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-24 w-32">
            <div className="absolute left-0 top-1/2 h-9 w-9 -translate-y-1/2 rounded-lg border border-border bg-card shadow-sm animate-mega-node" />
            <div className="absolute right-0 top-1/2 h-9 w-9 -translate-y-1/2 rounded-lg border border-border bg-card shadow-sm animate-mega-node-delayed" />
            <div className="absolute left-1/2 top-0 h-9 w-9 -translate-x-1/2 rounded-lg border border-accent/40 bg-accent/10 shadow-sm animate-mega-node-center" />
            <svg className="absolute inset-0 h-full w-full" aria-hidden>
              <line x1="18" y1="48" x2="64" y2="24" stroke="oklch(0.68 0.19 42 / 0.5)" strokeWidth="1.5" className="animate-mega-line" />
              <line x1="18" y1="48" x2="64" y2="72" stroke="oklch(0.68 0.19 42 / 0.5)" strokeWidth="1.5" className="animate-mega-line-delayed" />
              <line x1="64" y1="24" x2="110" y2="48" stroke="oklch(0.68 0.19 42 / 0.5)" strokeWidth="1.5" className="animate-mega-line" />
              <line x1="64" y1="72" x2="110" y2="48" stroke="oklch(0.68 0.19 42 / 0.5)" strokeWidth="1.5" className="animate-mega-line-delayed" />
            </svg>
          </div>
        </div>
      )}

      {type === "seo" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/10 animate-mega-pulse" />
            <div className="absolute -inset-4 rounded-full border border-accent/20 animate-mega-pulse-delayed" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-card border border-border shadow-md animate-mega-float">
              <Globe2 className="h-7 w-7 text-accent" />
            </div>
          </div>
          <div className="absolute top-5 left-5 h-2 w-2 rounded-full bg-accent animate-mega-dot" />
          <div className="absolute bottom-6 right-8 h-2 w-2 rounded-full bg-accent/60 animate-mega-dot-delayed" />
          <div className="absolute top-8 right-6 h-1.5 w-1.5 rounded-full bg-accent/40 animate-mega-dot" />
        </div>
      )}
    </div>
  );
}

type ServicesMegaMenuProps = {
  onNavigate?: () => void;
};

export function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = servicesMenuItems[activeIndex];

  function scrollToServices() {
    onNavigate?.();
    if (window.location.pathname === "/") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.location.href = "/#services";
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[min(680px,calc(100vw-2rem))] z-50">
      <div className="rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/10 overflow-hidden animate-fade-up [animation-duration:0.35s]">
        <div className="flex flex-col sm:flex-row">
          {/* Left — service list */}
          <div className="sm:w-[52%] p-2 sm:border-r border-border/60">
            {servicesMenuItems.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeIndex === i;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={onNavigate}
                  className={`flex items-start gap-3 rounded-xl px-3 py-3 transition-all duration-200 group ${
                    isActive ? "bg-secondary/80" : "hover:bg-secondary/50"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                      isActive
                        ? "border-accent/30 bg-accent/10 text-accent"
                        : "border-border bg-background text-muted-foreground group-hover:border-accent/20 group-hover:text-accent"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium transition-colors ${
                          isActive ? "text-foreground" : "text-foreground/90 group-hover:text-accent"
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right — animated panel */}
          <div className="sm:w-[48%] p-4 bg-background/50">
            <MegaMenuAnimation type={active.animation} />
            <h4 className="mt-4 text-sm font-semibold text-foreground">{active.panelTitle}</h4>
            <ul className="mt-3 space-y-2">
              {active.highlights.map((point) => (
                <li key={point} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer — view all */}
        <button
          type="button"
          onClick={scrollToServices}
          className="group flex w-full items-center justify-between bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          <span>View all services</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
