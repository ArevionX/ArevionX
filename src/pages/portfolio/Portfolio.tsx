import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Github, Mail } from "lucide-react";

export function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent ring-1 ring-inset ring-accent/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2 animate-pulse" />
              AVAILABLE FOR NEW PROJECTS
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display tracking-tight text-foreground">
              Building the next generation of <span className="text-accent italic">Digital Excellence</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              A Senior Full-Stack Engineer specializing in high-performance web architectures, clean code ethics, and immersive user interfaces.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#work" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-card border border-border px-8 py-3.5 text-sm font-medium text-foreground hover:bg-accent/5 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative z-10 bg-card">
              <img src="/img/portfolio/portrait.png" alt="Developer Portrait" className="w-full h-full object-cover" />
            </div>
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[100px] rounded-full z-0" />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 border-y border-border/50 bg-card/30 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-16 min-w-full">
          {["REACT.JS", "TYPESCRIPT", "NEXT.JS", "NODE.JS", "POSTGRESQL", "TAILWIND CSS", "REACT.JS", "TYPESCRIPT", "NEXT.JS", "NODE.JS", "POSTGRESQL", "TAILWIND CSS"].map((tech, i) => (
            <span key={i} className="text-3xl font-display tracking-[0.1em] text-muted-foreground/40 font-bold uppercase">
              {tech}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex items-center gap-16 min-w-full" aria-hidden="true">
           {["REACT.JS", "TYPESCRIPT", "NEXT.JS", "NODE.JS", "POSTGRESQL", "TAILWIND CSS", "REACT.JS", "TYPESCRIPT", "NEXT.JS", "NODE.JS", "POSTGRESQL", "TAILWIND CSS"].map((tech, i) => (
            <span key={`dup-${i}`} className="text-3xl font-display tracking-[0.1em] text-muted-foreground/40 font-bold uppercase">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Selected Works */}
      <section id="work" className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-display tracking-tight mb-3">Selected Works</h2>
            <p className="text-muted-foreground text-sm">A curated collection of engineering challenges and solutions.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-border bg-card hover:bg-accent/10 transition-colors text-muted-foreground hover:text-foreground">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full border border-border bg-card hover:bg-accent/10 transition-colors text-muted-foreground hover:text-foreground">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-colors flex flex-col">
            <div className="aspect-[16/10] overflow-hidden bg-background relative flex items-center justify-center">
              <img src="/img/portfolio/lumina.png" alt="Lumina Cloud Engine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1 flex flex-col bg-card/50">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Lumina Cloud Engine</h3>
              <p className="text-base text-muted-foreground mb-6 flex-1 leading-relaxed">
                Autonomous infrastructure scaling platform utilizing WebAssembly and distributed edge networks.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 uppercase">Infrastructure</span>
                <span className="text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 uppercase">Next.js</span>
              </div>
              <a href="#" className="flex w-full items-center justify-center rounded-xl border border-border/80 bg-background/50 px-4 py-4 text-xs font-bold tracking-[0.2em] text-foreground hover:bg-accent/10 hover:text-accent transition-all uppercase">
                View Project
              </a>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-colors flex flex-col">
            <div className="aspect-[16/10] overflow-hidden bg-background relative flex items-center justify-center">
              <img src="/img/portfolio/vertex.png" alt="Vertex Trading Terminal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1 flex flex-col bg-card/50">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Vertex Trading Terminal</h3>
              <p className="text-base text-muted-foreground mb-6 flex-1 leading-relaxed">
                High-frequency trading interface with sub-millisecond latency visualizations and real-time data streaming.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 uppercase">Fintech</span>
                <span className="text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 uppercase">WebSockets</span>
              </div>
              <a href="#" className="flex w-full items-center justify-center rounded-xl border border-border/80 bg-background/50 px-4 py-4 text-xs font-bold tracking-[0.2em] text-foreground hover:bg-accent/10 hover:text-accent transition-all uppercase">
                View Project
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-colors flex flex-col">
            <div className="aspect-[16/10] overflow-hidden bg-background relative flex items-center justify-center">
              <img src="/img/portfolio/prism.png" alt="Prism Renderer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1 flex flex-col bg-card/50">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Prism Renderer</h3>
              <p className="text-base text-muted-foreground mb-6 flex-1 leading-relaxed">
                A custom WebGL rendering engine for procedural landscapes with dynamic lighting and shadow maps.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 uppercase">WebGL</span>
                <span className="text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 uppercase">Three.js</span>
              </div>
              <a href="#" className="flex w-full items-center justify-center rounded-xl border border-border/80 bg-background/50 px-4 py-4 text-xs font-bold tracking-[0.2em] text-foreground hover:bg-accent/10 hover:text-accent transition-all uppercase">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Philosophies */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Engineering Philosophies */}
          <div className="lg:col-span-6 rounded-3xl border border-border bg-card p-10 flex flex-col justify-center">
            <h3 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-8">Engineering Philosophies</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-muted-foreground shrink-0" />
                <p className="text-sm font-medium">Clean code is not an option, it is a fundamental requirement for scalable systems.</p>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-muted-foreground shrink-0" />
                <p className="text-sm font-medium">Performance should be measured in milliseconds, not seconds.</p>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-10 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-display text-foreground mb-2">8+</div>
            <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Years of Exp</div>
          </div>
          
          <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-10 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-display text-accent mb-2">40+</div>
            <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Projects Shipped</div>
          </div>

          {/* OS Contributor */}
          <div className="lg:col-span-12 rounded-3xl border border-border bg-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Open Source Contributor</h4>
                <p className="text-sm text-muted-foreground">Active contributor to React core and Tailwind UI libraries.</p>
              </div>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="shrink-0 px-6 py-2.5 rounded-full border border-border hover:bg-accent/10 text-xs font-bold tracking-wider uppercase transition-colors">
              View Github
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-0">
        <div className="rounded-[3rem] bg-card border border-border p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display tracking-tight text-foreground mb-6">
              Let's build something<br />
              <span className="text-accent italic">extraordinary</span> together.
            </h2>
            <p className="text-muted-foreground mx-auto max-w-lg mb-10">
              Currently accepting project inquiries and collaboration opportunities for Q3 2024. Reach out and let's start a technical conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:hello@devportfolio.com" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors">
                <Mail className="mr-2 h-4 w-4" />
                hello@devportfolio.com
              </a>
              <a href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border bg-transparent px-8 py-4 text-sm font-medium text-foreground hover:bg-accent/5 transition-colors">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                Book a Consultation
              </a>
            </div>
          </div>
          {/* Subtle glow */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 blur-[100px] rounded-full z-0 pointer-events-none" />
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
