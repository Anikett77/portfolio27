
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projectBySlug, projects } from "@/data/projects";
import { aiProjects } from "@/data/videoProjects";

const ProjectDetail = () => {
  const { slug = "" } = useParams();

  // Find project in either data source
  const project =
    projectBySlug(slug) ??
    aiProjects.find((p) => p.id === slug);

  // Project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-portfolio-bg text-portfolio-text flex items-center justify-center">
        <div className="text-center">
          <p className="text-portfolio-muted mb-4">
            Project not found.
          </p>
          <Link to="/" className="underline">
            Go home
          </Link>
        </div>
      </div>
    );
  }

  // Identify project type
  const isAIProject = "id" in project;

  // Normalize project properties
  const projectTag = isAIProject
    ? project.category
    : project.tag;

  const projectLink = isAIProject
    ? project.liveDemo || project.github
    : project.link;

  const projectStack = isAIProject
    ? project.techStack
    : project.stack;

  const projectSteps = isAIProject
    ? []
    : project.howItsMade;

  const projectSubtitle = isAIProject
    ? project.subtitle
    : "";

  // Related projects
  const others = isAIProject
    ? aiProjects
        .filter((p) => p.id !== project.id)
        .slice(0, 3)
    : projects
        .filter((p) => p.slug !== project.slug)
        .slice(0, 3);

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text font-body antialiased">

      {/* Top Bar */}
      <div className="fixed top-4 left-0 right-0 z-50 px-4 flex items-center max-w-[1200px] mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-portfolio-surface/80 border border-portfolio-stroke backdrop-blur px-4 py-2 text-sm hover:text-portfolio-text text-portfolio-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-28 pb-12 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-portfolio-stroke" />
            <span className="text-xs text-portfolio-muted uppercase tracking-[0.3em]">
              {projectTag} Project
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl text-portfolio-text font-light tracking-tight mb-6">
            <span className="font-instrument italic">
              {project.title}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-portfolio-text/80 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          {/* External Project Link */}
          {projectLink && (
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 group"
              >
                <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="relative inline-flex items-center gap-2 bg-portfolio-text text-portfolio-bg rounded-full px-6 py-3 text-sm">
                  {isAIProject
                    ? project.liveDemo
                      ? "Live Demo"
                      : "GitHub"
                    : "Visit live site"}

                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          )}
        </motion.div>
      </section>

      {/* Project Image */}
      <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="rounded-3xl overflow-hidden border border-portfolio-stroke bg-portfolio-surface"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto grid md:grid-cols-3 gap-10 md:gap-16">

        {/* Overview */}
        <div>
          <div className="text-xs text-portfolio-muted uppercase tracking-[0.3em] mb-4">
            Overview
          </div>

          <p className="text-portfolio-text/80 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Stack */}
          {projectStack && projectStack.length > 0 && (
            <div className="mt-8">
              <div className="text-xs text-portfolio-muted uppercase tracking-[0.3em] mb-3">
                Stack
              </div>

              <div className="flex flex-wrap gap-2">
                {projectStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs rounded-full border border-portfolio-stroke px-3 py-1 text-portfolio-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Project Focus / How It's Made */}
        <div className="md:col-span-2">
          {isAIProject ? (
            <>
              <div className="text-xs text-portfolio-muted uppercase tracking-[0.3em] mb-4">
                Project Focus
              </div>

              <p className="text-portfolio-text/85 leading-relaxed">
                {projectSubtitle}
              </p>
            </>
          ) : (
            <>
              <div className="text-xs text-portfolio-muted uppercase tracking-[0.3em] mb-4">
                How it's made
              </div>

              <ol className="space-y-6">
                {projectSteps.map((step, index) => (
                  <li key={index} className="flex gap-5">
                    <span className="font-instrument italic text-3xl text-portfolio-text/60 leading-none w-10 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-portfolio-text/85 leading-relaxed pt-1">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </section>

      {/* More Projects */}
      <section className="pb-24 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-portfolio-stroke" />

          <span className="text-xs text-portfolio-muted uppercase tracking-[0.3em]">
            More Work
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {others.map((p) => {
            const otherSlug = "id" in p ? p.id : p.slug;

            return (
              <Link
                key={otherSlug}
                to={`/projects/${otherSlug}`}
                className="group relative bg-portfolio-surface border border-portfolio-stroke rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-portfolio-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 bg-portfolio-text text-portfolio-bg rounded-full px-4 py-2 text-sm">
                    View —{" "}
                    <span className="font-instrument italic">
                      {p.title}
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
