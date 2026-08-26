import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sparkles,
  Terminal,
  Code,
} from "lucide-react";
import { profile } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="hero"
      ref={revealRef}
      className="relative z-10 max-w-6xl px-4 pt-8 mx-auto reveal-init sm:pt-14 pb-14 sm:pb-20 sm:px-6"
    >
      {/* Top Poster Header Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-black dark:border-zinc-700">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-black tracking-wider uppercase text-ink dark:text-slate-300">
          <Terminal size={14} className="text-brutal-coral" />
          <span>INDEX // ARYAN_CHIDUMALLA_2026</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block font-mono text-[11px] font-bold px-2 py-0.5 bg-paper-surface dark:bg-darkcanvas-surface border border-black dark:border-zinc-700 text-ink/70 dark:text-slate-400">
            LAT 19.0330° N / LON 73.0297° E
          </span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 border-2 border-black dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-300 font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>AVAILABLE FOR HIRE</span>
          </div>
        </div>
      </div>

      {/* Main Poster Layout */}
      <div className="grid items-start gap-8 lg:grid-cols-12">
        {/* Left Column: Bold Typography & Intro */}
        <div className="space-y-6 lg:col-span-8">
          <div className="space-y-3">
            {/* Tilted Tag */}
            <div className="inline-block transform -rotate-1">
              <span className="px-3 py-1 font-mono text-xs font-black text-black uppercase border-2 border-black bg-brutal-yellow shadow-brutal-sm">
                ⚡ FULL-STACK DEVELOPER &amp; SYSTEMS BUILDER
              </span>
            </div>

            {/* Oversized Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-ink dark:text-white tracking-tight leading-[1.04]">
              I BUILD PRACTICAL DIGITAL SYSTEMS &amp; FAST WEB PRODUCTS.
            </h1>
          </div>

          <p className="max-w-2xl text-base font-medium leading-relaxed font-body sm:text-xl text-ink/80 dark:text-slate-300">
            {profile.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 text-sm brutal-btn-primary sm:text-base"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowDown size={18} strokeWidth={2.5} />
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm brutal-btn-secondary sm:text-base"
            >
              <FileText size={18} />
              <span>RESUME</span>
            </a>

            {/* Social Stamp Icons */}
            <div className="flex items-center gap-2">
              {profile.socials.map((s) => {
                const Icon =
                  s.icon === "Github"
                    ? Github
                    : s.icon === "Linkedin"
                      ? Linkedin
                      : Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="brutal-btn-icon"
                    title={s.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Asymmetric Highlight Cards */}
        <div className="space-y-4 lg:col-span-4">
          {/* Quick Metrics Poster Card */}
          <div className="p-5 space-y-4 bg-white border-2 border-black dark:bg-darkcanvas-card dark:border-zinc-700 shadow-brutal">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black dark:border-zinc-700">
              <span className="font-mono text-xs font-black tracking-wider uppercase text-ink dark:text-white">
                DEVELOPER SNAPSHOT
              </span>

              <span className="font-mono text-xs font-bold text-brutal-lime">
                [BUILDING]
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 border-2 border-black bg-paper-bg dark:bg-darkcanvas-surface dark:border-zinc-700 shadow-brutal-sm">
                <div className="text-2xl font-black font-display sm:text-3xl text-ink dark:text-white">
                  5
                </div>
                <div className="mt-1 font-mono text-[11px] font-bold uppercase text-ink/70 dark:text-slate-400">
                  FLAGSHIP BUILDS
                </div>
              </div>

              <div className="p-3 border-2 border-black bg-paper-bg dark:bg-darkcanvas-surface dark:border-zinc-700 shadow-brutal-sm">
                <div className="text-2xl font-black font-display sm:text-3xl text-ink dark:text-white">
                  MERN
                </div>
                <div className="mt-1 font-mono text-[11px] font-bold uppercase text-ink/70 dark:text-slate-400">
                  PRIMARY STACK
                </div>
              </div>

              <div className="p-3 border-2 border-black bg-paper-bg dark:bg-darkcanvas-surface dark:border-zinc-700 shadow-brutal-sm">
                <div className="text-2xl font-black font-display sm:text-3xl text-ink dark:text-white">
                  FULL
                </div>
                <div className="mt-1 font-mono text-[11px] font-bold uppercase text-ink/70 dark:text-slate-400">
                  STACK FOCUS
                </div>
              </div>

              <div className="p-3 text-black border-2 border-black bg-brutal-yellow shadow-brutal-sm">
                <div className="text-2xl font-black font-display sm:text-3xl">
                  24/7
                </div>
                <div className="mt-1 font-mono text-[11px] font-black uppercase">
                  BUILD • LEARN • SHIP
                </div>
              </div>
            </div>

            <div className="p-3 border-2 border-black dark:border-zinc-700 bg-paper-bg dark:bg-darkcanvas-surface">
              <div className="mb-2 font-mono text-[11px] font-black uppercase text-ink dark:text-white">
                CURRENTLY EXPLORING
              </div>

              <div className="flex flex-wrap gap-2">
                {["Java", "Android", "Backend", "System Design"].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 font-mono text-[10px] font-black uppercase border-2 border-black dark:border-zinc-600 bg-white dark:bg-darkcanvas-card text-ink dark:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Diagonal Stripe Poster Accent */}
          <div className="w-full h-4 border-2 border-black dark:border-zinc-700 stripe-accent shadow-brutal-sm" />

          {/* Quick statement badge */}
          <div className="p-4 border-2 border-black bg-brutal-cyan/15 dark:bg-brutal-cyan/10 dark:border-brutal-cyan/40 shadow-brutal-sm">
            <p className="font-mono text-xs font-bold leading-relaxed text-ink dark:text-slate-200">
              "Focused on responsive UI interactions, reliable backend endpoints, and clean data modeling."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
