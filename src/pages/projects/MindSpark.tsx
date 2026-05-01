import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";
import mindsparkHero from "@/assets/mindspark-hero.jpg";

const MindSpark = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <article className="container-wide">
          {/* Header */}
          <header className="mb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft size={14} /> All work
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-accent">01</span>
              <span className="h-px w-8 bg-accent" aria-hidden />
              <p className="project-tag">Final Year Project · UX Research &amp; Interaction</p>
            </div>

            <h1 className="mb-6 max-w-4xl">MindSpark</h1>
            <p className="lead max-w-3xl">
              Designing an Interactive Cognitive Testing System — understanding
              factors of usability, accessibility, and context. A research-led
              UX project that re-frames the digital Go/No-Go test as an
              <em> interaction</em> problem, not just a measurement one.
            </p>
          </header>

          <ProjectMeta
            items={[
              { label: "Role", value: "Sole Designer, Researcher & Developer" },
              { label: "Duration", value: "Sept 2025 – April 2026" },
              { label: "Supervisor", value: "Dr. Lilian Genaro Motti" },
              { label: "Stack", value: "Figma · HTML/CSS/JS · Arduino · FreeCAD" },
            ]}
          />

          <figure className="image-frame aspect-[16/10] my-12">
            <img
              src={mindsparkHero}
              alt="MindSpark — interactive cognitive testing interface"
              className="w-full h-full object-cover"
              width={1600}
              height={1000}
            />
          </figure>

          {/* 01 Summary */}
          <CaseStudySection title="Summary" num="01">
            <p>
              MindSpark is the most complete expression of my design practice
              to date. It asks a deceptively simple question: <em>what happens
              when we treat cognitive testing not as measurement, but as an
              interaction experience?</em>
            </p>
            <p>
              The project redesigns the Go/No-Go test — a standard attention
              and inhibitory-control assessment — through the combined lens of
              usability, accessibility, and context. It is <strong>not</strong>{" "}
              a clinical diagnostic tool. It is a design-led exploration of
              how interaction design choices can affect whether a digital
              cognitive test is genuinely usable, equitable, and meaningful for
              the people taking it.
            </p>
            <p>
              The work spans an iterative three-stage prototyping process
              (low-, mid-, and high-fidelity), real-world usability testing
              with adults across a broad age range, and a custom
              Arduino-based hardware prototype that explores voice as an
              alternative interaction modality.
            </p>
          </CaseStudySection>

          {/* 02 Context */}
          <CaseStudySection title="Design context" num="02">
            <p>
              The Go/No-Go test measures attention and response inhibition:
              participants react quickly to frequent &ldquo;Go&rdquo; signals
              while withholding responses to less frequent &ldquo;No-Go&rdquo;
              ones. As cognitive testing has shifted from clinical
              administration to self-administered web and mobile formats, the
              <strong> interface itself</strong> has quietly become part of
              what is being measured.
            </p>
            <p>
              Literature shows that hesitation, low confidence, small touch
              targets, dense text instructions, and unclear feedback can all
              affect performance — independently of cognitive ability. In
              other words, poor interaction design can distort test results
              and misrepresent the people taking the test.
            </p>
            <blockquote className="pull-quote">
              The most meaningful contributions to interaction design happen
              when technology adapts to people, rather than requiring people
              to adapt to technology.
            </blockquote>
            <p>
              MindSpark is a response to that gap. It treats usability,
              accessibility, and context not as secondary refinements but as
              first-class design variables.
            </p>
          </CaseStudySection>

          {/* 03 Role */}
          <CaseStudySection title="My role" num="03">
            <p>
              MindSpark is a solo Final Year Project. I owned every part of
              the work end-to-end:
            </p>
            <ul className="list-none space-y-2 pl-0">
              {[
                "User research, literature review and analysis of existing cognitive testing tools",
                "Information architecture, user flows, and interaction design for the full app",
                "Three iterative Figma prototypes (low-, mid-, hi-fi) — visuals, components, states",
                "Front-end implementation of the Go/No-Go pathway in HTML/CSS/JavaScript",
                "Hardware prototyping: Arduino + microphone sensor for the verbal-response modality",
                "FreeCAD enclosure design for the physical prototype",
                "Recruitment, ethics application, and facilitation of usability testing across all three iterations",
                "Synthesis of qualitative feedback into actionable, evidence-based design changes",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base">
                  <span className="font-mono text-xs text-accent mt-1.5">→</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          {/* 04 Research questions */}
          <CaseStudySection title="Research questions" num="04">
            <div className="space-y-6">
              {[
                {
                  q: "RQ1",
                  text: "How do current cognitive assessment tools function in evaluating cognitive abilities, and what design limitations do they exhibit?",
                },
                {
                  q: "RQ2",
                  text: "What design considerations can enhance the accessibility and usability of cognitive assessment tools?",
                },
                {
                  q: "RQ3",
                  text: "How can different modes of interaction be combined to create effective cognitive assessment experiences?",
                },
              ].map((r) => (
                <div key={r.q} className="border-l-2 border-accent pl-5">
                  <p className="font-mono text-xs text-accent mb-1">{r.q}</p>
                  <p className="text-base md:text-lg leading-snug">{r.text}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          {/* 05 Process */}
          <CaseStudySection title="Process" num="05">
            <p>
              The project followed an iterative, ISO 9241-210 human-centred
              design process. Each prototyping stage was tested with real
              participants, and feedback drove the next iteration — ensuring
              decisions were evidence-led rather than assumption-led.
            </p>
            <ol className="grid md:grid-cols-2 gap-4 mt-6 list-none pl-0">
              {[
                ["01", "Literature review", "Usability, accessibility, digital literacy, multimodal interaction, contextual influence on cognitive performance."],
                ["02", "Analysis of the existing", "Heuristic review of digital Go/No-Go and cognitive assessment tools, identifying recurring design failures."],
                ["03", "Sketching & wireframing", "Low-fidelity flows for instructions, practice, alertness check, results, settings."],
                ["04", "Low-fi prototype + testing", "Figma prototype evaluated with 5–8 participants. Surfaced issues with readability, navigation conventions, and feedback clarity."],
                ["05", "Mid-fi prototype + testing", "Refined visual identity, component library, overlays, and Go/No-Go setup. Tested with 8–12 participants."],
                ["06", "Hi-fi prototype + testing", "Final visual polish, demonstration video for setup, multimodal verbal-response pathway. Tested with 12–15 participants."],
                ["07", "Hardware prototype", "Arduino Uno + microphone sensor inside a FreeCAD-designed enclosure, communicating with the app via serial."],
                ["08", "Synthesis", "Design recommendations and reflections on how interaction design shapes cognitive testing validity."],
              ].map(([n, t, d]) => (
                <li key={n} className="border-t border-foreground pt-4">
                  <p className="font-mono text-xs text-accent mb-1">{n}</p>
                  <h4 className="font-serif text-lg mb-1">{t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
          </CaseStudySection>

          {/* 06 Key design decisions */}
          <CaseStudySection title="Key design decisions" num="06">
            <p>
              Across iterations, four interaction design decisions shaped the
              system most strongly:
            </p>

            <div className="space-y-8 mt-6">
              <div>
                <h3 className="font-serif text-xl mb-2">Alertness check before each test</h3>
                <p className="text-muted-foreground">
                  A short pre-test capture of context (fatigue, time of day,
                  environment) acknowledges that test results are not
                  context-free. This re-frames cognitive performance as
                  something to be <em>interpreted</em> rather than just
                  scored — directly addressing a gap I identified in existing
                  tools.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Practice stage with demonstrative feedback</h3>
                <p className="text-muted-foreground">
                  Drawing on findings that dense text instructions and absent
                  feedback drive hesitation, the practice stage uses video
                  demonstrations and trial-by-trial guidance. Participants
                  reach the scored test understanding the rules, reducing
                  design-induced anxiety.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Minimal main test surface</h3>
                <p className="text-muted-foreground">
                  During scored trials, the UI strips back to essentials.
                  High-contrast stimuli, large touch targets (informed by
                  Fitts&rsquo; Law), no decoration. The interface stops
                  competing with the task.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Multimodal verbal-response pathway</h3>
                <p className="text-muted-foreground">
                  An optional voice-input modality, prototyped with an Arduino
                  microphone sensor in a FreeCAD-designed enclosure. This
                  preserves the binary Go/No-Go demand while removing motor
                  barriers — opening the test to users for whom touch
                  interaction is uncomfortable or inaccessible.
                </p>
              </div>
            </div>
          </CaseStudySection>

          {/* 07 What testing taught me */}
          <CaseStudySection title="What user testing taught me" num="07">
            <p>
              Three rounds of testing surfaced consistent themes that shaped
              every iteration:
            </p>
            <ul className="space-y-4 mt-4">
              {[
                ["Readability is non-negotiable", "Type size, line length, and contrast emerged as the most-mentioned issues across all rounds — far more than visual style. Accessibility is the design."],
                ["Mobile conventions matter", "Even when participants were comfortable with technology, deviations from familiar mobile patterns increased hesitation. Jakob's Law in practice."],
                ["Colour must mean something", "Decorative colour created confusion; purposeful colour (state, success, warning) created confidence."],
                ["Feedback shapes trust", "Where the original prototype offered silent transitions, participants doubted whether their input had registered. Even brief micro-feedback changed the felt quality of the test."],
                ["The hardware prototype changed expectations", "Participants who tried the verbal-response modality reframed what 'taking a cognitive test' could feel like — less clinical, more accommodating."],
              ].map(([t, d]) => (
                <li key={t} className="border-l border-border pl-5">
                  <p className="font-medium mb-1">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          {/* 08 Outcome */}
          <CaseStudySection title="Outcome" num="08">
            <p>
              MindSpark demonstrates — across three tested iterations and a
              working hardware prototype — that treating usability,
              accessibility, and context as core design variables produces a
              fundamentally different cognitive-testing experience.
            </p>
            <p>
              The final system moves digital cognitive testing away from a
              one-off, score-focused event and toward something more
              interpretable, more accessible, and more honest about the role
              of the interface in the result.
            </p>
            <p>
              The project also produces a set of <strong>actionable interaction
              design recommendations</strong> for future cognitive-testing
              systems, grounded in real participant feedback rather than
              assumption.
            </p>
          </CaseStudySection>

          {/* 09 Reflection */}
          <CaseStudySection title="Reflection" num="09">
            <p>
              MindSpark taught me to think about design as a position, not
              just a craft. Choosing to redesign a clinical-adjacent test
              meant being explicit about what I was — and wasn&rsquo;t —
              trying to change. The test itself is fixed; the experience
              around it is the design problem.
            </p>
            <p>
              It also reinforced that accessibility is not a downstream
              concern. Almost every meaningful improvement across the three
              iterations originated from accessibility thinking — readable
              type, clearer feedback, alternative inputs, contextual
              awareness. These improvements served everyone, not just users
              with specific needs.
            </p>
            <p>
              Most of all, the project clarified the kind of UX work I want
              to do next: research-led, accountable to real users, and
              focused on systems where design decisions have weight beyond
              aesthetics.
            </p>
          </CaseStudySection>

          {/* Footer nav */}
          <div className="section-divider mt-12 pt-8 flex justify-between items-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} /> All work
            </Link>
            <Link
              to="/projects/mould-man"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              Next: Mould Man <ArrowUpRight size={14} />
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default MindSpark;
