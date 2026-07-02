import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { profile, footerLinks } from "../data/portfolioData";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  // Netlify form submission handler for JavaScript apps
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error("Form submission error:", error));
  };

  return (
    <footer id="contact" className="pb-10 mt-20">
      {/* GLASS PANEL CALL-TO-ACTION */}
      <div className="max-w-3xl p-8 mx-auto text-center glass-panel rounded-2xl sm:p-10">
        <h2 className="text-2xl font-semibold font-display sm:text-3xl">
          Let's build something.
        </h2>
        <p className="max-w-md mx-auto mt-2 mb-8 text-sm text-mute">
          Open to full-time roles across web engineering, applied ML, and
          backend/DSA-heavy teams.
        </p>

        {submitted ? (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center justify-center max-w-md p-6 mx-auto border bg-emerald-500/10 border-emerald-500/20 rounded-xl text-emerald-400">
            <CheckCircle className="mb-2" size={32} />
            <h3 className="text-base font-semibold">Message transmitted!</h3>
            <p className="mt-1 text-xs text-center text-emerald-400/80">
              Thanks! Your message has been logged. I will get back to you
              shortly.
            </p>
          </div>
        ) : (
          /* INTERACTIVE NETLIFY FORM */
          <form
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="grid max-w-xl gap-4 mx-auto font-mono text-xs text-left"
          >
            {/* CRITICAL FOR REACT + NETLIFY WORKFLOWS */}
            <input type="hidden" name="form-name" value="portfolio-contact" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-mute uppercase tracking-wider text-[10px]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Steve Rogers"
                  className="w-full px-4 py-3 text-sm transition-colors border bg-zinc-950/50 border-white/10 rounded-xl text-ink focus:outline-none focus:border-purple-500/50 placeholder:text-zinc-600"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-mute uppercase tracking-wider text-[10px]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="steve@shield.org"
                  className="w-full px-4 py-3 text-sm transition-colors border bg-zinc-950/50 border-white/10 rounded-xl text-ink focus:outline-none focus:border-purple-500/50 placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-mute uppercase tracking-wider text-[10px]"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                placeholder="Looking for a developer with your blend of web and data background..."
                className="w-full px-4 py-3 text-sm transition-colors border resize-none bg-zinc-950/50 border-white/10 rounded-xl text-ink focus:outline-none focus:border-purple-500/50 placeholder:text-zinc-600"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-2 font-sans text-sm font-medium transition-opacity shadow-lg cursor-pointer rounded-xl bg-signal-gradient text-void hover:opacity-90"
            >
              <Send size={14} />
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* FOOTER NAVIGATION MATRIX */}
      <div className="grid max-w-3xl gap-8 px-2 mx-auto mt-16 sm:grid-cols-2">
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="font-mono text-[11px] text-mute mb-3 tracking-wide uppercase">
              {group}
            </p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors text-mute hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* COPYRIGHT METRIC FLOOR */}
      <div className="flex flex-col justify-between max-w-3xl gap-4 px-2 pt-6 mx-auto mt-10 text-xs border-t border-white/5 sm:flex-row text-mute">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <p>No data is tracked on this site beyond anonymous page metrics.</p>
      </div>
    </footer>
  );
}
