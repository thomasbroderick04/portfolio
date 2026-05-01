import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <article className="container-wide">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <p className="project-tag">Practice · 03</p>
          </div>
          <h1 className="mb-12 max-w-4xl">
            I design interactions that adapt to people — rather than expecting people to adapt to them.
          </h1>

          <div className="grid md:grid-cols-12 gap-10 mb-20">
            <aside className="md:col-span-4">
              <p className="project-tag mb-3">Currently</p>
              <p className="text-sm leading-relaxed mb-6">
                Final-year B.Sc. Digital Media Design student at the University of Limerick,
                completing a research-led Final Year Project on cognitive testing systems
                under the supervision of Dr. Lilian Genaro Motti.
              </p>
              <p className="project-tag mb-3">Focus</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>UX research &amp; user testing</li>
                <li>Interaction &amp; interface design</li>
                <li>Accessibility &amp; inclusive design</li>
                <li>Information architecture</li>
                <li>Prototyping (Figma, code, hardware)</li>
              </ul>
            </aside>

            <div className="md:col-span-8 space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                What began as an interest in usability and visual design has grown into a
                deeper curiosity about how design decisions shape user experiences. I no
                longer assume that all users engage with technology with the same level of
                fluency — and the work I take on tries to honour that.
              </p>
              <p>
                My practice sits at the intersection of UX research, interaction design,
                and accessibility. I&rsquo;m drawn to projects where digital experiences
                need to be genuinely useful — where the stakes of getting interactions wrong
                are real, and where thoughtful design can make a measurable difference.
              </p>
              <p>
                I&rsquo;ve learned that the most meaningful contributions to interaction
                design happen when technology adapts to <em>people</em> — not the other way
                around. That belief shapes how I research, how I prototype, and how I
                evaluate whether a design is actually doing its job.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <p className="pull-quote max-w-3xl">
            &ldquo;Good design is as much about understanding the users interacting
            with a system as it is about the technology itself.&rdquo;
          </p>

          {/* Values */}
          <section className="mt-20 mb-20">
            <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-border">
              <h2 className="font-serif">How I work</h2>
              <p className="font-mono text-xs text-muted-foreground">04 principles</p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                {
                  num: "01",
                  title: "Research before assumption",
                  text: "Every project begins with understanding — thematic analysis, personas, journey maps, or literature review. Design decisions need to be grounded in evidence, not in what I assume the user wants.",
                },
                {
                  num: "02",
                  title: "Accessibility as quality",
                  text: "Accessibility is not a compliance checkbox. It&rsquo;s a measure of design quality. Contrast, target sizing, instruction clarity, multimodal options — these aren&rsquo;t add-ons, they&rsquo;re the brief.",
                },
                {
                  num: "03",
                  title: "Iterate with users",
                  text: "I follow ISO 9241-210 human-centred design principles. Low-, medium-, and high-fidelity prototypes tested with real participants — feedback shapes every revision.",
                },
                {
                  num: "04",
                  title: "Design for context",
                  text: "Interfaces don&rsquo;t exist in a vacuum. Time pressure, fatigue, anxiety, environment — these contextual factors are part of the design problem, and I treat them as such.",
                },
              ].map((value) => (
                <div key={value.num}>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-mono text-xs text-accent">{value.num}</span>
                    <h3 className="font-serif text-xl md:text-2xl">{value.title}</h3>
                  </div>
                  <p
                    className="text-sm md:text-base text-muted-foreground leading-relaxed pl-9"
                    dangerouslySetInnerHTML={{ __html: value.text }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Method */}
          <section className="mb-20">
            <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-border">
              <h2 className="font-serif">Method</h2>
              <p className="font-mono text-xs text-muted-foreground">Process</p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { n: "01", t: "Discover", d: "User research, literature, competitive review" },
                { n: "02", t: "Define", d: "Personas, scenarios, journey maps, IA" },
                { n: "03", t: "Sketch", d: "Concepts, flows, wireframes" },
                { n: "04", t: "Prototype", d: "Lo-, mid-, hi-fi in Figma &amp; code" },
                { n: "05", t: "Test &amp; refine", d: "Iterative usability testing" },
              ].map((step) => (
                <div key={step.n} className="border-t border-foreground pt-4">
                  <p className="font-mono text-xs text-accent mb-2">{step.n}</p>
                  <h4 className="font-serif text-lg mb-1">{step.t}</h4>
                  <p
                    className="text-xs text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.d }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Looking forward */}
          <section className="section-divider pt-12">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16">
              <p className="project-tag">Looking forward</p>
              <div>
                <p className="text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                  I&rsquo;m looking for graduate UX roles where research, accessibility,
                  and craft are taken seriously — particularly in healthcare, civic
                  technology, or any context where the design has to do real work for
                  real people.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium pb-2 border-b border-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  Get in touch
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default About;
