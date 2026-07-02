import { Github, Linkedin, Mail, Download, X, Menu } from "lucide-react";
import { profile } from "../data/portfolioData";
import AvatarCanvas from "./AvatarCanvas"; // Import your new 3D sub-component file
import Spline from "@splinetool/react-spline";

const iconMap = { Github, Linkedin, Mail };

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-4 border-b md:hidden glass-panel border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-signal-gradient flex items-center justify-center font-mono text-[11px] font-semibold text-void">
            {profile.avatarInitials}
          </div>
          <span className="text-sm font-semibold font-display">
            {profile.name}
          </span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="p-2 rounded-md hover:bg-white/5"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar / drawer */}
      <aside
        className={`
          fixed z-30 left-0 top-0 h-screen w-80 lg:w-96
          md:translate-x-0 transition-transform duration-300 ease-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          glass-panel border-r border-white/10
          flex flex-col justify-between
          pt-20 md:pt-10 pb-8 px-7
          overflow-y-auto
        `}
      >
        <div>
          {/* Avatar card */}
          <div className="relative rounded-2xl p-[1px] bg-signal-gradient shadow-glow">
            <div
              className="flex flex-col items-center p-6 text-center rounded-2xl bg-panel"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
                backgroundSize: "14px 14px",
              }}
            >
              {/* CLEAN IMPORT INTEGRATION */}
              <AvatarCanvas />
              {/* <Spline scene="https://prod.spline.design/G4QoeXyACCiEaKIr/scene.splinecode" /> */}

              <h1 className="text-xl font-semibold font-display">
                {profile.name}
              </h1>
              <p className="mt-1 text-sm text-mute">{profile.subtitle}</p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 mt-5 font-mono text-xs text-mute">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-signal-violet opacity-60"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-signal-violet"></span>
            </span>
            {profile.status}
          </div>
          <p className="mt-1 font-mono text-xs text-mute">{profile.location}</p>

          {/* Stats */}
          <div className="mt-7 grid grid-cols-1 gap-2.5">
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between px-4 py-3 glass rounded-xl"
              >
                <span className="text-sm text-mute">{s.label}</span>
                <span className="font-mono text-sm font-semibold signal-text">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer anchor */}
        <div className="mt-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon] || Mail;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 transition-colors rounded-lg glass text-mute hover:text-ink hover:border-signal-violet/60"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center justify-center w-full gap-2 py-3 font-mono text-sm font-medium transition-opacity rounded-xl bg-signal-gradient text-void hover:opacity-90"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </aside>

      {/* Mobile scrim */}
      {mobileOpen && (
        <button
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-20 md:hidden bg-black/60 backdrop-blur-sm"
        />
      )}
    </>
  );
}
