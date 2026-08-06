import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { portfolioProjects } from "@/data/projects";

const featuredProjects = portfolioProjects.filter((project) => project.featured);

const Home = () => {
  return (
    <Layout>
      <div className="page-shell py-12 md:py-20">
        <div className="container-wide">
          <section className="max-w-5xl" aria-labelledby="home-heading">
            <p className="project-tag mb-4">UX &amp; Interaction Designer</p>
            <h1 id="home-heading">
              Hi, I&rsquo;m Thomas Broderick — a UX designer focused on usability,
              accessibility and human-centred design.
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-muted-foreground">
              I am a BSc (Hons) Digital Media Design graduate of the University of
              Limerick, specialising in user research, interaction design and
              accessible interface design. My broader work also includes physical
              computing, 3D modelling, graphic design and animation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore projects <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                About me
              </Link>
            </div>
          </section>

          <section className="mt-20 md:mt-28" aria-labelledby="featured-heading">
            <div className="mb-7 flex items-baseline justify-between gap-4 border-b border-border pb-4">
              <h2 id="featured-heading" className="text-xl font-semibold">
                Selected projects
              </h2>
              <Link
                to="/projects"
                className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Browse all →
              </Link>
            </div>

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.path} project={project} compact />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
