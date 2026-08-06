import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { PortfolioProject } from "@/data/projects";
import { getCategory } from "@/data/projects";

interface ProjectCardProps {
  project: PortfolioProject;
  compact?: boolean;
}

const ProjectCard = ({ project, compact = false }: ProjectCardProps) => {
  const primaryCategory = getCategory(project.primaryCategory);

  return (
    <Link
      to={project.path}
      className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className={`overflow-hidden bg-secondary ${compact ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="project-tag mb-2">{primaryCategory?.label}</p>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              aria-hidden="true"
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} skills`}>
            {project.tags.slice(0, 4).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
