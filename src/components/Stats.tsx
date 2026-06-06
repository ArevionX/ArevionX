const stats = [
  { v: "60+", l: "Products shipped" },
  { v: "24", l: "Engineers & designers" },
  { v: "6 wk", l: "Average MVP timeline" },
  { v: "9 yrs", l: "Building software" },
];

export function Stats() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Why arevionx</p>
          <h2 className="text-4xl md:text-6xl mb-6">
            A senior team. <span className="text-muted-foreground">No junior handoffs.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a tight team of senior engineers and product designers. You work directly
            with the people writing the code — no account managers, no offshore handoffs,
            no surprises in your invoice.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8">
              <div className="text-5xl md:text-6xl font-display text-accent mb-2">{s.v}</div>
              <div className="text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
