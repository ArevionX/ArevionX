export function CTA() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-foreground text-background p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }} />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl mb-6">Have an idea worth building?</h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Tell us about your project. We'll reply within one business day with a clear next step —
            whether that's a quote, a discovery sprint, or a thoughtful "not us."
          </p>
          <a
            href="mailto:hello@arevionx.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
          >
            hello@arevionx.com →
          </a>
        </div>
      </div>
    </section>
  );
}
