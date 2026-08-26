import { useState } from "react";
import { Send, CheckCircle, Copy, Check, Github, Linkedin, Mail, ArrowUp, Sparkles } from "lucide-react";
import { profile, footerLinks } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const revealRef = useScrollReveal();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aryanchidumalla@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      ref={revealRef}
      className="reveal-init py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
    >
      {/* Contact Call-To-Action Banner */}
      <div className="bg-white dark:bg-darkcanvas-card border-3 border-black dark:border-zinc-700 p-6 sm:p-12 shadow-brutal-xl mb-12">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-8">
          <div className="brutal-heading-tag flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles size={13} />
            <span>LET'S CONNECT // OPEN FOR WORK</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-ink dark:text-white tracking-tight">
            HAVE AN IDEA? LET'S BUILD IT.
          </h2>
          <p className="font-body text-base sm:text-lg text-ink/80 dark:text-slate-300 font-medium">
            Available for full-time software engineering roles, high-impact product builds, and technical collaborations.
          </p>

          {/* Quick Copy Email Stamp Pill */}
          <div className="pt-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper-surface dark:bg-darkcanvas-surface border-2 border-black dark:border-zinc-700 font-mono text-xs sm:text-sm font-black text-ink dark:text-white shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
            >
              <Mail size={16} className="text-brutal-coral" />
              <span>aryanchidumalla@gmail.com</span>
              {copiedEmail ? (
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-black">
                  <Check size={14} strokeWidth={3} /> COPIED!
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-ink/60 dark:text-slate-400 text-xs font-bold">
                  <Copy size={13} /> COPY
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="max-w-md mx-auto p-6 bg-emerald-100 dark:bg-emerald-950/50 border-2 border-black dark:border-emerald-500/50 text-center space-y-2 text-emerald-900 dark:text-emerald-300">
            <CheckCircle className="mx-auto" size={36} strokeWidth={2.5} />
            <h3 className="font-display font-black text-xl">MESSAGE TRANSMITTED!</h3>
            <p className="font-body text-xs sm:text-sm font-medium">
              Thanks for reaching out. I'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-4 font-mono text-xs text-left"
          >
            <input type="hidden" name="form-name" value="portfolio-contact" />
            <p hidden>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-ink dark:text-slate-200 uppercase tracking-wider text-xs font-black">
                  YOUR NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 text-sm bg-paper-surface dark:bg-darkcanvas-surface border-2 border-black dark:border-zinc-700 text-ink dark:text-white focus:outline-none focus:border-brutal-yellow transition-colors placeholder:text-ink/40 dark:placeholder:text-slate-500 font-body font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-ink dark:text-slate-200 uppercase tracking-wider text-xs font-black">
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3 text-sm bg-paper-surface dark:bg-darkcanvas-surface border-2 border-black dark:border-zinc-700 text-ink dark:text-white focus:outline-none focus:border-brutal-yellow transition-colors placeholder:text-ink/40 dark:placeholder:text-slate-500 font-body font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-ink dark:text-slate-200 uppercase tracking-wider text-xs font-black">
                MESSAGE / INQUIRY
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your product, engineering team, or role..."
                className="w-full px-4 py-3 text-sm bg-paper-surface dark:bg-darkcanvas-surface border-2 border-black dark:border-zinc-700 text-ink dark:text-white focus:outline-none focus:border-brutal-yellow transition-colors resize-none placeholder:text-ink/40 dark:placeholder:text-slate-500 font-body font-medium"
              />
            </div>

            <button
              type="submit"
              className="brutal-btn-primary w-full py-3.5 text-sm sm:text-base font-black tracking-wider"
            >
              <Send size={16} strokeWidth={2.5} />
              <span>SEND TRANSMISSION</span>
            </button>
          </form>
        )}
      </div>

      {/* Footer Navigation & Social Links */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t-2 border-black dark:border-zinc-700 pt-8">
        {/* Navigation links */}
        <div className="flex flex-wrap items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="font-mono text-xs font-black text-ink/75 dark:text-slate-400 hover:text-brutal-coral dark:hover:text-brutal-yellow transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {profile.socials.map((s) => {
            const Icon =
              s.icon === "Github"
                ? Github
                : s.icon === "Linkedin"
                ? Linkedin
                : Mail;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="brutal-btn-icon"
                title={s.label}
              >
                <Icon size={18} />
              </a>
            );
          })}

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="brutal-btn-icon"
            title="Back to Top"
          >
            <ArrowUp size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-8 text-center sm:text-left font-mono text-xs font-bold text-ink/60 dark:text-slate-400 flex flex-col sm:flex-row justify-between gap-2 uppercase">
        <p>© {new Date().getFullYear()} ARYAN CHIDUMALLA. MODERN NEO-BRUTALIST EDITION.</p>
        <p>HANDCRAFTED · TACTILE · FAST</p>
      </div>
    </footer>
  );
}
