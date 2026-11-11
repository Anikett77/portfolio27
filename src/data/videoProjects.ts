
export type AIProjectCategory =
  | "All"
  | "Machine Learning"
  | "Generative AI"
  | "Computer Vision"
  | "AI Web App";

export type AIProject = {
  id: string;
  image: string;
  title: string;
  category: Exclude<AIProjectCategory, "All">;
  subtitle: string;
  description: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  featured?: boolean;
};

export const aiProjects: AIProject[] = [
  // 1. Leafix
  {
    id: "leafix",
    image: "/images/leafix 1.png",
    title: "Leafix",
    category: "Computer Vision",
    subtitle: "AI-powered plant disease recognition and diagnosis",
    description:
      "Built an AI-powered plant disease recognition application that helps farmers identify crop diseases by uploading a leaf photo. Uses a MobileNetV2 transfer learning model trained across 39 disease classes and 14 crop species, providing disease identification along with causes and cures.",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "MobileNetV2",
      "Flask",
      "Next.js",
      "Railway",
      "Vercel",
    ],
    github: "https://github.com/Anikett77/Leafix",
    liveDemo: "https://leafix.vercel.app/",
    featured: true,
  },

  // 2. Readwise
  {
    id: "readwise",
    image: "/images/readwise 2.png",
    title: "Readwise",
    category: "Generative AI",
    subtitle: "Chat with PDFs using Retrieval-Augmented Generation",
    description:
      "Built an AI-powered PDF question-answering application that lets users upload documents and ask questions to get precise answers in seconds. Developed during a workshop by Sheryians Coding School at Oriental Institute of Science & Technology, Bhopal. Uses OpenRouter with free models and automatic model fallback to handle rate limits.",
    techStack: [
      "Python",
      "Streamlit",
      "RAG",
      "OpenRouter API",
      "LLMs",
    ],
    github: "https://github.com/Anikett77/Readwise",
    liveDemo: "https://readwise-rag.streamlit.app/",
    featured: true,
  },

  // 3. The Brief
  {
    id: "the-brief",
    image: "/images/brief 3.png",
    title: "The Brief",
    category: "Generative AI",
    subtitle: "Agentic AI-powered news research and reporting",
    description:
      "Built an AI-powered news intelligence application that allows users to select a news topic and generate structured reports using real-time web search and AI synthesis. Developed during a Sheryians Coding School workshop at Oriental Institute of Science & Technology, Bhopal. Uses direct API integrations without LangChain or unnecessary abstractions.",
    techStack: [
      "Python",
      "Streamlit",
      "OpenRouter API",
      "Tavily Search API",
      "Agentic AI",
    ],
    github: "https://github.com/Anikett77/The-Brief",
    liveDemo: "https://the-brieff.streamlit.app/",
    featured: true,
  },

  // 4. AI Club OIST Website
  {
    id: "ai-club-oist",
    image: "/images/ai 4.png",
    title: "AI Club OIST",
    category: "AI Web App",
    subtitle: "Official digital platform for the AI Club at OIST",
    description:
      "Designed and developed the AI Club OIST website as a technical member of the club. The platform brings together club blogs, upcoming events, magazines, and other club activities into one digital space, helping members stay informed and explore the AI community at OIST.",
    techStack: ["Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
    "GSAP",
  "SupaBase",
],
    github: "https://github.com/madhavansingh/aiclub-oist",
    liveDemo: "https://aiclub-oist.vercel.app/",
    featured: true,
  },

  // 5. ThermoWatch
  {
    id: "thermowatch",
    image: "/images/thermo 5.png",
    title: "ThermoWatch",
    category: "Machine Learning",
    subtitle: "Wildfire intelligence and predictive spread modeling",
    description:
      "Developed an end-to-end geospatial satellite intelligence pipeline for the NTRO Smart India Hackathon challenge (SIH26162). Combines Sentinel-2 and MODIS satellite observations with thermal and meteorological modeling to detect wildfire hotspots, cluster thermal anomalies using spatial DBSCAN, and generate predictive wildfire spread vectors. Includes a Mapbox GL dashboard with temporal controls and wind-field overlays. Validated against historical satellite wildfire perimeters with sub-kilometer spatial accuracy.",
    techStack: [
      "Python",
      "PyTorch",
      "GeoPandas",
      "Mapbox GL",
      "FastAPI",
      "GDAL",
      "Docker",
    ],
        github: "https://github.com/loisekk/ThermoWatch",
    liveDemo: "https://thermo-watch-loisekk.vercel.app/",
    featured: true,
  },
];
