import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import mindsparkHero from "@/assets/mindspark-hero-devices.png";
import mouldmanHero from "@/assets/mouldman-hero-devices.png";
import learnbetterHero from "@/assets/learnbetter-hero.png";

const projects = [
  {
    title: "MindSpark",
    description:
      "An interactive cognitive testing system. Redesigning the digital Go/No-Go test as an interaction problem with usability, accessibility, and context as central design variables.",
    image: mindsparkHero,
    path: "/projects/mindspark",
  },
  {
    title: "MouldMan",
    description:
      "A research-led website for an Irish mould-remediation service. Built around three evidence-based personas with an IA designed to convert health anxiety into trust.",
    image: mouldmanHero,
    path: "/projects/mould-man",
  },
  {
    title: "LearnBetter",
    description:
      "A student e-learning companion designed to support focus, organisation, and connection in remote learning. My contribution focused on problem framing, personas, HMW, and the sketches that became the Progress and Education Video features.",
    image: learnbetterHero,
    path: "/projects/project-three",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="container-content mb-14">
          <p className="project-tag mb-4">My Work</p>
          <h1 className="mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A selection of UX and interaction design projects, each documented
            with the research, decisions, and reflections that shaped it.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <Link key={project.path} to={project.path} className="group block">
              <article className="grid md:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-10 items-start">
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

                <div className="md:pt-4">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  <span className="inline-block mt-4 text-sm font-medium hover:text-accent transition-colors">
                    Read about project →
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
