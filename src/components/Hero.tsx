import { useEffect, useState } from "react";

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
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all"
          >
            Get a quote
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
          >
            What we do
          </a>
        </div>
      </div>
    </section>
  );
}
