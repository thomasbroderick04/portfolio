import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import mindsparkHero from "@/assets/mindspark-hero.jpg";
import mouldmanHero from "@/assets/mouldman-hero.jpg";
import placeholderHero from "@/assets/placeholder-project.jpg";

const featuredProjects = [
  {
    num: "01",
    title: "MindSpark",
    type: "Final Year Project · Research-led UX",
    year: "2025–26",
    description:
      "An interactive cognitive testing system that re-frames the digital Go/No-Go test as an interaction problem — where usability, accessibility, and context shape the validity of the result.",
    image: mindsparkHero,
    path: "/projects/mindspark",
  },
  {
    num: "02",
    title: "Mould Man",
    type: "Client UX · Web",
    year: "2025",
    description:
      "A research-led website for an Irish mould-remediation service. Built around three evidence-based personas, with information architecture designed to translate health anxiety into trust and action.",
    image: mouldmanHero,
    path: "/projects/mould-man",
  },
  {
    num: "03",
    title: "Project Three",
    type: "In Development",
    year: "2026",
    description:
      "A forthcoming case study exploring interaction design within a new domain. Currently in research and definition.",
    image: placeholderHero,
    path: "/projects/project-three",
  },
];

const Home = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Hero */}
        <section className="container-wide mb-24 md:mb-32">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <p className="project-tag">Portfolio · Index</p>
          </div>

          <h1 className="mb-10 max-w-5xl">
            UX &amp; interaction design for digital systems where{" "}
            <em className="not-italic text-accent">usability</em>,{" "}
            <em className="not-italic text-accent">accessibility</em>, and{" "}
            <em className="not-italic text-accent">context</em> shape whether
            the design actually works for the people using it.
          </h1>

          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end max-w-4xl">
            <p className="lead max-w-2xl">
              I&rsquo;m Thomas Broderick — a final-year Digital Media Design
              student at the University of Limerick. My practice sits at the
              intersection of <span className="text-foreground">user research</span>,{" "}
              <span className="text-foreground">interaction design</span>, and{" "}
              <span className="text-foreground">accessible interface work</span>.
              I design systems that adapt to people, rather than asking people
              to adapt to systems.
            </p>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 self-start text-sm font-medium pb-2 border-b border-foreground hover:border-accent hover:text-accent transition-colors whitespace-nowrap"
            >
              Selected work
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Selected work */}
        <section className="mb-24" aria-labelledby="work-heading">
          <div className="flex items-baseline justify-between mb-12 pb-4 border-b border-border">
            <div>
              <p className="project-tag mb-2">Section Two</p>
              <h2 id="work-heading" className="font-serif">Selected Work</h2>
            </div>
            <p className="font-mono text-xs text-muted-foreground hidden sm:block">
              {featuredProjects.length} projects
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {featuredProjects.map((project, idx) => (
              <Link
                key={project.path}
                to={project.path}
                className="group block"
              >
                <article className="grid md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-7 image-frame aspect-[4/3] order-2 md:order-1">
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
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-accent">{project.num}</span>
                      <span className="h-px flex-1 bg-border" aria-hidden />
                      <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="project-tag mb-4">{project.type}</p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      Read case study
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Practice / Closing */}
        <section className="container-wide section-divider pt-16">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16">
            <p className="project-tag">Section Three</p>
            <div>
              <p className="font-serif text-2xl md:text-3xl leading-snug mb-6 max-w-2xl">
                Good design is as much about understanding the people interacting
                with a system as it is about the technology itself.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium pb-2 border-b border-foreground hover:border-accent hover:text-accent transition-colors"
              >
                Read about my practice
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
