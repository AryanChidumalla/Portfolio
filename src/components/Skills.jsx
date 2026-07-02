import { skills } from '../data/portfolioData'

const categoryAccent = {
  'Core Engineering & DSA': 'bg-signal-ember',
  'Web Architecture & Design': 'bg-signal-violet',
  'Data Intelligence': 'bg-signal-azure',
}

export default function Skills() {
  return (
    <section id="skills" className="mt-16 sm:mt-20">
      <h2 className="font-display font-semibold text-2xl mb-6">Skill Dashboard</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2 h-2 rounded-full ${categoryAccent[category]}`} />
              <h3 className="font-medium text-sm">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {list.map((s) => (
                <span key={s} className="mono-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
