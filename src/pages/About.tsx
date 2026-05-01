import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const skillGroups = [
  {
    title: "Usability Research",
    items: [
      "User interviews & contextual inquiry",
      "Thematic analysis & affinity mapping",
      "Moderated & remote usability testing",
      "Heuristic & accessibility evaluation",
      "Synthesis: insights → design decisions",
    ],
  },
  {
    title: "UX & Interaction Design",
    items: [
      "Personas, scenarios, journey maps",
      "Information architecture & user flows",
      "Wireframing & prototyping (Figma)",
      "Interaction & UI design systems",
      "Iterative low → mid → hi-fi prototyping",
    ],
  },
  {
    title: "Accessibility & Inclusive Design",
    items: [
      "WCAG 2.2 conformance",
      "Inclusive design principles",
      "Contrast, typography & motor-accessibility",
      "Multimodal interaction (voice, hardware)",
    ],
  },
  {
    title: "Implementation",
    items: [
      "HTML, CSS, JavaScript",
      "Hardware prototyping (Arduino)",
      "3D enclosure modelling (FreeCAD)",
      "Version control (Git / GitHub)",
    ],
  },
];

const values = [
  {
    title: "Research before assumption",
    text: "I start with users — interviews, thematic analysis, personas, journey maps, and literature. Decisions need evidence, not guesses.",
  },
  {
    title: "Accessibility as quality",
    text: "Accessibility isn't a checkbox at the end of a project — it's a measure of design quality from the very first sketch.",
  },
  {
    title: "Iterate with users",
    text: "Following ISO 9241-210, I prototype across low, mid, and hi-fi stages and test with real participants at every step.",
  },
  {
    title: "Design for context",
    text: "Interfaces don't exist in a vacuum. Time pressure, fatigue, environment, and emotional state are part of the design problem.",
  },
];

const About = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          <p className="project-tag mb-4">About</p>
          <h1 className="mb-8">
            I&rsquo;m a UX designer focused on usability research,
            accessibility, and human-centred design.
          </h1>

          {/* Design statement */}
          <section className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed mb-16">
            <p>
              I&rsquo;m Thomas Broderick, a final-year B.Sc. Digital Media
              Design student at the University of Limerick. My practice sits at
              the intersection of <span className="text-foreground">usability research</span>,
              accessibility, and interaction design — designing digital
              products that adapt to people, rather than asking people to adapt
              to them.
            </p>
            <p>
              What drives me is a conviction that the interface is never
              neutral. My final-year project, <em>MindSpark</em>, made that
              tangible: a redesign of a digital cognitive test where I could
              show, through three rounds of moderated usability testing, that
              hesitation, low confidence, and dense instructions weren&rsquo;t
              measuring cognition — they were measuring poor design. That
              experience anchored my belief that <span className="text-foreground">usability research isn&rsquo;t a phase
              of a project; it&rsquo;s the foundation a project stands on</span>.
            </p>
            <p>
              I work across the full UX process: user interviews, thematic
              analysis, personas and journey maps, information architecture,
              wireframing, prototyping, accessible interface design, and
              iterative usability testing. I follow ISO 9241-210&rsquo;s
              human-centred design cycle in practice — testing each stage with
              real participants and letting findings, not assumptions, drive
              the next iteration.
            </p>
            <p>
              The themes that motivate me are accessibility, contextual
              awareness, and the ethics of measurement. I&rsquo;m drawn to
              projects where design decisions carry real weight for the people
              using them — healthcare, civic technology, education, and
              service design — and to research-led environments where evidence
              is taken as seriously as craft.
            </p>
            <p>
              Looking forward, I want to grow as a UX designer in a team that
              treats research, accessibility, and iteration as core practice
              rather than overhead — building products that are honest about
              who they&rsquo;re for, and rigorous about how they got there.
            </p>
          </section>

          {/* How I work */}
          <section className="mb-16">
            <h2 className="case-study-heading">How I work</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16">
            <h2 className="case-study-heading">Skills</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    {group.title}
                  </h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {group.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Looking forward — closing block */}
          <section className="mb-12 rounded-lg border border-border bg-secondary/60 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
              Looking forward
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              I&rsquo;m looking for graduate UX roles where research,
              accessibility, and craft are taken seriously — particularly in
              healthcare, civic technology, or product work where design
              decisions have real weight. Open to remote and relocation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              Get in touch →
            </Link>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default About;
