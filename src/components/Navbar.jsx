import { useState } from "react";
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from "lucide-react";
import { profile } from "../data/portfolioData";
import BrandLogo from "./BrandLogo";

export default function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-paper-bg/95 dark:bg-darkcanvas-bg/95 backdrop-blur-sm border-b-2 border-black dark:border-zinc-700 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center"
          aria-label="Aryan Chidumalla Homepage"
        >
          <BrandLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 font-mono text-xs font-bold tracking-wider text-ink/75 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-darkcanvas-surface border border-transparent hover:border-black dark:hover:border-zinc-700 rounded-none sm:rounded-sm transition-all uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle, Available Pill & Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs font-bold text-ink dark:text-white bg-white dark:bg-darkcanvas-card border-2 border-black dark:border-zinc-700 shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <>
                <Moon size={13} className="text-brutal-coral fill-brutal-coral" />
                <span className="text-[11px]">DARK</span>
              </>
            ) : (
              <>
                <Sun size={13} className="text-brutal-yellow fill-brutal-yellow" />
                <span className="text-[11px]">LIGHT</span>
              </>
            )}
          </button>

          {/* Availability Pill */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 bg-white dark:bg-darkcanvas-surface border-2 border-black dark:border-zinc-700 text-[11px] font-mono font-bold text-ink dark:text-slate-300">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-600"></span>
            </span>
            <span>AVAILABLE</span>
          </div>

          {/* Resume CTA */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 font-mono text-xs font-black text-black bg-brutal-yellow border-2 border-black shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          >
            <FileText size={13} />
            <span>RESUME</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Actions (Theme Toggle & Menu) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 bg-white dark:bg-darkcanvas-card border-2 border-black dark:border-zinc-700 text-ink dark:text-white shadow-brutal-sm"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="p-1.5 bg-white dark:bg-darkcanvas-card border-2 border-black dark:border-zinc-700 text-ink dark:text-white shadow-brutal-sm"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-b-2 border-black dark:border-zinc-700 bg-paper-bg dark:bg-darkcanvas-bg px-4 py-5 space-y-3 animate-in fade-in duration-150">
          <div className="flex items-center justify-between px-3 py-2 bg-white dark:bg-darkcanvas-card border-2 border-black dark:border-zinc-700 text-xs font-mono font-bold">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-ink dark:text-white">{profile.status}</span>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 font-mono text-sm font-black text-ink dark:text-white hover:bg-brutal-yellow hover:text-black border-2 border-transparent hover:border-black transition-all uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 font-mono text-xs font-black text-black bg-brutal-yellow border-2 border-black shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <FileText size={14} />
            <span>DOWNLOAD RESUME</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
