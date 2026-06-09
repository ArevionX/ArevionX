import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Smartphone, Layers, Zap, ShieldCheck, Star, RefreshCw } from "lucide-react";

const capabilities = [
  { icon: <Smartphone className="h-5 w-5" />, title: "iOS & Android", desc: "Native and cross-platform apps built for App Store and Play Store from day one." },
  { icon: <Layers className="h-5 w-5" />, title: "React Native", desc: "Single codebase, native performance — shipping to both platforms simultaneously." },
  { icon: <Zap className="h-5 w-5" />, title: "Flutter", desc: "Google's UI toolkit for fast, expressive apps across mobile, web, and desktop." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "App Store Ready", desc: "We handle review guidelines, permissions, and compliance so you pass on first submission." },
  { icon: <Star className="h-5 w-5" />, title: "Polished UX", desc: "Designed with platform conventions in mind — feels native, works beautifully." },
  { icon: <RefreshCw className="h-5 w-5" />, title: "OTA Updates", desc: "Push updates instantly without App Store re-review using OTA update infrastructure." },
];

const stack = ["React Native", "Flutter", "Expo", "Swift", "Kotlin", "TypeScript", "Supabase", "Firebase"];

export function MobileApps() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 text-center">
        <div className="mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Services · Mobile Apps
          </div>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.05] mb-8">
            Mobile apps
            <br />
            <span className="text-muted-foreground">built to ship.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Native iOS, Android, and cross-platform apps designed for store approval on day one —
            with the UX polish your users actually expect.
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
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">What we build</p>
            <h2 className="text-4xl md:text-5xl">
              iOS, Android,
              <span className="text-muted-foreground"> and everything in between.</span>
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
              Tools we
              <span className="text-muted-foreground"> ship with.</span>
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
