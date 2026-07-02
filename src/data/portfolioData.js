export const profile = {
  name: "Aryan Chidumalla",
  subtitle: "Full-Stack Developer & Data Scientist",
  avatarInitials: "AC",
  status: "Available for full-time roles",
  location: "Navi Mumbai, IN · IST (UTC+5:30)",
  stats: [
    { label: "Projects shipped", value: "10+" },
    // { label: "DSA problems solved", value: "620+" },
    { label: "Years building", value: "3" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/aryanchidumalla",
      icon: "Github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/aryanchidumalla",
      icon: "Linkedin",
    },
    { label: "Email", href: "mailto:aryanchidumalla@gmail.com", icon: "Mail" },
  ],
  resumeUrl: "/resume/Resume - Aryan Chidumalla.pdf",
};

export const hero = {
  headline: "I build intelligent, optimized digital systems from code to data.",
  sub: "Three lenses, one engineer — I move between product UI, ML pipelines, and algorithmic problem-solving depending on what a team needs.",
};

// Filter identifiers used across the app: 'web' | 'data' | 'sde' | 'all'
export const filters = [
  { id: "all", label: "✨ Show All Fields" },
  { id: "web", label: "🌐 Web Development & UI/UX" },
  { id: "data", label: "📊 Data Science & AI" },
  { id: "sde", label: "☕ SDE & Java DSA" },
];

export const projects = [
  {
    id: "proj-01",
    category: "web",
    name: "TasteFlicks — Smart Movie & TV Tracker",
    image: "/projects/tasteflicks.png",
    tagline:
      "An insight-based tracking platform that converts viewing history into personalized metrics and rewards.",
    situation:
      "Media consumers lacked a unified, interactive platform to track their watch history, missing out on data-driven insights and engaging content discovery tools.",
    action:
      "Designed a clean, responsive interface in Figma and engineered a gamified dashboard complete with user stats, milestone badges, and a custom recommendation algorithm using React, TailwindCSS, and Node.js.",
    result:
      "Elevated user engagement through interactive gamification and streamlined content discovery by generating tailored recommendations based on individual watch histories.",
    stack: ["React", "TailwindCSS", "Node.js", "Python", "JavaScript", "Figma"],
    links: {
      live: "https://tasteflicks.netlify.app",
      repo: "https://github.com/aryanchidumalla/tasteflicks",
    },
  },
  {
    id: "proj-02",
    category: "web",
    name: "FieldRentals — Agricultural Equipment Marketplace",
    image: "/projects/fieldrentals.png",
    tagline:
      "A peer-to-peer rental platform connecting farmers with real-time machinery availability.",
    situation:
      "Farmers faced operational inefficiencies and scheduling friction when trying to source and rent agricultural equipment without transparent pricing or live availability tracking.",
    action:
      "Developed a mobile-responsive marketplace focused heavily on rural accessibility, implementing features for flexible scheduling, real-time booking updates, and transparent pricing structures.",
    result:
      "Drastically improved operational efficiency for equipment rentals and delivered an intuitive, user-centric UI optimized for seamless accessibility.",
    stack: ["React", "TailwindCSS", "Node.js", "Figma", "Git"],
    links: {
      live: "https://fieldrentals.netlify.app",
      repo: "https://github.com/aryansc123/fieldrentals",
    },
  },
  {
    id: "proj-03",
    category: "data",
    name: "ML Core — Hotel Sentiment Classifier",
    image: "/projects/hotel-review-classifier.png",
    tagline:
      "An NLP pipeline using ensemble voting to accurately categorize hospitality service sentiment.",
    situation:
      "Unstructured customer review text left management without scalable, structured feedback metrics to isolate low-performing service elements.",
    action:
      "Developed an NLP pipeline using an ensemble Voting Classifier aggregating predictions from 4 distinct Naive Bayes architectures, engineered high-dimensional features combining BoW and N-gram representations, and built a Flask REST API to serve real-time model inference.",
    result:
      "Optimized classification accuracy across varied review lengths and surfaced real-time confidence probability visualizations via automated tabular reporting.",
    stack: ["Python", "Scikit-Learn", "SciPy", "Flask", "NLP"],
    links: {
      live: "https://hotel-review-classifier.netlify.app",
      repo: "https://github.com/hotel-review-classifier",
    },
  },
  {
    id: "proj-04",
    category: "data",
    name: "DeepX-Ray — Pneumonia Detection & Synthesis Pipeline",
    tagline:
      "A generative and discriminative deep learning pipeline to address data scarcity in medical imaging.",
    situation:
      "Deep learning diagnostic models suffer from severe performance degradation when trained on limited, highly imbalanced medical datasets.",
    action:
      "Engineered a multi-stage pipeline utilizing a CNN classifier for diagnostic screening, a Deep Convolutional GAN (DCGAN) to generate synthetic X-ray data for data augmentation, and a Variational Autoencoder (VAE) for image reconstruction and latent space analysis.",
    result:
      "Mitigated class imbalance issues by generating structurally sound synthetic samples, establishing a stable medical image augmentation framework.",
    stack: ["Python", "PyTorch", "CNN", "GAN", "VAE"],
    links: { live: "#", repo: "https://github.com/aryanchidumalla" },
  },
  {
    id: "proj-05",
    category: "sde",
    name: "Procure Watch — Permissioned Blockchain Architecture",
    tagline:
      "A tamper-proof public procurement system securing government contract allocations.",
    situation:
      "Traditional public procurement platforms face severe audit vulnerability, lack of transparent tracking, and susceptibility to unauthorized bid manipulation.",
    action:
      "Architected a permissioned network using Hyperledger Fabric and Docker, authored secure Node.js smart contracts to automate vendor bid evaluations, and engineered distinct role-based React dashboards connected via the Fabric SDK.",
    result:
      "Enforced strict cryptographic security parameters and built immutable data pipelines for 4 distinct user groups: Government, Vendors, Auditors, and Citizens.",
    stack: ["Node.js", "Docker", "React", "Hyperledger Fabric"],
    links: { live: "#", repo: "https://github.com/aryansc123/procurewatch" },
  },
  {
    id: "proj-06",
    category: "sde",
    name: "Algorithmic Core — Pattern-Based DSA Architecture",
    tagline:
      "A modular, clean-code archive of advanced data structures and algorithmic optimizations.",
    situation:
      "Preparing for engineering placements requires decoupling complex logic problem-solving from scratchpads into a reusable, structured paradigm archive.",
    action:
      "Built a centralized repository implementing core algorithms—spanning dynamic programming, sorting, and graph optimization—utilizing clean object-oriented design patterns across Java and Python.",
    result:
      "Established a comprehensive, performance-benchmarked code asset tracking time and space complexities to serve as immediate technical interview validation material.",
    stack: ["Java", "Python", "OOP", "Data Structures & Algorithms"],
    links: { live: "#", repo: "https://github.com/aryanchidumalla" },
  },
];

