import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer & UI/UX Designer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <div className="fade-in-up mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-text-secondary mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Aryan Chidumalla
            </h1>
          </div>

          {/* Animated Title */}
          <div className="fade-in-up stagger-delay-1 mb-8">
            <div className="text-hero text-accent min-h-[1.2em] flex items-center justify-center">
              <span className="typewriter font-mono">{displayText}</span>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="fade-in-up stagger-delay-2 mb-12">
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Aspiring UI/UX Designer and Frontend Developer skilled in React,
              JavaScript, and Figma, with a strong foundation in Python and C++.
              Passionate about crafting intuitive interfaces and seamless
              digital experiences that bring impactful ideas to life.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up stagger-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-border-soft hover:bg-hover text-text-primary px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open("/Resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
