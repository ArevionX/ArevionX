import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Zap, Server, Globe, Database, RefreshCw, ShieldCheck } from "lucide-react";

const useCases = [
  { icon: <Server className="h-5 w-5" />, title: "REST & GraphQL APIs", desc: "High-performance APIs with Express, Fastify, or Hono — typed end-to-end with TypeScript." },
  { icon: <Zap className="h-5 w-5" />, title: "Bun for Speed", desc: "Bun as a runtime and package manager for dramatically faster installs and execution." },
  { icon: <Globe className="h-5 w-5" />, title: "Serverless Functions", desc: "Edge and serverless deployments on Vercel, Cloudflare Workers, and AWS Lambda." },
  { icon: <Database className="h-5 w-5" />, title: "Background Jobs", desc: "Queue-based job processing with BullMQ and Redis for reliable async workloads." },
  { icon: <RefreshCw className="h-5 w-5" />, title: "Real-time", desc: "WebSocket servers and SSE for live dashboards, notifications, and collaborative tools." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Auth & Middleware", desc: "JWT, OAuth, session management, and rate limiting built into every API we ship." },
];

export function NodeBun() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Technologies · Node.js & Bun
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            Node.js & Bun
            <br />
            <span className="text-muted-foreground">fast server runtimes.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our default backend runtime for APIs, serverless functions, and real-time systems —
            fast, mature, and with the largest ecosystem in server-side JavaScript.
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
            <h2 className="text-4xl md:text-5xl">Backends <span className="text-muted-foreground">that scale.</span></h2>
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
