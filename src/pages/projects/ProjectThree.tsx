import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";

import heroImage from "@/assets/learnbetter-hero.png";
import affinityCluster from "@/assets/learnbetter-affinity-cluster.png";
import brainstormingProblem from "@/assets/learnbetter-brainstorming-problem.png";
import brainstormingSolution from "@/assets/learnbetter-brainstorming-solution.png";
import sketchDashboard from "@/assets/learnbetter-sketch-dashboard.png";
import lofiPrototype from "@/assets/learnbetter-lofi-prototype.png";
import hifiOverview from "@/assets/learnbetter-hifi-overview.png";
import userTest1 from "@/assets/learnbetter-usertest-1.jpg";
import userTest2 from "@/assets/learnbetter-usertest-2.jpg";
import userTest3 from "@/assets/learnbetter-usertest-3.jpg";
import hmwStatements from "@/assets/learnbetter-hmw-statements.png";
import storyboard from "@/assets/learnbetter-storyboard.png";
import hifiOnboarding from "@/assets/learnbetter-hifi-onboarding.png";
import hifiModule from "@/assets/learnbetter-hifi-module.png";
import hifiProgress from "@/assets/learnbetter-hifi-progress.png";
import hifiEducationVideos from "@/assets/learnbetter-hifi-education-videos.png";
import hifiPeopleMessages from "@/assets/learnbetter-hifi-people-messages.png";
import hifiAiChat from "@/assets/learnbetter-hifi-ai-chat.png";
import hifiStudyLive from "@/assets/learnbetter-hifi-study-live.png";
import hifiEntertainment from "@/assets/learnbetter-hifi-entertainment.png";
import hifiFocus from "@/assets/learnbetter-hifi-focus.png";
import hifiHelpCenter from "@/assets/learnbetter-hifi-help-center.png";

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

const SmallDocImage = ({ src, alt, caption }: DocImageProps) => (
  <figure>
    <div className="rounded-md border border-border bg-secondary/40 p-3">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto object-contain mx-auto"
      />
    </div>
    <figcaption className="mt-3 text-xs text-muted-foreground text-center">
      {caption}
    </figcaption>
  </figure>
);

