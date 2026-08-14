import { Link } from "react-router-dom";import Layout from "@/components/Layout";import CaseStudySection from "@/components/CaseStudySection";import ProjectMeta from "@/components/ProjectMeta";

import heroDevices from "@/assets/mindspark-hero-devices.png";import existingTools from "@/assets/mindspark-existing-tools.png";import earlySketches from "@/assets/mindspark-early-sketches.png";import earlyWireframes from "@/assets/mindspark-early-wireframes.png";import hifiFlow from "@/assets/mindspark-hifi-flow.png";import testResults from "@/assets/mindspark-test-results.png";import progressHifi from "@/assets/mindspark-progress-hifi.png";import progressMidfi from "@/assets/mindspark-progress-midfi.png";import hardwareConcept from "@/assets/mindspark-hardware-concept.png";import systemOverview from "@/assets/mindspark-system-overview.png";import hifiPages from "@/assets/mindspark-hifi-pages.png";import verbalTest from "@/assets/mindspark-verbal-test.png";import arduinoMic from "@/assets/mindspark-arduino-mic.jpg";import arduinoLive from "@/assets/mindspark-arduino-live.jpg";import enclosureParts from "@/assets/mindspark-enclosure-parts.jpg";import enclosureAssembled from "@/assets/mindspark-enclosure-assembled.jpg";import freecadModel from "@/assets/mindspark-freecad.png";import jsCode from "@/assets/mindspark-javascript-code.png";

interface DocImageProps {src: string;alt: string;caption: string;}

