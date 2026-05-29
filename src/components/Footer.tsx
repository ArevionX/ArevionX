import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import arevionxLogo from "@/assets/img/arevionx-logo.png";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2H21.5l-7.51 8.58L23 22h-6.797l-5.32-6.94L4.8 22H1.54l8.04-9.19L1 2h6.91l4.81 6.36L18.244 2Zm-1.19 18h1.88L7.04 4H5.06l11.994 16Z" />
    </svg>
  );
}

const quickLinks = ["Services", "Portfolio", "About Us", "FAQ", "Contact Us"];
const social = ["LinkedIn", "Instagram", "Twitter / X", "Facebook", "Youtube"];
const legal = ["Terms of service", "Privacy policy", "Cookie policy"];

export function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 pt-16 pb-0 overflow-hidden bg-background text-foreground">
      {/* Footer card — matches landing page light theme */}
      <div className="relative mx-auto max-w-7xl rounded-3xl border border-border bg-card p-8 md:p-12 shadow-[0_20px_80px_-30px_oklch(0.68_0.19_42/0.25)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={arevionxLogo}
                alt="Arevionx Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-3xl tracking-tight">arevionx</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              We craft scalable digital products — from startups to enterprises, delivered with precision.
            </p>
            <div className="flex items-center gap-5 text-muted-foreground">
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><XIcon className="h-[18px] w-[18px]" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-accent transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">Quick Links</h4>
            <ul className="space-y-3 text-[15px]">
              {quickLinks.map((l) => (
                <li key={l}><a href="#" className="text-foreground/80 hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">Social</h4>
            <ul className="space-y-3 text-[15px]">
              {social.map((l) => (
                <li key={l}><a href="#" className="text-foreground/80 hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">Legal</h4>
            <ul className="space-y-3 text-[15px]">
              {legal.map((l) => (
                <li key={l}><a href="#" className="text-foreground/80 hover:text-accent transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} ArevionX. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="underline-offset-4 hover:underline hover:text-accent transition-colors">Terms of service</a>
            <a href="#" className="underline-offset-4 hover:underline hover:text-accent transition-colors">Privacy policy</a>
            <a href="#" className="underline-offset-4 hover:underline hover:text-accent transition-colors">Cookie policy</a>
          </div>
        </div>
      </div>

      {/* Giant brand wordmark — orange/warm gradient matching landing page accent */}
      <div className="relative mx-auto max-w-[1600px] mt-10 select-none pointer-events-none">
        <div
          aria-hidden="true"
          className="text-center font-display leading-none bg-clip-text text-transparent"
          style={{
            fontSize: "clamp(5rem, 22vw, 22rem)",
            backgroundImage:
              "linear-gradient(180deg, oklch(0.78 0.16 50) 0%, oklch(0.68 0.19 42) 45%, oklch(0.92 0.04 80 / 0.15) 100%)",
            WebkitTextStroke: "1px oklch(0.68 0.19 42 / 0.15)",
          }}
        >
          ArevionX
        </div>
        {/* Warm glow underneath */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 h-40 w-[70%] rounded-[50%] blur-3xl"
          style={{ background: "radial-gradient(ellipse at center, oklch(0.68 0.19 42 / 0.35), transparent 70%)" }}
        />
      </div>
    </footer>
  );
}
