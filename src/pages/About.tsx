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
      "Iterative low → medium → high-fidelity prototyping",
    ],
  },
  {
    title: "Accessibility & Inclusive Design",
    items: [
      "WCAG 2.2 conformance",
      "Inclusive design principles",
      "Contrast, typography & motor-accessibility",
      "Multimodal interaction",
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

const About = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          <p className="project-tag mb-4">About</p>
          <h1 className="mb-8">
            I am a UX designer focused on usability research, accessibility, and
            human-centred design.
          </h1>

          {/* Design statement */}
          <section className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed mb-16 max-w-4xl">
            <p>
              My name is Thomas Broderick, and I am a B.Sc. Digital
              Media Design (1:!) graduate of the University of Limerick. My practice
              sits at the intersection of interaction design, accessibility, and
              user experience research. I am interested in how interfaces shape
              participation and how design decisions can expand or restrict the
              possibilities available to different users. Rather than designing
              for an imagined &quot;average&quot; user, I focus on creating
              systems that recognise a wider range of abilities, contexts, and
              ways of interacting with technology.
            </p>

            <p>
              I believe accessibility is not simply a technical requirement or
              final stage of a project. It is a fundamental design principle that
              asks who a system is designed for and who it leaves behind. Many
              digital products continue to be built around narrow assumptions
              about users&apos; bodies, abilities, experiences, and
              circumstances. My work explores how interaction design can
              challenge these assumptions by creating interfaces that support
              greater inclusion, agency, and participation.
            </p>

            <p>
              Through research, testing, and iterative design, I seek to
              understand the barriers people encounter when engaging with digital
              systems. I am particularly interested in how seemingly small
              design decisions can have significant consequences for whether
              someone can access information, complete a task, or meaningfully
              participate in digital environments. For me, good design is not
              simply efficient or aesthetically refined—it creates conditions for
              more people to engage, contribute, and interact on their own terms.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-16">
            <h2 className="case-study-heading">Skills</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="text-base font-semibold text-foreground mb-3">
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
        </article>
      </div>
    </Layout>
  );
};

export default About;