/** Document/screenshot figure — uses object-contain so nothing gets cropped. */const DocImage = ({ src, alt, caption }: DocImageProps) => (

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

const MindSpark = () => {return (<Layout><div className="px-6 md:px-12 lg:px-16 py-16 md:py-24"><article className="container-content"><Link
         to="/projects"
         className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-16 inline-block"
       >← Back to projects</Link>

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
          My research from literature review produced three clear findings that
          shaped the direction of MindSpark.
        </p>

        <div className="mt-8 divide-y divide-border border-y border-border">
          <article className="grid gap-3 py-7 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8 md:py-8">
            <p className="text-lg font-semibold text-muted-foreground tabular-nums">
              01
            </p>
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold leading-snug text-foreground mb-4">
                The design of a test can affect the result
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A cognitive assessment is intended to measure a person’s
                  ability to remember information, concentrate, react quickly
                  or control their responses. However, the result may not
                  accurately reflect that ability if the person has difficulty
                  using the test itself.
                </p>
                <p>
                  For example, unclear instructions may cause someone to
                  respond incorrectly, a small button may make it difficult to
                  respond quickly, and weak feedback may leave them unsure
                  whether their response has been recorded. In these cases, a
                  delay or mistake may have been caused by the interface rather
                  than the cognitive ability being examined.
                </p>
                <p>
                  Accessibility was therefore essential to the design of
                  MindSpark. I reviewed each stage of the experience by
                  considering whether users could understand the information,
                  navigate the application and respond during the test without
                  avoidable difficulty.
                </p>
              </div>
            </div>
          </article>

          <article className="grid gap-3 py-7 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8 md:py-8">
            <p className="text-lg font-semibold text-muted-foreground tabular-nums">
              02
            </p>
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold leading-snug text-foreground mb-4">
                A test result should not be presented without context
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  How someone performs can be affected by how alert or tired
                  they feel when taking the test. Presenting only a score does
                  not give the user any information about the conditions in
                  which that result was recorded.
                </p>
                <p>
                  MindSpark therefore asks users to rate how alert they feel
                  before beginning the test. This information is displayed
                  alongside the result, allowing users to consider their
                  performance in relation to how they felt at the time.
                </p>
              </div>
            </div>
          </article>

          <article className="grid gap-3 py-7 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8 md:py-8">
            <p className="text-lg font-semibold text-muted-foreground tabular-nums">
              03
            </p>
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold leading-snug text-foreground mb-4">
                Touchscreen input may not suit every user
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A touchscreen test requires the user to see a signal, move
                  their hand and press a button accurately and quickly.
                  Difficulty completing any of these physical actions could
                  affect the result, even when the person understands the test.
                </p>
                <p>
                  The Go/No-Go test requires a user to make a simple response
                  when a particular visual signal appears. This made it
                  possible to explore two ways of responding: pressing an
                  on-screen button or saying “Go” aloud. Both methods allow the
                  user to complete the same test without changing what the test
                  is intended to measure.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12">
          <p>
            These research findings directly contributed to a total of seven
            key design implications.
          </p>

          <ol className="mt-6 divide-y divide-border border-y border-border">
            {[
              "Keep each screen focused and remove unnecessary information during the test.",
              "Use large controls and reduce the need for small, precise or repeated touchscreen actions.",
              "Break the instructions into short, clearly ordered steps.",
              "Provide a demonstration and practice round before the scored test begins.",
              "Give clear feedback so users know when their response has been recorded.",
              "Record the user’s level of alertness and display it alongside their result.",
              "Allow users to respond using either touchscreen or verbal input.",
            ].map((text, index) => (
              <li
                key={text}
                className="grid gap-2 py-4 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-8 md:py-5"
              >
                <p className="text-sm font-semibold text-foreground">
                  Design Implication {index + 1}
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>
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
          After completing the earliest wireframes and initial concept sketches
          for the application, I conducted informal user testing with a small
          group of participants. From here, I gained valuable feedback that I
          would carry over into my subsequent prototypes.
        </p>

        <div className="mt-6 divide-y divide-border border-y border-border">
          {[
            {
              feedback: [
                "User Feedback 01 — Progress needed to be easier to access",
                "Users wanted a clearer way to see how they had performed across previous tests and how their results were changing over time.",
              ],
              implication: [
                "Design Implication 01 — Make progress a clear part of the experience",
                "Create a dedicated area where users can quickly review previous results and track changes over time.",
              ],
            },
            {
              feedback: [
                "User Feedback 02 — Users wanted clear guidance before starting the test",
                "Users found the test explanation and practice useful because they helped them understand what to do before taking the real test.",
              ],
              implication: [
                "Design Implication 02 — Guide users through the test step by step",
                "The next design would clearly explain the test, show users how it works, and let them practise before starting.",
              ],
            },
            {
              feedback: [
                "User Feedback 03 — Users liked having more than one way to respond",
                "Users responded positively to both touch and voice input, with the voice option seen as useful for people who may find touchscreen interaction difficult.",
              ],
              implication: [
                "Design Implication 03 — Continue developing both touch and voice input",
                "The next prototype would include both response methods so users were not limited to touchscreen interaction.",
              ],
            },
          ].map(({ feedback, implication }) => (
            <div
              key={feedback[0]}
              className="grid gap-6 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-8"
            >
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  {feedback[0]}
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {feedback[1]}
                </p>
              </div>

              <div
                className="hidden md:flex items-center justify-center text-muted-foreground"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  {implication[0]}
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {implication[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

        {/* Iterative Prototyping */}
      <CaseStudySection title="Iteration: Low to High Fidelity">
        <p>
          The feedback from my early wireframes gave me a clearer direction for
          the first complete prototype. From this point, MindSpark progressed
          through three stages of prototyping. Each version was tested with
          users, and the main findings from that testing directly informed what
          I developed next.
        </p>

        {/* LOW FIDELITY */}
        <div className="mt-12">
          <div className="grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8">
            <p className="text-lg font-semibold text-muted-foreground tabular-nums">
              01
            </p>

            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                Low Fidelity
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Turning the wireframes into a complete prototype
              </h3>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I expanded the early wireframes into the first complete
                  low-fidelity version of MindSpark. At this stage, the focus
                  was on establishing how the different parts of the application
                  would work together before developing the visual design in
                  greater detail.
                </p>

                <p>
                  The prototype established the wider application structure,
                  including the home screen, cognitive test categories, progress
                  tracking and results, as well as the complete Go/No-Go test
                  journey. This allowed me to test MindSpark as one connected
                  experience rather than as a collection of individual screens.
                </p>

                <p>
                  The progress and results section was developed so users could
                  move from an overall view of their performance into a
                  particular cognitive area and then into the detailed result of
                  an individual test. This created a drill-down structure that
                  kept broader progress easy to understand while still allowing
                  users to explore more detailed results when needed.
                </p>

                <p>
                  For the Go/No-Go test itself, I developed the full sequence
                  from learning about the test and choosing a response method,
                  through the alertness check and practice stage, to completing
                  the live test and reviewing the result afterwards.
                </p>
              </div>
            </div>
          </div>

          <DocImage
            src={progressMidfi}
            alt="Low-fidelity MindSpark progress and results screens showing overall progress, cognitive area results and detailed Go/No-Go performance"
            caption="Low-fidelity progress and results screens showing how users could move from an overall performance view into cognitive areas and detailed individual test results."
          />

          {/* ADD IMAGE HERE:
              One image containing these LOW-FIDELITY screens in order:
              1. Go/No-Go overview
              2. Test options / response method
              3. Alertness question
              4. Practice
              5. Live test
              6. Results
          */}
          <div className="my-8">
            <div className="rounded-md border border-dashed border-border bg-secondary/30 px-6 py-12 text-center">
              <p className="text-sm font-semibold text-foreground">
                Add low-fidelity Go/No-Go journey screenshot here
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Overview → Test Options → Alertness → Practice → Live Test →
                Results
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              What I learned from low-fidelity testing
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Testing the first complete prototype identified several problems
              that needed to be addressed before increasing the visual detail of
              the application.
            </p>

            <div className="divide-y divide-border border-y border-border">
              {[
                {
                  feedback: [
                    "User Feedback 01 — Some parts of the interface were not clear enough",
                    "Users generally understood how the application worked, but some text was too small, navigation was not always obvious, and some buttons did not clearly look interactive.",
                  ],
                  implication: [
                    "Design Implication 01 — Improve readability and interaction clarity",
                    "Increase text size and spacing, use more familiar mobile navigation, and make important buttons and actions easier to recognise.",
                  ],
                },
                {
                  feedback: [
                    "User Feedback 02 — Practice and feedback needed refinement",
                    "Users understood the value of practising before the test, but some feedback felt too harsh and the main response interaction needed to be clearer.",
                  ],
                  implication: [
                    "Design Implication 02 — Make practice clearer and more supportive",
                    "Strengthen the main response button and use calmer, clearer feedback while users learn how the test works.",
                  ],
                },
                {
                  feedback: [
                    "User Feedback 03 — Voice input was useful, but the setup needed more guidance",
                    "Users responded positively to verbal interaction, but it was not always obvious how the microphone should be positioned or used.",
                  ],
                  implication: [
                    "Design Implication 03 — Develop the physical microphone setup",
                    "Continue the verbal-response pathway and create a clearer physical setup around the microphone.",
                  ],
                },
              ].map(({ feedback, implication }) => (
                <div
                  key={feedback[0]}
                  className="grid gap-6 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-8"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      {feedback[0]}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {feedback[1]}
                    </p>
                  </div>

                  <div
                    className="hidden md:flex items-center justify-center text-muted-foreground"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      {implication[0]}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {implication[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm font-medium text-foreground">
            These findings became the main priorities for the medium-fidelity
            prototype.
          </p>
        </div>

        {/* MEDIUM FIDELITY */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8">
            <p className="text-lg font-semibold text-muted-foreground tabular-nums">
              02
            </p>

            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                Medium Fidelity
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Responding to the first round of testing
              </h3>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The medium-fidelity prototype directly responded to the
                  problems identified during low-fidelity testing. The overall
                  application structure remained largely the same, but I focused
                  on making individual screens easier to read, navigate and
                  interact with.
                </p>

                <p>
                  Text and spacing were improved, navigation was brought closer
                  to familiar mobile conventions, and important controls were
                  redesigned with clearer normal, selected and pressed states.
                  I also introduced information pop-ups so additional
                  explanations could be accessed when needed without permanently
                  filling the main screens with text.
                </p>

                <p>
                  The Go/No-Go setup and practice sequence were developed
                  further through clearer test options, larger visual elements,
                  improved feedback and a more obvious separation between
                  practice and the actual test. The verbal-response pathway was
                  also given dedicated setup screens so users could understand
                  how to prepare and position the microphone before beginning.
                </p>

                <p>
                  Alongside the interface, the earlier microphone concept was
                  developed into a physical enclosure and adjustable stand,
                  giving the hardware a more stable and deliberate position
                  during use.
                </p>
              </div>
            </div>
          </div>

          {/* ADD IMAGE HERE:
              One image containing these MEDIUM-FIDELITY screens:
              1. Test setup
              2. Practice screen
              3. Main Go response screen
              4. Practice feedback
          */}
          <div className="my-8">
            <div className="rounded-md border border-dashed border-border bg-secondary/30 px-6 py-12 text-center">
              <p className="text-sm font-semibold text-foreground">
                Add medium-fidelity Go/No-Go screens here
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Test Setup → Practice → Go Response → Feedback
              </p>
            </div>
          </div>

          {/* ADD IMAGE HERE:
              A close-up image showing:
              - normal button
              - selected button
              - pressed button
              - one information pop-up
          */}
          <div className="my-8">
            <div className="rounded-md border border-dashed border-border bg-secondary/30 px-6 py-12 text-center">
              <p className="text-sm font-semibold text-foreground">
                Add medium-fidelity interaction details here
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Button States + Information Pop-up
              </p>
            </div>
          </div>

          {/* ADD IMAGE HERE:
              Show the verbal-response setup screens together with the
              FreeCAD enclosure / physical microphone concept.
          */}
          <div className="my-8">
            <div className="rounded-md border border-dashed border-border bg-secondary/30 px-6 py-12 text-center">
              <p className="text-sm font-semibold text-foreground">
                Add verbal-response and microphone development here
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Verbal Setup Screens + Microphone Enclosure / Stand
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              What I learned from medium-fidelity testing
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Testing showed that the main interaction problems identified in
              the previous prototype had improved. Feedback at this stage was
              therefore more focused on refinement than restructuring.
            </p>

            <div className="divide-y divide-border border-y border-border">
              {[
                {
                  feedback: [
                    "User Feedback 01 — The clearer controls resolved much of the earlier uncertainty",
                    "Users found buttons, selected options and navigation easier to recognise and understand.",
                  ],
                  implication: [
                    "Design Implication 01 — Keep the interaction structure",
                    "The main interaction approach was working, so the next version could focus on consistency and refinement rather than major structural changes.",
                  ],
                },
                {
                  feedback: [
                    "User Feedback 02 — Results needed stronger visual emphasis",
                    "Users understood the graphs, response breakdowns and alertness information, but some of the most important information did not stand out enough.",
                  ],
                  implication: [
                    "Design Implication 02 — Refine how results are presented",
                    "Use clearer icons, meaningful colour and stronger visual hierarchy to make important result information easier to understand.",
                  ],
                },
                {
                  feedback: [
                    "User Feedback 03 — The microphone enclosure made verbal interaction clearer",
                    "Users understood where the microphone should be positioned and appreciated being able to use it without needing to hold it.",
                  ],
                  implication: [
                    "Design Implication 03 — Retain the physical setup",
                    "Carry the enclosure and adjustable stand into the final prototype while continuing to test the reliability of voice detection.",
                  ],
                },
              ].map(({ feedback, implication }) => (
                <div
                  key={feedback[0]}
                  className="grid gap-6 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-8"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      {feedback[0]}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {feedback[1]}
                    </p>
                  </div>

                  <div
                    className="hidden md:flex items-center justify-center text-muted-foreground"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      {implication[0]}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {implication[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm font-medium text-foreground">
            With the main interaction problems resolved, the high-fidelity stage
            focused on completing and refining the experience.
          </p>
        </div>

        {/* HIGH FIDELITY */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8">
            <p className="text-lg font-semibold text-muted-foreground tabular-nums">
              03
            </p>

            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                High Fidelity
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Completing the final experience
              </h3>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  By the high-fidelity stage, the application structure and main
                  interactions had already been established through the previous
                  two prototypes. This final stage therefore focused on
                  consistency, visual clarity and making MindSpark feel like one
                  complete application.
                </p>

                <p>
                  Remaining grey areas were replaced with the softer green-toned
                  visual system, the header and iconography were refined, and
                  icons were added where they helped users recognise actions or
                  information more quickly.
                </p>

                <p>
                  The Go/No-Go experience also received its final refinements.
                  The demonstration placeholder was replaced with an actual
                  demonstration video, option descriptions were made clearer,
                  the practice sequence was made more consistent, and subtle
                  feedback was added between practice trials.
                </p>

                <p>
                  Results and progress were refined through clearer response
                  icons, meaningful classification colours and greater emphasis
                  on alertness, while retaining the same drill-down structure
                  established during the low-fidelity stage.
                </p>
              </div>
            </div>
          </div>

          <DocImage
            src={hifiFlow}
            alt="Final high-fidelity Go/No-Go journey showing the test introduction, setup, alertness questions and practice sequence"
            caption="Final Go/No-Go journey showing how users are introduced to the test, prepare for it and practise before beginning the assessment."
          />

          <DocImage
            src={progressHifi}
            alt="Final high-fidelity MindSpark progress and results screens"
            caption="Final progress and results screens showing how the original low-fidelity structure developed into a clearer and more contextual presentation of performance."
          />

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              What final testing showed
            </h3>

            <div className="grid gap-6 py-7 border-y border-border md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  Final Testing — The main usability issues had been resolved
                </p>

                <p className="text-sm text-foreground leading-relaxed">
                  Users found the final prototype clearer, calmer, easier to
                  follow and more visually cohesive. The refined practice,
                  results presentation and verbal-response setup were also
                  received positively.
                </p>
              </div>

              <div
                className="hidden md:flex items-center justify-center text-muted-foreground"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  Outcome — No major redesign was required
                </p>

                <p className="text-sm text-foreground leading-relaxed">
                  The main problems identified during the earlier iterations had
                  been addressed. Remaining feedback related mainly to future
                  development rather than fundamental problems with the
                  experience.
                </p>
              </div>
            </div>
          </div>

          <DocImage
            src={systemOverview}
            alt="Full final MindSpark system showing all major application screens and both Go/No-Go interaction pathways"
            caption="Final MindSpark system showing how the early wireframes developed into a complete application across onboarding, navigation, cognitive test categories, progress and results, and the touch and verbal Go/No-Go pathways."
          />
        </div>
      </CaseStudySection>

           {/* Final Experience */}
      <CaseStudySection title="Final Experience">
        <p>
          After progressing through low-, medium-, and high-fidelity
          prototyping, the final MindSpark design brought the wider application
          and the complete Go/No-Go test experience together as one system.
          Users can access different cognitive assessments, review previous
          performance, track changes over time, and complete the full process
          of preparing for, taking, and reviewing a cognitive test.
        </p>

        <DocImage
          src={hifiPages}
          alt="High-fidelity MindSpark home, cognitive test categories, settings, and notifications screens"
          caption="Final supporting interface showing the home screen, cognitive test categories, settings, and notifications."
        />

        <h3 className="text-lg font-semibold text-foreground mt-10 mb-3">
          Taking the Go/No-Go test
        </h3>

        <p>
          Selecting the Go/No-Go test begins a guided sequence designed to
          prepare the user before their performance is measured. Users are
          introduced to what the test measures, choose how they want to
          respond, select their test options, record how alert they feel, view
          a demonstration, and complete a practice round before beginning the
          actual test.
        </p>

        <DocImage
          src={hifiFlow}
          alt="High-fidelity Figma screens showing the final Go/No-Go preparation pathway including introduction, test options, alertness questions, demonstration, and practice"
          caption="Final Go/No-Go preparation journey showing the stages users complete before beginning the scored test."
        />

        <h3 className="text-lg font-semibold text-foreground mt-10 mb-3">
          Completing the test and understanding the result
        </h3>

        <p>
          During the test, the interface is reduced to the information needed
          to recognise each stimulus and respond. After completion, the result
          is explained through an overall score and a breakdown of correct
          responses, missed responses, and incorrect responses. The user's
          alertness at the time of testing is shown alongside the result so
          performance is not presented as an isolated score.
        </p>

        <DocImage
          src={testResults}
          alt="Final high-fidelity Go/No-Go live test and results screens showing stimulus interaction, score, response breakdown, classification, and alertness"
          caption="Final testing and results experience showing the live interaction, response breakdown, performance classification, and alertness context."
        />

        <h3 className="text-lg font-semibold text-foreground mt-10 mb-3">
          Reviewing progress over time
        </h3>

        <p>
          Results also feed into the wider progress section, where users can
          move from an overall view of their performance into individual
          cognitive areas and specific test results. This allows previous
          performance, response patterns, and alertness-related context to be
          revisited over time rather than disappearing once a test has been
          completed.
        </p>

        <DocImage
          src={progressHifi}
          alt="High-fidelity MindSpark progress and results screens showing overall performance, cognitive area progress, alertness context, and detailed Go/No-Go results"
          caption="Final progress and results system showing the drill-down from overall performance to detailed and contextual test results."
        />
      </CaseStudySection>

            {/* Verbal-Response Prototype */}
      <CaseStudySection title="Developing the Verbal-Response Prototype">
        <p>
          Alongside the touchscreen version of the Go/No-Go test, I developed
          the verbal-response pathway into a functional prototype. This allowed
          users to complete the same test by saying “Go” aloud rather than
          pressing the on-screen response button.
        </p>

        <DocImage
          src={verbalTest}
          alt="High-fidelity Go/No-Go verbal-response test screens showing countdown, stimulus prompts, microphone input, and feedback states"
          caption="Final verbal-response pathway showing the countdown, live test, microphone input, and feedback states."
        />

        <h3 className="text-lg font-semibold text-foreground mt-10 mb-3">
          Turning verbal response into a working interaction
        </h3>

        <p>
          To make the verbal pathway functional, I connected an Arduino Uno to
          a microphone sound sensor that could detect when the user spoke during
          the test. A Node.js bridge passed the Arduino's serial data to the
          browser through WebSockets, allowing the browser-based Go/No-Go test
          to recognise sound input in near real time.
        </p>

        <p>
          The JavaScript test logic controlled the stimulus sequence, timing,
          response detection, scoring, and feedback. This meant the touchscreen
          and verbal versions could follow the same underlying Go/No-Go test
          structure while using different methods of response.
        </p>

        <DocImage
          src={arduinoMic}
          alt="Arduino Uno board connected to a microphone sound sensor using jumper cables"
          caption="Initial hardware setup using an Arduino Uno and microphone sensor to detect verbal responses."
        />

        <DocImage
          src={jsCode}
          alt="VS Code editor showing the JavaScript used to control the MindSpark Go/No-Go test"
          caption="JavaScript controlling stimulus timing, response handling, scoring, feedback, and progression through the Go/No-Go test."
        />

        <DocImage
          src={arduinoLive}
          alt="Live browser-based Go/No-Go test running alongside the Arduino microphone setup"
          caption="Working prototype with microphone input passed from the Arduino to the browser-based Go/No-Go test."
        />

        <h3 className="text-lg font-semibold text-foreground mt-10 mb-3">
          Developing the physical microphone setup
        </h3>

        <p>
          Once the verbal interaction was working technically, I needed to
          consider how the microphone and Arduino would actually be positioned
          during use. Earlier concepts did not provide a sufficiently stable or
          predictable setup, so I designed a dedicated enclosure in FreeCAD to
          securely house the components.
        </p>

        <p>
          I also developed an adjustable stand so the microphone could be
          positioned at different heights without requiring the user to hold or
          reach for it. The enclosure was then produced through 3D printing and
          assembled with the working electronics.
        </p>

        <DocImage
          src={freecadModel}
          alt="FreeCAD model of the MindSpark microphone enclosure showing the internal Arduino supports, microphone opening, and cable access"
          caption="FreeCAD development of the enclosure designed to securely house the Arduino and microphone sensor."
        />

        <DocImage
          src={enclosureParts}
          alt="3D-printed MindSpark enclosure and adjustable microphone stand shown as separate components"
          caption="3D-printed enclosure and adjustable stand before final assembly."
        />

        <DocImage
          src={enclosureAssembled}
          alt="Completed MindSpark microphone enclosure and adjustable stand positioned beside the live Go/No-Go test"
          caption="Final assembled verbal-response prototype combining the physical enclosure, adjustable microphone stand, and live Go/No-Go interface."
        />

        <h3 className="text-lg font-semibold text-foreground mt-10 mb-3">
          What this prototype demonstrated
        </h3>

        <p>
          Developing the verbal-response prototype took the project beyond a
          Figma interaction concept and demonstrated that an alternative method
          of completing the Go/No-Go test could be implemented technically. It
          also showed how decisions around response detection, timing, feedback,
          hardware positioning, and physical comfort all needed to work
          together for the interaction to function as a complete system.
        </p>
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

);};

export default MindSpark;
