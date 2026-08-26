import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { FolderGit2 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ProjectsSection() {
  const revealRef = useScrollReveal();

  const flagshipProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section
      id="projects"
      ref={revealRef}
      className="reveal-init py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
    >
      {/* Section Poster Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b-2 border-black dark:border-zinc-700 pb-6">
        <div>
          <div className="brutal-heading-tag flex items-center gap-1.5 w-fit">
            <FolderGit2 size={13} />
            <span>CURATED PORTFOLIO // 2026</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-ink dark:text-white tracking-tight">
            FEATURED PROJECTS
          </h2>
          <p className="font-body text-base sm:text-lg text-ink/80 dark:text-slate-300 mt-2 max-w-xl font-medium">
            A curated selection of full-stack web applications and real-time systems I have designed, engineered, and shipped.
          </p>
        </div>

        <div className="font-mono text-xs font-bold text-ink/70 dark:text-slate-400">
          [{projects.length} FLAGSHIP BUILDS]
        </div>
      </div>

      {/* Flagship Project Showcase (Project 01 — NoteOrbit) */}
      {flagshipProject && (
        <ProjectCard
          project={flagshipProject}
          index={0}
          isFlagship={true}
        />
      )}

      {/* 2-Column Grid for Secondary Projects (Projects 02–05) */}
      {secondaryProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {secondaryProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx + 1}
              isFlagship={false}
            />
          ))}
        </div>
      )}
    </section>
  );
}
