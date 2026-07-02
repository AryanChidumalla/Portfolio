import { filters } from '../data/portfolioData'

export default function RecruiterSelector({ active, setActive }) {
  return (
    <div className="mt-7" role="group" aria-label="Filter portfolio by field">
      <p className="font-mono text-xs text-mute mb-3 tracking-wide">
        // viewing as recruiter for —
      </p>
      <div className="flex flex-wrap gap-2.5">
        {filters.map((f) => {
          const isActive = active === f.id
          return (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              aria-pressed={isActive}
              className={`
                px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                border
                ${
                  isActive
                    ? 'bg-signal-gradient text-void border-transparent shadow-glow'
                    : 'glass text-mute hover:text-ink hover:border-white/25'
                }
              `}
            >
              {f.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
