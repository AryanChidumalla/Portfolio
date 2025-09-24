import { ExternalLink, Github, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  role: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SpendWise",
    description: "Cross-platform React Native app for expense tracking",
    longDescription:
      "Built a minimalist expense tracking app with real-time summaries and smooth navigation for iOS and Android. Designed for simple personal finance management on the go.",
    tech: ["React Native", "Figma", "JavaScript"],
    role: "Frontend Developer & Designer",
    image: "/api/placeholder/600/400",
    liveUrl: undefined,
    githubUrl: "https://github.com/AryanChidumalla/SpendWise",
    figmaUrl: "https://www.figma.com/design/7DcYWu61vgd9IVvEJ5CcqA/SpendWise",
    year: "2024",
  },
  {
    id: 2,
    title: "NoteVault",
    description: "Powerful note-taking app with collaboration features",
    longDescription:
      "Designed and developed NoteVault, a modern note-taking tool enabling instant capture, organization, and real-time collaboration. Intuitive UI focused on creativity and productivity.",
    tech: ["React", "Figma", "JavaScript", "Netlify"],
    role: "Frontend Developer & UI Designer",
    image: "/api/placeholder/600/400",
    liveUrl: "https://notevaultonline.netlify.app/",
    githubUrl: "https://github.com/AryanChidumalla/NoteVault",
    figmaUrl:
      "https://www.figma.com/design/z5ue8Dm2SGwdi8fvw92ddw/NoteVault-Web",
    year: "2024",
  },
  {
    id: 3,
    title: "Mindora",
    description: "Mental health app for journaling and mood tracking",
    longDescription:
      "Mindora simplifies the mental health journey with guided journaling, daily mood tracking, and personalized insights in a secure, supportive space.",
    tech: ["React", "Figma", "JavaScript", "Netlify"],
    role: "Frontend Developer & Designer",
    image: "/api/placeholder/600/400",
    liveUrl: "https://mindoraonline.netlify.app/",
    githubUrl: "https://github.com/AryanChidumalla/Mindora",
    figmaUrl: "https://www.figma.com/design/qIEfdVUySu1TqOnjtZ72OV/Mindora",
    year: "2024",
  },
  {
    id: 4,
    title: "RentStack",
    description: "Minimalistic platform for renting everyday essentials",
    longDescription:
      "Designed a clean and simple platform to make discovering, selecting, and renting items effortless and convenient.",
    tech: ["React", "Figma", "JavaScript"],
    role: "UI/UX Designer",
    image: "/api/placeholder/600/400",
    liveUrl: undefined,
    githubUrl: undefined,
    figmaUrl: "https://www.figma.com/design/DOYiIzu54XlQMJ5TpM1CD5/RentStack",
    year: "2023",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-text-primary mb-4">
            Featured Work
          </h2>
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
            A selection of my projects that blend thoughtful design with
            functional frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`project-card group border-border-soft shadow-sm hover:shadow-xl fade-in-up stagger-delay-${
                index + 1
              }`}
            >
              {/* Removed CardHeader and image preview */}

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.year}
                  </Badge>
                  <span className="text-sm text-text-muted">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors duration-300"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-text-primary hover:text-background transition-colors duration-300"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}

                {project.figmaUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                    asChild
                  >
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Figma
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
