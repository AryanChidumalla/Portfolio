import { ArrowUpRight, Github, Layers } from "lucide-react";

const categoryMeta = {
  web: {
    label: "Web / UI",
    from: "from-signal-violet",
    dot: "bg-signal-violet",
  },
  data: {
    label: "Data / AI",
    from: "from-signal-azure",
    dot: "bg-signal-azure",
  },
  sde: {
    label: "SDE / DSA",
    from: "from-signal-ember",
    dot: "bg-signal-ember",
  },
};

export default function ProjectCard({ project }) {
  const meta = categoryMeta[project.category];
  const image = project.image || null;

  return (
    <article className="overflow-hidden transition-colors glass rounded-2xl group hover:border-white/20">
      <div className="grid">
        {/* <div className="grid sm:grid-cols-[minmax(0,220px)_1fr]"> */}
        {/* Visual frame */}
        <div className="relative sm:min-h-[220px] p-6 flex items-center justify-center bg-white/[0.03] border-b sm:border-b-0 sm:border-r border-white/10">
          <div
            className={`absolute inset-0 opacity-20 bg-gradient-to-br ${meta.from} to-transparent`}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full aspect-[4/3] rounded-xl glass flex items-center justify-center">
            {image ? (
              <>
                {/* Dark glass cover mask to blend image into the portfolio layout */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />

                <img
                  src={image}
                  alt={`${name} preview`}
                  className="object-cover w-full h-full transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </>
            ) : (
              <Layers className="text-mute" size={30} strokeWidth={1.5} />
            )}
            {/* <Layers className="text-mute" size={30} strokeWidth={1.5} /> */}
          </div>
        </div>

        {/* Data */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-mute">
              <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
              {meta.label}
            </span>
            <div className="flex gap-2">
              <a
                href={project.links.repo}
                aria-label={`${project.name} repository`}
                className="transition-colors text-mute hover:text-ink"
              >
                <Github size={16} />
              </a>
              <a
                href={project.links.live}
                aria-label={`${project.name} live link`}
                className="transition-colors text-mute hover:text-ink"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <h3 className="text-lg font-semibold leading-snug font-display">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-mute">{project.tagline}</p>

          <dl className="mt-4 space-y-2.5 text-sm">
            <div>
              <dt className="font-mono text-[11px] text-signal-violet mb-0.5">
                Situation
              </dt>
              <dd className="leading-relaxed text-mute">{project.situation}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-signal-azure mb-0.5">
                Action
              </dt>
              <dd className="leading-relaxed text-mute">{project.action}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-signal-ember mb-0.5">
                Result
              </dt>
              <dd className="leading-relaxed text-ink/90">{project.result}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.stack.map((t) => (
              <span key={t} className="mono-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
