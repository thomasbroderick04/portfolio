import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          <p className="project-tag mb-4">About</p>
          <h1 className="mb-8">
            I&rsquo;m a UX designer focused on usability, accessibility, and
            human-centred design.
          </h1>

          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed mb-16">
            <p>
              I&rsquo;m currently completing a B.Sc. in Digital Media Design at
              the University of Limerick. My final year project, MindSpark, is
              a research-led interactive cognitive testing system supervised by
              Dr. Lilian Genaro Motti.
            </p>
            <p>
              What started as an interest in usability and visual design has
              become a deeper focus on how design decisions affect real users.
              I no longer assume users engage with technology in the same way,
              and the work I take on tries to reflect that.
            </p>
            <p>
              I work across the full UX process — research, information
              architecture, wireframing, prototyping, accessible interface
              design, and usability testing — and I&rsquo;m most drawn to
              projects where thoughtful design genuinely matters.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="case-study-heading">How I work</h2>
            <div className="divide-y divide-border border-y border-border">
              {[
                {
                  title: "Research before assumption",
                  text: "I start with users — interviews, thematic analysis, personas, journey maps, literature. Decisions need evidence, not guesses.",
                },
                {
                  title: "Accessibility as quality",
                  text: "Accessibility isn't a checkbox at the end of a project — it's a measure of design quality from the start.",
                },
                {
                  title: "Iterate with users",
                  text: "Following ISO 9241-210, I prototype across low, mid, and hi-fi stages and test with real participants at each step.",
                },
                {
                  title: "Design for context",
                  text: "Interfaces don't exist in a vacuum. Time pressure, fatigue, and environment are part of the design problem.",
                },
              ].map((value) => (
                <div key={value.title} className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-8 py-4">
                  <h3 className="text-sm font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="case-study-heading">Skills</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <div>User research &amp; interviews</div>
              <div>Thematic analysis</div>
              <div>Personas, scenarios, journey maps</div>
              <div>Information architecture</div>
              <div>Wireframing &amp; prototyping (Figma)</div>
              <div>Interaction &amp; UI design</div>
              <div>Usability testing &amp; iteration</div>
              <div>Accessibility (WCAG, inclusive design)</div>
              <div>HTML, CSS, JavaScript</div>
              <div>Hardware prototyping (Arduino, FreeCAD)</div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="case-study-heading">Looking forward</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              I&rsquo;m looking for graduate UX roles where research,
              accessibility, and craft are taken seriously — particularly in
              healthcare, civic technology, or product work where design
              decisions have real weight. Open to remote and relocation.
            </p>
          </section>

          <div className="section-divider pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default About;
