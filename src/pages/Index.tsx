import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <Projects /> */}
      <Projects
        title="Recent Projects"
        description="Here are a few things I’ve been working on recently."
        limit={3}
        showViewAllButton={true}
      />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
