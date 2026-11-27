import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, Project } from "../../data/portfolio";
import { staggerContainer, fadeUp } from "../../utils/animations";
import SectionHeader from "../UI/SectionHeader";
import ProjectCover from "../UI/ProjectCover";

const ProjectCard: React.FC<{ project: Project; index: number; featured?: boolean }> = ({
  project,
  index,
  featured,
}) => (
  <motion.article
    variants={fadeUp}
    className={`group relative border border-border bg-background hover:border-foreground transition-colors ${
      featured ? "lg:col-span-2" : ""
    }`}
  >
    <Link
      to={`/projects/${project.slug}`}
      className="absolute inset-0 z-10"
      aria-label={`Read the ${project.title} case study`}
    />

    <div className={featured ? "grid lg:grid-cols-[1.2fr_1fr]" : ""}>
      <ProjectCover project={project} index={index} className={featured ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]"} />

      <div className="p-5 sm:p-7 flex flex-col gap-4">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-neutral-500">
          <span>
            {String(index + 1).padStart(2, "0")} / {project.category}
          </span>
          <span>{project.year}</span>
        </div>

        <div>
          <h3 className="font-grotesk font-bold uppercase tracking-tight leading-none text-[clamp(1.8rem,3vw,2.75rem)] flex items-start justify-between gap-4">
            {project.title}
            <ArrowUpRight
              className="shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={28}
            />
          </h3>
          <p className="mt-2 font-mono text-xs tracking-widest uppercase text-neutral-500">{project.tagline}</p>
        </div>

        <p className="text-neutral-600 leading-relaxed">{project.summary}</p>

        <ul className="flex flex-wrap gap-2 mt-auto pt-2" aria-label="Tech stack">
          {project.tech.slice(0, featured ? 7 : 4).map((t) => (
            <li key={t} className="font-mono text-[11px] border border-border px-2.5 py-1 text-neutral-600">
              {t.toLowerCase()}
            </li>
          ))}
        </ul>

        {(project.live || project.github) && (
          <div className="relative z-20 flex gap-4 pt-2 font-mono text-[11px] tracking-widest uppercase">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4 hover:no-underline">
                Live demo <ArrowUpRight size={12} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-neutral-500 hover:text-foreground">
                <Github size={12} /> Source
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </motion.article>
);

const Projects: React.FC = () => (
  <section id="projects" className="scroll-mt-20 py-20 lg:py-32">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="max-w-7xl mx-auto px-4 sm:px-6"
    >
      <SectionHeader
        index="01"
        title={<>Selected<br />Work</>}
        description="A curated selection of products, tools and platforms I've built — each with a short case study on the problem, the approach and what shipped."
        aside={
          <a
            href="https://github.com/Swapnil2656"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase underline underline-offset-4 hover:no-underline w-max"
          >
            All repositories on GitHub <ArrowUpRight size={12} />
          </a>
        }
      />

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} featured={i === 0 || (i === projects.length - 1 && i % 2 === 1)}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
