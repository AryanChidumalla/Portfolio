import {
  ArrowUpRight,
  Circle,
  Code2,
  Diamond,
  Plus,
  Sparkles,
  Terminal,
} from "lucide-react";

const elements = [
  // ─────────────────────────────
  // TOP AREA
  // ─────────────────────────────

  {
    icon: Sparkles,
    className: "top-[8%] left-[8%]",
    size: 46,
    color: "text-brutal-yellow",
    animation: "animate-brutal-float",
    duration: "6s",
  },

  {
    icon: Code2,
    className: "top-[13%] left-[38%]",
    size: 28,
    color: "text-ink/20 dark:text-white/15",
    animation: "animate-brutal-wiggle",
    duration: "7s",
  },

  {
    icon: Plus,
    className: "top-[10%] right-[12%]",
    size: 48,
    color: "text-brutal-pink",
    animation: "animate-brutal-float-slow",
    duration: "8s",
  },

  {
    icon: Diamond,
    className: "top-[22%] left-[22%]",
    size: 32,
    color: "text-brutal-cyan",
    animation: "animate-brutal-float",
    duration: "7s",
  },

  {
    icon: ArrowUpRight,
    className: "top-[20%] right-[32%]",
    size: 38,
    color: "text-ink/25 dark:text-white/15",
    animation: "animate-brutal-wiggle",
    duration: "6s",
  },

  // ─────────────────────────────
  // UPPER-MIDDLE
  // ─────────────────────────────

  {
    icon: Circle,
    className: "top-[32%] left-[8%]",
    size: 30,
    color: "text-brutal-orange",
    animation: "animate-brutal-pulse",
    duration: "5s",
  },

  {
    icon: Sparkles,
    className: "top-[29%] left-[47%]",
    size: 30,
    color: "text-brutal-yellow",
    animation: "animate-brutal-float",
    duration: "7s",
  },

  {
    icon: Terminal,
    className: "top-[34%] right-[8%]",
    size: 32,
    color: "text-ink/20 dark:text-white/15",
    animation: "animate-brutal-float-slow",
    duration: "8s",
  },

  {
    icon: Diamond,
    className: "top-[40%] right-[25%]",
    size: 38,
    color: "text-brutal-pink",
    animation: "animate-brutal-spin",
    duration: "16s",
  },

  // ─────────────────────────────
  // CENTER
  // ─────────────────────────────

  {
    icon: Plus,
    className: "top-[46%] left-[18%]",
    size: 34,
    color: "text-brutal-cyan",
    animation: "animate-brutal-float",
    duration: "6s",
  },

  {
    icon: ArrowUpRight,
    className: "top-[48%] left-[42%]",
    size: 34,
    color: "text-ink/20 dark:text-white/15",
    animation: "animate-brutal-wiggle",
    duration: "7s",
  },

  {
    icon: Circle,
    className: "top-[50%] right-[14%]",
    size: 28,
    color: "text-brutal-orange",
    animation: "animate-brutal-pulse",
    duration: "5.5s",
  },

  {
    icon: Code2,
    className: "top-[55%] right-[38%]",
    size: 26,
    color: "text-ink/20 dark:text-white/15",
    animation: "animate-brutal-float-slow",
    duration: "8s",
  },

  // ─────────────────────────────
  // LOWER-MIDDLE
  // ─────────────────────────────

  {
    icon: Sparkles,
    className: "top-[62%] left-[10%]",
    size: 34,
    color: "text-brutal-yellow",
    animation: "animate-brutal-wiggle",
    duration: "6s",
  },

  {
    icon: Diamond,
    className: "top-[65%] left-[32%]",
    size: 30,
    color: "text-brutal-cyan",
    animation: "animate-brutal-float",
    duration: "7s",
  },

  {
    icon: Plus,
    className: "top-[63%] right-[9%]",
    size: 42,
    color: "text-brutal-pink",
    animation: "animate-brutal-float-slow",
    duration: "8s",
  },

  {
    icon: Terminal,
    className: "top-[70%] right-[30%]",
    size: 28,
    color: "text-ink/20 dark:text-white/15",
    animation: "animate-brutal-float",
    duration: "7s",
  },

  // ─────────────────────────────
  // BOTTOM
  // ─────────────────────────────

  {
    icon: Circle,
    className: "top-[76%] left-[7%]",
    size: 36,
    color: "text-brutal-orange",
    animation: "animate-brutal-pulse",
    duration: "5s",
  },

  {
    icon: ArrowUpRight,
    className: "top-[78%] left-[42%]",
    size: 40,
    color: "text-ink/25 dark:text-white/15",
    animation: "animate-brutal-wiggle",
    duration: "6s",
  },

  {
    icon: Sparkles,
    className: "top-[80%] right-[20%]",
    size: 40,
    color: "text-brutal-yellow",
    animation: "animate-brutal-float",
    duration: "7s",
  },

  {
    icon: Diamond,
    className: "top-[88%] left-[25%]",
    size: 34,
    color: "text-brutal-pink",
    animation: "animate-brutal-spin-reverse",
    duration: "18s",
  },

  {
    icon: Plus,
    className: "top-[87%] right-[7%]",
    size: 32,
    color: "text-brutal-cyan",
    animation: "animate-brutal-float-slow",
    duration: "8s",
  },
];

export default function FloatingBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none "
    >
      {elements.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className={`
              absolute
              hidden sm:block
              ${item.className}
              ${item.color}
              ${item.animation}
            `}
            style={{
              animationDuration: item.duration,
            }}
          >
            <Icon size={item.size} strokeWidth={3} absoluteStrokeWidth />
          </div>
        );
      })}
    </div>
  );
}
