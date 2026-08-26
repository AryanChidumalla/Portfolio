import { useTheme } from "./hooks/useTheme";
import FloatingBackground from "./components/FloatingBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-paper-bg dark:bg-darkcanvas-bg text-ink dark:text-slate-100 relative selection:bg-brutal-yellow selection:text-black transition-colors duration-200">
      {/* Fixed Developer Floating Background Layer */}
      <FloatingBackground />

      {/* Sticky Neo-Brutalist Navigation Bar with Theme Toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}
