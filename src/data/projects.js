export const projects = [
  {
    id: "noteorbit",
    slug: "noteorbit",
    title: "NoteOrbit",
    subtitle: "Secure Full-Stack Knowledge Workspace",
    category: "Full-Stack Web",
    status: "Completed",
    featured: true,
    badge: "Flagship Project",
    accentColor: "#FFE600",

    description:
      "A full-stack knowledge workspace for organizing notes with folders, tags, pinning, search, and secure user workspaces, built with React, Spring Boot, and MySQL.",

    longDescription:
      "NoteOrbit is a decoupled React and Spring Boot application built around a multi-tier architecture. It uses stateless JWT authentication, Spring Data JPA with Hibernate, MySQL persistence, and optimized database queries to provide a structured and secure personal knowledge base.",

    problem:
      "Note-taking becomes difficult to manage when notes, folders, tags, and search are scattered across disconnected tools. NoteOrbit brings these workflows into one structured workspace while keeping user data isolated and secure.",

    keyFeatures: [
      "Create, edit, organize, pin, archive, and search personal notes",
      "Hierarchical folder organization with protected default folders",
      "Multi-tag taxonomy with filtering and note count indicators",
      "Stateless JWT authentication with BCrypt password hashing",
      "Optimized JPA queries using EntityGraph to reduce unnecessary database queries",
      "User-level resource ownership checks to prevent unauthorized access",
      "Responsive React interface with modular dashboard components",
    ],

    technologies: [
      { name: "React", icon: "react" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Java", icon: "java" },
      { name: "MySQL", icon: "mysql" },
      { name: "Hibernate", icon: "hibernate" },
      { name: "JWT", icon: "jwt" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],

    image: "/projects/noteorbit.png",
    github: "https://github.com/AryanChidumalla/NoteOrbit",
    live: "https://noteorbit.vercel.app/",
  },

  {
    id: "chatflux",
    slug: "chatflux",
    title: "ChatFlux",
    subtitle: "Real-Time One-to-One Messaging",
    category: "Full-Stack Web",
    status: "Completed",
    featured: true,
    badge: "Real-Time App",
    accentColor: "#38BDF8",

    description:
      "A real-time messaging application built with React, Node.js, and Socket.IO, supporting one-to-one conversations, online presence, image sharing, and synchronized unread messages.",

    longDescription:
      "ChatFlux combines a React frontend with an Express and Socket.IO backend to handle authenticated real-time communication. MongoDB stores users and messages, while Cloudinary handles image uploads and delivery. JWT-authenticated socket connections keep messaging and presence synchronized between users.",

    problem:
      "Real-time messaging requires more than simply sending messages between clients. ChatFlux explores authenticated WebSocket connections, persistent conversations, online presence, media sharing, and synchronized unread state in a single application.",

    keyFeatures: [
      "Real-time one-to-one messaging powered by Socket.IO",
      "JWT-authenticated WebSocket connections",
      "Live online presence tracking",
      "Real-time unread message indicators backed by MongoDB aggregation",
      "Image sharing with Cloudinary storage and delivery",
      "Searchable contact discovery and user profiles",
      "Shared media drawer for conversation attachments",
      "Responsive messaging interface across desktop and mobile",
    ],

    technologies: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Socket.IO", icon: "socketio" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "JWT", icon: "jwt" },
      { name: "Cloudinary", icon: "cloudinary" },
    ],

    image: "/projects/chatflux.png",
    github: "https://github.com/aryanchidumalla/ChatFlux",
    live: "https://chat-flux-app.vercel.app/",
  },

  {
    id: "taskchamber",
    slug: "taskchamber",
    title: "TaskChamber",
    subtitle: "Customizable Project Management Workspace",
    category: "Full-Stack Web",
    status: "Completed",
    featured: true,
    badge: "Productivity App",
    accentColor: "#FF5941",

    description:
      "A full-stack project management workspace with customizable Kanban workflows, drag-and-drop tasks, multiple projects, priorities, deadlines, and a compact list view.",

    longDescription:
      "TaskChamber is a project and task management application built around flexible workflow stages. Users can create multiple projects, customize their workflow columns, move tasks through stages with drag-and-drop, switch between Kanban and list views, and manage priorities and deadlines.",

    problem:
      "Different projects often require different workflows, while rigid task managers force users into predefined stages. TaskChamber lets users shape their own project structure and move work through customizable stages.",

    keyFeatures: [
      "Multiple isolated projects with independent workflows",
      "Custom Kanban columns with drag-and-drop task movement",
      "Kanban and list views for different ways of managing work",
      "Task priorities, descriptions, due dates, and completion tracking",
      "Real-time search and priority filtering",
      "Custom workflow stage creation, renaming, and deletion",
      "JWT authentication with protected application routes",
      "Cascading project, section, and task management",
    ],

    technologies: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "JWT", icon: "jwt" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],

    image: "/projects/taskchamber.png",
    github: "https://github.com/aryanchidumalla/TaskChamber",
    live: "https://task-chamber.vercel.app/dashboard",
  },

  {
    id: "tasteflicks",
    slug: "tasteflicks",
    title: "TasteFlicks",
    subtitle: "Movie Discovery, Tracking & Recommendation Platform",
    category: "Full-Stack Web",
    status: "Completed",
    featured: true,
    badge: "Flagship Product",
    accentColor: "#4ADE80",

    description:
      "A movie and TV platform that combines TMDB-powered discovery, personal watch tracking, analytics, and personalized movie recommendations generated through a separate FastAPI recommendation service.",

    longDescription:
      "TasteFlicks combines a React frontend with Supabase for authentication and user media data and a FastAPI service for personalized recommendations. The recommendation engine uses TF-IDF vectorization and cosine similarity over a curated movie dataset, with generated recommendation data cached through Supabase.",

    problem:
      "Streaming platforms are good at recommending what is popular, but understanding your own viewing habits and building a personal movie library can still be fragmented. TasteFlicks combines discovery, tracking, analytics, and personalized recommendations in one experience.",

    keyFeatures: [
      "Movie and TV discovery powered by the TMDB API",
      "Personal watched history and watchlist management",
      "Personalized movie recommendations using TF-IDF and cosine similarity",
      "Supabase-backed recommendation caching",
      "365-day activity heatmap, watch streaks, and screen-time analytics",
      "Interactive genre and viewing analytics",
      "Movie and TV ratings, milestones, and personal taste tracking",
      "Lazy-loaded routes and optimized TMDB data fetching with TanStack Query",
    ],

    technologies: [
      { name: "React", icon: "react" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Python", icon: "python" },
      { name: "Supabase", icon: "supabase" },
      { name: "scikit-learn", icon: "sklearn" },
      { name: "TMDB API", icon: "tmdb" },
      { name: "TanStack Query", icon: "tanstack" },
    ],

    image: "/projects/tasteflicks.png",
    github: "https://github.com/AryanChidumalla/TasteFlicks",
    live: "https://tasteflicks.netlify.app",
  },

  {
    id: "caloryx",
    slug: "caloryx",
    title: "Caloryx",
    subtitle: "Practical Nutrition & Calorie Tracking",
    category: "Full-Stack Web",
    status: "Completed",
    featured: true,
    badge: "Health Tracker",
    accentColor: "#C084FC",

    description:
      "A nutrition tracking application built around fast food logging, practical serving sizes, calorie and macronutrient tracking, and a curated database with strong coverage of Indian foods.",

    longDescription:
      "Caloryx focuses on making everyday nutrition tracking practical rather than cumbersome. It uses a curated food database, natural serving measurements such as roti, katori, cups, and pieces, and dynamic nutrition calculations to scale calories and macronutrients according to the selected portion.",

    problem:
      "Food tracking becomes frustrating when databases are difficult to search and portion sizes don't reflect how people actually describe their meals. Caloryx focuses on everyday foods and practical serving measurements to make logging faster.",

    keyFeatures: [
      "Fast food search with aliases and Hindi/regional food terms",
      "Calorie and protein, carbohydrate, and fat tracking",
      "Practical serving sizes such as roti, katori, cup, piece, grams, and milliliters",
      "Dynamic nutritional calculations based on selected portions",
      "Daily calorie budget and macronutrient progress dashboard",
      "Meal organization across breakfast, lunch, dinner, and snacks",
      "Custom food library for frequently used meals and recipes",
      "Curated coverage of Indian dishes, staples, snacks, and everyday foods",
    ],

    technologies: [
      { name: "React", icon: "react" },
      { name: "Supabase", icon: "supabase" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "React Router", icon: "reactrouter" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "JavaScript", icon: "javascript" },
    ],

    image: "/projects/caloryx.png",
    github: "https://github.com/AryanChidumalla/Caloryx",
    live: "https://caloryx-app.netlify.app/dashboard",
  },
];
