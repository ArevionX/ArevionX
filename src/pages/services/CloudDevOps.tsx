import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Cloud, GitBranch, Shield, Activity, Server, Zap } from "lucide-react";

const capabilities = [
  { icon: <Cloud className="h-5 w-5" />, title: "Cloud Infrastructure", desc: "AWS, GCP, and Cloudflare architecture designed for reliability, performance, and cost efficiency." },
  { icon: <GitBranch className="h-5 w-5" />, title: "CI/CD Pipelines", desc: "Automated build, test, and deployment pipelines so every push goes to production safely." },
  { icon: <Shield className="h-5 w-5" />, title: "Security", desc: "Secrets management, IAM policies, network segmentation, and vulnerability scanning baked in." },
  { icon: <Activity className="h-5 w-5" />, title: "Observability", desc: "Logging, metrics, and alerting so you know about problems before your users do." },
  { icon: <Server className="h-5 w-5" />, title: "Containerisation", desc: "Docker and Kubernetes for consistent, portable, and scalable deployment environments." },
  { icon: <Zap className="h-5 w-5" />, title: "Performance & Scaling", desc: "Auto-scaling, CDN configuration, and caching strategies for high-traffic workloads." },
];

const stack = ["AWS", "GCP", "Cloudflare", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"];

export function CloudDevOps() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Services · Cloud & DevOps
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            Infrastructure that
            <br />
            <span className="text-muted-foreground">doesn't wake you up.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            AWS, GCP, and Cloudflare infrastructure with CI/CD, observability, and security
            built in from day one — not bolted on after the first outage.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all">
              Start a project <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="/process" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors">
              Our process
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">What we set up</p>
            <h2 className="text-4xl md:text-5xl">
              From first deploy
              <span className="text-muted-foreground"> to global scale.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {capabilities.map((c, i) => (
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

      {/* Stack */}
      <section className="px-6 py-32 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">Tech stack</p>
            <h2 className="text-4xl md:text-5xl">
              Cloud tools
              <span className="text-muted-foreground"> we trust.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <span key={s} className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
