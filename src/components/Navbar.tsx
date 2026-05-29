import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import arevionxLogo from "@/assets/img/arevionx-logo.png";

const navItems = [
  {
    label: "Services",
    items: [
      { label: "Web Development", desc: "Modern, scalable web apps", href: "#services" },
      { label: "Mobile Apps", desc: "iOS & Android native/cross-platform", href: "#services" },
      { label: "AI & Automation", desc: "LLM integrations & smart workflows", href: "#services" },
      { label: "UI/UX Design", desc: "Pixel-perfect product design", href: "#services" },
      { label: "Cloud & DevOps", desc: "Infrastructure, CI/CD & scaling", href: "#services" },
      { label: "MVP Development", desc: "From idea to launch, fast", href: "#services" },
    ],
  },
  {
    label: "Technologies",
    items: [
      { label: "React & Next.js", desc: "Frontend powerhouses", href: "#services" },
      { label: "Node.js & Bun", desc: "Fast server-side runtimes", href: "#services" },
      { label: "Python & FastAPI", desc: "AI/ML & backend APIs", href: "#services" },
      { label: "React Native", desc: "Cross-platform mobile", href: "#services" },
      { label: "PostgreSQL & Supabase", desc: "Reliable data layers", href: "#services" },
      { label: "AWS & Cloudflare", desc: "Global cloud infrastructure", href: "#services" },
    ],
  },
  {
    label: "Portfolio",
    items: [
      { label: "Case Studies", desc: "Deep dives into our work", href: "#work" },
      { label: "Projects", desc: "Browse what we've shipped", href: "#work" },
      { label: "Testimonials", desc: "What our clients say", href: "#work" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", desc: "Who we are & what drives us", href: "#about" },
      { label: "Our Process", desc: "How we work with you", href: "#process" },
      { label: "Contact", desc: "Let's start a conversation", href: "#contact" },
    ],
  },
];

function DropdownMenu({ items }: { items: typeof navItems[0]["items"] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 z-50">
      <div className="rounded-2xl border border-border/60 bg-white shadow-2xl shadow-black/10 p-2">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col gap-0.5 rounded-xl px-4 py-3 hover:bg-accent/10 transition-colors group"
          >
            <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              {item.label}
            </span>
            <span className="text-xs text-muted-foreground">{item.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={arevionxLogo} alt="Arevionx Logo" className="h-9 w-9 object-contain" />
          <span className="font-semibold tracking-tight text-xl font-display">arevionx</span>
        </Link>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item, i) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenIndex(i)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-colors ${
                  openIndex === i
                    ? "text-foreground bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>

              {/* Invisible bridge fills the gap between button and dropdown so mouse doesn't leave the zone */}
              {openIndex === i && (
                <>
                  <div className="absolute top-full left-0 right-0 h-3" />
                  <DropdownMenu items={item.items} />
                </>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Start a project
          </a>
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl px-4 py-4 space-y-1">
          {navItems.map((item, i) => (
            <div key={item.label}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                className="flex w-full items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
              >
                {item.label}
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileExpanded === i ? "rotate-180" : ""}`}
                />
              </button>
              {mobileExpanded === i && (
                <div className="mt-1 ml-3 space-y-0.5 border-l-2 border-accent/30 pl-3">
                  {item.items.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex flex-col gap-0.5 px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <span className="text-sm font-medium text-foreground">{sub.label}</span>
                      <span className="text-xs text-muted-foreground">{sub.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-border/60">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
