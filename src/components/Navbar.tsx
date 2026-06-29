import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import arevionxLogo from "@/assets/img/arevionx-logo.png";
import { ServicesMegaMenu, servicesMenuItems } from "@/components/ServicesMegaMenu";

type NavItem =
  | { label: string; href: string; items?: never; megaMenu?: never }
  | { label: string; href?: never; items: { label: string; desc: string; href: string }[]; megaMenu?: never }
  | { label: string; href?: never; items?: never; megaMenu: true };

const navItems: NavItem[] = [
  {
    label: "Services",
    megaMenu: true,
  },
  {
    label: "Technologies",
    items: [
      { label: "React & Next.js", desc: "Frontend powerhouses", href: "/technologies/react-nextjs" },
      { label: "Node.js & Bun", desc: "Fast server-side runtimes", href: "/technologies/node-bun" },
      { label: "Python & FastAPI", desc: "AI/ML & backend APIs", href: "/technologies/python-fastapi" },
      { label: "React Native", desc: "Cross-platform mobile", href: "/technologies/react-native" },
      { label: "PostgreSQL & Supabase", desc: "Reliable data layers", href: "/technologies/postgres-supabase" },
      { label: "AWS & Cloudflare", desc: "Global cloud infrastructure", href: "/technologies/aws-cloudflare" },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Company",
    items: [
      { label: "About Us", desc: "Who we are & what drives us", href: "/about" },
      { label: "Our Process", desc: "How we work with you", href: "/process" },
      { label: "FAQ", desc: "Common questions answered", href: "/faq" },
      { label: "Contact", desc: "Let's start a conversation", href: "/contact" },
    ],
  },
];

function DropdownMenu({ items }: { items: { label: string; desc: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 z-50">
      <div className="rounded-2xl border border-border/60 bg-white shadow-2xl shadow-black/10 p-2">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex flex-col gap-0.5 rounded-xl px-4 py-3 hover:bg-accent/10 transition-colors group"
          >
            <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              {item.label}
            </span>
            <span className="text-xs text-muted-foreground">{item.desc}</span>
          </Link>
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
          <img src={arevionxLogo} alt="Arevionx Logo" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-semibold tracking-tight text-xl font-display">arevionx</span>
        </Link>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item, i) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => (item.items || item.megaMenu) && setOpenIndex(i)}
              onMouseLeave={() => (item.items || item.megaMenu) && setOpenIndex(null)}
            >
              {item.href ? (
                /* Direct link — no dropdown */
                <Link
                  to={item.href}
                  className="flex items-center px-4 py-2 rounded-full font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/5"
                >
                  {item.label}
                </Link>
              ) : (
                /* Dropdown trigger */
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
              )}

              {item.megaMenu && openIndex === i && (
                <>
                  <div className="absolute top-full left-0 right-0 h-3" />
                  <ServicesMegaMenu onNavigate={() => setOpenIndex(null)} />
                </>
              )}

              {item.items && openIndex === i && (
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
          <Link
            to="/contact"
            className="hidden md:inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Start a project
          </Link>
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
              {item.href ? (
                /* Direct link in mobile */
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                /* Accordion in mobile */
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                    className="flex w-full items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileExpanded === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === i && item.megaMenu && (
                    <div className="mt-1 ml-3 space-y-0.5 border-l-2 border-accent/30 pl-3">
                      {servicesMenuItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex flex-col gap-0.5 px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground">{sub.label}</span>
                          <span className="text-xs text-muted-foreground">{sub.desc}</span>
                        </Link>
                      ))}
                      <Link
                        to="/"
                        onClick={() => {
                          setMobileOpen(false);
                          if (window.location.pathname === "/") {
                            setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 100);
                          }
                        }}
                        className="flex items-center justify-between px-3 py-2.5 mt-1 rounded-lg bg-foreground text-background text-sm font-medium"
                      >
                        View all services
                        <span>→</span>
                      </Link>
                    </div>
                  )}
                  {mobileExpanded === i && item.items && (
                    <div className="mt-1 ml-3 space-y-0.5 border-l-2 border-accent/30 pl-3">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex flex-col gap-0.5 px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground">{sub.label}</span>
                          <span className="text-xs text-muted-foreground">{sub.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-border/60">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
