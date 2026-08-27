import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";

import lowfiCorePages from "@/assets/mindspark-lowfi-core-pages.png";
import lowfiGoNoGoSetup from "@/assets/mindspark-lowfi-gonogo-setup.png";
import lowfiGoNoGoTestResults from "@/assets/mindspark-lowfi-gonogo-test-results.png";
import hifiCorePages from "@/assets/mindspark-hifi-core-pages.png";
import hifiGoNoGoTestResults from "@/assets/mindspark-hifi-gonogo-test-results.png";
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
import verbalTest from "@/assets/mindspark-verbal-test.png";
import arduinoMic from "@/assets/mindspark-arduino-mic.jpg";
import arduinoLive from "@/assets/mindspark-arduino-live.jpg";
import enclosureParts from "@/assets/mindspark-enclosure-parts.jpg";
import enclosureAssembled from "@/assets/mindspark-enclosure-assembled.jpg";
import freecadModel from "@/assets/mindspark-freecad.png";
import jsCode from "@/assets/mindspark-javascript-code.png";
import midfiCorePages from "@/assets/mindspark-midfi-core-pages.png";
import midfiTouchFlow from "@/assets/mindspark-midfi-touch-flow.png";
import midfiVerbalSetup from "@/assets/mindspark-midfi-verbal-setup.png";
import midfiVerbalPractice from "@/assets/mindspark-midfi-verbal-practice.png";
import midfiComponents from "@/assets/mindspark-midfi-components.png";
import finalResponseMethods from "@/assets/mindspark-final-response-methods.png";

interface ProjectFigureProps {
  src: string;
  alt: string;
  caption?: string;
  variant?: "hero" | "content";
}

