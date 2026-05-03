import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";
import ImagePlaceholder from "@/components/ImagePlaceholder";

import heroDevices from "@/assets/mindspark-hero-devices.png";
import existingTools from "@/assets/mindspark-existing-tools.png";
import earlySketches from "@/assets/mindspark-early-sketches.png";
import earlyWireframes from "@/assets/mindspark-early-wireframes.png";
import hifiFlow from "@/assets/mindspark-hifi-flow.png";
import testResults from "@/assets/mindspark-test-results.png";
import progressHifi from "@/assets/mindspark-progress-hifi.png";
import progressMidfi from "@/assets/mindspark-progress-midfi.png";
import iterationBoard from "@/assets/mindspark-iteration-board.png";
import hardwareConcept from "@/assets/mindspark-hardware-concept.png";
import systemOverview from "@/assets/mindspark-system-overview.png";
import hifiPages from "@/assets/mindspark-hifi-pages.png";
import verbalTest from "@/assets/mindspark-verbal-test.png";
import arduinoMic from "@/assets/mindspark-arduino-mic.jpg";
import arduinoLive from "@/assets/mindspark-arduino-live.jpg";
import enclosureParts from "@/assets/mindspark-enclosure-parts.jpg";
import enclosureAssembled from "@/assets/mindspark-enclosure-assembled.jpg";
import jsCode from "@/assets/mindspark-javascript-code.png";

interface DocImageProps {
  src: string;
  alt: string;
  caption: string;
}

/** Document/screenshot figure — uses object-contain so nothing gets cropped. */
const DocImage = ({ src, alt, caption }: DocImageProps) => (
  <figure className="my-8">
    <div className="rounded-md border border-border bg-secondary/40 p-3 md:p-4">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto max-h-[80vh] object-contain mx-auto"
      />
    </div>
    <figcaption className="mt-3 text-xs text-muted-foreground text-center">
      {caption}
    </figcaption>
  </figure>
);

