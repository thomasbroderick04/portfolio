import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getCategory } from "@/data/projects";
import type { CategorySlug } from "@/data/projects";

interface ProjectBreadcrumbsProps {
  category: CategorySlug;
  projectTitle: string;
}

const ProjectBreadcrumbs = ({ category, projectTitle }: ProjectBreadcrumbsProps) => {
  const projectCategory = getCategory(category);

  return (
    <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link to="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight size={14} />
        </li>
        <li>
          <Link
            to={`/projects/${category}`}
            className="hover:text-foreground transition-colors"
          >
            {projectCategory?.label}
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight size={14} />
        </li>
        <li className="max-w-full truncate font-medium text-foreground" aria-current="page">
          {projectTitle}
        </li>
      </ol>
    </nav>
  );
};

export default ProjectBreadcrumbs;
