import Layout from "@/components/Layout";
import CategoryCard from "@/components/projects/CategoryCard";
import ProjectCard from "@/components/projects/ProjectCard";
import {
  getProjectsForCategory,
  portfolioProjects,
  projectCategories,
} from "@/data/projects";

const Projects = () => {
  return (
    <Layout>
      <div className="page-shell py-12 md:py-20">
        <div className="container-wide">
          <header className="max-w-3xl">
            <p className="project-tag mb-4">My Work</p>
            <h1>Projects</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Explore my work by discipline, or browse every project below. Each
              case study explains the problem, process, decisions and reflection
              behind the final outcome.
            </p>
          </header>

          <section className="mt-12 md:mt-16" aria-labelledby="disciplines-heading">
            <div className="mb-7 border-b border-border pb-4">
              <h2 id="disciplines-heading" className="text-xl font-semibold">
                Browse by discipline
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Select an area to see the projects and skills most relevant to it.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projectCategories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  category={category}
                  projectCount={getProjectsForCategory(category.slug).length}
                />
              ))}
            </div>
          </section>

          <section className="mt-16 md:mt-24" aria-labelledby="all-projects-heading">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
              <div>
                <h2 id="all-projects-heading" className="text-xl font-semibold">
                  All projects
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Some projects appear in more than one discipline when the work overlaps.
                </p>
              </div>
              <span className="text-sm text-muted-foreground">
                {portfolioProjects.length} projects
              </span>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {portfolioProjects.map((project) => (
                <ProjectCard key={project.path} project={project} compact />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
