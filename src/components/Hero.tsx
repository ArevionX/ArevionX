import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const rotating = ["your idea.", "your MVP.", "your startup.", "your scale."];

export function Hero() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = rotating[i];
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((i + 1) % rotating.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <section className="relative px-6 pt-24 pb-32 text-center">
      <div className="mx-auto max-w-4xl animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          A software studio for ambitious teams
        </div>
        <h1 className="text-5xl md:text-7xl font-normal leading-[1.05]">
          We build software for
          <br />
          <span className="text-accent">{text}</span>
          <span className="inline-block w-[2px] h-[0.9em] bg-accent align-middle ml-1 animate-blink" />
        </h1>
        <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground">
          Arevionx is a software development company partnering with founders and product
          teams to design, ship, and scale modern web, mobile, and AI products — end to end.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium animate-hero-btn transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-[0_8px_30px_-12px_oklch(0.18_0.01_250/0.45)] active:translate-y-0 active:scale-[0.98]"
            style={{ animationDelay: "0.55s" }}
          >
            <span className="relative z-10">Contact</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </Link>
          <Link
            to="/process"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium animate-hero-btn transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-secondary hover:shadow-[0_8px_30px_-12px_oklch(0.68_0.19_42/0.35)] active:translate-y-0 active:scale-[0.98]"
            style={{ animationDelay: "0.7s" }}
          >
            Explore our process
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
