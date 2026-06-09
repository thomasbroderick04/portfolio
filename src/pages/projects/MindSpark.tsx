import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";

import heroDevices from "@/assets/mindspark-hero-devices.png";
import existingTools from "@/assets/mindspark-existing-tools.png";
import earlySketches from "@/assets/mindspark-early-sketches.png";
import earlyWireframes from "@/assets/mindspark-early-wireframes.png";
import hifiFlow from "@/assets/mindspark-hifi-flow.png";
import testResults from "@/assets/mindspark-test-results.png";
import progressHifi from "@/assets/mindspark-progress-hifi.png";
import progressMidfi from "@/assets/mindspark-progress-midfi.png";
import hardwareConcept from "@/assets/mindspark-hardware-concept.png";
import systemOverview from "@/assets/mindspark-system-overview.png";
import hifiPages from "@/assets/mindspark-hifi-pages.png";
import verbalTest from "@/assets/mindspark-verbal-test.png";
import arduinoMic from "@/assets/mindspark-arduino-mic.jpg";
import arduinoLive from "@/assets/mindspark-arduino-live.jpg";
import enclosureParts from "@/assets/mindspark-enclosure-parts.jpg";
import enclosureAssembled from "@/assets/mindspark-enclosure-assembled.jpg";
import freecadModel from "@/assets/mindspark-freecad.png";
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
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-16 inline-block"
          >
            ← Back to projects
          </Link>

          <h1 className="mb-5">MindSpark</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Designing an interactive cognitive testing system — exploring how
            interaction design can reduce exclusion in self-administered
            cognitive testing.
          </p>

          <ProjectMeta
            items={[
              { label: "Role", value: "Sole UX Designer, Researcher & Developer" },
              { label: "Duration", value: "Sept 2025 – April 2026" },
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
              The project began with a central accessibility question: what
              happens when cognitive testing systems assume that every user can
              read dense instructions, understand abstract rules quickly,
              respond under time pressure, use precise touchscreen input, and
              complete the test under ideal conditions? These assumptions can
              exclude users whose abilities, circumstances, or preferred ways
              of interacting do not match the narrow user model built into the
              system. They can also introduce confusion, hesitation, or
              interaction difficulty that may affect performance independently
              of the cognitive ability being assessed.
            </p>
            <p>
              I redesigned the full experience around the test, including how it
              is introduced, how the user prepares for it, how they practise it,
              how they complete it, and how their results are shown afterwards.
              I also developed and tested an alternative verbal-response pathway
              using Arduino and a microphone sensor to explore how cognitive
              assessments might support users who cannot comfortably rely on
              touchscreen interaction alone. Across low-, medium-, and
              high-fidelity iterations, I used user research and usability
              testing to refine the system step by step. The final outcome was a
              prototype that made the test feel clearer, more supportive, and
              easier to understand as a full user experience.
            </p>
          </CaseStudySection>

          {/* Design Problem */}
          <CaseStudySection title="The Design Problem">
            <p>
              Most digital cognitive assessments assume a narrow model of
              interaction: users are expected to read lengthy instructions,
              understand abstract rules, respond under time pressure, and
              interact through precise touchscreen input. These assumptions risk
              excluding people whose abilities, contexts, or circumstances
              differ from those expectations. As cognitive testing moves into
              self-administered formats, accessibility becomes central to the
              validity of the assessment itself.
            </p>
            <p>
              This mattered particularly for the Go/No-Go test, which depends on
              users quickly perceiving stimuli, understanding the rule structure,
              responding under time pressure, and withholding responses at the
              correct moment. Poor instructions, weak feedback, small touch
              targets, or confusing interaction design can distort performance
              independently of cognitive ability.
            </p>
            <div className="space-y-3 mt-4">
              <p>
                <strong>RQ1:</strong> How do current cognitive assessment tools
                function in evaluating cognitive abilities, and what design
                limitations do they exhibit?
              </p>
              <p>
                <strong>RQ2:</strong> What design considerations can enhance the
                accessibility and usability of cognitive assessment tools?
              </p>
              <p>
                <strong>RQ3:</strong> How can different modes of interaction be
                combined to create effective cognitive assessment experiences?
              </p>
            </div>
          </CaseStudySection>

          {/* Role */}
          <CaseStudySection title="My Role">
            <p>
              MindSpark was a solo project. With the guidance of my final year
              project supervisor, I was responsible for the work end-to-end. This
              included literature review, research synthesis, accessibility
              analysis, competitor auditing, UX strategy, information
              architecture, user flows, sketching, wireframing, iterative Figma
              prototyping, usability testing, and final interaction design.
            </p>
            <p>
              I also built the coded Go/No-Go pathway in HTML, CSS, and
              JavaScript, developed a functional Arduino microphone prototype,
              designed the physical enclosure in FreeCAD, and tested how a
              verbal-response pathway could operate alongside the touch-based
              version. Owning both the design and prototype implementation gave
              me a much stronger understanding of how interface decisions affect
              technical feasibility, especially around timing, response
              handling, feedback states, and hardware-supported interaction.
            </p>
          </CaseStudySection>

          {/* Design Approach */}
          <CaseStudySection title="Design Approach">
            <p>
              The project followed an iterative, human-centred design process
              grounded in research, prototyping, and user testing. I treated the
              Go/No-Go test itself as a fixed and established test structure,
              while focusing on how the surrounding interaction could either
              create or reduce barriers for users. As a result, accessibility
              was prioritised throughout the design process and guided my
              decisions from the outset, rather than being considered only at
              the end.
            </p>

            <div className="mt-6 divide-y divide-border border-y border-border">
              {[
                [
                  "1. Research and accessibility framing",
                  "Reviewed literature on digital cognitive testing, usability, accessibility barriers, contextual influences on performance, privacy, and multimodal interaction. This helped establish how the design of self-administered cognitive tests can create barriers for users, influence their performance, and affect their interpretation of results.",
                ],
                [
                  "2. Examining assumptions in existing tools",
                  "Analysed existing cognitive testing applications to identify assumptions about users’ ability to understand instructions, use touchscreen input accurately, perform under pressure, and complete tests independently without guidance or support.",
                ],
                [
                  "3. Designing to reduce interaction barriers",
                  "Translated research into sketches, user flows, early wireframes, and low-, medium-, and high-fidelity Figma prototypes, focusing on structure and where design could reduce confusion. These were tested and refined with adults aged 19 to 73 to improve clarity, reduce interaction barriers, and help users become familiar with the rules before the official test began.",
                ],
                [
                  "4. Multimodal prototyping and implementation",
                  "Built a working verbal-response pathway using an Arduino-connected microphone, allowing users to respond through speech rather than touchscreen input. I also designed a FreeCAD enclosure to integrate the hardware into a complete and usable prototype. This extended the project’s accessibility focus for users who may find precise touch input difficult or unsuitable.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-8 py-4"
                >
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          {/* Research and Key Insights */}
          <CaseStudySection title="Research &amp; Key Insights">
            <p>
              The strongest insight from my research was that digital cognitive
              test performance cannot always be understood independently of the
              interface used to complete a test. Dense instructions, uncertainty
              about how to interact, small touch targets, cluttered layouts, weak
              feedback, and anxiety caused by self-administered use can affect
              who completes the assessment confidently and how their performance
              is interpreted. This made accessibility central to the validity of
              the experience.
            </p>
            <p>
              I therefore used accessibility as a design method to question who
              the interaction was designed around, what it required from users,
              and where those requirements could create exclusion. The goal was
              not simply to improve usability, but to support wider participation
              across different abilities, contexts, and ways of interacting.
            </p>
            <p>
              Performance must also be understood in relation to the conditions
              in which the test is taken. Factors such as fatigue, alertness, and
              the wider testing situation can influence how users engage with the
              test and affect the result. This led me to treat context as a design
              consideration rather than background information.
            </p>
            <p>
              A third insight came from multimodal interaction research.
              Touchscreen-only testing can introduce motor demands that are
              unrelated to the cognitive ability being assessed. Because the
              Go/No-Go test uses a binary response structure, it offered a strong
              opportunity to explore verbal responses as an alternative input
              method without changing the central logic of the test.
            </p>
            <ul className="space-y-2 mt-4">
              <li>
                • <strong>Design Implication 1:</strong>{" "}
                Simplify the interface and reduce the need for small, precise, or
                repeated touchscreen actions during the test.
              </li>
              <li>
                • <strong>Design Implication 2:</strong>{" "}
                Use clear onboarding, concise instructions, and simplified
                screens to help users understand the test rules.
              </li>
              <li>
                • <strong>Design Implication 3:</strong>{" "}
                Provide guided practice and supportive feedback so users can
                become familiar with the test before official scoring begins.
              </li>
              <li>
                • <strong>Design Implication 4:</strong>{" "}
                Use alertness checks and contextual result explanations so
                performance is not presented as an isolated score.
              </li>
              <li>
                • <strong>Design Implication 5:</strong>{" "}
                Allow users to respond through either touch or verbal input
                without changing the central structure or logic of the test.
              </li>
            </ul>
          </CaseStudySection>

          {/* Auditing Existing Tools */}
          <CaseStudySection title="Auditing Existing Tools">
            <p>
              I analysed a range of digital cognitive testing products,
              including tools using Go/No-Go-like tests and broader
              self-administered cognitive assessments. Rather than focusing only
              on visual design, I examined whether each system assumed users
              could read and remember lengthy instructions, understand the test
              rules without guidance, use precise touchscreen input, and complete
              the assessment with little feedback or support.
            </p>
            <p>
              The audit showed that clear onboarding, visual demonstrations, and
              guided practice helped users understand the test rules, know how to
              respond, and prepare before the official test began. In contrast,
              fragmented or text-heavy instructions often created uncertainty.
              All the systems reviewed relied on touchscreen input, although the
              level of motor precision required varied considerably. Feedback
              was also inconsistent: some tools clearly showed users where they
              were in the test, whether their response had been recorded, and
              what would happen next, while others gave little guidance or
              unclear feedback.
            </p>
            <p>
              Accessibility support, consideration of testing context, result
              explanations, and privacy transparency also varied widely. Overall,
              it was found that many of the systems placed the responsibility on
              users to adapt to the interface, rather than considering how the
              interface could support different abilities, circumstances, and
              ways of interacting.
            </p>

            <DocImage
              src={existingTools}
              alt="Comparison table of CogniFit, Carleton University, MindPal, and Lumosity cognitive testing tools across instructional support and organisational clarity"
              caption="Heuristic comparison of four existing cognitive testing tools across instructional support and organisational clarity."
            />

            <p>This helped define what MindSpark needed to do differently:</p>
            <ul className="space-y-2 mt-2">
              <li>
                • <strong>Design Implication 1:</strong>{" "}
                Introduce the test gradually rather than relying on dense
                instructions.
              </li>
              <li>
                • <strong>Design Implication 2:</strong>{" "}
                Use demonstration and practice so users can understand the task
                before their performance is recorded.
              </li>
              <li>
                • <strong>Design Implication 3:</strong>{" "}
                Use large touch targets and a simplified testing interface to
                make touchscreen interaction easier.
              </li>
              <li>
                • <strong>Design Implication 4:</strong>{" "}
                Provide feedback that guides users clearly without making
                mistakes feel stressful or punitive.
              </li>
              <li>
                • <strong>Design Implication 5:</strong>{" "}
                Present scores with a breakdown of the user’s responses, how
                alert they felt before taking the test, and how the result
                compares with their previous attempts.
              </li>
              <li>
                • <strong>Design Implication 6:</strong>{" "}
                Explore how touch and verbal interaction could exist within the
                same testing system.
              </li>
            </ul>
          </CaseStudySection>

          {/* Early Concepts and Wireframing */}
          <CaseStudySection title="Early Concepts &amp; Wireframing">
            <p>
              My earliest design work focused on mapping the complete user
              journey around the Go/No-Go test within a broader mobile
              application. I sketched onboarding, test categories, setup,
              alertness questions, practice, live testing, results, and progress
              tracking so that the system could support users before, during,
              and after the test.
            </p>
            <p>
              This stage was important because it allowed me to identify where
              users might become excluded from the experience: before the test if
              the instructions were too dense, during the test if the interaction
              demanded too much precision, and after the test if the result was
              presented without context.
            </p>
            <p>
              I also began to conceptually explore how a microphone-based pathway
              might serve as an alternative response method at this early stage.
              Early sketches of hardware helped me consider how users could issue
              a verbal response without needing to hold, tap, or precisely
              manipulate a touchscreen during the test, making the test
              accessible to a wider range of users and abilities.
            </p>

            <DocImage
              src={earlySketches}
              alt="Hand-drawn low-fidelity wireframe sketches of the MindSpark app structure and Go/No-Go practice and test flow"
              caption="Early hand-drawn wireframes mapping the application structure and Go/No-Go practice/test pathway."
            />

            <DocImage
              src={earlyWireframes}
              alt="Mid-fidelity black and white wireframes showing the Go/No-Go test options, alertness questions, and practice screens"
              caption="Early structured wireframes showing Go/No-Go test options, alertness questions, and practice flow."
            />

            <DocImage
              src={hardwareConcept}
              alt="Concept illustration of the MindSpark physical microphone enclosure, Arduino Uno, wired microphone sensor, and laptop showing the Go/No-Go test"
              caption="Concept illustrations of the proposed physical microphone enclosure, Arduino connection, and the verbal-response pathway."
            />

            <p>
              This stage was most valuable for developing the structure and logic
              of the system, rather than refining its visual appearance. It
              allowed me to define the test as a sequence of interactions:{" "}
              <em>understand → prepare → practise → respond → interpret</em>.
              That became a critical foundation for everything that followed.
            </p>
          </CaseStudySection>

          {/* Designing the Core Experience */}
          <CaseStudySection title="Designing the Core Experience">
            <p>
              The central interaction design challenge was to make the Go/No-Go
              pathway clearer, more supportive, and more accessible without
              changing the core logic of the test. Instead of sending users
              directly into the live test, I designed the experience as a
              structured sequence with distinct stages: introduction, setup,
              alertness check, guided practice, a simplified live test, and a
              results screen that helped place performance in the context of the
              testing situation and the user’s longer-term progress.
            </p>
            <p>
              Each stage was designed to address a specific accessibility
              purpose. The introduction explained what the Go/No-Go test measures
              and why the user was completing it, the setup showed users what to
              expect, and the alertness check recognised that tiredness or
              distraction could affect performance. Practice helped users
              understand the rules before scoring began, the live test kept the
              screen simple, and the results screen broke the score down into
              correct responses, missed responses, and incorrect taps, rather
              than showing one unexplained number.
            </p>

            <DocImage
              src={hifiFlow}
              alt="High-fidelity Figma screens showing the full Go/No-Go pathway: introduction, test options, alertness questions, and practice"
              caption="Final high-fidelity flow showing onboarding, setup, alertness check, and guided practice."
            />

            <DocImage
              src={hifiPages}
              alt="High-fidelity MindSpark home, test categories, settings, and notifications pages"
              caption="Core supporting pages showing home, test categories, settings, and notifications; designed around clarity, hierarchy, and contextual cues."
            />
          </CaseStudySection>

          {/* Featured Multimodal Prototype */}
          <CaseStudySection title="Featured Outcome: Multimodal Verbal Interaction Prototype">
            <p>
              One of the central outcomes of MindSpark was the development of a
              functional verbal-response pathway. I built this prototype to
              investigate how cognitive assessments might support users who
              cannot comfortably rely on touchscreen interaction alone. This
              connected directly to the accessibility aim of the project. The
              system should not assume that one input method works equally well
              for every user.
            </p>
            <p>
              The technical setup used an Arduino Uno and microphone sensor
              connected to a laptop to detect verbal input during the Go/No-Go
              test. A Node.js bridge then passed serial data from the Arduino to
              the browser using WebSockets and allowed the browser-based test to
              respond to sound input from the user in near real time. The code
              development was carried out on the laptop and managed through
              GitHub, which I used as the primary code repository. This meant I
              could track code versions carefully as the prototype developed and
              return to earlier versions when needed.
            </p>
            <p>
              I considered this stage to be the most challenging part of the
              project, but also the most rewarding. Until this point, many of my
              accessibility decisions had been explored mainly through research,
              user flows, and interface prototypes. Building a working
              verbal-response system required me to turn these ideas into
              something that could be technically implemented and function
              reliably in practice. Small decisions around timing, feedback,
              response detection, and screen states all had technical
              consequences. Developing the prototype gave me a stronger
              understanding of these constraints and highlighted the importance
              of considering technical feasibility earlier in the design process.
            </p>
            <p>
              To support the physical setup, I also designed an enclosure in
              FreeCAD and iterated it through 3D printing. The final hardware used
              a stable box enclosure and adjustable stand system, which positioned
              the microphone more comfortably for different users during testing.
            </p>

            <DocImage
              src={verbalTest}
              alt="High-fidelity Go/No-Go verbal-response test screens showing countdown, stimulus prompts, microphone button, and feedback states"
              caption="Verbal-response Go/No-Go pathway showing countdown, stimulus, microphone input, and supportive feedback states."
            />

            <DocImage
              src={jsCode}
              alt="VS Code editor showing the MindSpark Go/No-Go app.js JavaScript file controlling stimulus timing, response handling, scoring, and audio playback"
              caption="JavaScript implementation; app.js controls stimulus timing, response handling, scoring, audio playback, and trial flow for the coded Go/No-Go pathway."
            />

            <DocImage
              src={arduinoMic}
              alt="Arduino Uno board next to a microphone sound sensor module wired with jumper cables"
              caption="Hardware setup showing the Arduino Uno paired with a microphone sound sensor for verbal-response detection."
            />

            <DocImage
              src={arduinoLive}
              alt="Live verbal-response Go/No-Go test running in the browser with the Arduino microphone setup detecting voice input"
              caption="Live verbal-response prototype showing how the Arduino microphone bridges to the browser-based Go/No-Go test in near real time."
            />

            <DocImage
              src={freecadModel}
              alt="FreeCAD 3D model of the MindSpark microphone enclosure showing Arduino supports, microphone access pocket, and wire access cutout"
              caption="FreeCAD model of the enclosure; designed around Arduino mounting, microphone access, and wire routing."
            />

            <DocImage
              src={enclosureParts}
              alt="3D-printed green MindSpark microphone stand and box enclosure shown side by side"
              caption="3D-printed enclosure and adjustable microphone stand."
            />

            <DocImage
              src={enclosureAssembled}
              alt="Assembled MindSpark 3D-printed enclosure and microphone stand in front of a laptop running the Go/No-Go test"
              caption="Final assembled prototype showing the physical enclosure and stand alongside the live Go/No-Go interface."
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
                  Karolinska Sleepiness Scale, was included to place performance
                  in context rather than present it as an isolated score. In the
                  final results screen, users were encouraged to consider their
                  performance alongside how alert they felt at the time of
                  testing.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  2. Practice before official scoring
                </h3>
                <p>
                  A dedicated practice stage gave users a chance to understand
                  the rules and experience how the test worked before beginning
                  the actual assessment. User feedback helped refine this
                  practice sequence so that it reflected the real Go/No-Go test
                  more accurately, while also making corrective feedback feel
                  supportive rather than discouraging.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  3. Minimal live test surface
                </h3>
                <p>
                  The live test screen focused only on what was necessary:
                  stimulus, progress, response area, and a stop option. The goal
                  was to reduce visual noise and make the interaction as legible
                  as possible under time pressure.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  4. Multimodal verbal-response pathway
                </h3>
                <p>
                  An optional verbal-response pathway used a microphone sensor
                  connected through Arduino. This explored whether some of the
                  physical effort and precision demands of touchscreen
                  interaction could be reduced without changing the binary logic
                  of the test.
                </p>
              </div>
            </div>

            <DocImage
              src={testResults}
              alt="Final high-fidelity Go/No-Go live test screens and results screen showing score, response breakdown, classification, and alertness level"
              caption="Final live test trials and results screen showing performance contextualised by alertness level."
            />
          </CaseStudySection>

          {/* Iteration */}
          <CaseStudySection title="Iteration: Low to High Fidelity">
            <p>
              Each prototype stage uncovered different issues, and those issues
              directly shaped the next iteration.
            </p>

            <div className="mt-6 divide-y divide-border border-y border-border">
              {[
                [
                  "Low fidelity - establishing structure and identifying barriers",
                  "Established the application's structure and broader user journey, and exposed early accessibility issues. Testing showed text needed to be larger, navigation needed to align with mobile conventions, colour needed to be more purposeful, and the main response button was not clear enough.",
                ],
                [
                  "Medium fidelity – strengthening clarity and reducing interaction demands",
                  "Introduced a stronger visual identity, improved visual hierarchy, enlarged and clarified key actions including button states, refined setup options, added more supportive feedback through overlays, and developed the microphone enclosure concept as an alternative interaction pathway.",
                ],
                [
                  "High fidelity — final polish & ensuring coherence",
                  "Replaced grey areas with a softer green-toned background, enhanced the header and iconography, introduced a demonstration video, improved overlay scannability, and refined the presentation of results.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-8 py-4"
                >
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d}
                  </p>
                </div>
              ))}
            </div>

            <DocImage
              src={systemOverview}
              alt="Full system overview of every MindSpark screen — splash, sign-up, home, settings, notifications, test categories, progress, and both touch and verbal Go/No-Go pathways with components"
              caption="Full system overview of every screen of the MindSpark prototype, from splash and sign-up through home, settings, test categories, progress, both Go/No-Go pathways, and the component library."
            />

            <DocImage
              src={progressMidfi}
              alt="Medium-fidelity wireframes of the MindSpark progress and results section across five pages"
              caption="Low-fidelity progress & results screens showing of rewards, performance categories, alertness effects and test classification."
            />

            <DocImage
              src={progressHifi}
              alt="High-fidelity progress and results screens of the MindSpark application showing rewards, weekly performance, attention progress, alertness effect, and Go/No-Go test score"
              caption="High-fidelity progress & results section showing visual, contextual interpretation of performance over time."
            />
          </CaseStudySection>

          {/* User Testing */}
          <CaseStudySection title="User Testing &amp; What Changed">
            <p>
              I tested MindSpark across low-, medium-, and high-fidelity
              prototypes with adults across a broad age range. I used testing to
              identify where the interface created uncertainty, physical effort,
              cognitive load, or interpretation problems, then refined the design
              between each round.
            </p>

            <ul className="space-y-5 mt-4">
              <li>
                <p className="font-medium text-foreground">
                  Readability required improvement
                </p>
                <p className="text-sm">
                  Users wanted larger text, better spacing, and clearer hierarchy
                  on instruction-heavy screens.
                </p>
                <div className="mt-3 pl-1">
                  <p className="text-sm leading-none text-foreground mb-2" aria-hidden="true">
                    ↓
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>My design response -</strong> Increased text clarity,
                    improved spacing, strengthened hierarchy, and broke the testing
                    experience into clearer stages.
                  </p>
                </div>
              </li>
              <li>
                <p className="font-medium text-foreground">
                  Navigation needed to feel familiar
                </p>
                <p className="text-sm">
                  Users expected clearer back arrows and standard mobile patterns.
                </p>
                <div className="mt-3 pl-1">
                  <p className="text-sm leading-none text-foreground mb-2" aria-hidden="true">
                    ↓
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>My design response -</strong> Aligned the interface more
                    closely with best-practice mobile conventions so users did not
                    have to relearn how to move through the system.
                  </p>
                </div>
              </li>
              <li>
                <p className="font-medium text-foreground">
                  The main test interaction needed stronger affordance
                </p>
                <p className="text-sm">
                  Users wished for the primary ‘Go’ button used to take the test
                  to be more clearly distinctive as a button
                </p>
                <div className="mt-3 pl-1">
                  <p className="text-sm leading-none text-foreground mb-2" aria-hidden="true">
                    ↓
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>My design response -</strong> Ensured successive
                    iterations improved button styling, states, and clarity.
                  </p>
                </div>
              </li>
              <li>
                <p className="font-medium text-foreground">
                  Practice and demonstration reduced uncertainty
                </p>
                <p className="text-sm">
                  Users responded better when the test was demonstrated clearly
                  before official scoring.
                </p>
                <div className="mt-3 pl-1">
                  <p className="text-sm leading-none text-foreground mb-2" aria-hidden="true">
                    ↓
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>My design response -</strong> Strengthened the
                    demonstration and practice stages so users could understand the
                    rules before the official assessment started.
                  </p>
                </div>
              </li>
              <li>
                <p className="font-medium text-foreground">
                  Feedback needed to stay calm and supportive
                </p>
                <p className="text-sm">
                  Harsh error cues created pressure, and so corrective feedback
                  was softened.
                </p>
                <div className="mt-3 pl-1">
                  <p className="text-sm leading-none text-foreground mb-2" aria-hidden="true">
                    ↓
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>My design response -</strong> Softened corrective
                    feedback so errors felt informative rather than discouraging
                    during practice and testing.
                  </p>
                </div>
              </li>
              <li>
                <p className="font-medium text-foreground">
                  Microphone use needed clearer onboarding
                </p>
                <p className="text-sm">
                  This led directly to the microphone enclosure and stand system.
                </p>
                <div className="mt-3 pl-1">
                  <p className="text-sm leading-none text-foreground mb-2" aria-hidden="true">
                    ↓
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>My design response -</strong> Developed the microphone
                    enclosure and stand system so the verbal pathway could be
                    tested as a more deliberate and comfortable interaction setup.
                  </p>
                </div>
              </li>
              <li>
                <p className="font-medium text-foreground">
                  Results worked best when visual and contextual
                </p>
                <p className="text-sm">
                  Users found graphs, response breakdowns, and performance shown
                  alongside alertness easier to understand than a score presented
                  on its own.
                </p>
                <div className="mt-3 pl-1">
                  <p className="text-sm leading-none text-foreground mb-2" aria-hidden="true">
                    ↓
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>My design response -</strong> Refined the results screens
                    so users could understand their score through response
                    breakdowns, alertness information, progress views, and
                    performance classification.
                  </p>
                </div>
              </li>
            </ul>
          </CaseStudySection>

          {/* Final Outcome */}
          <CaseStudySection title="Final Outcome">
            <p>
              The final version of MindSpark became an accessibility-led
              cognitive testing concept that redesigned the experience around the
              Go/No-Go test rather than changing the test itself. The outcome was
              not simply a clearer test interface. It was a system that questioned
              the assumptions built into self-administered testing and explored
              how interaction design could make participation more flexible,
              understandable, and context-aware.
            </p>
            <p>Final outcomes included:</p>
            <ul className="space-y-2 mt-2">
              <li>• A clearer self-administered test setup flow</li>
              <li>• Onboarding and demonstrative support before official scoring</li>
              <li>• Guided practice to reduce uncertainty and cognitive pressure</li>
              <li>
                • A simplified live testing interface with reduced visual and
                navigational demands
              </li>
              <li>• Support for both touch and verbal response pathways</li>
              <li>
                • An Arduino microphone prototype exploring an alternative to
                touchscreen-only input
              </li>
              <li>
                • A physical enclosure and stand designed to support more
                comfortable verbal interaction
              </li>
              <li>• Visual and contextual result interpretation</li>
              <li>
                • Alertness-based context to help users understand performance
                conditions
              </li>
              <li>
                • Longer-term progress tracking to make results more meaningful
                over time
              </li>
            </ul>
            <p className="mt-4">
              Most importantly, MindSpark showed that interaction design has real
              consequences in cognitive testing contexts. Instructions, feedback,
              pacing, response methods, and result presentation can all affect
              whether users are able to participate confidently. Developing
              MindSpark helped me understand the importance of using accessibility
              as a design method to reduce exclusion. I now see this as a defining
              principle of interaction design and a central part of my design
              practice.
            </p>
          </CaseStudySection>

          {/* Reflection */}
          <CaseStudySection title="Reflection">
            <p>
              MindSpark reinforced my belief that accessibility is not a feature
              added after a design is complete. Many of the most important design
              decisions emerged from questioning assumptions about who the system
              was designed for and how they were expected to interact with it.
              Throughout the project, I continuously asked how the interface
              could adapt to different users rather than expecting every user to
              adapt to the same interface.
            </p>
            <p>
              This project also changed how I think about interaction design as a
              whole, as it showed me how easily digital systems can create hidden
              accessibility barriers. Dense instructions, small interaction
              targets, unclear feedback, and restricting users to a single method
              of interaction can affect how confidently someone completes a test.
              In a cognitive testing context, those decisions matter even more
              because they can shape how a user’s performance is experienced and
              interpreted.
            </p>
            <p>
              The verbal-response prototype particularly changed how I thought
              about accessibility. Building and testing the Arduino microphone
              pathway showed me that accessibility also depends on how a person
              is expected to interact with a system. The input method, physical
              setup, timing, feedback, hardware placement, and technical
              reliability can all affect the experience. Designing the enclosure
              and response pathway made this question more practical: what does
              the system require from the user, and how could those demands be
              reduced?
            </p>
            <p>
              Overall, MindSpark helped me see accessibility as a design method.
              It is a way of asking who might be excluded by a system, what
              assumptions the interface makes, and how alternative pathways can
              create more room for participation. That way of thinking now
              strongly shapes how I approach interaction design, user research,
              and prototyping.
            </p>
            <p>
              I also built the coded Go/No-Go pathway in HTML, CSS, and
              JavaScript, developed a functional Arduino microphone prototype,
              designed the physical enclosure in FreeCAD, and tested how a
              verbal-response pathway could operate alongside the touch-based
              version. Owning both the design and prototype implementation gave
              me a much stronger understanding of how interface decisions affect
              technical feasibility, especially around timing, response
              handling, feedback states, and hardware-supported interaction.
            </p>
          </CaseStudySection>

          {/* Project links */}
          <CaseStudySection title="Project Links">
            <div className="flex flex-wrap gap-3 not-prose">
              <a
                href="https://drive.google.com/file/d/1BEWxv461Gl1tzZD5GrNmQImSpTAdbcsZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Official Report
              </a>
              <a
                href="https://www.figma.com/design/2IiUGF681jgSsJCI0N8fL2/MindSpark---FYP---22071253?t=c5A4NlZ1q6mbWld4-0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                Figma
              </a>
              <a
                href="https://github.com/thomasbroderick04/22071253_MindSpark_FYP/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                GitHub Repository
              </a>
            </div>
          </CaseStudySection>

          {/* Footer nav */}
          <div className="section-divider mt-10 pt-6 flex justify-between text-sm">
            <Link
              to="/projects"
              className="font-medium hover:text-accent transition-colors"
            >
              ← All projects
            </Link>
            <Link
              to="/projects/mould-man"
              className="font-medium hover:text-accent transition-colors"
            >
              Next: MouldMan →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default MindSpark;
