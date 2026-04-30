import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          <p className="project-tag mb-4">About</p>
          <h1 className="mb-8">
            I design interactions that respect the people using them.
          </h1>

          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed mb-16">
            <p>
              I'm an interaction designer focused on usability, accessibility, and human-centred 
              design. I believe that well-designed digital experiences should be understandable, 
              usable, and grounded in the real needs and contexts of the people they serve.
            </p>
            <p>
              My work sits at the intersection of research, interface design, prototyping, and 
              iterative development. I care about how people actually use systems — not how 
              systems want to be used. Every design decision I make starts with understanding 
              context, behaviour, and the constraints people face.
            </p>
            <p>
              Accessibility and usability are not afterthoughts in my practice — they are 
              fundamental measures of design quality. A well-considered interaction, a clear 
              information hierarchy, an interface that works for everyone: these are the 
              things I value most.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="case-study-heading">Design Values</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Clarity over cleverness",
                  text: "Good interaction design should be immediately understandable. I prioritise clear structure, honest feedback, and straightforward navigation.",
                },
                {
                  title: "Accessibility as quality",
                  text: "Designing for accessibility is designing well. I treat inclusive design as a core part of every project, not a compliance checkbox.",
                },
                {
                  title: "Process-driven",
                  text: "I work through research, sketching, wireframing, prototyping, and testing. Each stage informs the next, and I stay open to what the process reveals.",
                },
                {
                  title: "Human-centred always",
                  text: "Real users, real contexts, real constraints. I design with empathy and ground my decisions in observed needs rather than assumptions.",
                },
              ].map((value) => (
                <div key={value.title} className="p-6 bg-secondary rounded-sm">
                  <h3 className="text-sm font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="case-study-heading">My Approach</h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                I approach interaction design as a process of understanding before building. 
                Before I prototype, I research. Before I design interfaces, I map information 
                architectures and user flows. Before I refine, I test.
              </p>
              <p>
                I'm drawn to projects where digital experiences need to be genuinely useful — 
                where the stakes of getting interactions wrong are real, and where thoughtful 
                design can make a measurable difference to how people experience a system.
              </p>
              <p>
                My skills span user research, information architecture, wireframing, interface 
                design, prototyping, usability testing, and front-end development. I work 
                comfortably across the full design process from discovery through to delivery.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="case-study-heading">Looking Forward</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              I want to work on projects where interaction design genuinely matters — where 
              usability, accessibility, and user understanding are central to the brief. I'm 
              interested in roles where I can contribute to meaningful digital products and 
              services, collaborate with multidisciplinary teams, and continue developing 
              my craft as a designer who puts people first.
            </p>
          </section>

          <div className="section-divider pt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              View my projects →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default About;
