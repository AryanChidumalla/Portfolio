import React from "react";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  Zap,
  Film,
  Terminal,
  Cpu,
  Smartphone,
  Coffee,
} from "lucide-react";

export default function TechIcon({ icon, className = "w-3.5 h-3.5" }) {
  const iconKey = (icon || "").toLowerCase();

  switch (iconKey) {
    case "react":
      return (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          className={className}
          fill="currentColor"
        >
          <circle cx="0" cy="0" r="2.05" fill="#00D8F6" />
          <g stroke="#00D8F6" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "node":
    case "nodejs":
      return (
        <svg viewBox="0 0 32 32" className={className} fill="currentColor">
          <path
            fill="#22C55E"
            d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm8.8 19.8l-8.8 5.1-8.8-5.1v-10l8.8-5.1 8.8 5.1v10z"
          />
        </svg>
      );

    case "mongodb":
    case "mongo":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path
            fill="#10B981"
            d="M12 2C12 2 7 8.5 7 14c0 3.3 2.2 6 5 7 2.8-1 5-3.7 5-7 0-5.5-5-12-5-12zm0 18c-2 0-3.5-1.5-3.5-4 0-3 2.5-6.5 3.5-8.5 1 2 3.5 5.5 3.5 8.5 0 2.5-1.5 4-3.5 4z"
          />
        </svg>
      );

    case "express":
      return <Server className={`${className} text-ink/75 dark:text-slate-300`} />;

    case "websocket":
    case "websockets":
      return <Zap className={`${className} text-brutal-yellow`} />;

    case "socketio":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path
            fill="#00D8F6"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-3h3l-5-7v3H8l5 7z"
          />
        </svg>
      );

    case "tailwind":
    case "tailwindcss":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path
            fill="#06B6D4"
            d="M12 6c-3.6 0-5.4 1.8-5.4 5.4 1.2-1.8 2.7-2.4 4.5-1.8 1 0.4 1.8 1.2 2.6 2 1.3 1.4 2.8 3 6.3 3 3.6 0 5.4-1.8 5.4-5.4-1.2 1.8-2.7 2.4-4.5 1.8-1-0.4-1.8-1.2-2.6-2-1.3-1.4-2.8-3-6.3-3zm-6.6 6c-3.6 0-5.4 1.8-5.4 5.4 1.2-1.8 2.7-2.4 4.5-1.8 1 0.4 1.8 1.2 2.6 2 1.3 1.4 2.8 3 6.3 3 3.6 0 5.4-1.8 5.4-5.4-1.2 1.8-2.7 2.4-4.5 1.8-1-0.4-1.8-1.2-2.6-2-1.3-1.4-2.8-3-6.3-3z"
          />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <span className="font-mono text-[10px] font-black bg-brutal-yellow text-black px-1 rounded-[2px] leading-none py-0.5 border border-black">
          JS
        </span>
      );

    case "typescript":
    case "ts":
      return (
        <span className="font-mono text-[10px] font-black bg-blue-600 text-white px-1 rounded-[2px] leading-none py-0.5 border border-black">
          TS
        </span>
      );

    case "tmdb":
    case "tmdb api":
      return <Film className={`${className} text-brutal-coral`} />;

    case "api":
    case "rest":
    case "rest api":
    case "rest apis":
      return <Globe className={`${className} text-brutal-cyan`} />;

    case "java":
      return <Coffee className={`${className} text-brutal-coral`} />;

    case "android":
      return <Smartphone className={`${className} text-emerald-500`} />;

    case "database":
    case "sql":
      return <Database className={`${className} text-amber-500`} />;

    default:
      return <Code2 className={`${className} text-ink/75 dark:text-slate-300`} />;
  }
}
