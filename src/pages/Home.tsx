import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import mindsparkHero from "@/assets/mindspark-hero-devices.png";
import mouldmanHero from "@/assets/mouldman-hero-devices.png";
import learnbetterHero from "@/assets/learnbetter-hero.png";

const featuredProjects = [
  {
    title: "MindSpark",
    type: "Final Year Project",
    description:
      "An interactive cognitive testing system. Redesigning the digital Go/No-Go test as an interaction problem — usability, accessibility, and context as core design variables.",
    image: mindsparkHero,
    path: "/projects/mindspark",
  },
  {
    title: "Mould Man",
    type: "Client Website · Group Project",
    description:
      "A research-led website for an Irish mould-remediation service. Built around three evidence-based personas with an IA designed to convert health anxiety into trust.",
    image: mouldmanHero,
    path: "/projects/mould-man",
  },
  {
    title: "LearnBetter",
    type: "Group Project · First Year",
    description:
      "A student e-learning companion designed to support focus, organisation, and connection in remote learning. My contribution focused on problem framing, personas, HMW, and the sketches that became the Progress and Education Video features.",
    image: learnbetterHero,
    path: "/projects/project-three",
  },
];

const Home = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        {/* Hero */}
        <section className="container-content mb-20">
          <p className="project-tag mb-4">UX &amp; Interaction Designer</p>
          <h1 className="mb-6">
            Hi, I&rsquo;m Thomas Broderick — a UX designer focused on usability,
            accessibility, and human-centred design.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            I&rsquo;m a final-year Digital Media Design student at the University
            of Limerick. My work covers user research, interaction design, and
            accessible interface design — building digital products that adapt
            to people, rather than the other way around.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={15} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors"
            >
              About me
            </Link>
          </div>
        </section>

        {/* Selected work */}
        <section>
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-border">
            <h2 className="text-xl font-semibold">Selected Work</h2>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              All projects →
            </Link>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <Link
                key={project.path}
                to={project.path}
                className="group block"
              >
                <div className="image-frame aspect-[16/9] mb-4">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    width={1600}
                    height={900}
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                      {project.description}
                    </p>
                  </div>
                  <span className="project-tag shrink-0 text-right">{project.type}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