const MindSpark = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Back to projects
          </Link>

          <p className="project-tag mb-3">Final Year Project · UX Research · Interaction Design</p>
          <h1 className="mb-5">MindSpark</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Designing an interactive cognitive testing system — exploring how
            usability, accessibility, and context shape self-administered
            digital testing.
          </p>

          <ProjectMeta
            items={[
              { label: "Role", value: "Sole Designer, Researcher & Developer" },
              { label: "Duration", value: "Sept 2025 – April 2026" },
              { label: "Supervisor", value: "Dr. Lilian Genaro Motti" },
              { label: "Tools", value: "Figma · HTML/CSS/JS · Arduino · FreeCAD" },
            ]}
          />

          {/* Hero */}
          <figure className="my-8">
            <div className="rounded-md overflow-hidden border border-border bg-secondary/40">
              <img
                src={heroDevices}
                alt="MindSpark — logo and three mobile prototype screens on a green background"
                className="w-full h-auto object-contain"
                width={1600}
                height={900}
              />
            </div>
          </figure>

          {/* Overview */}
          <CaseStudySection title="Overview">
            <p>
              MindSpark is my final year project. It is a research-led redesign
              of the digital Go/No-Go test, a widely used cognitive test that
              measures attention and the ability for an individual to control
              their responses. Rather than treating the test as a fixed
              screen-based interaction, I approached it as a full user
              experience problem. This project explored how usability,
              accessibility, and context can shape how self-administered
              cognitive testing is understood, completed, and interpreted.
            </p>
            <p>
              I redesigned the full experience around the test, including how
              it is introduced, how the user prepares for it, how they
              practise it, how they complete it, and how their results are
              shown afterwards. I also explored an alternative
              verbal-response pathway so that the test was not limited to
              touch input only. Across low-, medium-, and high-fidelity
              iterations, I used user research and usability testing to
              refine the system step by step. The final outcome was a
              prototype that made the test feel clearer, more supportive, and
              easier to understand as a full user experience.
            </p>
          </CaseStudySection>

          {/* Design Problem */}
          <CaseStudySection title="The Design Problem">
            <p>
              As cognitive assessments increasingly move into self-administered
              web and mobile formats, users are expected to complete them
              independently, without guidance from a clinician or facilitator.
              That raises a design problem: if the interface is unclear,
              visually demanding, hard to navigate, or physically awkward to
              use, the system may begin to measure interface friction as much
              as cognition.
            </p>
            <p>
              This mattered particularly for the Go/No-Go test, which depends
              on users quickly perceiving stimuli, understanding the rule
              structure, responding under time pressure, and withholding
              responses at the correct moment. Poor instructions, weak
              feedback, small touch targets, or confusing interaction design
              can distort performance independently of cognitive ability.
            </p>
            <p className="text-foreground italic">
              What happens when cognitive testing is treated not just as
              measurement, but as an interaction experience?
            </p>
          </CaseStudySection>

          {/* Role */}
          <CaseStudySection title="My Role">
            <p>
              MindSpark was a solo project. I was responsible for the work
              end-to-end: literature review and research synthesis, analysis
              of existing cognitive testing tools, UX strategy and interaction
              design, information architecture and user flows, sketching and
              wireframing, three Figma prototypes, coding the Go/No-Go
              pathway in HTML/CSS/JavaScript, building a multimodal
              verbal-response prototype with Arduino, designing the physical
              enclosure in FreeCAD, and planning, conducting and synthesising
              iterative user testing.
            </p>
            <p>
              Owning both the design and prototype implementation gave me a
              much stronger understanding of how interface decisions affect
              technical feasibility — especially around timing, response
              handling, feedback states, and hardware-supported interaction.
            </p>
          </CaseStudySection>

          {/* Design Approach */}
          <CaseStudySection title="Design Approach">
            <p>
              The project followed an iterative, human-centred design process
              grounded in research, prototyping, and user feedback. The
              Go/No-Go test itself was treated as a fixed and established
              test, while the surrounding interaction was redesigned to
              improve usability, accessibility, and contextual interpretation.
            </p>

            <div className="mt-6 divide-y divide-border border-y border-border">
              {[
                ["1. Research and framing", "Reviewed literature on usability in digital cognitive testing, accessibility barriers, contextual influences on performance, privacy, and multimodal interaction. Analysed existing cognitive testing applications to identify recurring interface issues."],
                ["2. Early concept development", "Translated research into hand-drawn sketches, flow concepts, early wireframes, and hardware sketches — focusing on structure and where design could reduce confusion."],
                ["3. Iterative prototyping & testing", "Developed and refined the system through low-, medium-, and high-fidelity Figma prototypes, supported by user testing with adults across a broad age range."],
                ["4. Final system & multimodal prototype", "Built a working verbal-response pathway with Arduino and a FreeCAD-designed enclosure to explore accessibility beyond touchscreen interaction alone."],
              ].map(([t, d]) => (
                <div key={t} className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-8 py-4">
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          {/* Research and Key Insight */}
          <CaseStudySection title="Research &amp; Key Insight">
            <p>
              The strongest insight from the research was that digital
              cognitive test performance cannot always be separated cleanly
              from the interface used to complete it. Recurring barriers
              included dense instructions, uncertainty about how to interact,
              small touch targets, cluttered layouts, weak feedback, and
              anxiety caused by self-administered use.
            </p>
            <p>
              Performance also should not be interpreted in isolation from
              context. Factors such as fatigue, alertness, and broader
              situational conditions can affect how users engage with a test.
              That led me to treat context not as background information, but
              as part of the design problem itself.
            </p>
            <p>
              A third insight came from multimodal interaction research.
              Touchscreen-only interaction can introduce motor demands that
              are unrelated to the cognitive purpose of a test. Because the
              Go/No-Go test uses a binary response structure, it offered a
              strong opportunity to explore alternative input methods without
              changing the core logic of the test.
            </p>
            <ul className="space-y-2 mt-4">
              <li>• Reduce unnecessary interaction burden</li>
              <li>• Make setup and instructions easier to understand</li>
              <li>• Support confidence through practice and feedback</li>
              <li>• Interpret results in relation to context</li>
              <li>• Explore a multimodal response pathway without changing test structure</li>
            </ul>
          </CaseStudySection>

          {/* Auditing Existing Tools */}
          <CaseStudySection title="Auditing Existing Tools">
            <p>
              I analysed a range of existing digital cognitive testing
              products, including applications using Go/No-Go-like tests
              directly and others that revealed broader patterns in
              self-administered cognitive assessment design. The audit showed
              that the way a test is introduced often matters just as much as
              the test itself. Tools with better onboarding, demonstration,
              and structured practice made expectations clearer, while
              fragmented or overly text-based instruction screens led to
              uncertainty.
            </p>
            <p>
              All of the systems reviewed relied entirely on touchscreen
              input, with varying levels of motor precision required.
              Feedback was inconsistent — some tools offered clear
              progression cues, others were ambiguous or absent entirely.
              Accessibility support, context awareness, and privacy
              transparency varied widely.
            </p>

            <DocImage
              src={existingTools}
              alt="Comparison table of CogniFit, Carleton University, MindPal, and Lumosity cognitive testing tools across instructional support and organisational clarity"
              caption="Heuristic comparison of four existing cognitive testing tools across instructional support and organisational clarity."
            />

            <p>This helped define what MindSpark should do differently:</p>
            <ul className="space-y-2 mt-2">
              <li>• Introduce the test more clearly</li>
              <li>• Support users before official scoring begins</li>
              <li>• Reduce the sense of uncertainty during interaction</li>
              <li>• Make feedback more interpretable</li>
              <li>• Treat results as something to understand, not just display</li>
              <li>• Explore alternatives to touchscreen-only response input</li>
            </ul>
          </CaseStudySection>

          {/* Early Concepts and Wireframing */}
          <CaseStudySection title="Early Concepts &amp; Wireframing">
            <p>
              My earliest design work focused on structure before styling. I
              began with hand-drawn sketches and low-fidelity wireframes to
              map the broader system around the Go/No-Go test rather than
              treating it as an isolated single-screen activity. This included
              onboarding, access to test categories, setup, alertness
              questions, practice, live testing, results, and longer-term
              progress tracking.
            </p>
            <p>
              At this stage I also explored the hardware side conceptually.
              Early sketches tested how a microphone-based pathway might work
              as an alternative response method, and how a simple physical
              device could connect to the digital system without requiring
              users to hold or directly manipulate extra hardware during the
              test.
            </p>

            <DocImage
              src={earlySketches}
              alt="Hand-drawn low-fidelity wireframe sketches of the MindSpark app structure and Go/No-Go practice and test flow"
              caption="Early hand-drawn wireframes mapping the application structure and Go/No-Go practice/test pathway."
            />

            <DocImage
              src={earlyWireframes}
              alt="Mid-fidelity black and white wireframes showing the Go/No-Go test options, alertness questions, and practice screens"
              caption="Early structured wireframes — Go/No-Go test options, alertness questions, and practice flow."
            />

            <p>
              The value of this stage was system thinking rather than visual
              polish. It allowed me to define the test as a sequence of
              interactions: <em>understand → prepare → practise → respond →
              interpret</em>. That became a critical foundation for everything
              that followed.
            </p>
          </CaseStudySection>

          {/* Designing the Core Experience */}
          <CaseStudySection title="Designing the Core Experience">
            <p>
              The central interaction design challenge was to make the
              Go/No-Go pathway clearer and more supportive without altering
              the underlying logic of the test itself. I designed the
              experience as a structured flow rather than a direct jump into
              live stimuli — introduction, setup, alertness check, guided
              practice, simplified live test, and a result screen that
              connected performance to context and longer-term progress.
            </p>

            <DocImage
              src={hifiFlow}
              alt="High-fidelity Figma screens showing the full Go/No-Go pathway: introduction, test options, alertness questions, and practice"
              caption="Final high-fidelity flow — onboarding, setup, alertness check, and guided practice."
            />

            <DocImage
              src={hifiPages}
              alt="High-fidelity MindSpark home, test categories, settings, and notifications pages"
              caption="Core supporting pages — home, test categories, settings, and notifications — designed around clarity, hierarchy, and contextual cues."
            />
          </CaseStudySection>

          {/* Key Design Decisions */}
          <CaseStudySection title="Key Design Decisions">
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  1. Alertness check before each test
                </h3>
                <p>
                  A short alertness check before the test, inspired by the
                  Karolinska Sleepiness Scale, framed performance alongside
                  context rather than shown as a detached score. In the final
                  results screen, users were invited to interpret their
                  performance in relation to how alert they felt at the time.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  2. Practice before official scoring
                </h3>
                <p>
                  A dedicated practice stage allowed users to experience the
                  rule structure safely before entering the official test.
                  User feedback shaped the practice sequence to reflect true
                  Go/No-Go logic and to make corrective feedback supportive
                  rather than punitive.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  3. Minimal live test surface
                </h3>
                <p>
                  The live test screen focused only on what was necessary:
                  stimulus, progress, response area, and a stop option. The
                  goal was to reduce visual noise and make the interaction as
                  legible as possible under time pressure.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  4. Multimodal verbal-response pathway
                </h3>
                <p>
                  An optional verbal-response pathway used a microphone sensor
                  connected through Arduino. This explored whether some of
                  the physical effort and precision demands of touchscreen
                  interaction could be reduced without changing the binary
                  logic of the test.
                </p>
              </div>
            </div>

            <DocImage
              src={testResults}
              alt="Final high-fidelity Go/No-Go live test screens and results screen showing score, response breakdown, classification, and alertness level"
              caption="Final live test trials and results screen — performance contextualised by alertness level."
            />
          </CaseStudySection>

          {/* Iteration */}
          <CaseStudySection title="Iteration: Low to High Fidelity">
            <p>
              Each prototype stage uncovered different issues, and those
              issues directly shaped the next iteration.
            </p>

            <div className="mt-6 divide-y divide-border border-y border-border">
              {[
                ["Low fidelity — structure first", "Established the application's structure and broader user journey. Testing showed text needed to be larger, navigation needed to align with mobile conventions, colour needed to be more purposeful, and the main response button was not clear enough."],
                ["Medium fidelity — clarity & feedback", "Introduced a stronger visual identity, clearer button states, overlays for on-demand explanation, refined setup options, improved practice logic, and a developed physical microphone enclosure."],
                ["High fidelity — polish & coherence", "Replaced grey areas with a softer green-toned background, enhanced the header and iconography, introduced a demonstration video, improved overlay scannability, and refined results presentation."],
              ].map(([t, d]) => (
                <div key={t} className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-8 py-4">
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <DocImage
              src={systemOverview}
              alt="Full system overview of every MindSpark screen — splash, sign-up, home, settings, notifications, test categories, progress, and both touch and verbal Go/No-Go pathways with components"
              caption="Full system overview — every screen of the MindSpark prototype, from splash and sign-up through home, settings, test categories, progress, both Go/No-Go pathways, and the component library."
            />

            <DocImage
              src={progressMidfi}
              alt="Medium-fidelity wireframes of the MindSpark progress and results section across five pages"
              caption="Medium-fidelity progress &amp; results screens — early treatment of rewards, performance categories, alertness effects and test classification."
            />

            <DocImage
              src={progressHifi}
              alt="High-fidelity progress and results screens of the MindSpark application showing rewards, weekly performance, attention progress, alertness effect, and Go/No-Go test score"
              caption="High-fidelity progress &amp; results section — visual, contextual interpretation of performance over time."
            />
          </CaseStudySection>

          {/* User Testing */}
          <CaseStudySection title="User Testing &amp; What Changed">
            <p>
              I tested MindSpark across all three fidelities with adults from
              a broad age range. Rather than using testing to validate a
              finished solution, I used it to identify recurring usability
              and accessibility issues, then refine the design between each
              round.
            </p>

            <ul className="space-y-3 mt-4">
              {[
                ["Readability required improvement", "Users wanted larger text, better spacing, and clearer hierarchy on instruction-heavy screens."],
                ["Navigation needed to feel familiar", "Users expected clearer back arrows and standard mobile patterns."],
                ["The main test interaction needed stronger affordance", "Later iterations improved button styling, states, and clarity."],
                ["Practice and demonstration reduced uncertainty", "Users responded better when the test was demonstrated clearly before official scoring."],
                ["Feedback needed to stay calm and supportive", "Harsh error cues created pressure — corrective feedback was softened."],
                ["Microphone use needed clearer onboarding", "This led directly to the enclosure and stand system."],
                ["Results worked best when visual and contextual", "Graphs, response breakdowns, and alertness-linked interpretation were easier to understand than isolated scores."],
              ].map(([t, d]) => (
                <li key={t}>
                  <p className="font-medium text-foreground">{t}</p>
                  <p className="text-sm">{d}</p>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          {/* Multimodal Prototype */}
          <CaseStudySection title="Building the Multimodal Prototype">
            <p>
              Alongside the Figma work, I built a functional verbal-response
              pathway. Although MindSpark was designed as a mobile
              self-administered concept, the verbal-response prototype was
              developed on laptop as a proof-of-concept so I could reliably
              test how external Arduino hardware would connect to the
              browser-based Go/No-Go system in real time through serial
              communication, Node.js, and WebSockets.
            </p>
            <p>
              This used an Arduino Uno with a microphone sensor connected to
              a laptop, with a Node.js bridge enabling the browser-based
              Go/No-Go prototype to respond to sound input in near real time.
              It let me move beyond theoretical accessibility ideas and gave
              me direct experience of how design decisions affect technical
              implementation — timing, state management, signal detection,
              and interaction feedback.
            </p>
            <p>
              To support the physical setup, I designed an enclosure in
              FreeCAD and iterated it through 3D printing. The final hardware
              used a stable box enclosure and adjustable stand system that
              positioned the microphone more comfortably for different users.
            </p>

            <DocImage
              src={hardwareConcept}
              alt="Concept illustration of the MindSpark physical microphone enclosure, Arduino Uno, wired microphone sensor, and laptop showing the Go/No-Go test"
              caption="Concept illustrations of the proposed physical microphone enclosure, Arduino connection, and the verbal-response pathway."
            />

            <DocImage
              src={verbalTest}
              alt="High-fidelity Go/No-Go verbal-response test screens showing countdown, stimulus prompts, microphone button, and feedback states"
              caption="Verbal-response Go/No-Go pathway — countdown, stimulus, microphone input, and supportive feedback states."
            />

            <DocImage
              src={arduinoMic}
              alt="Arduino Uno R3 board next to a microphone sound sensor module wired with jumper cables"
              caption="Hardware setup — Arduino Uno R3 paired with a microphone sound sensor for verbal-response detection."
            />

            <DocImage
              src={arduinoLive}
              alt="Live verbal-response Go/No-Go test running in the browser with the Arduino microphone setup detecting voice input"
              caption="Live verbal-response prototype — the Arduino microphone bridges to the browser-based Go/No-Go test in near real time."
            />

            <DocImage
              src={freecadModel}
              alt="FreeCAD 3D model of the MindSpark microphone enclosure showing Arduino supports, microphone access pocket, and wire access cutout"
              caption="FreeCAD model of the enclosure — designed around Arduino mounting, microphone access, and wire routing."
            />

            <DocImage
              src={enclosureParts}
              alt="3D-printed green MindSpark microphone stand and box enclosure shown side by side"
              caption="3D-printed enclosure and adjustable microphone stand."
            />

            <DocImage
              src={enclosureAssembled}
              alt="Assembled MindSpark 3D-printed enclosure and microphone stand in front of a laptop running the Go/No-Go test"
              caption="Final assembled prototype — physical enclosure and stand alongside the live Go/No-Go interface."
            />
          </CaseStudySection>

          {/* Final Outcome */}
          <CaseStudySection title="Final Outcome">
            <p>
              The final version of MindSpark became a clearer, more
              supportive, and more context-aware cognitive testing concept.
              It did not try to reinvent the Go/No-Go test itself. Instead,
              it redesigned the surrounding experience so that users could
              engage with it more confidently and interpret it more
              meaningfully.
            </p>
            <ul className="space-y-2 mt-2">
              <li>• A clearer self-administered test setup flow</li>
              <li>• Demonstrative support before official scoring</li>
              <li>• A simplified live testing interface</li>
              <li>• Support for both touch and verbal response</li>
              <li>• Visual and contextual result interpretation</li>
              <li>• Longer-term progress tracking</li>
              <li>• A physical multimodal prototype that supported accessibility beyond touchscreen-only input</li>
            </ul>
            <p className="mt-4">
              Most importantly, the final project showed that interaction
              design has real consequences in cognitive testing contexts. If
              instructions, feedback, pacing, or response methods are poorly
              designed, they can shape the testing experience in ways that
              matter. MindSpark was my attempt to design more responsibly
              around that fact.
            </p>
          </CaseStudySection>

          {/* Reflection */}
          <CaseStudySection title="Reflection">
            <p>
              MindSpark changed how I think about design. It was the first
              time I fully understood how interface design can influence
              something as sensitive as interpretation, confidence, and
              perceived performance. The project pushed me to think much
              more seriously about how a system feels to use, what burdens
              it places on people, and what unintended effects design
              decisions can create.
            </p>
            <p>
              It also reinforced that accessibility is not a layer added at
              the end. Many of the most important design decisions began as
              accessibility questions — and the answers ended up improving
              the experience more broadly, not just for a narrow user group.
            </p>
            <p>
              Finally, building the coded pathway and hardware prototype
              showed me that even small interaction choices can create
              technical consequences. That experience made me better at
              thinking through feasibility earlier and gave me more
              confidence in working across design and development boundaries.
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
