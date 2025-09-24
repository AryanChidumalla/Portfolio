import { Code, Palette, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    icon: Code,
    items: [
      "HTML/CSS/JavaScript",
      "React/Next.js",
      "TypeScript",
      "Responsive Design",
    ],
  },
  {
    category: "Design",
    icon: Palette,
    items: ["UI/UX Design", "Figma", "Prototyping", "Accessibility"],
  },
  {
    category: "Other Skills",
    icon: Lightbulb,
    items: ["Python", "Java", "C++", "GraphQL"],
  },
  {
    category: "Tools & Collaboration",
    icon: Users,
    items: [
      "Git/GitHub",
      "Agile/Scrum",
      "Code Review",
      "Collaborative Learning",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover & Research",
    description:
      "Understanding user needs, business goals, and technical constraints through research and stakeholder interviews.",
  },
  {
    step: "02",
    title: "Ideate & Design",
    description:
      "Creating wireframes, prototypes, and high-fidelity designs while establishing design systems and patterns.",
  },
  {
    step: "03",
    title: "Build & Test",
    description:
      "Developing responsive, accessible interfaces with clean code and conducting usability testing throughout.",
  },
  {
    step: "04",
    title: "Launch & Iterate",
    description:
      "Deploying solutions, gathering user feedback, and continuously improving based on real-world usage data.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-text-primary mb-4">
            About Me
          </h2>
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
            Passionate about creating digital experiences that are both
            beautiful and functional
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-lg max-w-none">
            <p className="text-body-large text-text-secondary leading-relaxed mb-6">
              I’m a frontend developer and UI/UX designer driven by a passion
              for creating digital experiences that are both beautiful and
              functional. My journey started with building websites by following
              tutorials, but soon I realized I wanted to move beyond copying
              designs and create my own unique interfaces. This led me to
              explore design principles and blend them with code to craft
              original, user-centered solutions.
            </p>
            <p className="text-body-large text-text-secondary leading-relaxed mb-6">
              What keeps me motivated is the challenge of turning complex user
              needs into elegant and accessible products. I believe great design
              should be seamless and intuitive—it works without calling
              attention to itself. Whether I’m developing a component library,
              designing a user flow, or optimizing performance, I focus on
              making every interaction feel natural and enjoyable.{" "}
            </p>
            <p className="text-body-large text-text-secondary leading-relaxed">
              Outside of coding and designing, I am constantly learning about
              new design trends, contributing to open source projects, and
              mentoring others who are starting their own journeys. Sharing
              knowledge and growing with the community fuels my passion and
              helps me stay inspired.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            Skills & Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card
                  key={skill.category}
                  className={`border-border-soft hover:shadow-lg transition-all duration-300 hover:scale-105 fade-in-up stagger-delay-${
                    index + 1
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>

                    <h4 className="font-semibold text-text-primary mb-3">
                      {skill.category}
                    </h4>

                    <ul className="space-y-1">
                      {skill.items.map((item) => (
                        <li key={item} className="text-sm text-text-secondary">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Process */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            My Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div
                key={process.step}
                className={`text-center fade-in-up stagger-delay-${index + 1}`}
              >
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {process.step}
                </div>

                <h4 className="font-semibold text-text-primary mb-3">
                  {process.title}
                </h4>

                <p className="text-text-secondary leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
