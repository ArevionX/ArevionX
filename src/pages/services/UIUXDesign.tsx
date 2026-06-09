import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Palette, Layout, MousePointer, Eye, Layers, Sparkles } from "lucide-react";

const capabilities = [
  { icon: <Layout className="h-5 w-5" />, title: "Product Design", desc: "End-to-end product design — from user flows and wireframes to high-fidelity interfaces." },
  { icon: <Sparkles className="h-5 w-5" />, title: "Brand Identity", desc: "Logo, color systems, typography, and visual language that holds together across every touchpoint." },
  { icon: <MousePointer className="h-5 w-5" />, title: "Interaction Design", desc: "Microinteractions, transitions, and motion that make the product feel alive and responsive." },
  { icon: <Eye className="h-5 w-5" />, title: "UX Research", desc: "User interviews, usability testing, and journey mapping to validate decisions before we build." },
  { icon: <Layers className="h-5 w-5" />, title: "Design Systems", desc: "Scalable component libraries in Figma and code — one source of truth for your entire product." },
  { icon: <Palette className="h-5 w-5" />, title: "Landing Pages", desc: "Conversion-focused landing pages designed for performance, not just aesthetics." },
];

const tools = ["Figma", "Framer", "Storybook", "Tailwind CSS", "shadcn/ui", "Lottie"];

export function UIUXDesign() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Services · UI/UX Design
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            Design that converts.
            <br />
            <span className="text-muted-foreground">Not just looks good.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Product design, branding, and conversion-focused interfaces — built by a senior
            in-house design team that understands both aesthetics and user behaviour.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all">
              Start a project <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="/process" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors">
              Our process
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">What we design</p>
            <h2 className="text-4xl md:text-5xl">
              From brand to
              <span className="text-muted-foreground"> pixel-perfect product.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {capabilities.map((c, i) => (
              <div key={c.title} className="bg-background p-8 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-accent/10 text-accent mb-6">
                  {c.icon}
                </div>
                <h3 className="text-xl mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 py-32 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Tools</p>
            <h2 className="text-4xl md:text-5xl">
              Design tools
              <span className="text-muted-foreground"> we work in.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((s) => (
              <span key={s} className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
