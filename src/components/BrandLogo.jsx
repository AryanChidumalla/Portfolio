export default function BrandLogo({
  size = "md",
  showWordmark = true,
  interactive = true,
  className = "",
}) {
  const markSizeMap = {
    sm: "w-7 h-7 text-xs border-2 shadow-brutal-sm",
    md: "w-8 h-8 text-sm border-2 border-black shadow-brutal-sm",
    lg: "w-10 h-10 text-base border-2 sm:border-3 border-black shadow-brutal",
  };

  const textSizeMap = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl sm:text-2xl",
  };

  return (
    <div className={`inline-flex items-center gap-2 font-mono select-none ${className}`}>
      {/* Neo-Brutalist Stamp Tile */}
      <div
        className={`flex items-center justify-center bg-brutal-yellow text-black font-black font-mono leading-none ${
          markSizeMap[size] || markSizeMap.md
        } ${
          interactive
            ? "transition-all duration-150 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] group-hover:shadow-brutal active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            : ""
        }`}
      >
        AC
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <span
          className={`font-display font-black tracking-tight text-ink dark:text-white ${
            textSizeMap[size] || textSizeMap.md
          } ${
            interactive
              ? "transition-colors group-hover:text-brutal-coral dark:group-hover:text-brutal-yellow"
              : ""
          }`}
        >
          aryan.dev
        </span>
      )}
    </div>
  );
}
