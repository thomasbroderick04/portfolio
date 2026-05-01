import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import mindsparkHero from "@/assets/mindspark-hero.jpg";
import mouldmanHero from "@/assets/mouldman-hero.jpg";
import placeholderHero from "@/assets/placeholder-project.jpg";

const projects = [
  {
    title: "MindSpark",
    type: "Final Year Project",
    discipline: "UX Research · Interaction · Multimodal",
    year: "2025–26",
    description:
      "An interactive cognitive testing system. Redesigning the digital Go/No-Go test as an interaction problem — usability, accessibility, and context as core design variables.",
    image: mindsparkHero,
    path: "/projects/mindspark",
  },
  {
    title: "Mould Man",
    type: "Client Website · Group Project",
    discipline: "UX Research · IA · Visual Design",
    year: "2025",
    description:
      "A research-led website for an Irish mould-remediation service. Built around three evidence-based personas with an IA designed to convert health anxiety into trust.",
    image: mouldmanHero,
    path: "/projects/mould-man",
  },
  {
    title: "Project Three",
    type: "In Development",
    discipline: "TBC",
    year: "2026",
    description:
      "A forthcoming case study currently in research and definition.",
    image: placeholderHero,
    path: "/projects/project-three",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="container-content mb-12">
          <p className="project-tag mb-4">Work</p>
          <h1 className="mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A selection of UX and interaction design projects, each documented
            with the research, decisions, and reflections that shaped it.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <Link key={project.path} to={project.path} className="group block">
              <article className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                <div className="image-frame aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    width={1200}
                    height={900}
                  />
                </div>
                <div className="py-2">
                  <p className="project-tag mb-3">
                    {project.discipline} · {project.year}
                  </p>
                  <h2 className="text-2xl font-semibold mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">{project.type}</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium hover:text-accent transition-colors">
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
