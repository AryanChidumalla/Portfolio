import { ExternalLink, Github, Sparkles, Layers } from "lucide-react";
import TechIcon from "./TechIcon";

export default function ProjectCard({ project, index, isFlagship = false }) {
  const projectNumber = String(index + 1).padStart(2, "0");
  const hasLinks = Boolean(project.live || project.github);

  if (isFlagship) {
    return (
      <article className="group relative bg-white dark:bg-darkcanvas-card border-2 sm:border-3 border-black dark:border-zinc-700 shadow-brutal-lg transition-all duration-200 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-brutal-xl overflow-hidden mb-8">
        {/* Flagship Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-3.5 border-b-2 border-black dark:border-zinc-700 bg-paper-surface dark:bg-darkcanvas-surface">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs sm:text-sm font-black text-black bg-brutal-yellow px-2.5 py-0.5 border-2 border-black shadow-brutal-sm">
              PROJECT [{projectNumber}]
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-black bg-brutal-coral text-white px-2.5 py-0.5 border-2 border-black shadow-brutal-sm uppercase">
              <Sparkles size={13} />
              FLAGSHIP WORK
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink/75 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>STATUS: {project.status.toUpperCase()}</span>
          </div>
        </div>

        {/* Flagship Media & Content Grid */}
        <div className="grid gap-0 lg:grid-cols-12">
          {/* Screenshot / Media Frame */}
          <div className="lg:col-span-7 relative w-full aspect-[16/9] lg:aspect-auto min-h-[260px] sm:min-h-[340px] border-b-2 lg:border-b-0 lg:border-r-2 border-black dark:border-zinc-700 bg-black/5 dark:bg-black/40 overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                loading="eager"
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-8 text-ink/60 dark:text-slate-400">
                <Layers size={36} className="text-brutal-coral" />
                <span className="font-mono text-xs font-bold uppercase">
                  Flagship Architecture Preview
                </span>
              </div>
            )}
          </div>

          {/* Flagship Details & Actions */}
          <div className="flex flex-col justify-between p-6 space-y-5 bg-white lg:col-span-5 sm:p-8 dark:bg-darkcanvas-card">
            <div className="space-y-4">
              <div>
                <span
                  className="inline-block font-mono text-xs font-bold px-2.5 py-0.5 border border-black text-black mb-2 shadow-brutal-sm"
                  style={{ backgroundColor: project.accentColor || "#FFE600" }}
                >
                  {project.category}
                </span>
                <h3 className="text-3xl font-black leading-tight tracking-tight font-display sm:text-4xl lg:text-5xl text-ink dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs font-bold sm:text-sm text-brutal-coral dark:text-brutal-yellow">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm font-medium leading-relaxed font-body sm:text-base text-ink/85 dark:text-slate-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="pt-1">
                <p className="font-mono text-[11px] font-black uppercase text-ink/60 dark:text-slate-400 mb-2">
                  TECHNOLOGIES USED:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => {
                    const name = typeof tech === "string" ? tech : tech.name;
                    const icon = typeof tech === "object" ? tech.icon : null;
                    return (
                      <span
                        key={name}
                        className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-1.5 py-0.5 bg-paper-surface dark:bg-darkcanvas-surface border border-black dark:border-zinc-700 text-ink dark:text-slate-200 leading-none"
                      >
                        {icon && (
                          <TechIcon icon={icon} className="w-3 h-3 shrink-0" />
                        )}
                        <span>{name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-black dark:border-zinc-700">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn-primary text-xs sm:text-sm px-5 py-2.5"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink size={14} strokeWidth={2.5} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn-secondary text-xs sm:text-sm px-5 py-2.5"
                >
                  <span>SOURCE CODE</span>
                  <Github size={14} strokeWidth={2.5} />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Standard 2-column cards (Projects 02–05)
  return (
    <article className="group relative bg-white dark:bg-darkcanvas-card border-2 border-black dark:border-zinc-700 shadow-brutal transition-all duration-200 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-brutal-lg flex flex-col justify-between overflow-hidden">
      <div>
        {/* Card Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-b-2 border-black dark:border-zinc-700 bg-paper-surface dark:bg-darkcanvas-surface">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black text-black bg-brutal-yellow px-2 py-0.5 border border-black">
              PROJECT [{projectNumber}]
            </span>
            <span
              className="font-mono text-xs font-bold px-2 py-0.5 border border-black text-black"
              style={{ backgroundColor: project.accentColor || "#FFE600" }}
            >
              {project.category}
            </span>
          </div>

          <span className="font-mono text-[11px] font-bold text-ink/70 dark:text-slate-400">
            {project.status.toUpperCase()}
          </span>
        </div>

        {/* Media Frame / Screenshot */}
        <div className="relative w-full aspect-[16/10] overflow-hidden border-b-2 border-black dark:border-zinc-700 bg-black/5 dark:bg-black/40">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-6 text-ink/60 dark:text-slate-400">
              <Layers size={28} className="text-brutal-coral" />
              <span className="font-mono text-xs font-bold text-center uppercase">
                Application Interface
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3 sm:p-6">
          <div>
            <h3 className="text-2xl font-black tracking-tight font-display sm:text-3xl text-ink dark:text-white">
              {project.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm font-bold text-ink/75 dark:text-brutal-yellow mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm font-medium leading-relaxed font-body text-ink/85 dark:text-slate-300">
            {project.description}
          </p>

          {/* Tech Stack Pills with Icons */}
          {/* Tech Stack Pills with Icons */}
          <div className="flex flex-wrap gap-1 pt-1">
            {project.technologies.map((tech) => {
              const name = typeof tech === "string" ? tech : tech.name;
              const icon = typeof tech === "object" ? tech.icon : null;

              return (
                <span
                  key={name}
                  className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-1.5 py-0.5 bg-paper-surface dark:bg-darkcanvas-surface border border-black dark:border-zinc-700 text-ink dark:text-slate-200 leading-none"
                >
                  {icon && (
                    <TechIcon icon={icon} className="w-3 h-3 shrink-0" />
                  )}
                  <span>{name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      {hasLinks && (
        <div className="px-5 sm:px-6 py-3.5 flex flex-wrap items-center justify-end gap-2.5 border-t-2 border-black dark:border-zinc-700 bg-paper-surface/50 dark:bg-darkcanvas-surface/50">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-xs font-black bg-brutal-yellow text-black border-2 border-black shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              <span>LIVE DEMO</span>
              <ExternalLink size={12} strokeWidth={2.5} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-xs font-bold bg-white dark:bg-darkcanvas-card text-ink dark:text-white border-2 border-black dark:border-zinc-700 shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              <span>GITHUB</span>
              <Github size={12} strokeWidth={2.5} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
