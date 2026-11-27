import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";
import { projects } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/animations";
import { useDocumentMeta } from "../utils/useDocumentMeta";
import ProjectCover from "../components/UI/ProjectCover";

const ProjectPage: React.FC = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  useDocumentMeta(project?.title, project?.summary);

  if (!project) return <Navigate to="/404" replace />;

  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Type", value: project.category },
    { label: "Status", value: project.status === "completed" ? "Shipped" : "In progress" },
  ];

  return (
    <motion.article
      key={project.slug}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16"
    >
      <motion.div variants={fadeUp}>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-neutral-500 hover:text-foreground"
        >
          <ArrowLeft size={14} /> All work
        </Link>
      </motion.div>

      {/* Title */}
      <motion.header variants={fadeUp} className="mt-10 mb-10 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-neutral-500 mb-4">
            Case study / {String(index + 1).padStart(2, "0")}
          </p>
          <h1 className="font-grotesk font-bold uppercase tracking-tighter leading-[0.88] text-[clamp(3.5rem,11vw,9rem)]">
            {project.title}
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-neutral-600 max-w-2xl">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-xs tracking-widest uppercase hover:bg-neutral-800"
            >
              Live demo <ArrowUpRight size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground font-mono text-xs tracking-widest uppercase hover:bg-foreground hover:text-background"
            >
              <Github size={14} /> Source
            </a>
          )}
        </div>
      </motion.header>

      {/* Meta strip */}
      <motion.dl variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border-y border-foreground">
        {meta.map((m) => (
          <div key={m.label} className="bg-background py-5 px-4">
            <dt className="font-mono text-[10px] tracking-widest uppercase text-neutral-500 mb-1">{m.label}</dt>
            <dd className="font-grotesk font-bold text-lg">{m.value}</dd>
          </div>
        ))}
      </motion.dl>

      <motion.div variants={fadeUp} className="group my-12">
        <ProjectCover project={project} index={index} className="aspect-[16/9] sm:aspect-[21/9]" />
      </motion.div>

      {/* Body */}
      <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-24">
        <motion.aside variants={fadeUp} className="lg:sticky lg:top-28 self-start">
          <p className="font-mono text-[10px] tracking-widest uppercase text-neutral-500 mb-4">Stack</p>
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="font-mono text-xs border border-border px-2.5 py-1">
                {t.toLowerCase()}
              </li>
            ))}
          </ul>
        </motion.aside>

        <div className="space-y-14 max-w-3xl">
          <motion.section variants={fadeUp}>
            <h2 className="font-mono text-xs tracking-widest uppercase text-neutral-500 mb-4">/01 The problem</h2>
            <p className="text-lg sm:text-xl leading-relaxed">{project.problem}</p>
          </motion.section>

          <motion.section variants={fadeUp}>
            <h2 className="font-mono text-xs tracking-widest uppercase text-neutral-500 mb-4">/02 The approach</h2>
            <p className="text-lg sm:text-xl leading-relaxed">{project.solution}</p>
          </motion.section>

          <motion.section variants={fadeUp}>
            <h2 className="font-mono text-xs tracking-widest uppercase text-neutral-500 mb-4">/03 Key features</h2>
            <ul className="divide-y divide-border border-y border-border">
              {project.features.map((f) => (
                <li key={f} className="flex gap-4 py-4 text-base sm:text-lg">
                  <Check size={18} className="mt-1 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.section>

          {project.images && project.images.length > 1 && (
            <motion.section variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
              {project.images.slice(1).map((src) => (
                <img key={src} src={src} alt={`${project.title} screenshot`} loading="lazy" className="w-full border border-border" />
              ))}
            </motion.section>
          )}
        </div>
      </div>

      {/* Next project */}
      <motion.div variants={fadeUp} className="mt-24 border-t border-foreground pt-6">
        <Link to={`/projects/${next.slug}`} className="group flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-neutral-500 mb-2">Next project</p>
            <p className="font-grotesk font-bold uppercase tracking-tighter leading-none text-[clamp(2.5rem,8vw,6rem)] group-hover:translate-x-2 transition-transform duration-500">
              {next.title}
            </p>
          </div>
          <ArrowRight size={48} className="shrink-0 group-hover:translate-x-2 transition-transform duration-500" />
        </Link>
      </motion.div>
    </motion.article>
  );
};

export default ProjectPage;
