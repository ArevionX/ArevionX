import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { CheckCircle2 } from "lucide-react";

const phases = [
  {
    n: "01",
    title: "Discover",
    duration: "1–2 weeks",
    desc: "We map your problem, users, and constraints in a paid discovery sprint. You get a clear scope, architecture recommendation, and a fixed-price proposal — not a vague estimate.",
    deliverables: [
      "Problem & user mapping",
      "Technical architecture doc",
      "Fixed-scope proposal",
      "Project roadmap",
    ],
  },
  {
    n: "02",
    title: "Design",
    duration: "1–2 weeks",
    desc: "Before a single line of production code, you get wireframes, user flows, and a clickable prototype. We align on UX decisions early so there are no expensive surprises mid-build.",
    deliverables: [
      "Wireframes & user flows",
      "Clickable Figma prototype",
      "Design system foundation",
      "Stakeholder sign-off",
    ],
  },
  {
    n: "03",
    title: "Build",
    duration: "4–12 weeks",
    desc: "Real code on day one. Weekly demos in your Slack. You see progress — and can steer — at every step. No black boxes, no silence for weeks at a time.",
    deliverables: [
      "Weekly demo & progress update",
      "Staging environment access",
      "Test coverage on core flows",
      "CI/CD pipeline setup",
    ],
  },
  {
    n: "04",
    title: "Launch & Scale",
    duration: "Ongoing",
    desc: "We ship to production, monitor metrics, and iterate with you. Or we hand off cleanly — full docs, codebase walkthrough, and a team that actually explains what they built.",
    deliverables: [
      "Production deployment",
      "Monitoring & alerts setup",
      "Full handoff documentation",
      "Post-launch iteration support",
    ],
  },
];

const faqs = [
  {
    q: "How do you handle scope changes?",
    a: "We discuss them openly. Minor changes are absorbed. Significant ones are scoped and priced transparently before any work starts. No surprise invoices.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — our MVP sprint is specifically designed for founders who need to validate fast. We've taken many products from zero to launch in 6 weeks.",
  },
  {
    q: "What happens after we launch?",
    a: "We can continue as your ongoing development partner, or hand off completely. Either way, you leave with a codebase you own and documentation you can actually understand.",
  },
  {
    q: "Do we get access to the code during the project?",
    a: "Always. Your repo, your access, from day one. We push to your GitHub/GitLab. Nothing is held hostage.",
  },
];

export function OurProcess() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            How we work
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            No black boxes.
            <br />
            <span className="text-muted-foreground">Just clear progress.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every engagement follows the same four-phase process — designed to reduce risk,
            eliminate surprises, and ship working software on a predictable timeline.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl space-y-6">
          {phases.map((phase, i) => (
            <div
              key={phase.n}
              className="group rounded-3xl border border-border bg-background hover:bg-card/60 transition-colors p-8 md:p-12 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
                {/* Left */}
                <div>
                  <div className="text-7xl font-display text-accent/20 leading-none mb-4">{phase.n}</div>
                  <h2 className="text-3xl md:text-4xl mb-2">{phase.title}</h2>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {phase.duration}
                  </span>
                </div>
                {/* Right */}
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{phase.desc}</p>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Deliverables</p>
                    <ul className="space-y-2">
                      {phase.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-32 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Common questions</p>
            <h2 className="text-4xl md:text-6xl">
              Things people
              <span className="text-muted-foreground"> ask us a lot.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-border bg-background p-8 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-xl mb-4">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
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
