import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Database, ShieldCheck, Zap, RefreshCw, Layers, BarChart2 } from "lucide-react";

const useCases = [
  { icon: <Database className="h-5 w-5" />, title: "Relational Data", desc: "PostgreSQL for complex relational data models — foreign keys, joins, and ACID transactions." },
  { icon: <Zap className="h-5 w-5" />, title: "Supabase Backend", desc: "Instant REST and GraphQL APIs, auth, storage, and real-time out of the box." },
  { icon: <RefreshCw className="h-5 w-5" />, title: "Real-time Subscriptions", desc: "Postgres change data capture via Supabase Realtime for live, collaborative features." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Row Level Security", desc: "Fine-grained access control at the database level — no data leaks between tenants." },
  { icon: <Layers className="h-5 w-5" />, title: "Schema Migrations", desc: "Version-controlled migrations with clear rollback paths and zero-downtime deployments." },
  { icon: <BarChart2 className="h-5 w-5" />, title: "Analytics Queries", desc: "Complex aggregations, window functions, and reporting queries that PostgreSQL handles natively." },
];

export function PostgresSupabase() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Technologies · PostgreSQL & Supabase
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            PostgreSQL & Supabase
            <br />
            <span className="text-muted-foreground">reliable data layers.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            PostgreSQL as the proven relational database, Supabase as the open-source backend
            platform — together they power the data layer for most of what we build.
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
            <h2 className="text-4xl md:text-5xl">Data layers <span className="text-muted-foreground">that hold up.</span></h2>
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
