import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Linkedin, Instagram, Facebook, Clock, MessageSquare } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2H21.5l-7.51 8.58L23 22h-6.797l-5.32-6.94L4.8 22H1.54l8.04-9.19L1 2h6.91l4.81 6.36L18.244 2Zm-1.19 18h1.88L7.04 4H5.06l11.994 16Z" />
    </svg>
  );
}

const contactOptions = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email us",
    desc: "Best for project inquiries, quotes, and detailed questions.",
    action: "arevionx@gmail.com",
    href: "mailto:arevionx@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Let%27s%20Build%20Something",
    cta: "Send an email →",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "LinkedIn",
    desc: "Connect with us professionally and follow our updates.",
    action: "linkedin.com/company/arevionx",
    href: "https://www.linkedin.com/company/arevionx/",
    cta: "Connect on LinkedIn →",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/arevionx/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arevionx/",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/ArevionX",
    icon: <XIcon className="h-[18px] w-[18px]" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589969877894",
    icon: <Facebook className="h-5 w-5" />,
  },
];

const expectations = [
  { n: "01", text: "We reply within one business day." },
  { n: "02", text: "We'll ask a few questions to understand your project." },
  { n: "03", text: "We'll send a clear next step — quote, discovery sprint, or an honest 'not us'." },
];

export function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Get in touch
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            Let's start a
            <br />
            <span className="text-muted-foreground">conversation.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Whether you have a fully formed brief or just an idea on a napkin — reach out.
            We're good at helping you figure out the right next step.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactOptions.map((opt, i) => (
            <div
              key={opt.title}
              className="rounded-3xl border border-border bg-background p-10 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-accent/10 text-accent mb-6">
                {opt.icon}
              </div>
              <h2 className="text-2xl mb-2">{opt.title}</h2>
              <p className="text-sm text-muted-foreground mb-6">{opt.desc}</p>
              <p className="text-sm font-medium mb-6">{opt.action}</p>
              <a
                href={opt.href}
                target={opt.href.startsWith("http") ? "_blank" : undefined}
                rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all"
              >
                {opt.cta}
              </a>
            </div>
          ))}
        </div>

        {/* What to expect */}
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-border bg-card/60 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-10">
              <Clock className="h-5 w-5 text-accent" />
              <h2 className="text-2xl">What to expect</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expectations.map((e, i) => (
                <div key={e.n} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-5xl font-display text-accent/30 mb-3">{e.n}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="px-6 py-32 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">Follow along</p>
          <h2 className="text-4xl md:text-5xl mb-10">
            Find us on social.
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-foreground text-background p-12 md:p-20 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl mb-6">Have an idea worth building?</h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
              Tell us about your project. We'll reply within one business day with a clear next step —
              whether that's a quote, a discovery sprint, or a thoughtful "not us."
            </p>
            <a
              href="mailto:arevionx@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Let%27s%20Build%20Something"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
            >
              arevionx@gmail.com →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