const ProjectThree = () => {
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

          <h1 className="mb-5">LearnBetter</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Designing a student e-learning companion to support focus,
            organisation, and connection in remote learning.
          </p>

          <ProjectMeta
            items={[
              {
                label: "Role",
                value: "UX Research · Concept · Sketching (group of 4)",
              },
              { label: "Duration", value: "Jan 2023 – May 2023" },
              {
                label: "Module",
                value: "CS4052 – Foundations of Interaction Design",
              },
              { label: "Tools", value: "Figma · Paper Prototyping · Mural" },
            ]}
          />

          <figure className="my-8">
            <img
              src={heroImage}
              alt="LearnBetter app hero showing the splash screen and module dashboard"
              className="w-full h-auto"
              loading="eager"
            />
          </figure>

          {/* Overview */}
          <CaseStudySection title="Overview">
            <p>
              LearnBetter was a design project undertaken in a group of four in
              my first year of college that explored how a mobile app could
              support students who are studying remotely. The project was based
              on a familiar problem: when students learn from home, it becomes
              easier to lose structure in the day, easier to get distracted, and
              harder to feel motivated or connected to others. Instead of relying
              on separate tools for lectures, communication, productivity, and
              support, LearnBetter aimed to bring these needs together into one
              system.
            </p>
            <p>
              The final concept was a student e-learning companion that included
              module access, lecture materials, performance tracking, chat, live
              group learning, focus tools, music, settings, and help resources.
              The goal was not only to let students access course content, but
              to create a more supportive study environment around it and
              therefore help students stay on top of work, stay concentrated
              while studying remotely, and feel less isolated in the process.
            </p>
            <p>
              This was a group project, so the final prototype was shared work.
              My own contribution was strongest in the earlier UX and concept
              stages, particularly around problem framing, HMW thinking,
              personas, sketches, storyboard work, and feature ideas related to
              progress tracking, educational support, and keeping students on
              task. Several of those ideas carried through into the final
              prototype, especially the Progress feature, the Education Videos
              feature, and elements of the support section that were first
              developed in my sketches.
            </p>
          </CaseStudySection>

          {/* Design context */}
          <CaseStudySection title="Design Context / Problem">
            <p>
              The project began with the recognition that remote study often
              lacks the structure students get more naturally in physical
              learning environments. In-person learning naturally creates
              structure. There is a place to go, a lecture to attend, and a
              clearer separation between study time and the rest of daily life.
              Remote learning removes a lot of that structure, which means
              students often end up studying in the same space where they relax,
              use social media, or deal with other responsibilities.
            </p>
            <p>
              As a group, we explored those problems and shaped them into a
              shared problem statement: students often get distracted when
              studying remotely because they do not have an authority figure
              supervising them and have no physical boundaries between study
              time and off time, which makes it difficult to stay motivated and
              concentrated. The goal and KPI we defined therefore centred on
              creating an application that helps students stay focused while
              eliminating distractions.
            </p>
            <p>
              That framing gave the project a much clearer foundation. Rather
              than designing a vague “student app,” my group was designing
              around specific needs, which were helping students keep track of
              coursework, reducing distraction, supporting concentration, making
              academic help easier to access, and creating a more productive
              remote-learning experience overall.
            </p>

            <DocImage
              src={brainstormingProblem}
              alt="Brainstorming mural showing problem areas around distraction, motivation, and remote study"
              caption="Problem brainstorming: Each group member mapped issues students face in remote study, from distraction and isolation to weak time management and poor connectivity."
            />

            <DocImage
              src={affinityCluster}
              alt="Affinity cluster grouping ideas under Type, Accessibility, Activities, Issues, and Appearance"
              caption="Affinity cluster: Grouping the brainstormed ideas into themes such as accessibility, activities, and the underlying issues the product would need to solve."
            />
          </CaseStudySection>

          {/* My role */}
          <CaseStudySection title="My Role">
            <p>
              Because this was a group project, my contribution was strongest in
              the defining and early concept stages, where I helped shape how
              the problem was understood and what kinds of features the product
              should include. Specifically, I contributed to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Early brainstorming and problem framing around keeping students
                on task.
              </li>
              <li>
                The HMW stage — writing questions focused on engagement,
                accessibility, targeted support, feedback, active participation,
                and easier access to the virtual learning environment.
              </li>
              <li>
                Persona development, especially personas centred on time
                management, study organisation, procrastination, stress, and
                balancing study with other commitments.
              </li>
              <li>
                Sketching early app ideas, including progress tracking,
                education video access, and dashboard layouts.
              </li>
              <li>
                Storyboard work focused on study structure, completed work,
                remaining work, and reducing procrastination.
              </li>
              <li>
                Authoring the user test protocols for both the low-fidelity and
                high-fidelity prototypes — defining the task flows, scripting
                the step-by-step instructions for each feature, and writing the
                post-test questionnaire used to gather qualitative feedback.
              </li>
              <li>
                Running and documenting user testing sessions on the
                high-fidelity prototype — observing participants across all six
                feature flows, recording behaviour and pain points, and
                synthesising the findings into "potential improvements" that
                fed back into the next iteration.
              </li>
            </ul>

            <p>
              These ideas were not left at the rough concept stage. My early
              sketches directly informed the next stages of development. The
              Progress feature and Education Video feature were both carried
              forward from my concepts, and elements of my Help feature helped
              shape the Support feature in the medium-fidelity prototype. The
              direction for the medium-fidelity prototype was developed from my
              sketches and storyboards following the first round of testing.
            </p>
          </CaseStudySection>

          {/* Discover */}
          <CaseStudySection title="Discover — understanding the real issue behind remote study">
            <p>
              The first stage focused on understanding what students actually
              struggle with in remote learning. We used brainstorming and
              affinity clustering to get beyond a surface-level idea of online
              learning and identify what specifically was making it difficult.
              The group used a Mural board to document both the problems and the
              kinds of features the prototype might need.
            </p>
            <p>
              The problem was not limited to access to content. Remote learning
              also made it harder for students to concentrate, stay motivated,
              and keep track of their work. At this stage, my contribution
              focused mainly on the issue of staying on task. My affinity
              cluster explored how virtual learning could better support student
              focus, and that direction later informed my HMW questions,
              storyboard, and other design ideas.
            </p>

            <DocImage
              src={brainstormingSolution}
              alt="Solution brainstorming board with proposed features grouped by team member"
              caption="Solution brainstorming: Moving from problem space into possible features, including focus tools, interactive learning, mental health support, and time-management aids."
            />
          </CaseStudySection>

          {/* Define */}
          <CaseStudySection title="Define — making the problem more solvable">
            <p>
              <strong>Personas:</strong> The group used personas to create more
              realistic user scenarios and avoid designing in a generic way. My
              persona work focused especially on students dealing with social
              anxiety, time management, study organisation, procrastination, and
              stress. <em>Sarah</em> centred on social anxiety, time management,
              and study organisation, with needs such as connecting with peers
              without feeling intimidated, tracking coursework, and having a
              flexible learning environment. <em>Michael</em> focused on time
              management, procrastination, stress, realistic study planning, and
              tools to help students stay on track and motivated while balancing
              academic and work responsibilities.
            </p>
            <p>
              <strong>‘How Might We’ (HMW) Questions:</strong> A HMW exercise
              turned the broad challenge into clearer design opportunities. My
              own HMW questions focused on making virtual learning more
              interactive and engaging, making the platform simple to navigate,
              providing targeted support and resources, improving accessibility,
              rewarding students for staying on task, providing meaningful
              educational feedback, encouraging active participation, and making
              learning easier to access and more enjoyable.
            </p>
            <p>
              That stage matters because it shows the project was not only
              driven by visual ideas. It was being driven by a set of design
              questions about usability, support, motivation, and student
              engagement.
            </p>

            <DocImage
              src={hmwStatements}
              alt="My HMW statements list — twelve questions covering engagement, accessibility, support, feedback, and active participation"
              caption="My HMW statements translating the problem into clear design opportunities around engagement, accessibility, targeted support, feedback, and keeping students on task."
            />
          </CaseStudySection>

          {/* Sketches & storyboards */}
          <CaseStudySection title="Exploring ideas through sketches and storyboards">
            <p>
              Once the problem had been defined more clearly, the project moved
              into sketching and storyboarding. All group members contributed
              sketches. My particular sketch contribution included interface
              ideas for a progress feature where students could see how much
              time they had spent studying and how many lectures and assignments
              they had completed, a possible lecture interface, home page
              layouts, and other directions such as a study clock and
              wearable-device ideas. I also sketched a dashboard page, a
              microphone idea for quick study-related questions, and a motion
              detector concept to prevent students from getting up and getting
              distracted.
            </p>
            <p>
              Even though not every idea made it into the final design, this
              stage defined what kind of learning companion the application
              could become. The Education Video feature and the Progress feature
              were taken from my sketch work, and a combination of my
              collaborator’s Support feature and my Help feature was also
              included.
            </p>
            <p>
              Storyboards developed the ideas further by showing how the app
              might work in realistic situations. My storyboard followed a
              student completing a quiz, receiving a notification that work had
              been completed, seeing the remaining work still left to do, and
              then receiving a 45-minute study break after everything was
              finished. This was intended to create structure in the student’s
              study routine and prevent procrastination.
            </p>

            <DocImage
              src={sketchDashboard}
              alt="Hand-drawn sketch of LearnGenie loading screen and dashboard concept with Progress, Education Videos, Entertainment, Help, and Weekly Goal"
              caption="Early sketch of my dashboard concept showing Progress, Education Videos, Entertainment, Help, and Weekly Goal. Several of these ideas (Progress, Education Videos, Help) carried directly into the final application."
            />

            <DocImage
              src={storyboard}
              alt="Six-panel hand-drawn storyboard following a student using StudyGenie to complete lessons and unlock a 45-minute break"
              caption="My storyboard, showing how a student moves from distraction, to receiving a notification, to using the dashboard's Progress and Education Video features, and finally unlocking a 45-minute break after completing all lessons."
            />
          </CaseStudySection>

          {/* Concept to prototype */}
          <CaseStudySection title="From concept to prototype">
            <p>
              The low-fidelity prototype was made as a paper prototype and used
              to explore the app’s structure quickly and begin early user
              testing. It was created from paper phone screens showing what
              appeared when different feature buttons were pressed, with the
              point being to get a rough sense of what the application might
              look like, and identify areas that needed improvement before going
              further.
            </p>

            <DocImage
              src={lofiPrototype}
              alt="Low-fidelity paper prototype with home, welcome, chat, music, and performance screens hand-drawn"
              caption="Low-fidelity paper prototype with six hand-drawn screens covering home, welcome, chat, music, performance, and the supporting actions students could take."
            />

            <p>
              The medium-fidelity prototype marked the point where the project
              moved from early concepts into a more structured and coherent
              design. After further group brainstorming, the layout, features,
              and direction were developed in greater detail, and Figma was used
              as the main collaborative prototyping tool. The LearnBetter name
              and logo were developed from our group sketches and storyboards,
              the Education Videos feature was carried forward from my own
              concept work, and the group learning feature was informed by my
              collaborator’s ideas. Feature labels were also refined for clarity
              including renaming <em>Support</em> to <em>Settings</em> and{" "}
              <em>Lock/Restrict App on Device</em> to <em>Focus</em>.
            </p>

            <DocImage
              src={hifiOverview}
              alt="High-fidelity Figma overview board showing the full LearnBetter app structure across many connected mobile screens"
              caption="High-fidelity Figma overview showing the refined app structure, connecting modules, performance, education videos, chat, group learning, music, focus, and settings into one system."
            />
          </CaseStudySection>

          {/* User testing */}
          <CaseStudySection title="User testing and iteration">
            <p>
              I wrote the user testing protocols for both the low-fidelity and
              high-fidelity prototypes. Rather than testing informally, I
              designed structured task flows so each participant completed the
              same interactions in the same order, making the findings more
              consistent and comparable. For the low-fidelity paper prototype,
              this focused on three key tasks, including users engaging with the
              music feature, starting a one-to-one chat, and checking academic
              progress for a specific module. For the high-fidelity prototype, I
              expanded the protocol to six flows: account creation and settings,
              educational content by module, distraction limiting, performance
              tracking and contacting the module head, music, and peer
              communication. I also created a ten-question post-test
              questionnaire to gather qualitative feedback on clarity,
              efficiency, missing functionality, visual support, and redundancy.
            </p>
            <p>
              I also ran and documented the high-fidelity testing sessions
              myself, using structured notes for each feature. I tracked what
              participants completed successfully, where they hesitated, and
              what they explicitly identified as a friction point. From this, I
              developed a set of targeted improvements for each feature. These
              included a shorter sign-up flow and an in-app tutorial for account
              settings (Feature 1), clearer guidance on module selection
              (Feature 2), more customisation options for the distraction
              limiter (Feature 3), and more detailed module-level feedback in
              the performance view (Feature 4). These improvements were
              grounded directly in user behaviour and participant feedback, and
              they fed straight into the next iteration of the prototype rather
              than remaining as general observations.
            </p>
            <p>
              <strong>Low-fidelity Testing:</strong> The participants could
              complete the tasks successfully and understood what each button
              was meant to do, but three areas still needed improvement: the
              performance feature needed to be more individualised by module and
              provide more information; the feature name “Lock/Restrict app on
              device” was too long and wordy; and the chat feature needed a
              screen where users could choose whom to communicate with. Even in
              the rough version the structure was broadly understandable, but
              content and feature clarity still needed development. With the
              help of my sketches and storyboards, this fed directly into the
              plan for the medium-fidelity prototype.
            </p>
            <p>
              <strong>Medium / High-Fidelity testing.</strong> The participants
              liked the general design and colour scheme and found the app easy
              to navigate overall. The post-test questionnaire confirmed the
              interface read as intuitive, the button styling and iconography
              supported wayfinding, and no features were perceived as redundant.
              Specific issues did still surface: the path to account settings
              was not clear, the profile picture did not look clickable enough,
              the shortcuts were not visible enough to be used, and some
              features (especially module information such as lecture videos and
              slides) were too hard to reach quickly. The participants also
              suggested a personalisation step for choosing an academic
              institution.
            </p>
            <p>
              Those findings led directly into the high-fidelity refinements.
              The account settings path was improved by making the profile area
              more obviously interactive, shortcut visibility was improved, and
              a direct module button was added on the home screen to make module
              information easier to reach. The application therefore became more
              usable through testing in iterations.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <SmallDocImage
                src={userTest1}
                alt="User testing session with participant navigating the People/chat screen"
                caption="Session 1 with participant navigating the People/chat screen."
              />
              <SmallDocImage
                src={userTest2}
                alt="User testing session with participant exploring the Modules screen"
                caption="Session 2 with participant exploring the Modules screen."
              />
              <SmallDocImage
                src={userTest3}
                alt="User testing session with participant using the redesigned home screen with clearer shortcuts"
                caption="Session 2 with participant using the redesigned home screen with clearer shortcuts."
              />
            </div>
          </CaseStudySection>

          {/* Final prototype */}
          <CaseStudySection title="Final prototype">
            <p>
              The final high-fidelity prototype brought the different strands of
              the project together into a more polished and complete concept. By
              this stage, LearnBetter had become a broader student e-learning
              companion. The prototype included key academic features such as
              modules, lectures, performance tracking, educational videos, class
              forums, lecturer contact, and live group learning, alongside
              support features such as focus tools, music, chat, AI chat,
              settings, profile, and help and support.
            </p>
            <p>
              Across the screens, the application was trying to address several
              connected parts of remote study at the same time. The progress
              screens made workload and performance easier to track. The lecture
              and educational video screens improved access to learning
              materials. Chat, forum, and group study features supported
              communication, collaboration, and academic help. The music and
              focus tools were aimed at concentration, while the settings and
              help sections added support and customisation.
            </p>

            <DocImage
              src={hifiOnboarding}
              alt="High-fidelity LearnBetter onboarding flow showing splash, sign in, and sign up screens"
              caption="Onboarding flow showing splash, sign in, and sign up screens establishing the LearnBetter identity and student account setup."
            />

            <DocImage
              src={hifiModule}
              alt="High-fidelity module navigation screens from module grid to module page, lecturer contact, class forum, lecture list, and chat threads"
              caption="Screens showing the navigation flow from the module grid to a module page, and then into lecturer contact, the class forum, the lecture list, and individual forum and chat threads."
            />

            <DocImage
              src={hifiProgress}
              alt="High-fidelity Performance and Module Progress screens with study hours, lectures watched, assignments completed, and per-module progress"
              caption="Performance and Progress built directly from my early sketch work, surfacing study hours, lectures watched, assignments completed, and per-module progress."
            />

            <DocImage
              src={hifiEducationVideos}
              alt="High-fidelity Education Videos screens showing modules, topics, and lesson screens with Help and Progress shortcuts"
              caption="Education Videos also carried forward from my sketches: students browse modules, drill into topics, and watch lessons with Help and Progress always one tap away."
            />

            <DocImage
              src={hifiPeopleMessages}
              alt="High-fidelity People, Messages, and class forum screens"
              caption="People, Messages, and class forum making it easier for students to reach lecturers, TAs, and peers without switching apps."
            />

            <DocImage
              src={hifiAiChat}
              alt="High-fidelity Ask Me Anything AI chat screen alongside lecturer and class forum chats"
              caption="Ask Me Anything is an AI study assistant for quick definitional questions, sitting alongside the lecturer and class forum chats."
            />

            <DocImage
              src={hifiStudyLive}
              alt="High-fidelity Study Live screens showing group study rooms"
              caption="Study Live showcases live group study rooms designed to recreate the social structure of in-person study and reduce the isolation of remote learning."
            />

            <DocImage
              src={hifiEntertainment}
              alt="High-fidelity Entertainment screen showing recommended study music"
              caption="Entertainment section showcases focus and study music to support concentration during longer remote study sessions."
            />

            <DocImage
              src={hifiFocus}
              alt="High-fidelity Focus Mode screens showing app limits, study schedule, activation control, and confirmation state"
              caption="Focus Mode section shows how students set limits and a study schedule to block distractions, with a slide-to-activate control and a clear confirmation state."
            />

            <DocImage
              src={hifiHelpCenter}
              alt="High-fidelity Help Center screens showing searchable support, popular articles, account and privacy topics, troubleshooting, safety, and community guidelines"
              caption="Help Center showing searchable support with popular articles, account and privacy topics, troubleshooting, safety, and community guidelines."
            />
          </CaseStudySection>

          {/* Reflection */}
          <CaseStudySection title="Reflection">
            <p>
              LearnBetter was valuable because it showed how a broad student
              problem can be shaped into a more structured product through
              collaborative design. The project started with a common
              frustration, which is students struggling with remote learning,
              but became much stronger once our group defined more precisely
              what that meant: distraction, weak boundaries, difficulty tracking
              work, and difficulty staying motivated.
            </p>
            <p>
              For me, one of the strongest lessons was the importance of the
              early concept stage. A lot of the most useful design work happened{" "}
              <em>before</em> the polished prototype existed. This included
              identifying the right problem, writing HMW questions that helped
              open up stronger design directions, building personas that
              reflected realistic student pressures, and creating features with
              a clear purpose, based on identified user needs, rather than
              adding screens without a strong reason. This therefore taught me
              that <em>strong</em> UX work is often <em>decided</em> much
              earlier than the final UI.
            </p>
            <p>
              The project also reinforced how important <em>structure</em> is
              in educational UX. Students require more than access to learning
              materials. They also require support to manage their work,
              understand their progress, get help when needed, and stay focused
              while studying remotely. My contributions around progress
              tracking, educational support, and study structure grew directly
              from that way of thinking, and it remains one of the clearest
              lessons I would carry into future projects.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Project Links">
            <div className="flex flex-wrap gap-3 not-prose">
              <a
                href="https://drive.google.com/file/d/1IsQ7xpy9nJJbuQrM3S4M1fcnfo-HFXH3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Official Report
              </a>
              <a
                href="https://www.figma.com/design/341EgzaSujfL9woXsG4VdH/LearnBetter?node-id=0-1&p=f&t=XvsJTVhqb2cfIoJV-0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                Figma
              </a>
            </div>
          </CaseStudySection>

          <div className="section-divider mt-10 pt-6 flex justify-between text-sm">
            <Link
              to="/projects/mould-man"
              className="font-medium hover:text-accent transition-colors"
            >
              ← Previous: MouldMan
            </Link>
            <Link
              to="/projects"
              className="font-medium hover:text-accent transition-colors"
            >
              All projects →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default ProjectThree;
