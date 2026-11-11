import projectUplyft from "@/assets/uplyft 1.png";
import projectFinDash from "@/assets/findash 8.png";
import projectTedx from "@/assets/tedx 4.png";
import projectNavix from "@/assets/navix 2.png";
import projectAutoXplore from "@/assets/autoxplore 3.png";
import projectSunstone from "@/assets/sunstone 5.png";
import projectSpotify from "@/assets/spotify 6.png";
import projectNetflix from "@/assets/netflix 9.png";
import projectCampusUnite from "@/assets/campus 7.png";

export type ProjectItem = {
  slug: string;
  title: string;
  tag: "Web" | "Video";
  image: string;
  link: string;
  description: string;
  howItsMade: string[];
  stack?: string[];
  color?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "uplyft-ai",
    title: "Uplyft AI",
    tag: "Web",
    image: projectUplyft,
    link: "https://uplyft-ai.vercel.app",
    description:
      "Uplyft AI is a full-stack AI-powered career platform built to help students, freshers, and career switchers go from resume upload to interview-ready automatically. Built with Next.js 14, MongoDB, Tailwind CSS, and GPT-4o mini via OpenRouter, it delivers a complete career preparation ecosystem. Features include AI-powered resume analysis with ATS scoring, keyword gap analysis, role matching, skill gap identification, personalized career roadmaps, AI mock interviews with detailed feedback and readiness scores, learning trackers with curated courses, and a GitHub portfolio analyzer powered by the GitHub REST API. It also includes JWT-based authentication and MongoDB persistence for user data and resume analysis results.",
    howItsMade: [
      "Built a full-stack application using Next.js 14, MongoDB, Mongoose, and Tailwind CSS with a modular architecture and JWT-based authentication.",
      "Integrated GPT-4o mini through OpenRouter to power resume parsing, ATS scoring, keyword gap analysis, skill assessments, personalized career roadmaps, and AI mock interviews.",
      "Developed a 7-question mock interview system with individual answer scoring, strengths, improvement suggestions, model answers, and overall readiness reports.",
      "Integrated the GitHub REST API for portfolio analysis, including repositories, stars, programming language breakdown, and code quality signals.",
      "Implemented a learning tracker with curated courses and MongoDB persistence for cross-session access to user analyses.",
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "OpenRouter API",
      "GPT-4o mini",
      "GitHub REST API",
      "JWT",
    ],
    color: "from-violet-500/20 to-indigo-500/20",
  },

    {
    slug: "navix-ai",
    title: "Navix AI",
    tag: "Web",
    image: projectNavix,
    link: "https://navixai.vercel.app/",
    description:
      "Navix AI is an AI-powered trip planner designed to generate personalized travel itineraries based on user preferences such as destination, budget, duration, and interests. Built with Next.js 14 and modern web technologies, the platform simplifies travel planning by turning complex decisions into a seamless experience. It uses AI to generate structured day-wise itineraries, including recommended places, activities, and travel suggestions. MongoDB stores user information and trip history, while NextAuth.js provides secure authentication through Google OAuth and email/password login.",
    howItsMade: [
      "Built an interactive trip-planning interface using Next.js 14, React, and Tailwind CSS.",
      "Integrated AI APIs to generate structured, personalized day-wise travel itineraries based on destination, budget, duration, and user interests.",
      "Implemented authentication using NextAuth.js with Google OAuth and email/password login.",
      "Integrated MongoDB and Mongoose for storing user profiles and trip history.",
      "Designed the architecture to support future map integrations, booking functionality, and real-time travel recommendations.",
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "NextAuth.js",
      "OpenAI API",
      "Google OAuth",
      "JWT",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
  },

  {
    slug: "autoxplore",
    title: "AutoXplore",
    tag: "Web",
    image: projectAutoXplore,
    link: "https://autoxplore.vercel.app/",
    description:
      "AutoXplore is a premium full-stack car rental and buying platform created to provide users with a seamless and modern vehicle booking experience. Built using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS, it offers a responsive interface for browsing available cars, exploring detailed vehicle information, and managing bookings. The platform includes secure JWT authentication, user and admin functionality, dynamic car listings, booking management, and an admin dashboard for managing vehicles, bookings, and user data.",
    howItsMade: [
      "Developed a full-stack MERN application with React.js, Node.js, Express.js, and MongoDB.",
      "Implemented secure authentication using JWT and bcrypt for user and administrator accounts.",
      "Built dynamic car listings with detailed vehicle specifications, pricing, search, and filtering functionality.",
      "Developed an admin dashboard for managing cars, bookings, and user information with database-backed updates.",
      "Integrated Framer Motion for interactive animations and React Router for smooth navigation.",
      "Deployed the application using Vercel and Render.",
    ],
    stack: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "Framer Motion",
    ],
    color: "from-orange-500/20 to-red-500/20",
  },

  {
    slug: "findash",
    title: "FinDash",
    tag: "Web",
    image: projectFinDash,
    link: "https://findash-finance.vercel.app/",
    description:
      "FinDash is a full-stack finance data processing and analytics dashboard designed to help teams securely manage financial transactions with strict role-based access control. Built using Next.js 14, MongoDB, Tailwind CSS, and JWT authentication, it provides controlled access to financial data through Viewer, Analyst, and Admin roles. The platform supports transaction management, filtering, searching, sorting, real-time financial analytics, interactive charts, and secure user administration.",
    howItsMade: [
      "Developed a secure authentication system using JWT stored in HttpOnly cookies to improve protection against XSS attacks.",
      "Implemented Role-Based Access Control (RBAC) for Viewer, Analyst, and Admin roles, with permission enforcement across frontend and backend API routes.",
      "Built complete financial record management with CRUD operations, including transaction filtering, searching, and sorting by date, type, and category.",
      "Created an analytics dashboard displaying income, expenses, net balance, category-wise breakdowns, and monthly comparisons.",
      "Integrated Recharts for interactive financial visualizations using bar and pie charts, along with an admin-only user management module.",
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "JWT",
      "Recharts",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },

  {
    slug: "tedx-oist",
    title: "TEDx OIST Website",
    tag: "Web",
    image: projectTedx,
    link: "https://www.tedxoist.in/",
    description:
      "TEDx OIST Website is a modern, responsive event platform built to showcase TEDx OIST events, speakers, schedules, and the overall experience. Designed with a clean interface and smooth interactions, the platform delivers an engaging digital presence aligned with TEDx branding and storytelling. It features dynamic speaker profiles, event schedules, information sections, and registration call-to-actions with a fully responsive experience across desktop and mobile devices.",
    howItsMade: [
      "Designed and developed a modern event website with a consistent visual identity aligned with TEDx branding.",
      "Created reusable React components for speaker profiles, event schedules, about sections, and registration call-to-actions.",
      "Implemented responsive layouts and optimized assets to ensure seamless performance across desktop and mobile devices.",
      "Focused on accessibility, performance, smooth interactions, and maintainable component-based architecture.",
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
    color: "from-red-500/20 to-rose-500/20",
  },



  

  {
    slug: "sunstone-studio",
    title: "Sunstone Studio",
    tag: "Web",
    image: projectSunstone,
    link: "https://suntonestudio.netlify.app/",
    description:
      "Sunstone Studio is an interactive and visually engaging animated website created for a fictional design studio. The project focuses on smooth transitions, scroll-based animations, modern layouts, and an immersive user interface. It demonstrates advanced animation techniques and responsive design to deliver an engaging experience across different devices.",
    howItsMade: [
      "Designed a modern creative studio interface with a strong visual identity and responsive layouts.",
      "Implemented advanced scroll-based animations and smooth transitions using GSAP.",
      "Integrated Framer Motion for interactive elements and animated component transitions.",
      "Used reusable React components and Tailwind CSS for consistent styling and maintainable development.",
    ],
    stack: [
      "React",
      "Framer Motion",
      "GSAP",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    color: "from-amber-500/20 to-orange-500/20",
  },

  {
    slug: "spotify-clone",
    title: "Spotify Clone",
    tag: "Web",
    image: projectSpotify,
    link: "https://spotifycloneac.netlify.app/",
    description:
      "A fully functional Spotify-inspired music player built from scratch using HTML, CSS, and JavaScript. The application allows users to play, pause, navigate between songs, control volume, and explore dynamically loaded albums. It features a responsive interface, custom music player controls, folder-based album organization, and smooth media interactions to deliver an authentic music streaming experience.",
    howItsMade: [
      "Designed a Spotify-inspired interface using HTML and CSS with a responsive layout.",
      "Implemented music playback functionality using JavaScript, including play, pause, next, previous, and volume controls.",
      "Developed dynamic album loading using JSON files and a folder-based music organization system.",
      "Created interactive media controls and responsive components for an improved listening experience.",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    color: "from-green-500/20 to-emerald-500/20",
  },

  {
    slug: "netflix-clone",
    title: "Netflix Clone",
    tag: "Web",
    image: projectNetflix,
    link: "https://capybaraniket.netlify.app/",
    description:
      "A responsive Netflix homepage clone built using HTML and CSS, designed to replicate the modern look and feel of the Netflix platform. The project focuses on layout design, grid-based structures, responsive alignment, and visual styling to demonstrate frontend development fundamentals and UI precision.",
    howItsMade: [
      "Recreated the Netflix-inspired homepage layout using HTML and CSS.",
      "Implemented grid-based structures and responsive alignment techniques.",
      "Focused on visual consistency, typography, spacing, and accurate UI styling.",
      "Optimized the layout for different screen sizes and browsing experiences.",
    ],
    stack: [
      "HTML",
      "CSS",
    ],
    color: "from-red-500/20 to-rose-500/20",
  },

  {
    slug: "campus-unite",
    title: "Campus-Unite",
    tag: "Web",
    image: projectCampusUnite,
    link: "https://campus-unite-beta14.vercel.app/",
    description:
      "Campus-Unite is a team-based hackathon project developed during Version Beta 8.0 at MANIT to improve campus collaboration and event management. The platform integrates Google Calendar API and Google Maps API to help students schedule, locate, and manage campus activities seamlessly. Built using the MERN stack, it focuses on event management, real-time updates, and AI-assisted features to enhance student productivity.",
    howItsMade: [
      "Collaborated on a MERN stack application focused on campus collaboration and event management.",
      "Integrated Google Calendar API for scheduling and managing campus activities.",
      "Used Google Maps API to locate and visualize campus events and activities.",
      "Implemented database-backed event management and real-time updates.",
      "Explored AI integration to enhance student productivity and simplify campus interactions.",
    ],
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Google Calendar API",
      "Google Maps API",
      "AI Integration",
    ],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);