const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "AWS", "Stripe", "OpenAI", "Flutter", "Swift", "Kubernetes",
];

export function Marquee() {
  return (
    <section className="border-y border-border/60 bg-card/40 py-10 overflow-hidden">
      <p className="text-center text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
        Trusted stack · Built with what works
      </p>
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-16 pr-16">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="text-2xl font-display text-foreground/40 whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
