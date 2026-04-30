import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import mindsparkHero from "@/assets/mindspark-hero.jpg";
import mouldmanHero from "@/assets/mouldman-hero.jpg";
import placeholderHero from "@/assets/placeholder-project.jpg";

const featuredProjects = [
  {
    title: "MindSpark",
    type: "Final Year Project",
    description: "An interactive cognitive testing system exploring how usability, accessibility, and context shape the digital testing experience.",
    image: mindsparkHero,
    path: "/projects/mindspark",
  },
  {
    title: "Mould Man",
    type: "Client Website",
    description: "A responsive website designed for a mould removal service, focused on clear information architecture and user trust.",
    image: mouldmanHero,
    path: "/projects/mould-man",
  },
  {
    title: "Project Three",
    type: "Coming Soon",
    description: "A third project exploring interaction design principles. Details coming soon.",
    image: placeholderHero,
    path: "/projects/project-three",
  },
];

const Home = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        {/* Hero */}
        <section className="container-content mb-20 md:mb-28">
          <p className="project-tag mb-4">Interaction Designer</p>
          <h1 className="mb-6">
            Designing digital experiences that are understandable, usable, and grounded in real human needs.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            I focus on interaction design, usability, and accessibility — creating interfaces 
            and systems where the design serves people, not the other way around. My work is 
            shaped by research, iteration, and a commitment to thoughtful, human-centred practice.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded transition-opacity hover:opacity-90"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded transition-colors hover:bg-secondary"
            >
              About Me
            </Link>
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="flex items-baseline justify-between mb-8">
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
                <div className="image-frame aspect-[3/2] mb-4">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-lg">
                      {project.description}
                    </p>
                  </div>
                  <span className="project-tag shrink-0">{project.type}</span>
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
