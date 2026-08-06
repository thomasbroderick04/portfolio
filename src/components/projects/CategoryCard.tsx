import {
  Box,
  Clapperboard,
  CodeXml,
  Cpu,
  MoveUpRight,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { CategorySlug, ProjectCategory } from "@/data/projects";

const iconMap: Record<CategorySlug, LucideIcon> = {
  "ui-ux-design": CodeXml,
  "graphic-design": PenTool,
  "3d-modelling": Box,
  "physical-computing": Cpu,
  animation: Clapperboard,
};

interface CategoryCardProps {
  category: ProjectCategory;
  projectCount: number;
}

const CategoryCard = ({ category, projectCount }: CategoryCardProps) => {
  const Icon = iconMap[category.slug];

  return (
    <Link
      to={`/projects/${category.slug}`}
      className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >
      <article className="flex h-full min-h-[230px] flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-lg md:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex rounded-md border border-border bg-secondary p-3 text-foreground">
            <Icon size={22} aria-hidden="true" />
          </span>
          <MoveUpRight
            size={18}
            className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-8 text-xl font-semibold transition-colors group-hover:text-accent">
          {category.label}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
        <p className="mt-auto pt-6 text-xs font-medium text-muted-foreground">
          {projectCount === 0
            ? "Section ready for future work"
            : `${projectCount} ${projectCount === 1 ? "project" : "projects"}`}
        </p>
      </article>
    </Link>
  );
};

export default CategoryCard;
