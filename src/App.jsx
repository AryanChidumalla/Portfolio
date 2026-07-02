import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ProjectMatrix from "./components/ProjectMatrix";
import Skills from "./components/Skills";
import EngineeringLog from "./components/EngineeringLog";
import Footer from "./components/Footer";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main className="px-5 pt-24 md:ml-80 lg:ml-96 sm:px-8 md:p-12 md:pt-12">
        <Hero active={activeFilter} setActive={setActiveFilter} />
        <ProjectMatrix active={activeFilter} />
        <Skills />
        {/* <EngineeringLog /> */}
        <Footer />
      </main>
    </div>
  );
}
