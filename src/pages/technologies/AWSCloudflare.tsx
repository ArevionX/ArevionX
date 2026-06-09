import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Cloud, Zap, Shield, Globe, Activity, Server } from "lucide-react";

const useCases = [
  { icon: <Cloud className="h-5 w-5" />, title: "AWS Infrastructure", desc: "EC2, ECS, RDS, S3, Lambda — the full AWS surface area, architected for your workload." },
  { icon: <Globe className="h-5 w-5" />, title: "Cloudflare Edge", desc: "Workers, Pages, and R2 for globally distributed apps with sub-50ms response times." },
  { icon: <Shield className="h-5 w-5" />, title: "Security & WAF", desc: "Cloudflare WAF, DDoS protection, and AWS Shield for always-on security at the edge." },
  { icon: <Zap className="h-5 w-5" />, title: "CDN & Performance", desc: "Static asset delivery, image optimization, and cache configuration for global performance." },
  { icon: <Activity className="h-5 w-5" />, title: "Monitoring", desc: "CloudWatch, Datadog, and Grafana dashboards so you know your system's health at a glance." },
  { icon: <Server className="h-5 w-5" />, title: "Infrastructure as Code", desc: "Terraform and AWS CDK for reproducible, version-controlled infrastructure deployments." },
];

export function AWSCloudflare() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Technologies · AWS & Cloudflare
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            AWS & Cloudflare
            <br />
            <span className="text-muted-foreground">global cloud infrastructure.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            AWS for compute, storage, and managed services — Cloudflare for edge delivery,
            security, and global performance. Together they power every production app we ship.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all">
              Build with us <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">What we build with it</p>
            <h2 className="text-4xl md:text-5xl">Infrastructure <span className="text-muted-foreground">that scales globally.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {useCases.map((c, i) => (
              <div key={c.title} className="bg-background p-8 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-accent/10 text-accent mb-6">{c.icon}</div>
                <h3 className="text-xl mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
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
