import { useMemo, useRef, useState } from "react";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  VolumeX,
  Volume2,
  Pause,
  Play,
} from "lucide-react";
import {
  aiProjects,
  type AIProjectCategory,
} from "@/data/videoProjects";



const categories: AIProjectCategory[] = [
  "All",
  "Machine Learning",
  "Generative AI",
  "Computer Vision",
  "AI Web App",
];

export const CommercialShowcase = () => {
  const [activeCategory, setActiveCategory] =
    useState<AIProjectCategory>("All");

  // Hero video states
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);

  const handleHeroToggleMute = () => {
    setIsHeroMuted((prev) => !prev);
  };

  const handleHeroTogglePlay = () => {
    const video = heroVideoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play()
        .then(() => setIsHeroPlaying(true))
        .catch((error) => console.error("Video playback failed:", error));
    } else {
      video.pause();
      setIsHeroPlaying(false);
    }
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return aiProjects;

    return aiProjects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="ai-projects"
      className="bg-portfolio-bg py-16 md:py-24 border-t border-portfolio-stroke relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-portfolio-stroke" />

            <span className="text-xs text-portfolio-muted uppercase tracking-[0.3em]">
              AI & Machine Learning Projects
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl text-portfolio-text font-light tracking-tight mb-4">
            Artificial Intelligence &{" "}
            <span className="font-instrument italic">
              Machine Learning
            </span>
          </h2>

          <p className="text-portfolio-muted max-w-xl text-base leading-relaxed">
            Exploring intelligent systems, generative AI, and machine
            learning through practical applications and innovative projects.
          </p>
          
        </motion.div>
        {/* Featured Hero Cinema Player */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
  className="relative rounded-3xl overflow-hidden border border-portfolio-stroke bg-black/90 shadow-2xl mb-12 group"
>
  {/* Top Info Bar inside hero */}
  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
    <div className="flex items-center gap-2">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90">

        Featured Projects
      </span>

      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] text-white/70">
        4K Resolution
      </span>
    </div>

    <div className="flex items-center gap-2 pointer-events-auto">
      <button
        onClick={handleHeroToggleMute}
        className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/90 hover:bg-white/20 transition-colors"
        title={isHeroMuted ? "Unmute audio" : "Mute audio"}
        aria-label={isHeroMuted ? "Unmute audio" : "Mute audio"}
      >
        {isHeroMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4 text-primary" />
        )}
      </button>

      <button
        onClick={handleHeroTogglePlay}
        className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/90 hover:bg-white/20 transition-colors"
        title={isHeroPlaying ? "Pause" : "Play"}
        aria-label={isHeroPlaying ? "Pause" : "Play"}
      >
        {isHeroPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 fill-current" />
        )}
      </button>
    </div>
  </div>

  {/* Video element */}
  <div className="w-full flex items-center justify-center bg-black min-h-[360px] md:min-h-[480px] max-h-[640px]">
    <video
      ref={heroVideoRef}
      autoPlay
      loop
      muted={isHeroMuted}
      playsInline
      className="max-h-[640px] w-auto max-w-full object-contain cursor-pointer transition-opacity duration-500"
      onClick={handleHeroTogglePlay}
    >
      <source src="/videos/featured-project.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Bottom Overlay Gradient with Metadata */}
  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
    <div className="max-w-2xl">
      <h3 className="text-xl md:text-3xl font-light text-white tracking-tight mb-2">
        <span className="font-instrument italic">
          Turning Ideas Into Reality
        </span>
      </h3>

      <p className="text-sm md:text-base text-white/70 line-clamp-2 leading-relaxed">
        A showcase of creativity, technology, and innovation through
        thoughtfully crafted digital experiences.
      </p>
    </div>
  </div>
</motion.div>

        {/* Category Filters */}
<div className="mb-10 flex flex-wrap justify-center gap-2">
  {categories.map((category) => (
    <button
      key={category}
      type="button"
      onClick={() => setActiveCategory(category)}
      aria-pressed={activeCategory === category}
      className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 md:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg ${
        activeCategory === category
          ? "border-white bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.12)]"
          : "border-portfolio-stroke text-muted-foreground hover:border-white/70 hover:text-white"
      }`}
    >
      {category}
    </button>
  ))}
</div>

{/* Project Cards */}
{filteredProjects.length > 0 ? (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {filteredProjects.map((project, index) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.12,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="h-full"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-portfolio-stroke bg-portfolio-surface transition-all duration-500 hover:border-primary/40">

          {/* Main Project Card */}
          <Link
            to={`/projects/${project.id}`}
            className="group block"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-portfolio-bg">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Category Badge */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                {project.category}
              </div>

              {/* View Icon */}
              <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>

            {/* Project Information */}
            <div className="p-5 md:p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-xl font-light tracking-tight text-portfolio-text md:text-2xl">
                  <span className="font-instrument italic">
                    {project.title}
                  </span>
                </h3>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-portfolio-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>

              <p className="line-clamp-3 text-sm leading-relaxed text-portfolio-muted">
                {project.description}
              </p>

              {/* Technology Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-portfolio-stroke px-3 py-1 text-[10px] text-portfolio-muted md:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>

          {/* Card Footer: External Links */}
          <div className="mt-auto flex items-center justify-between border-t border-portfolio-stroke px-5 py-3">
            <span className="text-[10px] uppercase tracking-wider text-portfolio-muted">
              Explore Project
            </span>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  title="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-portfolio-stroke text-portfolio-muted transition-all hover:border-white hover:bg-white hover:text-black"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  title="Live Demo"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-portfolio-stroke text-portfolio-muted transition-all hover:border-white hover:bg-white hover:text-black"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
        ) : (
          <p className="py-12 text-center text-muted-foreground">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
    
  );
};
