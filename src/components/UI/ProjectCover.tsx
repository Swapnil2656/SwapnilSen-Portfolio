import React from "react";
import { Project } from "../../data/portfolio";

/**
 * Project visual. Uses the first screenshot when one exists in `project.images`;
 * otherwise renders a typographic "browser window" cover in the site's style.
 */
const ProjectCover: React.FC<{ project: Project; index: number; className?: string }> = ({
  project,
  index,
  className = "",
}) => {
  const image = project.images?.[0];
  const host = project.live
    ? new URL(project.live).host
    : project.github
      ? project.github.replace(/^https?:\/\//, "")
      : `swapnilsen.in/projects/${project.slug}`;

  return (
    <div className={`relative overflow-hidden bg-foreground text-background ${className}`}>
      {image ? (
        <img
          src={image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col">
          {/* window chrome */}
          <div className="flex items-center gap-3 border-b border-background/15 px-4 py-2.5">
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-background/30" />
              <span className="h-2 w-2 rounded-full bg-background/30" />
              <span className="h-2 w-2 rounded-full bg-background/30" />
            </span>
            <span className="font-mono text-[10px] tracking-wider text-background/50 truncate">{host}</span>
          </div>
          <div
            className="relative flex-1 flex items-center justify-center p-6"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(242,242,245,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,242,245,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          >
            <span className="absolute top-4 left-5 font-mono text-[10px] tracking-widest text-background/40">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="absolute bottom-4 right-5 font-mono text-[10px] tracking-widest uppercase text-background/40">
              {project.tech.slice(0, 3).join(" · ")}
            </span>
            <span className="font-grotesk font-bold uppercase tracking-tighter leading-none text-[clamp(2.5rem,7vw,5.5rem)] transition-transform duration-700 group-hover:scale-105">
              {project.title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCover;
