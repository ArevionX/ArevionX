import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const categories = [
  {
    label: "Working with us",
    faqs: [
      {
        q: "How do I get started?",
        a: "Just email us at arevionx@gmail.com with a brief description of your project. We'll reply within one business day with a few questions to understand the scope, then schedule a short call.",
      },
      {
        q: "Do you take on small projects?",
        a: "We focus on projects where we can make a meaningful impact — typically a minimum of a 4-week engagement. If your scope is smaller, we're happy to point you in the right direction.",
      },
      {
        q: "Can we hire you for ongoing work after the initial build?",
        a: "Yes. Many of our clients continue with us as a retainer or on-demand development partner after the initial project. We can structure that however makes sense for your team.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Absolutely. We sign NDAs before any detailed project discussion and treat every client's business as strictly confidential.",
      },
    ],
  },
  {
    label: "Pricing & timeline",
    faqs: [
      {
        q: "How do you price projects?",
        a: "Most projects are fixed-price after a discovery sprint. We scope clearly, price honestly, and don't send surprise invoices. For ongoing work, we use a monthly retainer.",
      },
      {
        q: "How fast can you actually move?",
        a: "Our MVP sprint takes 6 weeks from kickoff to launch. Larger builds typically run 8–16 weeks. We've never missed a launch date we committed to.",
      },
      {
        q: "What if the scope changes mid-project?",
        a: "Minor changes are absorbed. Significant scope changes are discussed openly, scoped, and priced before any extra work begins. You'll never see a surprise charge on your invoice.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes. We typically structure payments as an initial deposit, milestone payments, and a final payment on delivery. We're flexible for funded startups and enterprises.",
      },
    ],
  },
  {
    label: "Tech & process",
    faqs: [
      {
        q: "What tech stack do you use?",
        a: "We use what's right for the project — React/Next.js, React Native, Flutter, Node.js, Python, FastAPI, PostgreSQL, Supabase, AWS, and Cloudflare are our defaults. We don't force a stack you didn't ask for.",
      },
      {
        q: "Do we own the code?",
        a: "Always. The code is yours from day one. It lives in your repo, you have full access, and there are no licensing restrictions or lock-ins of any kind.",
      },
      {
        q: "How do we stay up to date during the build?",
        a: "Weekly demos, async updates in your Slack channel, and a live staging environment you can access anytime. No 'we'll show you when it's done' black boxes.",
      },
      {
        q: "Do you handle deployment and hosting?",
        a: "Yes — we set up your cloud infrastructure (AWS, GCP, Vercel, Cloudflare, etc.), CI/CD pipelines, monitoring, and alerts. We can manage it ongoing or hand it off cleanly.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium">{q}</span>
        <span className="shrink-0 mt-0.5 text-accent">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <p className="pb-6 text-sm text-muted-foreground leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            FAQ
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            Questions we get
            <br />
            <span className="text-muted-foreground">asked a lot.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you want to know before reaching out. Can't find your answer? Just email us.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-4xl space-y-12">
          {categories.map((cat, i) => (
            <div key={cat.label} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">{cat.label}</p>
              <div className="rounded-2xl border border-border bg-background px-8">
                {cat.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-card/60 p-10 text-center">
            <h2 className="text-3xl mb-3">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              We're happy to answer anything that's not covered here. Just reach out directly.
            </p>
            <a
              href="mailto:arevionx@gmail.com?subject=Question%20about%20Arevionx"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all"
            >
              arevionx@gmail.com →
            </a>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
