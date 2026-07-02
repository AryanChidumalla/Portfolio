import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'

export default function ProjectMatrix({ active }) {
  const visible =
    active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="mt-16 sm:mt-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-semibold text-2xl">Project Matrix</h2>
        <span className="mono-tag">{visible.length} shown</span>
      </div>

      {visible.length === 0 ? (
        <div className="glass rounded-2xl p-10 text-center text-mute text-sm">
          No projects tagged for this field yet — try "Show All Fields".
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </section>
  )
}
