const services = [
  { n: "01", title: "Web Apps", desc: "Production-grade SaaS dashboards, marketing sites, and internal tools built on modern React stacks." },
  { n: "02", title: "Mobile Apps", desc: "Native iOS, Android, and cross-platform apps in Flutter and React Native, designed for store-day one." },
  { n: "03", title: "AI Products", desc: "From RAG and agents to fine-tuned models — we ship AI features that move metrics, not just demos." },
  { n: "04", title: "MVP in 6 Weeks", desc: "Fixed-scope startup sprints. Idea to launchable product, with a real codebase you fully own." },
  { n: "05", title: "Cloud & DevOps", desc: "AWS, GCP and Cloudflare infrastructure, CI/CD, observability, and security baked in from day one." },
  { n: "06", title: "Design & Branding", desc: "Product design, identity, and conversion-driven landing pages from a senior in-house design team." },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Services</p>
          <h2 className="text-4xl md:text-6xl">
            Everything a startup needs.
            <span className="text-muted-foreground"> Under one roof.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative bg-background p-8 transition-colors hover:bg-card cursor-default"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="text-xs text-muted-foreground">{s.n}</span>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
