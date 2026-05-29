const steps = [
  { n: "01", title: "Discover", desc: "We map your problem, users, and constraints in a paid discovery sprint." },
  { n: "02", title: "Design", desc: "Wireframes, flows, and a clickable prototype before a single line of production code." },
  { n: "03", title: "Build", desc: "Weekly demos. Real code on day one. You see progress in your Slack." },
  { n: "04", title: "Launch & Scale", desc: "We ship, monitor, iterate, and grow with you — or hand off cleanly." },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-32 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Process</p>
          <h2 className="text-4xl md:text-6xl max-w-3xl">How we work, end to end.</h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-6xl font-display text-accent/30 mb-4">{s.n}</div>
              <h3 className="text-2xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
