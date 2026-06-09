import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Rocket, Clock, CheckCircle2, Code2, Users, FileText } from "lucide-react";

const whats_included = [
  { icon: <FileText className="h-5 w-5" />, title: "Discovery & Scoping", desc: "We map your idea, define scope, and agree on exactly what ships at the end of 6 weeks." },
  { icon: <Code2 className="h-5 w-5" />, title: "Design & Build", desc: "Wireframes, UI, and a fully functional codebase — built in parallel by the same team." },
  { icon: <CheckCircle2 className="h-5 w-5" />, title: "Testing & QA", desc: "Core flows tested before launch. No broken sign-ups, no missing edge cases in production." },
  { icon: <Rocket className="h-5 w-5" />, title: "Deployed to Production", desc: "Live URL, CI/CD, monitoring. Ready for real users on day 42." },
  { icon: <Users className="h-5 w-5" />, title: "You Own Everything", desc: "Full codebase handoff. Your repo, your infra, your product. No lock-in." },
  { icon: <Clock className="h-5 w-5" />, title: "Fixed Timeline", desc: "6 weeks. No slippage. We've shipped every MVP on time because we scope carefully first." },
];

const timeline = [
  { week: "Week 1–2", title: "Discover & Design", desc: "Scope lock, wireframes, and clickable prototype. Sign-off before code starts." },
  { week: "Week 3–5", title: "Build", desc: "Daily commits, weekly demos. You see real progress every step." },
  { week: "Week 6", title: "Launch", desc: "QA, production deploy, handoff. Your MVP is live." },
];

export function MVPDevelopment() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Services · MVP Development
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            Idea to launch.
            <br />
            <span className="text-muted-foreground">6 weeks. Fixed price.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A fixed-scope sprint designed for founders who need to validate fast. We take your
            idea to a launchable product with a real codebase you fully own.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all">
              Start your MVP <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="/process" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors">
              Our process
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Timeline</p>
            <h2 className="text-4xl md:text-5xl">
              6 weeks,
              <span className="text-muted-foreground"> end to end.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((t, i) => (
              <div key={t.week} className="rounded-2xl border border-border bg-background p-8 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-5xl font-display text-accent/20 mb-4">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-xs tracking-[0.15em] text-accent uppercase mb-2">{t.week}</p>
                <h3 className="text-xl mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-32 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">What's included</p>
            <h2 className="text-4xl md:text-5xl">
              Everything you need
              <span className="text-muted-foreground"> to launch.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {whats_included.map((c, i) => (
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

      <CTA />
      <Footer />
    </main>
  );
}
