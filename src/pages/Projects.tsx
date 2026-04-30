import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import mindsparkHero from "@/assets/mindspark-hero.jpg";
import mouldmanHero from "@/assets/mouldman-hero.jpg";
import placeholderHero from "@/assets/placeholder-project.jpg";

const projects = [
  {
    title: "MindSpark",
    type: "Final Year Project",
    category: "Interaction Design",
    year: "2025",
    description: "An interactive cognitive testing system exploring how usability, accessibility, and context shape the digital testing experience.",
    image: mindsparkHero,
    path: "/projects/mindspark",
  },
  {
    title: "Mould Man",
    type: "Client Website",
    category: "Web Design / UX",
    year: "2025",
    description: "A responsive website designed for a mould removal service, focused on clear information architecture and user trust.",
    image: mouldmanHero,
    path: "/projects/mould-man",
  },
  {
    title: "Project Three",
    type: "Coming Soon",
    category: "TBD",
    year: "—",
    description: "A third project exploring interaction design principles. Details coming soon.",
    image: placeholderHero,
    path: "/projects/project-three",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="mb-12">
          <p className="project-tag mb-4">Work</p>
          <h1 className="mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of interaction design, UX, and web design projects — each documented 
            with context, process, and reflection.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <Link
              key={project.path}
              to={project.path}
              className="group block"
            >
              <article className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                <div className="image-frame aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="py-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="project-tag">{project.category}</span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-1">{project.type}</p>
                  <p className="text-base text-muted-foreground leading-relaxed mt-3">
                    {project.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    Read case study →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
