import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import {
  categorySlugs,
  getCategory,
  getProjectsForCategory,
  projectCategories,
  type CategorySlug,
} from "@/data/projects";

const ProjectCategoryPage = () => {
  const { categorySlug } = useParams();

  if (!categorySlug || !categorySlugs.includes(categorySlug as CategorySlug)) {
    return <Navigate to="/projects" replace />;
  }

  const category = getCategory(categorySlug)!;
  const projects = getProjectsForCategory(category.slug);
  const otherCategories = projectCategories.filter((item) => item.slug !== category.slug);

  return (
    <Layout>
      <div className="page-shell py-12 md:py-20">
        <div className="container-wide">
          <Link
            to="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:mb-14"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All project categories
          </Link>

          <header className="max-w-3xl">
            <p className="project-tag mb-4">Project discipline</p>
            <h1>{category.label}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {category.introduction}
            </p>
          </header>

          <section className="mt-12 md:mt-16" aria-labelledby="category-projects-heading">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
              <h2 id="category-projects-heading" className="text-xl font-semibold">
                {projects.length > 0 ? "Projects in this discipline" : "Projects coming soon"}
              </h2>
              <span className="text-sm text-muted-foreground">
                {projects.length} {projects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            {projects.length > 0 ? (
              <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.path} project={project} compact />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border bg-card p-8 md:p-12">
                <h3 className="text-lg font-semibold">This category is ready for new work.</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  No case study has been assigned to {category.label} yet. The page and navigation are already in place, so a future project only needs to be added to the central project data file.
                </p>
              </div>
            )}
          </section>

          <section className="mt-16 border-t border-border pt-10 md:mt-24" aria-labelledby="other-disciplines-heading">
            <h2 id="other-disciplines-heading" className="text-lg font-semibold">
              Explore another discipline
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {otherCategories.map((item) => (
                <Link
                  key={item.slug}
                  to={`/projects/${item.slug}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectCategoryPage;