const ProjectFigure = ({
  src,
  alt,
  caption,
  variant = "content",
}: ProjectFigureProps) => {
  const isHero = variant === "hero";

  return (
    <figure className="my-8">
      <div
        className={[
          "overflow-hidden rounded-md border border-border bg-secondary/40",
          isHero ? "" : "p-3 md:p-4",
        ].join(" ")}
      >
        <img
          src={src}
          alt={alt}
          loading={isHero ? "eager" : "lazy"}
          className={[
            "mx-auto h-auto w-full object-contain",
            isHero ? "" : "max-h-[80vh]",
          ].join(" ")}
        />
      </div>

      {caption ? (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
};

const SubsectionHeading = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-3 mt-10 text-lg font-semibold text-foreground">
    {children}
  </h3>
);

const MindSpark = () => {
  return (
    <Layout>
      <div className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <article className="container-content">
          <Link
            to="/projects"
            className="mb-16 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
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
          <ProjectFigure
            src={heroDevices}
            alt="MindSpark — logo and three mobile prototype screens on a green background"
            variant="hero"
          />

            {/* Overview */}
      <CaseStudySection title="Overview">
        <p>
          MindSpark is a prototype mobile application that is designed to
          support the complete experience of independently taking cognitive
          assessments. Cognitive assessments are structured tasks used to
          examine how well a person can remember information, concentrate,
          solve problems, react quickly and control impulsive reactions. The
          results from these assessments can help professionals identify signs
          of cognitive impairment and monitor changes over time. Inside
          MindSpark, cognitive assessments are grouped according to the ability
          they examine, such as working memory or attention. Selecting an
          assessment opens an information page explaining what it measures, how
          the assessment works, and what the user will be asked to do.
        </p>

        <SubsectionHeading>
          Project Scope: The Go/No-Go Test
        </SubsectionHeading>

        <p>
          Although MindSpark was designed to contain several cognitive
          assessments, building every assessment was not within the scope of
          this project. I therefore selected one assessment called the Go/No-Go
          test, and designed the complete experience, from learning about and
          practising the test to completing it and reviewing results. During the
          Go/No-Go test, visual signals appear on the screen one at a time.
          During the test, users respond to visual stimuli using either
          touchscreen or verbal input, allowing their reaction times and
          accuracy of their responses to be measured. The test records how
          quickly the user acts on "Go" signals, how many "Go" signals they
          miss, and how often they incorrectly act on "No-Go" signals.
        </p>

        <SubsectionHeading>
          The User Experience
        </SubsectionHeading>

        <p>
          Before taking the Go/No-Go test, users choose a difficulty level and
          decide whether they want to press an on-screen button or say "Go"
          aloud during the test. They then rate how alert they feel, watch a
          demonstration and complete a practice round so that they can learn
          the rules before the scored test begins. After completing the test,
          users see a breakdown of their average response time and the accuracy
          of their responses to the visual stimuli. The result also shows how
          alert the user said they felt before starting the test, allowing them
          to view their performance alongside how they were feeling at the time
          of taking test. If they take the test again, each new result is saved.
          They can then compare their scores across weekly, monthly and yearly
          views to see how their performance changes over time.
        </p>

        <SubsectionHeading>
          Development and Final Outcome
        </SubsectionHeading>

        <p>
          I first designed the user interface as simple wireframes before
          developing them into a detailed interactive Figma prototype. I tested
          each stage with users and revised the instructions, navigation, test
          feedback, results and verbal-input setup based on the difficulties
          they experienced. The final project consisted of the interactive
          MindSpark mobile prototype, a working browser-based Go/No-Go test
          built with HTML, CSS and JavaScript. To test whether the Go/No-Go test
          could be completed without touchscreen input, I built a
          proof-of-concept verbal response system using an Arduino and
          microphone sensor. The system converted a spoken voice command into
          an input that the browser could record and allowed me to test how
          microphone placement affected detection. I therefore designed and
          3D-printed an adjustable enclosure to hold the microphone during
          testing. In a finished mobile application, the same interaction could
          use the device's built-in microphone.
        </p>
      </CaseStudySection>

           {/* Design Problem */}
      <CaseStudySection title="The Design Problem">
        <p>
          Traditionally, cognitive assessments were administered in controlled
          environments by trained professionals who could explain the assessment
          to the user, confirm that the person understood the assessment, and
          observe any difficulties during testing. However, as these assessments
          increasingly move onto mobile and web-based platforms, they are also
          being completed independently and outside of clinical settings. In
          this context, without a professional present, a digital version of an
          assessment must clearly explain what users need to do, provide an
          intuitive and customisable interface that is easy to navigate, and
          allow users to track how their performance changes over time.
        </p>

        <div className="grid gap-4 mt-6 md:grid-cols-3">
          <div className="rounded-md border border-border bg-background p-5">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              01
            </p>

            <h3 className="mb-2 text-sm font-semibold text-foreground leading-snug">
              Organising and explaining the complete experience
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              This application had to provide the guidance normally offered by
              a trained professional without overwhelming the user with
              information. Because MindSpark brings together multiple cognitive
              categories, assessments, instructions, test settings and results,
              this information needed to be organised into a clear and logical
              sequence. Otherwise, users could struggle to identify the relevant
              assessment, understand what it examines, prepare for it correctly
              or know what to do next.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-5">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              02
            </p>

            <h3 className="mb-2 text-sm font-semibold text-foreground leading-snug">
              Preventing the interface from affecting test performance
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Within digital cognitive testing in general, it is important that
              cognitive testing applications capture user inputs at the
              appropriate times and clearly signal when the user is expected to
              respond during the test. If a user misunderstands the
              instructions, cannot clearly identify a signal, struggles to
              operate the touchscreen, or is unsure whether their action was
              recorded, the resulting delay or mistake may reflect the interface
              rather than the cognitive ability being examined. Depending on a
              single input method or on the speed of the test itself could also
              disadvantage users who cannot respond comfortably or quickly
              through touchscreen controls.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-5">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              03
            </p>

            <h3 className="mb-2 text-sm font-semibold text-foreground leading-snug">
              Presenting results in a clear manner and providing intuitive
              feedback about the results
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
           Many existing applications provide only a numerical score, without showing what contributed to it or the context in which the test was taken. The application therefore needed to break results down into average response time and correct and incorrect responses, while also showing user-reported factors such as alertness. Across repeated tests, users also needed to see how each aspect of performance changed over weekly, monthly and yearly periods. Because slower responses or more mistakes could be interpreted negatively, results also needed to be explained in neutral language rather than labelled simply as “good” or “bad.”

            </p>
          </div>
        </div>

        <p className="mt-6">
          To investigate this design challenge, I divided the project into three
          areas: understanding how existing cognitive assessment tools work and
          where their design creates difficulties; identifying how the wider
          assessment experience could better support independent use; and
          exploring whether touch and verbal input could provide different ways
          of completing the same cognitive task. These areas formed the
          following research questions:
        </p>

        <div className="grid gap-4 mt-5 md:grid-cols-2">
          <div className="rounded-md border border-border bg-background p-5">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              RQ1
            </p>

            <h3 className="mb-2 text-sm font-semibold text-foreground leading-snug">
              Understanding existing tools
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              How do current cognitive assessment tools function in evaluating
              cognitive abilities, and what design limitations do they exhibit?
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-5">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              RQ2
            </p>

            <h3 className="mb-2 text-sm font-semibold text-foreground leading-snug">
              Designing for usability and accessibility
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              What design considerations can enhance the accessibility and
              usability of cognitive assessment tools?
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-5">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              RQ3
            </p>

            <h3 className="mb-2 text-sm font-semibold text-foreground leading-snug">
              Exploring different methods of interaction
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              How can different modes of interaction be combined to create
              effective cognitive assessment experiences?
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-5">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              RQ4
            </p>

            <h3 className="mb-2 text-sm font-semibold text-foreground leading-snug">
              Tracking performance over time
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              How can cognitive assessment results be presented to help users
              understand and track changes in their performance over time?
            </p>
          </div>
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
              "01 — Research and accessibility framing",
              "Reviewed literature on digital cognitive testing, usability, accessibility barriers, contextual influences on performance, privacy, and multimodal interaction. This helped establish how the design of self-administered cognitive tests can create barriers for users, influence their performance, and affect their interpretation of results.",
            ],
            [
              "02 — Examining assumptions in existing tools",
              "Analysed existing cognitive testing applications to identify assumptions about users’ ability to understand instructions, use touchscreen input accurately, perform under pressure, and complete tests independently without guidance or support.",
            ],
            [
              "03 — Designing to reduce interaction barriers",
              "Translated research into sketches, user flows, early wireframes, and low-, medium-, and high-fidelity Figma prototypes, focusing on structure and where design could reduce confusion. These were tested and refined with adults aged 19 to 73 to improve clarity, reduce interaction barriers, and help users become familiar with the rules before the official test began.",
            ],
            [
              "04 — Multimodal prototyping and implementation",
              "Built a working verbal-response pathway using an Arduino-connected microphone, allowing users to respond through speech rather than touchscreen input. I also designed a FreeCAD enclosure to integrate the hardware into a complete and usable prototype. This extended the project’s accessibility focus for users who may find precise touch input difficult or unsuitable.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              className="grid gap-3 py-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8"
            >
              <p className="text-sm font-semibold text-foreground">{t}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
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
            <p className="text-lg font-semibold tabular-nums text-muted-foreground">
              01
            </p>
            <div className="max-w-3xl">
              <h3 className="mb-4 text-lg font-semibold leading-snug text-foreground">
                The design of a test can affect the result
              </h3>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
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
            <p className="text-lg font-semibold tabular-nums text-muted-foreground">
              02
            </p>
            <div className="max-w-3xl">
              <h3 className="mb-4 text-lg font-semibold leading-snug text-foreground">
                A test result should not be presented without context
              </h3>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
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
            <p className="text-lg font-semibold tabular-nums text-muted-foreground">
              03
            </p>
            <div className="max-w-3xl">
              <h3 className="mb-4 text-lg font-semibold leading-snug text-foreground">
                Touchscreen input may not suit every user
              </h3>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
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
                  Design Implication {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-sm leading-relaxed text-foreground">
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

        <ProjectFigure
          src={existingTools}
          alt="Comparison table of CogniFit, Carleton University, MindPal, and Lumosity cognitive testing tools across instructional support and organisational clarity"
          caption="Heuristic comparison of four existing cognitive testing tools across instructional support and organisational clarity."
        />

        <p>This helped define what MindSpark needed to do differently:</p>

        <ol className="mt-6 divide-y divide-border border-y border-border">
          {[
            "Introduce the test gradually rather than relying on dense instructions.",
            "Use demonstration and practice so users can understand the task before their performance is recorded.",
            "Use large touch targets and a simplified testing interface to make touchscreen interaction easier.",
            "Provide feedback that guides users clearly without making mistakes feel stressful or punitive.",
            "Present scores with a breakdown of the user’s responses, how alert they felt before taking the test, and how the result compares with their previous attempts.",
            "Explore how touch and verbal interaction could exist within the same testing system.",
          ].map((text, index) => (
            <li
              key={text}
              className="grid gap-2 py-4 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-8 md:py-5"
            >
              <p className="text-sm font-semibold text-foreground">
                Design Implication {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-sm leading-relaxed text-foreground">{text}</p>
            </li>
          ))}
        </ol>
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

        <ProjectFigure
          src={earlySketches}
          alt="Hand-drawn low-fidelity wireframe sketches of the MindSpark app structure and Go/No-Go practice and test flow"
          caption="Early hand-drawn wireframes mapping the application structure and Go/No-Go practice/test pathway."
        />

        <ProjectFigure
          src={earlyWireframes}
          alt="Mid-fidelity black and white wireframes showing the Go/No-Go test options, alertness questions, and practice screens"
          caption="Early structured wireframes showing Go/No-Go test options, alertness questions, and practice flow."
        />

        <ProjectFigure
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
                <p className="mb-2 text-sm font-semibold text-foreground">
                  {feedback[0]}
                </p>
                <p className="text-sm leading-relaxed text-foreground">
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
                <p className="mb-2 text-sm font-semibold text-foreground">
                  {implication[0]}
                </p>
                <p className="text-sm leading-relaxed text-foreground">
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
            <p className="text-lg font-semibold tabular-nums text-muted-foreground">
              01
            </p>

            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                Low Fidelity
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Turning the wireframes into a complete prototype
              </h3>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
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
              </div>
            </div>
          </div>

          <ProjectFigure
            src={lowfiCorePages}
            alt="Low-fidelity MindSpark home screen and cognitive test category screens"
            caption="Low-fidelity application structure showing the home screen and cognitive test categories, establishing how users could access tests and review their wider activity."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Progress and results were also developed as part of this wider
              structure. Rather than presenting one score and ending the
              experience, users could move from an overall view of their
              performance into a particular cognitive area and then into the
              detailed result of an individual test. This created a drill-down
              structure that kept broader progress understandable while still
              allowing more detailed information to be explored when needed.
            </p>
          </div>

          <ProjectFigure
            src={progressMidfi}
            alt="Low-fidelity MindSpark progress and results screens showing overall progress, cognitive area results and detailed Go/No-Go performance"
            caption="Low-fidelity progress and results screens showing the drill-down from overall performance to cognitive areas and detailed individual test results."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              For the Go/No-Go test itself, I developed the complete journey
              around taking the assessment. Before entering the live test,
              users could learn what the test measured, choose how they wanted
              to respond, record how alert they felt and complete a practice
              round so they understood the interaction before their performance
              was recorded.
            </p>
          </div>

          <ProjectFigure
            src={lowfiGoNoGoSetup}
            alt="Low-fidelity Go/No-Go test screens showing the test overview, response options, alertness questions and practice sequence"
            caption="Low-fidelity Go/No-Go preparation flow showing the test overview, response method selection, alertness check and practice before the official test."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              The pathway then continued into the live Go/No-Go test and the
              immediate result. The testing interface centred on the stimulus
              and primary response button, while the result screen expanded the
              outcome beyond a single score through a response breakdown,
              performance rating and the user's recorded alertness.
            </p>
          </div>

          <ProjectFigure
            src={lowfiGoNoGoTestResults}
            alt="Low-fidelity Go/No-Go live test screens and result screen showing stimuli, response feedback, score breakdown and alertness"
            caption="Low-fidelity live test and results experience showing the response interaction, feedback states and contextual presentation of the final result."
          />

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              What I learned from low-fidelity testing
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-3xl">
              Testing the first complete prototype showed that the overall
              structure worked, but identified several interface and interaction
              problems that needed to be addressed in the next iteration.
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
                    "Design Implication 03 — Develop the verbal-response setup",
                    "Continue developing verbal input while providing clearer guidance around preparing and positioning the microphone.",
                  ],
                },
              ].map(({ feedback, implication }) => (
                <div
                  key={feedback[0]}
                  className="grid gap-6 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-8"
                >
                  <div>
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      {feedback[0]}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground">
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
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      {implication[0]}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground">
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
            <p className="text-lg font-semibold tabular-nums text-muted-foreground">
              02
            </p>

            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                Medium Fidelity
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Responding to the first round of testing
              </h3>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The medium-fidelity prototype directly responded to the
                  problems identified during low-fidelity testing. The overall
                  structure of MindSpark had already been established, so this
                  stage focused on improving visual clarity, interaction
                  behaviour and the detail of the Go/No-Go experience.
                </p>

                <p>
                  A consistent visual identity was introduced through teal
                  branding, card-based layouts, clearer hierarchy, larger
                  interaction targets and more purposeful use of colour.
                  Navigation was also brought closer to familiar mobile
                  conventions so users could move through the application more
                  confidently.
                </p>
              </div>
            </div>
          </div>

          <ProjectFigure
            src={midfiCorePages}
            alt="Medium-fidelity MindSpark home screen and cognitive test categories screen showing the new teal visual identity, card layouts and navigation"
            caption="Medium-fidelity home and test-category screens showing the introduction of MindSpark’s visual identity, clearer hierarchy, category colour coding and more familiar navigation."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              I also developed a reusable interaction system so the interface
              communicated more clearly when users selected or pressed
              something. Buttons, navigation items and other controls were
              given distinct normal, selected and pressed states so users could
              see that their actions had been registered.
            </p>

            <p>
              Informational overlays were introduced at the same stage. These
              allowed users to open short explanations beside more complex
              information when they needed help, rather than permanently
              displaying additional text on the main screen.
            </p>
          </div>

          <ProjectFigure
            src={midfiComponents}
            alt="Medium-fidelity MindSpark Figma component system showing button states, navigation states and informational overlays"
            caption="Reusable components, interaction states and informational overlays developed to make actions, selections and additional guidance clearer throughout the application."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              These changes were then carried into the Go/No-Go pathway.
              The test overview was made easier to scan, response options were
              presented more clearly, and users could choose additional test
              settings before continuing to the alertness check.
            </p>

            <p>
              The practice experience was also redesigned with larger visual
              stimuli, a clearer primary response button and more supportive
              feedback. This helped users learn the Go/No-Go rule before the
              scored test began without making mistakes feel overly punitive.
            </p>
          </div>

          <ProjectFigure
            src={midfiTouchFlow}
            alt="Medium-fidelity touchscreen Go/No-Go journey showing the test overview, response options, alertness question, practice and positive feedback"
            caption="Medium-fidelity touchscreen pathway showing the refined test overview, response selection, alertness check and redesigned practice experience."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Low-fidelity testing had also shown that the verbal-response
              option needed much clearer guidance. In response, I introduced a
              dedicated verbal setup sequence before the test. Users were guided
              through finding a quiet environment, positioning the microphone
              correctly and confirming microphone access before continuing.
            </p>

            <p>
              Once the microphone was prepared, the verbal pathway returned to
              the same alertness and practice structure as the touchscreen
              version. The main difference was the interaction itself: instead
              of pressing the Go button, users practised responding by saying
              “Go” aloud.
            </p>
          </div>

          <ProjectFigure
            src={midfiVerbalSetup}
            alt="Medium-fidelity verbal-response Go/No-Go screens showing quiet-space guidance, microphone placement, microphone testing, alertness and verbal practice"
            caption="Verbal-response setup introducing dedicated guidance for the testing environment, microphone positioning and microphone access before beginning practice."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              The verbal practice sequence was developed further so users could
              experience both sides of the Go/No-Go rule. They were shown when
              to say “Go”, when to withhold a response, and were given clear
              feedback after each practice trial.
            </p>

            <p>
              A dedicated Practice Complete screen was also introduced to mark
              the end of the learning stage. Instead of moving users directly
              into the scored test, they could either begin the official test
              when ready or repeat the practice sequence first.
            </p>
          </div>

          <ProjectFigure
            src={midfiVerbalPractice}
            alt="Medium-fidelity verbal Go/No-Go practice screens showing Go and No-Go trials, supportive feedback and the Practice Complete screen"
            caption="Medium-fidelity verbal practice showing Go and No-Go trials, supportive feedback and a clearer transition from practice into the official assessment."
          />

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              What I learned from medium-fidelity testing
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-3xl">
              Testing showed that the main interaction problems identified
              during low fidelity had improved. Feedback at this stage was
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
                    "Design Implication 01 — Keep the established interaction structure",
                    "The main navigation and control system was working, so the final iteration could refine it rather than introducing another major structural change.",
                  ],
                },
                {
                  feedback: [
                    "User Feedback 02 — On-demand explanations worked well",
                    "Users responded positively to having additional information available through overlays without permanently adding more text to each screen.",
                  ],
                  implication: [
                    "Design Implication 02 — Retain the overlays but improve their hierarchy",
                    "Keep contextual help available on demand while making the content quicker to scan and the help controls more visually consistent.",
                  ],
                },
                {
                  feedback: [
                    "User Feedback 03 — Results were understandable but needed stronger visual emphasis",
                    "Users understood the graphs, response breakdowns and alertness information, but some of the most important information did not stand out enough.",
                  ],
                  implication: [
                    "Design Implication 03 — Refine how results are presented",
                    "Use clearer icons, meaningful colour and stronger visual hierarchy to make important result information easier to understand.",
                  ],
                },
                {
                  feedback: [
                    "User Feedback 04 — The verbal-response setup was much clearer",
                    "The additional setup guidance made the verbal pathway easier to understand, while the physical microphone setup allowed users to interact without needing to hold the device.",
                  ],
                  implication: [
                    "Design Implication 04 — Retain the verbal pathway and physical setup",
                    "Carry the verbal onboarding, microphone enclosure and adjustable stand into the final prototype while continuing to refine the reliability of voice detection.",
                  ],
                },
              ].map(({ feedback, implication }) => (
                <div
                  key={feedback[0]}
                  className="grid gap-6 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-8"
                >
                  <div>
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      {feedback[0]}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground">
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
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      {implication[0]}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground">
                      {implication[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm font-medium text-foreground">
            With the main structure and interaction model now working well, the
            high-fidelity stage focused on refinement, consistency and
            completing the final experience.
          </p>
        </div>

                {/* HIGH FIDELITY */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8">
            <p className="text-lg font-semibold tabular-nums text-muted-foreground">
              03
            </p>

            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                High Fidelity
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Completing the final experience
              </h3>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  By the high-fidelity stage, the application structure and main
                  interactions had already been established through the previous
                  two prototypes. This final stage therefore focused on
                  consistency, visual clarity and making MindSpark feel like one
                  complete application.
                </p>

                <p>
                  The wider interface was refined through the softer green-toned
                  visual system, a more consistent header and navigation,
                  stronger iconography and clearer visual separation between
                  different cognitive test categories and areas of the
                  application.
                </p>
              </div>
            </div>
          </div>

          <ProjectFigure
            src={hifiCorePages}
            alt="Final high-fidelity MindSpark home, test categories, settings and notifications screens"
            caption="Final supporting interface showing the home screen, cognitive test categories, settings and notifications after the visual system and navigation had been refined."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              The Go/No-Go preparation journey also received its final
              refinements. The demonstration placeholder was replaced with an
              actual demonstration video, option descriptions were made clearer,
              the alertness check was given greater visual emphasis, and the
              practice sequence was made more consistent before users entered
              the official test.
            </p>
          </div>

          <ProjectFigure
            src={hifiFlow}
            alt="Final high-fidelity Go/No-Go journey showing test introduction, response options, alertness questions and practice"
            caption="Final Go/No-Go preparation journey showing the refined introduction, setup, alertness check, demonstration and practice stages."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              The live test was also visually simplified and refined. The
              stimulus and primary response remained the focus of each trial,
              while feedback between trials became clearer and less punitive.
              Once the test was completed, the result was presented through a
              stronger hierarchy of score, response breakdown, performance
              classification and alertness context.
            </p>
          </div>

          <ProjectFigure
            src={hifiGoNoGoTestResults}
            alt="Final high-fidelity Go/No-Go live test and result screens showing stimuli, response states, score, response breakdown, classification and alertness"
            caption="Final live test and immediate results experience showing the refined interaction, supportive feedback and contextual breakdown of performance."
          />

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              The wider progress system retained the drill-down structure first
              established during low fidelity, but the information was made
              easier to scan through clearer icons, semantic colour, stronger
              hierarchy and greater emphasis on the relationship between
              alertness and performance.
            </p>
          </div>

          <ProjectFigure
            src={progressHifi}
            alt="Final high-fidelity MindSpark progress and results screens"
            caption="Final progress and results screens showing how the original low-fidelity structure developed into a clearer visual and contextual interpretation of performance."
          />

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              What final testing showed
            </h3>

            <div className="grid gap-6 py-7 border-y border-border md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
              <div>
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Final Testing — The main usability issues had been resolved
                </p>

                <p className="text-sm leading-relaxed text-foreground">
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
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Outcome — No major redesign was required
                </p>

                <p className="text-sm leading-relaxed text-foreground">
                  The main problems identified during the earlier iterations had
                  been addressed. Remaining feedback related mainly to future
                  development rather than fundamental problems with the
                  experience.
                </p>
              </div>
            </div>
          </div>

          <ProjectFigure
            src={systemOverview}
            alt="Full final MindSpark system showing all major application screens and both Go/No-Go interaction pathways"
            caption="Complete high-fidelity MindSpark system showing how the application developed across the wider interface, progress and results, and the touch and verbal Go/No-Go pathways."
          />
        </div>
      </CaseStudySection>

    {/* Verbal-Response Prototype */}
      <CaseStudySection title="Developing the Verbal-Response Prototype">
        <p>
          Alongside the touchscreen version of the Go/No-Go test, I developed
          the verbal-response pathway into a functional prototype. This allowed
          users to complete the same test by saying “Go” aloud rather than
          pressing the on-screen response button.
        </p>

        <ProjectFigure
          src={verbalTest}
          alt="High-fidelity Go/No-Go verbal-response test screens showing countdown, stimulus prompts, microphone input, and feedback states"
          caption="Final verbal-response pathway showing the countdown, live test, microphone input, and feedback states."
        />

        <SubsectionHeading>
          Turning verbal response into a working interaction
        </SubsectionHeading>

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

        <ProjectFigure
          src={arduinoMic}
          alt="Arduino Uno board connected to a microphone sound sensor using jumper cables"
          caption="Initial hardware setup using an Arduino Uno and microphone sensor to detect verbal responses."
        />

        <ProjectFigure
          src={jsCode}
          alt="VS Code editor showing the JavaScript used to control the MindSpark Go/No-Go test"
          caption="JavaScript controlling stimulus timing, response handling, scoring, feedback, and progression through the Go/No-Go test."
        />

        <ProjectFigure
          src={arduinoLive}
          alt="Live browser-based Go/No-Go test running alongside the Arduino microphone setup"
          caption="Working prototype with microphone input passed from the Arduino to the browser-based Go/No-Go test."
        />

        <SubsectionHeading>
          Developing the physical microphone setup
        </SubsectionHeading>

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

        <ProjectFigure
          src={freecadModel}
          alt="FreeCAD model of the MindSpark microphone enclosure showing the internal Arduino supports, microphone opening, and cable access"
          caption="FreeCAD development of the enclosure designed to securely house the Arduino and microphone sensor."
        />

        <ProjectFigure
          src={enclosureParts}
          alt="3D-printed MindSpark enclosure and adjustable microphone stand shown as separate components"
          caption="3D-printed enclosure and adjustable stand before final assembly."
        />

        <ProjectFigure
          src={enclosureAssembled}
          alt="Completed MindSpark microphone enclosure and adjustable stand positioned beside the live Go/No-Go test"
          caption="Final assembled verbal-response prototype combining the physical enclosure, adjustable microphone stand, and live Go/No-Go interface."
        />

        <SubsectionHeading>
          What this prototype demonstrated
        </SubsectionHeading>

        <p>
          Developing the verbal-response prototype took the project beyond a
          Figma interaction concept and demonstrated that an alternative method
          of completing the Go/No-Go test could be implemented technically. It
          also showed how decisions around response detection, timing, feedback,
          hardware positioning, and physical comfort all needed to work
          together for the interaction to function as a complete system.
        </p>
      </CaseStudySection>
  
                {/* Final Experience */}
      <CaseStudySection title="Final Experience">
        <p>
          After progressing through the interface design and developing the
          verbal-response prototype, the final MindSpark design brought both
          strands together as one complete cognitive testing system. Users can
          access different cognitive assessments, choose how they want to
          interact with the Go/No-Go test, prepare through demonstration and
          practice, complete the assessment, and review their performance in
          the context of both alertness and previous results.
        </p>

        <ProjectFigure
          src={systemOverview}
          alt="Complete high-fidelity MindSpark system showing the wider application, progress and results, and both touchscreen and verbal Go/No-Go pathways"
          caption="Complete MindSpark system bringing together the wider cognitive testing application, progress and results, and both touchscreen and verbal Go/No-Go pathways."
        />

        <SubsectionHeading>
          Finding and preparing for a cognitive assessment
        </SubsectionHeading>

        <p>
          MindSpark was designed as a wider cognitive testing application rather
          than as a single Go/No-Go test. From the home screen, users can access
          assessments grouped across different cognitive areas, review previous
          performance and return to their progress over time.
        </p>

        <p>
          Selecting the Go/No-Go test begins a guided preparation sequence.
          Users are introduced to what the test measures, choose whether they
          want to respond using touchscreen or verbal input, configure the test,
          record how alert they feel, view a demonstration and complete a
          practice round before the scored assessment begins.
        </p>

        <ProjectFigure
          src={hifiFlow}
          alt="Final Go/No-Go preparation pathway showing test introduction, response method selection, test options, alertness questions, demonstration and practice"
          caption="Final Go/No-Go preparation journey showing how users learn about the test, choose a response method, record alertness and practise before the scored assessment."
        />

        <SubsectionHeading>
          Completing the test through touch or verbal input
        </SubsectionHeading>

        <p>
          Both response pathways follow the same underlying Go/No-Go rules while
          allowing the user to interact in different ways. In the touchscreen
          pathway, users respond by pressing the main Go button. In the verbal
          pathway, the same response can be made by saying “Go” aloud using the
          microphone setup developed during the project.
        </p>

        <p>
          This meant the assessment did not depend on one method of physical
          interaction. Regardless of the response method selected, users move
          through the same preparation, practice and testing structure before
          reaching their result.
        </p>

        {/* ADD NEW IMAGE:
            Create one compact image showing:
            1. Response method selection
            2. Touchscreen live-test screen
            3. Verbal live-test screen

            Save as:
            mindspark-final-response-methods.png
        */}
        <ProjectFigure
          src={finalResponseMethods}
          alt="Final MindSpark response methods showing the choice between touchscreen and verbal input and the corresponding live-test interactions"
          caption="The final Go/No-Go test supports the same assessment through two interaction pathways: pressing the on-screen Go button or responding verbally."
        />

        <SubsectionHeading>
          Understanding the result
        </SubsectionHeading>

        <p>
          After the test is completed, performance is presented through more
          than a single score. Users can review their overall result, correct
          responses, No-Go errors and missed responses, alongside a performance
          classification and the alertness level they recorded before taking
          the test.
        </p>

        <p>
          Presenting these elements together gives users more context for
          understanding how the result was produced rather than treating one
          number as a complete description of their performance.
        </p>

        <ProjectFigure
          src={testResults}
          alt="Final MindSpark Go/No-Go result showing overall score, response breakdown, performance classification and alertness"
          caption="Final result presentation combining the overall score with response breakdown, performance classification and the user’s recorded alertness."
        />

        <SubsectionHeading>
          Reviewing performance over time
        </SubsectionHeading>

        <p>
          Individual results also feed into the wider progress system. Users can
          begin with an overall view of their performance, move into a specific
          cognitive area and then inspect the result of an individual test.
          Previous performance, response patterns and alertness-related context
          can therefore be revisited across repeated assessments rather than
          disappearing once a test has been completed.
        </p>

        <ProjectFigure
          src={progressHifi}
          alt="Final MindSpark progress and results screens showing overall performance, cognitive-area progress, alertness context and detailed Go/No-Go results"
          caption="Final progress system showing the drill-down from overall performance to cognitive-area progress and detailed individual test results."
        />

        <p className="mt-8">
          Together, these elements allow MindSpark to support the complete
          experience around independently taking a cognitive assessment rather
          than treating the test as an isolated interaction. The final concept
          considers how users find and understand assessments, prepare for them,
          choose how they want to interact, complete the test, interpret the
          result and return to their performance over time.
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
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-muted-foreground">
          <li>A clearer self-administered test setup flow</li>
          <li>Onboarding and demonstrative support before official scoring</li>
          <li>Guided practice to reduce uncertainty and cognitive pressure</li>
          <li>
            A simplified live testing interface with reduced visual and
            navigational demands
          </li>
          <li>Support for both touch and verbal response pathways</li>
          <li>
            An Arduino microphone prototype exploring an alternative to
            touchscreen-only input
          </li>
          <li>
            A physical enclosure and stand designed to support more
            comfortable verbal interaction
          </li>
          <li>Visual and contextual result interpretation</li>
          <li>
            Alertness-based context to help users understand performance
            conditions
          </li>
          <li>
            Longer-term progress tracking to make results more meaningful
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

