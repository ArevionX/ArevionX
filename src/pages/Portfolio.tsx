import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ArrowUpRight, Quote } from "lucide-react";

const caseStudies = [
  {
    tag: "SaaS / Web App",
    title: "B2B Analytics Dashboard",
    desc: "Built a real-time analytics platform for a Series A startup — from 0 to production in 10 weeks. Handles 1M+ daily events with sub-200ms query times.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    result: "Shipped in 10 weeks",
  },
  {
    tag: "Mobile App",
    title: "Fintech iOS & Android App",
    desc: "Designed and built a cross-platform fintech app in React Native. Passed App Store and Play Store review first submission. 4.8★ rating in first month.",
    stack: ["React Native", "FastAPI", "Supabase"],
    result: "4.8★ on launch day",
  },
  {
    tag: "AI Product",
    title: "AI-Powered Document Processor",
    desc: "Integrated a RAG pipeline to extract, classify, and query large document sets for a legal tech firm. Reduced manual review time by 70%.",
    stack: ["Python", "OpenAI", "Pinecone", "FastAPI"],
    result: "70% time reduction",
  },
  {
    tag: "MVP Sprint",
    title: "Marketplace MVP",
    desc: "Took a two-sided marketplace from wireframe to live product in exactly 6 weeks. Founder used it to close their pre-seed round.",
    stack: ["Next.js", "Stripe", "Supabase", "Vercel"],
    result: "Pre-seed closed",
  },
];

const projects = [
  { title: "E-commerce Platform", category: "Web App", stack: "Next.js · Shopify · AWS" },
  { title: "HR Management System", category: "Internal Tool", stack: "React · Node.js · PostgreSQL" },
  { title: "Healthcare Patient Portal", category: "Web App", stack: "React · Python · HIPAA-compliant infra" },
  { title: "Logistics Tracking App", category: "Mobile", stack: "React Native · Node.js · Maps API" },
  { title: "AI Content Generator", category: "AI Product", stack: "Python · GPT-4 · Next.js" },
  { title: "Real Estate Platform", category: "Web App", stack: "React · Node.js · Mapbox" },
];

const testimonials = [
  {
    quote: "Arevionx shipped our MVP in 6 weeks, exactly as promised. Clean code, clear communication, zero surprises. We closed our pre-seed off the back of the demo.",
    author: "Founder",
    company: "Marketplace Startup",
  },
  {
    quote: "We'd worked with three agencies before. Arevionx was the first team that actually pushed back when our scope was unrealistic — and then delivered ahead of schedule.",
    author: "CTO",
    company: "Series A SaaS",
  },
  {
    quote: "The AI integration they built saved our team 20 hours a week from day one. The documentation was so good our in-house devs took it over without a single question.",
    author: "Head of Product",
    company: "Legal Tech Co.",
  },
];

export function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Our work
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            60+ products shipped.
            <br />
            <span className="text-muted-foreground">Built to last.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From early-stage MVPs to enterprise platforms — here's a look at what we've
            built, how we built it, and the results it delivered.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Case studies</p>
            <h2 className="text-4xl md:text-6xl max-w-3xl">
              Deep dives into
              <span className="text-muted-foreground"> the work.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <div
                key={cs.title}
                className="group rounded-3xl border border-border bg-background hover:bg-card/60 transition-colors p-8 md:p-10 animate-fade-up cursor-default"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                    {cs.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl mb-3">{cs.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{cs.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {cs.stack.map((s) => (
                      <span key={s} className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-accent shrink-0 ml-4">{cs.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="px-6 py-32 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Projects</p>
            <h2 className="text-4xl md:text-6xl max-w-3xl">
              More of what
              <span className="text-muted-foreground"> we've shipped.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="group bg-background p-8 hover:bg-card transition-colors animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs text-muted-foreground">{p.category}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <h3 className="text-xl mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-6xl max-w-3xl">
              What our clients
              <span className="text-muted-foreground"> actually say.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.author}
                className="rounded-3xl border border-border bg-background p-8 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Quote className="h-6 w-6 text-accent/40 mb-6" />
                <p className="text-sm leading-relaxed mb-8">"{t.quote}"</p>
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
