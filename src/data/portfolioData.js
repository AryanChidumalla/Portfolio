export const profile = {
  name: "Aryan Chidumalla",
  role: "Full-Stack Developer",
  status: "Available for full-time roles & projects",
  location: "Navi Mumbai, India (IST / UTC+5:30)",
  bio: "I build practical full-stack web applications, backend APIs, and real-time experiences, while expanding into Java, Android, and system design.",
  avatarInitials: "AC",
  stats: [
    { label: "Flagship Builds", value: "5" },
    { label: "Primary Stack", value: "MERN" },
    { label: "Code Focus", value: "100%" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/aryanchidumalla",
      icon: "Github",
      username: "@aryanchidumalla",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/aryanchidumalla",
      icon: "Linkedin",
      username: "in/aryanchidumalla",
    },
    {
      label: "Email",
      href: "mailto:aryanchidumalla@gmail.com",
      icon: "Mail",
      username: "aryanchidumalla@gmail.com",
    },
  ],
  resumeUrl: "/resume/Resume - Aryan Chidumalla.pdf",
};

export const aboutData = {
  headline: "Building practical web applications, backend APIs, and real-time systems.",
  paragraphs: [
    "I'm a full-stack developer focused on building functional, responsive software that solves real workflows. My core work centers on React, Node.js, Express, and MongoDB, crafting clean user interfaces backed by reliable server architecture.",
    "From real-time collaborative workspaces in NoteOrbit and instant messaging in ChatFlux, to project management in TaskChamber and media analytics in TasteFlicks, I enjoy building complete products from the data model to the final user interaction.",
  ],
  highlights: [
    {
      title: "What I Build",
      icon: "Code2",
      description:
        "Full-stack web applications with responsive UI, authenticated user workflows, and clean RESTful APIs.",
      accent: "#FFE600",
    },
    {
      title: "Engineering Approach",
      icon: "Cpu",
      description:
        "Write readable, maintainable code with clear structure. Prioritize practical functionality and user experience first.",
      accent: "#38BDF8",
    },
    {
      title: "Currently Learning",
      icon: "Sparkles",
      description:
        "Deepening backend architecture, Java, Android development, and core system design principles.",
      accent: "#4ADE80",
    },
  ],
};

export const skillCategories = [
  {
    category: "Frontend & UI",
    accent: "#FFE600", // Yellow
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Responsive UI",
      "Vite",
      "Figma",
    ],
  },
  {
    category: "Backend & APIs",
    accent: "#38BDF8", // Cyan
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
      "JWT Authentication",
    ],
  },
  {
    category: "Languages",
    accent: "#FF5941", // Coral
    skills: [
      "JavaScript",
      "Java",
      "Python",
      "SQL",
      "TypeScript",
      "C / C++",
    ],
  },
  {
    category: "Databases & Tools",
    accent: "#4ADE80", // Mint
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Git / GitHub",
      "Docker",
      "Linux / Bash",
    ],
  },
  {
    category: "Active Learning",
    accent: "#C084FC", // Purple
    skills: [
      "Android Development",
      "System Design",
      "Backend Architecture",
      "Data Structures & Algorithms",
    ],
  },
];

export const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: profile.resumeUrl, isExternal: true },
];