export const skills = {
  "Core Engineering & DSA": [
    "Java",
    "OOP",
    "Time/Space Optimization",
    "SQL",
    "Data Structures",
  ],
  "Web Architecture & Design": [
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Figma (UI/UX)",
  ],
  "Data Intelligence": [
    "Python",
    "Pandas",
    "Scikit-Learn",
    "PyTorch",
    "CNN Pipelines",
  ],
};

export const engineeringLog = [
  {
    id: "log-01",
    title: "Optimizing Time Complexity in Subset Sum Problems",
    excerpt:
      "Walking through the move from O(2^n) brute force to O(n·sum) dynamic programming, and where space optimization still leaves room to improve.",
    date: "2026-04-12",
    readTime: "7 min",
  },
  {
    id: "log-02",
    title: "Designing Clean UI Flows for Complex ML Dashboards",
    excerpt:
      "Notes on presenting model confidence and uncertainty to non-technical reviewers without hiding the signal in a wall of charts.",
    date: "2026-03-02",
    readTime: "6 min",
  },
  {
    id: "log-03",
    title: "When to Reach for a Heap vs. a Balanced BST",
    excerpt:
      "A practical comparison across three interview-style problems, with benchmarks on where each structure actually wins in practice.",
    date: "2026-01-18",
    readTime: "5 min",
  },
];

export const footerLinks = {
  General: [
    { label: "About", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Engineering Log", href: "#log" },
  ],
  Specifics: [
    { label: "Skill Dashboard", href: "#skills" },
    { label: "Resume", href: profile.resumeUrl },
    { label: "Contact", href: "#contact" },
  ],
};
