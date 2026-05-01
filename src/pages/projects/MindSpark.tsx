import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import mindsparkHero from "@/assets/mindspark-hero.jpg";

const MindSpark = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          {/* Header */}
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Back to projects
          </Link>

          <p className="project-tag mb-3">Final Year Project · UX Research &amp; Interaction</p>
          <h1 className="mb-5">MindSpark</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-2">
            Designing an Interactive Cognitive Testing System — understanding
            factors of usability, accessibility, and context.
          </p>

          <ProjectMeta
            items={[
              { label: "Role", value: "Sole Designer, Researcher & Developer" },
              { label: "Duration", value: "Sept 2025 – April 2026" },
              { label: "Supervisor", value: "Dr. Lilian Genaro Motti" },
              { label: "Tools", value: "Figma · HTML/CSS/JS · Arduino · FreeCAD" },
            ]}
          />

          {/* Hero image */}
          <figure className="image-frame aspect-[16/9] my-8">
            <img
              src={mindsparkHero}
              alt="MindSpark — interactive cognitive testing interface"
              className="w-full h-full object-cover"
              width={1600}
              height={900}
            />
          </figure>

          {/* Summary */}
          <CaseStudySection title="Summary">
            <p>
              MindSpark is my Final Year Project — a research-led redesign of
              the digital Go/No-Go test, a standard cognitive assessment of
              attention and inhibitory control. The project asks: <em>what
              happens when we treat cognitive testing not as measurement, but
              as an interaction experience?</em>
            </p>
            <p>
              The work is design-led and not a clinical diagnostic tool. It
              spans an iterative three-stage prototyping process (low-, mid-,
              and high-fidelity), real-world usability testing with adults
              across a broad age range, and a custom Arduino-based hardware
              prototype that explores voice as an alternative interaction
              modality.
            </p>
          </CaseStudySection>

          {/* Context & Problem */}
          <CaseStudySection title="Design Context &amp; Problem">
            <p>
              The Go/No-Go test measures attention and response inhibition.
              Participants react quickly to frequent &ldquo;Go&rdquo; signals
              while withholding responses to less frequent &ldquo;No-Go&rdquo;
              ones. As cognitive testing has shifted from clinical
              administration to self-administered web and mobile formats, the
              <strong className="text-foreground"> interface itself</strong>{" "}
              has quietly become part of what is being measured.
            </p>
            <p>
              Literature shows that hesitation, low confidence, small touch
              targets, dense text instructions, and unclear feedback can all
              affect performance — independently of cognitive ability. Poor
              interaction design can therefore distort test results and
              misrepresent the people taking the test. MindSpark responds to
              that gap.
            </p>

            <ImagePlaceholder
              label="Existing tool analysis"
              description="Side-by-side screenshots of existing digital cognitive testing tools (e.g. Cambridge Brain Sciences, Lumosity, BrainCheck), with annotations highlighting recurring usability and accessibility shortcomings."
              items={[
                "Screenshots of 3–5 existing cognitive testing interfaces.",
                "Annotations calling out instruction clarity, feedback, touch targets, colour use, and accessibility issues.",
                "A short comparison table showing what each tool handles well and where interaction friction appears.",
              ]}
            />
          </CaseStudySection>

          {/* Role */}
          <CaseStudySection title="My Role">
            <p>
              MindSpark is a solo project. I owned every part of the work
              end-to-end: user research, IA, interaction design, three Figma
              prototypes, HTML/CSS/JavaScript implementation of the Go/No-Go
              pathway, hardware prototyping (Arduino + microphone sensor +
              FreeCAD enclosure), ethics application, and iterative usability
              testing across all three phases.
            </p>
          </CaseStudySection>

          {/* Research Questions */}
          <CaseStudySection title="Research Questions">
            <ul className="space-y-3">
              <li>
                <strong className="text-foreground">RQ1.</strong> How do current
                cognitive assessment tools function, and what design limitations
                do they exhibit?
              </li>
              <li>
                <strong className="text-foreground">RQ2.</strong> What design
                considerations can enhance the accessibility and usability of
                cognitive assessment tools?
              </li>
              <li>
                <strong className="text-foreground">RQ3.</strong> How can
                different modes of interaction be combined to create effective
                cognitive assessment experiences?
              </li>
            </ul>
          </CaseStudySection>

          {/* Process */}
          <CaseStudySection title="Design &amp; Development Process">
            <p>
              The project followed an iterative, ISO 9241-210 human-centred
              design process. Each prototyping stage was tested with real
              participants, and feedback drove the next iteration — ensuring
              decisions were evidence-led rather than assumption-led.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {[
                ["Literature review", "Usability, accessibility, digital literacy, multimodal interaction, contextual influence on performance."],
                ["Analysis of existing tools", "Heuristic review of digital Go/No-Go and cognitive assessment apps."],
                ["Sketching & wireframing", "Low-fidelity flows for instructions, practice, alertness check, results."],
                ["Low-fi prototype + testing", "Figma prototype tested with 5–8 participants."],
                ["Mid-fi prototype + testing", "Refined visuals, components, overlays. Tested with 8–12 participants."],
                ["Hi-fi prototype + testing", "Final polish, demo video, multimodal pathway. Tested with 12–15 participants."],
                ["Hardware prototype", "Arduino Uno + microphone sensor in a FreeCAD-designed enclosure."],
                ["Synthesis", "Design recommendations and reflections."],
              ].map(([t, d]) => (
                <div key={t} className="p-4 bg-secondary rounded-md">
                  <p className="text-sm font-semibold text-foreground mb-1">{t}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <ImagePlaceholder
              label="Sketches & wireframes"
              description="Original hand-drawn sketches and low-fidelity Figma wireframes showing the proposed application structure, including the home screen, test categories, Go/No-Go introduction, alertness questions, and practice pathway."
              items={[
                "Hand sketches of the first app structure and test flow.",
                "Low-fidelity Figma wireframes for onboarding, instructions, alertness check, practice, test, and results.",
                "One annotated flow diagram showing how a user moves through the full Go/No-Go experience.",
              ]}
            />

            <ImagePlaceholder
              label="Iteration board"
              description="Side-by-side comparison of low-, mid-, and high-fidelity Go/No-Go test screens, showing how visual identity, button states, and feedback evolved across iterations."
              items={[
                "Low-, mid-, and high-fidelity versions of the same key screens placed beside each other.",
                "Short callouts explaining what changed after each testing round.",
                "Evidence of revised typography, spacing, button states, feedback, and colour meaning.",
              ]}
            />
          </CaseStudySection>

          {/* Key Design Decisions */}
          <CaseStudySection title="Key Design Decisions">
            <p>
              Four interaction design decisions shaped the system most strongly
              across iterations:
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Alertness check before each test
                </h3>
                <p className="text-sm">
                  A short pre-test capture of context (fatigue, time of day,
                  environment) re-frames cognitive performance as something to
                  be <em>interpreted</em> rather than just scored — directly
                  addressing a gap I identified in existing tools.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Practice stage with demonstrative feedback
                </h3>
                <p className="text-sm">
                  Drawing on findings that dense text instructions and absent
                  feedback drive hesitation, the practice stage uses video
                  demonstrations and trial-by-trial guidance.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Minimal main test surface
                </h3>
                <p className="text-sm">
                  During scored trials, the UI strips back to essentials.
                  High-contrast stimuli, large touch targets (informed by
                  Fitts&rsquo; Law), no decoration.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Multimodal verbal-response pathway
                </h3>
                <p className="text-sm">
                  An optional voice-input modality, prototyped with an Arduino
                  microphone sensor in a FreeCAD-designed enclosure. Preserves
                  the binary Go/No-Go demand while removing motor barriers.
                </p>
              </div>
            </div>

            <ImagePlaceholder
              label="Hi-fi screens"
              description="High-fidelity Figma screens of: alertness check, practice stage with demonstrative feedback, the minimal main test surface during a Go/No-Go trial, and the personalised results screen."
              items={[
                "Final alertness check screens showing context questions before testing.",
                "Practice screens showing the demonstration, feedback, and error-recovery states.",
                "Main test screens showing Go, No-Go, waiting, and completed states.",
                "Results screen showing how performance and context are communicated together.",
              ]}
            />

            <ImagePlaceholder
              label="Hardware prototype"
              description="Photographs of the physical Arduino + microphone enclosure: (1) the assembled FreeCAD-designed enclosure, (2) wiring connected to the Arduino Uno, and (3) the verbal-response pathway in use during a test session."
              items={[
                "FreeCAD model or render of the enclosure before fabrication/assembly.",
                "Close-up of the Arduino Uno, microphone sensor, wiring, and enclosure interior.",
                "Photo of the completed physical prototype beside the digital interface.",
                "Photo or still from testing showing a participant using the verbal-response pathway.",
              ]}
            />

            <ImagePlaceholder
              label="Demo video"
              description="Short screen recording (or embedded video) showing the full Go/No-Go test flow end-to-end: alertness check → practice → test → results."
              items={[
                "Screen recording of the complete digital test flow.",
                "Clip or still showing the voice-input prototype responding during a trial.",
                "Optional short caption explaining what the viewer should notice in the interaction.",
              ]}
            />
          </CaseStudySection>

          {/* What testing taught me */}
          <CaseStudySection title="What User Testing Taught Me">
            <ImagePlaceholder
              label="Testing sessions & notes"
              description="Evidence from usability testing rounds, placed before the findings so the reader can see how observations became design decisions."
              items={[
                "Photo of a moderated test session or the test setup, with participant details anonymised.",
                "Screenshot/photo of observation notes, affinity mapping, or issue prioritisation.",
                "A compact before/after example showing one participant issue and the design change it caused.",
              ]}
            />

            <ul className="space-y-3">
              {[
                ["Readability is non-negotiable", "Type size, line length, and contrast were the most-mentioned issues across all rounds — far more than visual style."],
                ["Mobile conventions matter", "Even tech-comfortable participants hesitated when patterns deviated from familiar mobile behaviour."],
                ["Colour must mean something", "Decorative colour created confusion; purposeful colour (state, success, warning) created confidence."],
                ["Feedback shapes trust", "Silent transitions made participants doubt their input had registered. Brief micro-feedback changed the felt quality of the test."],
                ["The hardware prototype changed expectations", "Participants who tried the verbal-response modality reframed what a cognitive test could feel like — less clinical, more accommodating."],
              ].map(([t, d]) => (
                <li key={t}>
                  <p className="font-medium text-foreground">{t}</p>
                  <p className="text-sm">{d}</p>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          {/* Outcome */}
          <CaseStudySection title="Outcome">
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

            <ImagePlaceholder
              label="Final system overview"
              description="A composed marketing-style image of the final MindSpark system: the mobile app shown on a phone alongside the physical Arduino microphone enclosure, ideally in a clean lifestyle setting."
              items={[
                "Final app screen displayed on a phone, tablet, or laptop mockup.",
                "Physical microphone enclosure positioned beside the interface.",
                "A small caption naming the final system components: digital test, alertness check, results, and verbal-response prototype.",
              ]}
            />
          </CaseStudySection>

          {/* Reflection */}
          <CaseStudySection title="Reflection">
            <p>
              MindSpark taught me to think about design as a position, not just
              a craft. Choosing to redesign a clinical-adjacent test meant
              being explicit about what I was — and wasn&rsquo;t — trying to
              change. The test itself is fixed; the experience around it is
              the design problem.
            </p>
            <p>
              It also reinforced that accessibility is not a downstream
              concern. Almost every meaningful improvement across the three
              iterations originated from accessibility thinking — readable
              type, clearer feedback, alternative inputs, contextual
              awareness — and these served everyone, not just users with
              specific needs.
            </p>
            <p>
              Most of all, the project clarified the kind of UX work I want to
              do next: research-led, accountable to real users, and focused on
              systems where design decisions have weight beyond aesthetics.
            </p>
          </CaseStudySection>

          {/* Footer nav */}
          <div className="section-divider mt-10 pt-6 flex justify-between text-sm">
            <Link to="/projects" className="font-medium hover:text-accent transition-colors">
              ← All projects
            </Link>
            <Link to="/projects/mould-man" className="font-medium hover:text-accent transition-colors">
              Next: Mould Man →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default MindSpark;
