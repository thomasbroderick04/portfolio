import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ImageBlock from "@/components/ImageBlock";
import mindsparkHero from "@/assets/mindspark-hero.jpg";

const MindSpark = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
              ← Back to projects
            </Link>
            <p className="project-tag mb-3">Final Year Project · Interaction Design</p>
            <h1 className="mb-4">MindSpark</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              An interactive cognitive testing system exploring how usability, accessibility, 
              and context shape the experience of digital, self-administered Go / No-Go testing.
            </p>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 py-6 section-divider border-b border-border">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Role</p>
              <p className="text-sm">Interaction Designer &amp; Researcher</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Duration</p>
              <p className="text-sm">Sept 2024 – May 2025</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Tools</p>
              <p className="text-sm">Figma, HTML/CSS/JS, Arduino</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Type</p>
              <p className="text-sm">Academic / Research</p>
            </div>
          </div>

          {/* Hero Image */}
          <ImageBlock
            src={mindsparkHero}
            alt="MindSpark cognitive testing interface shown on a laptop"
            caption="MindSpark — A redesigned digital Go / No-Go testing experience"
          />

          {/* Summary */}
          <CaseStudySection title="Summary">
            <p className="text-base text-muted-foreground leading-relaxed">
              MindSpark is my final year project, and it represents the most complete expression 
              of my design thinking to date. At its core, the project asks: what happens when we 
              treat cognitive testing not just as measurement, but as an interaction experience? 
              How do interface choices, interaction methods, and surrounding context affect the 
              way someone engages with a digital test?
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              The project centres on redesigning a self-administered Go / No-Go test — a standard 
              cognitive assessment — through the lens of usability, accessibility, and 
              human-centred design. It is not a clinical diagnostic tool. It is a design-led 
              exploration of how thoughtful interaction design can improve the testing experience.
            </p>
          </CaseStudySection>

          {/* Context & Problem */}
          <CaseStudySection title="Context & Problem">
            <p className="text-base text-muted-foreground leading-relaxed">
              Traditional cognitive tests like the Go / No-Go task were designed for controlled 
              laboratory settings with trained administrators. As these tests move to digital, 
              self-administered formats, the interaction design becomes critical — yet it is 
              often treated as an afterthought.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Poor instruction delivery, confusing feedback, inaccessible interfaces, and 
              a lack of contextual awareness can all affect not only the user experience, 
              but potentially the reliability of the results. MindSpark explores whether 
              treating usability, accessibility, and context as core design variables — rather 
              than secondary concerns — can lead to a more understandable, more engaging, and 
              more responsible testing experience.
            </p>
            <div className="bg-secondary rounded-sm p-6 mt-6">
              <p className="text-sm font-medium mb-2">Key design variables explored:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Usability — clarity of instructions, feedback, and interface structure</li>
                <li>Accessibility — inclusive design for diverse users and needs</li>
                <li>Context — environmental and situational factors that shape the experience</li>
              </ul>
            </div>
          </CaseStudySection>

          {/* Goals */}
          <CaseStudySection title="Goals">
            <ul className="space-y-3 text-base text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-semibold">01</span>
                Redesign the Go / No-Go test as a usable, accessible digital experience
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">02</span>
                Explore how interaction design choices affect the testing experience
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">03</span>
                Incorporate contextual awareness — including an alertness check and practice stage
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">04</span>
                Design results presentation that supports understanding, not just data display
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">05</span>
                Consider multimodal interaction as a way to support different users and contexts
              </li>
            </ul>
          </CaseStudySection>

          {/* Process */}
          <CaseStudySection title="Process">
            <p className="text-base text-muted-foreground leading-relaxed">
              The project followed a structured, iterative design process. I began with 
              background research into cognitive testing, Go / No-Go tasks, and the existing 
              landscape of digital assessment tools. This informed a clear understanding of 
              the problem space and the design opportunities within it.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              From research, I moved into concept development — sketching interaction flows, 
              mapping the testing journey, and identifying key design moments where usability, 
              accessibility, and context could be meaningfully addressed.
            </p>
            <div className="bg-secondary rounded-sm p-6 mt-6">
              <p className="text-sm font-medium mb-3">Process stages:</p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div>• Background research &amp; literature review</div>
                <div>• Competitive analysis of existing tools</div>
                <div>• User journey mapping</div>
                <div>• Concept sketching &amp; ideation</div>
                <div>• Wireframing &amp; information architecture</div>
                <div>• Interface design &amp; prototyping</div>
                <div>• Multimodal interaction exploration</div>
                <div>• Usability testing &amp; iteration</div>
              </div>
            </div>
            <div className="mt-8 image-frame aspect-[16/10] flex items-center justify-center bg-secondary">
              <p className="text-sm text-muted-foreground italic">Process documentation images — wireframes, sketches, user flows</p>
            </div>
          </CaseStudySection>

          {/* Research & Discovery */}
          <CaseStudySection title="Research & Discovery">
            <p className="text-base text-muted-foreground leading-relaxed">
              My research explored both the cognitive science behind Go / No-Go testing and 
              the interaction design challenges of translating these tasks into self-administered 
              digital formats. I examined existing digital cognitive testing tools, identifying 
              common usability and accessibility shortcomings.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Key findings included: most existing tools provide minimal instruction scaffolding, 
              offer little contextual awareness, and present results in ways that are difficult 
              for non-specialist users to interpret. These insights directly shaped the design 
              direction for MindSpark.
            </p>
          </CaseStudySection>

          {/* Design Development */}
          <CaseStudySection title="Design Development">
            <p className="text-base text-muted-foreground leading-relaxed">
              The design evolved through several key stages, each addressing specific aspects 
              of the testing experience:
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-base font-semibold mb-2">Alertness Check</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Before the official test, users complete a brief alertness check to capture 
                  context. This acknowledges that testing doesn't happen in a vacuum — factors 
                  like fatigue, time of day, and environment can affect performance and should 
                  be part of how results are understood.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-2">Practice Stage</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A dedicated practice stage helps users learn the rules and build confidence 
                  before the scored test. This reduces anxiety, supports comprehension, and 
                  ensures users understand the interaction before their responses are recorded.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-2">Main Test — Minimal Interface</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  During the actual test, the UI becomes intentionally minimal. Distractions 
                  are removed to support clarity, readability, and responsive interaction. The 
                  design prioritises the testing task above all else.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-2">Results & Understanding</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  After the test, results are presented through breakdowns, progress features, 
                  and context-linked insights — making them more understandable than a simple 
                  score. The design moves away from treating the test as a one-off event and 
                  toward a more interpretable, engaging experience.
                </p>
              </div>
            </div>

            <div className="mt-8 image-frame aspect-[16/10] flex items-center justify-center bg-secondary">
              <p className="text-sm text-muted-foreground italic">Interface evolution — early wireframes to refined UI</p>
            </div>
          </CaseStudySection>

          {/* Multimodal Interaction */}
          <CaseStudySection title="Multimodal Interaction">
            <p className="text-base text-muted-foreground leading-relaxed">
              MindSpark explores optional multimodal interaction as a way to support different 
              users and contexts. The concept considers how different input and feedback methods — 
              including digital and physical interaction — might affect the testing experience 
              and make it more accessible or engaging for different populations.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              This aspect of the project treats the interaction method itself as a design variable, 
              exploring how the way someone responds to a test might be just as important as the 
              test content itself.
            </p>
          </CaseStudySection>

          {/* Accessibility & Usability */}
          <CaseStudySection title="Accessibility & Usability Decisions">
            <p className="text-base text-muted-foreground leading-relaxed">
              Accessibility and usability were not treated as separate concerns in MindSpark — 
              they were woven into every design decision. Key considerations included:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Clear, high-contrast visual design throughout all stages</li>
              <li>• Progressive instruction delivery rather than information overload</li>
              <li>• Consistent interaction patterns to reduce cognitive load</li>
              <li>• Meaningful feedback at every step</li>
              <li>• Results designed for comprehension, not just data display</li>
              <li>• Consideration of motor, cognitive, and environmental accessibility factors</li>
            </ul>
          </CaseStudySection>

          {/* Outcome */}
          <CaseStudySection title="Outcome">
            <p className="text-base text-muted-foreground leading-relaxed">
              MindSpark demonstrates that treating usability, accessibility, and context as 
              core design variables — rather than secondary concerns — can lead to a 
              fundamentally different kind of testing experience. The wider system concept 
              moves cognitive testing away from a one-off, score-focused event and toward 
              a more interpretable, engaging, and longitudinal experience.
            </p>
            <div className="mt-8 image-frame aspect-[16/10] flex items-center justify-center bg-secondary">
              <p className="text-sm text-muted-foreground italic">Final interface screens and system overview</p>
            </div>
          </CaseStudySection>

          {/* Reflection */}
          <CaseStudySection title="Reflection">
            <p className="text-base text-muted-foreground leading-relaxed">
              MindSpark has been the most significant project of my design education. It 
              challenged me to think deeply about how interaction design can affect experiences 
              that really matter — where the stakes of getting the design wrong extend beyond 
              aesthetics into comprehension, fairness, and accessibility.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              The project reinforced my belief that accessibility and usability are not separate 
              disciplines but fundamental measures of design quality. It taught me to be more 
              rigorous in my process, more thoughtful in my decisions, and more honest about 
              what design can and cannot solve.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Most importantly, it confirmed the direction I want to take as a designer — 
              working on projects where interaction design genuinely matters, where the focus 
              is on people and their real needs, and where thoughtful design can make a 
              measurable difference.
            </p>
          </CaseStudySection>

          {/* Navigation */}
          <div className="section-divider pt-8 flex justify-between items-center">
            <Link to="/projects" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              ← All projects
            </Link>
            <Link to="/projects/mould-man" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Next: Mould Man →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default MindSpark;
