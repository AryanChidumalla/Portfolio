import { Wrench, Terminal } from "lucide-react";
import { skillCategories } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Skills() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="skills"
      ref={revealRef}
      className="reveal-init py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
    >
      {/* Section Header */}
      <div className="mb-10 border-b-2 border-black dark:border-zinc-700 pb-6">
        <div className="brutal-heading-tag flex items-center gap-1.5 w-fit">
          <Wrench size={13} />
          <span>ARSENAL &amp; TECH STACK</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-ink dark:text-white tracking-tight">
          SKILLS &amp; TECHNOLOGIES
        </h2>
        <p className="font-body text-base sm:text-lg text-ink/80 dark:text-slate-300 mt-2 max-w-xl font-medium">
          Technologies and tools I use to build full-stack applications, APIs, and real-time systems.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="bg-white dark:bg-darkcanvas-card border-2 border-black dark:border-zinc-700 p-6 shadow-brutal flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between gap-2 border-b-2 border-black dark:border-zinc-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3.5 h-3.5 border-2 border-black"
                    style={{ backgroundColor: group.accent }}
                  />
                  <h3 className="font-display font-black text-base sm:text-lg text-ink dark:text-white">
                    {group.category}
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-ink/60 dark:text-slate-400">
                  [{group.skills.length}]
                </span>
              </div>

              {/* Skills Badge Pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-bold px-3 py-1 bg-paper-surface dark:bg-darkcanvas-surface border border-black dark:border-zinc-700 text-ink dark:text-slate-200 hover:bg-brutal-yellow hover:text-black hover:border-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
