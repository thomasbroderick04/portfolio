import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import mindsparkHero from "@/assets/mindspark-hero.jpg";
import mouldmanHero from "@/assets/mouldman-hero.jpg";
import placeholderHero from "@/assets/placeholder-project.jpg";

const projects = [
  {
    num: "01",
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
    num: "02",
    title: "Mould Man",
    type: "Client Project · Group of 4",
    discipline: "UX Research · IA · Visual Design",
    year: "2025",
    description:
      "A research-led website for an Irish mould-remediation service. Built around evidence-based personas with an IA designed to convert health anxiety into trust.",
    image: mouldmanHero,
    path: "/projects/mould-man",
  },
  {
    num: "03",
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
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <header className="mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <p className="project-tag">Selected Work · 02</p>
          </div>
          <h1 className="mb-6">Case studies in interaction design.</h1>
          <p className="lead max-w-2xl">
            A small, deliberate selection of UX and interaction design projects —
            each documented with the research, decisions, iterations, and
            reflections that shaped it.
          </p>
        </header>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, idx) => (
            <Link
              key={project.path}
              to={project.path}
              className="group block"
              aria-label={`Open case study: ${project.title}`}
            >
              <article className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-7 image-frame aspect-[4/3] order-2 md:order-1 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.type}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading={idx === 0 ? "eager" : "lazy"}
                    width={1200}
                    height={900}
                  />
                </div>
                <div className="md:col-span-5 order-1 md:order-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-accent">{project.num}</span>
                    <span className="h-px flex-1 bg-border" aria-hidden />
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm font-medium text-foreground/80 mb-1">{project.type}</p>
                  <p className="project-tag mb-4">{project.discipline}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-6 text-sm font-medium group-hover:text-accent transition-colors">
                    Read case study
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
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
