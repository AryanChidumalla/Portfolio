import { ArrowUpRight } from 'lucide-react'
import { engineeringLog } from '../data/portfolioData'

export default function EngineeringLog() {
  return (
    <section id="log" className="mt-16 sm:mt-20">
      <h2 className="font-display font-semibold text-2xl mb-6">Engineering Log</h2>
      <div className="flex flex-col divide-y divide-white/10 glass rounded-2xl overflow-hidden">
        {engineeringLog.map((entry) => (
          <a
            key={entry.id}
            href="#"
            className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-white/[0.04] transition-colors"
          >
            <div className="min-w-0">
              <h3 className="font-medium text-sm sm:text-base truncate">{entry.title}</h3>
              <p className="text-mute text-sm mt-1 line-clamp-1">{entry.excerpt}</p>
              <p className="font-mono text-[11px] text-mute mt-2">
                {entry.date} · {entry.readTime} read
              </p>
            </div>
            <ArrowUpRight
              size={18}
              className="text-mute group-hover:text-ink shrink-0 transition-colors"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
