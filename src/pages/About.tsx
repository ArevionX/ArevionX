import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Users, Target, Heart, Zap } from "lucide-react";

const stats = [
  { v: "60+", l: "Products shipped" },
  { v: "24", l: "Engineers & designers" },
  { v: "6 wk", l: "Average MVP timeline" },
  { v: "9 yrs", l: "Building software" },
];

const values = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Senior-only execution",
    desc: "Every project is handled by senior engineers and designers. No account managers, no junior handoffs, no surprises.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Speed without shortcuts",
    desc: "We move fast because we've done this before — not because we cut corners. Clean code, clear architecture, tested output.",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Founders first",
    desc: "We've worked with early-stage founders long enough to understand what 'fast' and 'good' both mean when the runway is short.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Radical transparency",
    desc: "Weekly demos. Real Slack access. You see every line of progress — and every honest risk — before it becomes a problem.",
  },
];

const team = [
  { name: "Arevionx Team", role: "Engineering & Design", initials: "AX" },
  { name: "Senior Engineers", role: "Full-stack, Mobile, AI", initials: "SE" },
  { name: "Product Designers", role: "UI/UX, Branding", initials: "PD" },
  { name: "DevOps & Cloud", role: "Infrastructure, CI/CD", initials: "DC" },
];

export function About() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Who we are
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            A tight team that ships.
            <br />
            <span className="text-muted-foreground">No fluff. Just results.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Arevionx is a software development studio built for ambitious founders and product teams.
            We design, build, and scale modern software — end to end.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.l} className="bg-background p-8 text-center">
                <div className="text-5xl md:text-6xl font-display text-accent mb-2">{s.v}</div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-32 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Our mission</p>
            <h2 className="text-4xl md:text-6xl mb-6">
              Build software that
              <span className="text-muted-foreground"> actually ships.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Too many software projects die between kickoff and launch. Requirements bloat, communication
              breaks down, timelines slip. We exist to fix that.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our model is simple — senior people, clear scope, fast delivery. You get a
              working product, a codebase you own, and a team you actually want to work with again.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-10 space-y-6">
            <div className="text-6xl font-display text-accent/20 leading-none">9</div>
            <h3 className="text-3xl">Years of shipping software for ambitious teams.</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              From first-time founders building their MVP to established companies scaling complex
              platforms — we've seen it all and shipped through it all.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Our values</p>
            <h2 className="text-4xl md:text-6xl">
              How we think.
              <span className="text-muted-foreground"> How we work.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-background p-8 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-accent/10 text-accent mb-6">
                  {v.icon}
                </div>
                <h3 className="text-2xl mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-32 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">The team</p>
            <h2 className="text-4xl md:text-6xl">
              Senior people.
              <span className="text-muted-foreground"> All the way down.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              You work directly with the people writing the code and designing the product —
              not an account manager who relays messages.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((t, i) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-background p-6 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-display text-xl mb-4">
                  {t.initials}
                </div>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
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
