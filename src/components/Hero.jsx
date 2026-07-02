import { hero } from "../data/portfolioData";
import RecruiterSelector from "./RecruiterSelector";

export default function Hero({ active, setActive }) {
  return (
    <section id="hero" className="pt-4 md:pt-2">
      <div className="flex items-center justify-between mb-6">
        <span className="mono-tag">portfolio.jsx</span>
        <span className="hidden mono-tag sm:inline-flex">v2026.07</span>
      </div>

      <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight max-w-2xl">
        {hero.headline}
      </h2>
      <p className="max-w-xl mt-5 text-base leading-relaxed text-mute sm:text-lg">
        {hero.sub}
      </p>

      <RecruiterSelector active={active} setActive={setActive} />
    </section>
  );
}
