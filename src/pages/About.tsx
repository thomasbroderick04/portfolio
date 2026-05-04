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
              My name is Thomas Broderick, and I am a final-year B.Sc. Digital
              Media Design student at the University of Limerick. My practice
              sits at the intersection of <span className="text-foreground">UX research</span>,
              accessibility, and interaction design. I&rsquo;m interested in
              designing digital products that are more understandable,
              inclusive, and responsive to the real conditions people use them
              in.
            </p>
            <p>
              What drives me as a designer is the belief that interfaces are
              never neutral. A screen does more than display information. It
              affects how easily users understand what they are seeing and how
              confidently they can interact with it. When an interface is
              unclear or inaccessible, the problem is often placed on the
              user. I am more interested in questioning the design.
            </p>
            <p>
              That became especially clear through my college projects.
              Through moderated usability testing, prototyping, and iterative
              design, I saw that hesitation, low confidence, and misunderstood
              instructions were not simply user errors. In many cases, they
              were signals of poor design. That experience strengthened my
              belief that <span className="text-foreground">usability research is not just a phase of a project,
              but the foundation it should stand on</span>.
            </p>
            <p>
              The themes that motivate my work are usability, accessibility,
              context, and the ethics of design decisions. I&rsquo;m drawn to
              projects where relatively small interface choices can have
              meaningful consequences: whether someone understands a task,
              feels confident completing it, can access it comfortably, or is
              fairly represented by the outcome. For me, good design is not
              only about making something look refined. It is about making
              interactions feel clear, respectful, and appropriate for the
              people using them.
            </p>
            <p>
              My approach is research-led and iterative. I prefer to begin
              with questions rather than assumptions. I use interviews,
              observation, testing, and reflection to understand what users
              require from a design. Accessibility is a priority from the
              beginning of my design process, rather than a final adjustment,
              and I also place strong importance on context. Factors such as
              fatigue, time pressure, confidence, and environment can all
              shape how a person experiences and uses a digital product.
            </p>
            <p>
              Looking ahead, I want to grow as a UX and interaction designer
              creating accessible and thoughtful digital experiences shaped by
              research and designed around real user needs. I am especially
              interested in designing clear, trustworthy digital services and
              experiences, particularly where systems are complex, people rely
              on them in real moments of need, and design has a direct impact
              on confidence, understanding, and support.
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
