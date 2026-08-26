import { Code2, Cpu, Sparkles, User, ArrowRight, Check } from "lucide-react";
import { aboutData, profile } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import BrandLogo from "./BrandLogo";

export default function AboutSection() {
  const revealRef = useScrollReveal();

  const iconMap = {
    Code2: Code2,
    Cpu: Cpu,
    Sparkles: Sparkles,
  };

  return (
    <section
      id="about"
      ref={revealRef}
      className="reveal-init py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
    >
      {/* Section Header */}
      <div className="mb-10 border-b-2 border-black dark:border-zinc-700 pb-6">
        <div className="brutal-heading-tag flex items-center gap-1.5 w-fit">
          <User size={13} />
          <span>DEVELOPER PROFILE // BIO</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-ink dark:text-white tracking-tight">
          ABOUT ARYAN
        </h2>
        <p className="font-body text-base sm:text-lg text-ink/80 dark:text-slate-300 mt-2 max-w-xl font-medium">
          {aboutData.headline}
        </p>
      </div>

      {/* Main Asymmetric About Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal Poster Card */}
        <div className="lg:col-span-5 bg-white dark:bg-darkcanvas-card border-2 border-black dark:border-zinc-700 p-6 sm:p-8 shadow-brutal space-y-5">
          <div className="flex items-center gap-3 border-b-2 border-black dark:border-zinc-700 pb-4">
            <BrandLogo size="lg" showWordmark={false} interactive={false} />
            <div>
              <h3 className="font-display font-black text-xl text-ink dark:text-white">
                {profile.name}
              </h3>
              <p className="font-mono text-xs font-bold text-brutal-coral dark:text-brutal-yellow uppercase">
                {profile.role}
              </p>
            </div>
          </div>

          <div className="space-y-4 font-body text-sm sm:text-base text-ink/85 dark:text-slate-300 leading-relaxed font-medium">
            {aboutData.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Monospace Spec Sheet */}
          <div className="p-3.5 bg-paper-surface dark:bg-darkcanvas-surface border-2 border-black dark:border-zinc-700 space-y-1.5 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-ink/60 dark:text-slate-400">LOCATION:</span>
              <span className="font-bold text-ink dark:text-white">NAVI MUMBAI, IN</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/60 dark:text-slate-400">TIMEZONE:</span>
              <span className="font-bold text-ink dark:text-white">IST (UTC+5:30)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/60 dark:text-slate-400">CORE FOCUS:</span>
              <span className="font-bold text-brutal-coral dark:text-brutal-yellow">FULL-STACK &amp; BACKEND</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-black text-ink dark:text-white hover:text-brutal-coral dark:hover:text-brutal-yellow uppercase tracking-wider"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Right Column: Asymmetric Engineering Cards */}
        <div className="lg:col-span-7 space-y-4">
          {aboutData.highlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || Code2;
            return (
              <div
                key={item.title}
                className="bg-white dark:bg-darkcanvas-card border-2 border-black dark:border-zinc-700 p-6 shadow-brutal transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className="p-2 border-2 border-black text-black font-black"
                    style={{ backgroundColor: item.accent }}
                  >
                    <Icon size={18} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-display font-black text-lg sm:text-xl text-ink dark:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="font-body text-sm sm:text-base text-ink/80 dark:text-slate-300 leading-relaxed font-medium pl-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
