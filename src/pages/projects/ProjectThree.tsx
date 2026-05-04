import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";
import ImagePlaceholder from "@/components/ImagePlaceholder";

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

const ProjectThree = () => {
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

          <p className="project-tag mb-3">Group Project · UX Research · Interaction Design</p>
          <h1 className="mb-5">LearnBetter</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Designing a student e-learning companion to support focus,
            organisation, and connection in remote learning.
          </p>

          <ProjectMeta
            items={[
              { label: "Role", value: "UX Research · Concept · Sketching (group of 4)" },
              { label: "Year", value: "2022 — First Year" },
              { label: "Domain", value: "Education · Remote Learning" },
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
              LearnBetter was a group design project undertaken in a group of
              four in my first year of college that explored how a mobile app
              could support students who are studying remotely. The project was
              based on a familiar problem: when students learn from home, it
              becomes easier to lose structure in the day, easier to get
              distracted, and harder to feel motivated or connected to others.
              Instead of relying on separate tools for lectures, communication,
              productivity, and support, LearnBetter aimed to bring these needs
              together into one system.
            </p>
            <p>
              The final concept was a student e-learning companion that included
              module access, lecture materials, performance tracking, chat, live
              group learning, focus tools, music, settings, and help resources.
              The goal was not just to let students access course content, but
              to create a more supportive study environment around it — helping
              students stay on top of work, stay concentrated while studying
              remotely, and feel less isolated in the process.
            </p>
            <p>
              This was a group project, so the final prototype was shared work.
              My own contribution was strongest in the earlier UX and concept
              stages — particularly around problem framing, HMW thinking,
              personas, sketches, storyboard work, and feature ideas related to
              progress tracking, educational support, and keeping students on
              task. Several of those ideas carried through into the final
              prototype, especially the Progress feature, the Education Videos
              feature, and part of the Help/Support direction.
            </p>
          </CaseStudySection>

          {/* Design context */}
          <CaseStudySection title="Design Context / Problem">
            <p>
              The project began with the recognition that remote study often
              lacks the structure students get more naturally in physical
              learning environments. In-person learning creates boundaries: a
              place to go, a lecture to attend, and a clearer distinction
              between study time and everything else. Remote learning removes a
              lot of that structure, which means students often end up studying
              in the same space where they relax, use social media, or deal with
              other responsibilities.
            </p>
            <p>
              As a group, we explored those problems and shaped them into a
              shared problem statement: students often get distracted when
              studying remotely because they do not have an authority figure
              supervising them and have no physical boundaries between study
              time and off time, which makes it difficult to stay motivated and
              concentrated. The goal and KPI we defined centred on creating an
              app that helps students stay focused while eliminating
              distractions.
            </p>
            <p>That framing gave the project a much clearer foundation. Rather than designing a vague “student app,” the team was designing around specific needs: helping students keep track of coursework, reducing distraction, supporting concentration, making academic help easier to access, and creating a more productive remote-learning experience overall.</p>

            <DocImage
              src={brainstormingProblem}
              alt="Brainstorming mural showing problem areas around distraction, motivation, and remote study"
              caption="Problem brainstorming — each group member mapped issues students face in remote study, from distraction and isolation to weak time management and poor connectivity."
            />
            <DocImage
              src={affinityCluster}
              alt="Affinity cluster grouping ideas under Type, Accessibility, Activities, Issues, and Appearance"
              caption="Affinity cluster — grouping the brainstormed ideas into themes such as accessibility, activities, and the underlying issues the product would need to solve."
            />
          </CaseStudySection>

          {/* My role */}
          <CaseStudySection title="My Role">
            <p>
              Because this was a group project, I want to be accurate about my
              role. My contribution was strongest in the <strong>define</strong>{" "}
              and <strong>early concept</strong> stages, where I helped shape
              how the problem was understood and what kinds of features the
              product should include. Specifically, I contributed to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Early brainstorming and problem framing around keeping students on task.</li>
              <li>The HMW stage — writing questions focused on engagement, accessibility, targeted support, feedback, active participation, and easier access to the virtual learning environment.</li>
              <li>Persona development, especially personas centred on time management, study organisation, procrastination, stress, and balancing study with other commitments.</li>
              <li>Sketching early app ideas, including progress tracking, education video access, and dashboard layouts.</li>
              <li>Storyboard work focused on study structure, completed work, remaining work, and reducing procrastination.</li>
            </ul>
            <p>
              These ideas were not left at the rough concept stage. My early
              sketches directly informed the next stages of development: the{" "}
              <strong>Progress</strong> feature and{" "}
              <strong>Education Video</strong> feature were both carried forward
              from my concepts, and elements of my Help feature helped shape the
              Support feature in the medium-fidelity prototype. The direction
              for the medium-fidelity prototype was developed from my sketches
              and storyboards following the first round of testing.
            </p>
          </CaseStudySection>

          {/* Discover */}
          <CaseStudySection title="Discover — understanding the real issue behind remote study">
            <p>
              The first stage focused on understanding what students actually
              struggle with in remote learning. We used brainstorming and
              affinity clustering to get beyond a surface-level idea of “online
              learning is hard” and identify what specifically was making it
              difficult. The group used a Mural board to document both the
              problems and the kinds of features the prototype might need.
            </p>
            <p>
              The problem was not simply that students needed access to content
              — it was that remote learning made it harder to concentrate, harder
              to stay motivated, and harder to keep track of work. My role in
              this stage was mainly around the “staying on task” side of the
              problem: my affinity cluster focused on ways to ensure students in
              virtual learning could be effectively kept on task with their
              studies. That focus later fed into my HMW questions, storyboard,
              and progress-related ideas.
            </p>

            <DocImage
              src={brainstormingSolution}
              alt="Solution brainstorming board with proposed features grouped by team member"
              caption="Solution brainstorming — moving from problem space into possible features, including focus tools, interactive learning, mental health support, and time-management aids."
            />
          </CaseStudySection>

          {/* Define */}
          <CaseStudySection title="Define — making the problem more solvable">
            <p>
              <strong>Personas.</strong> The group used personas to create more
              realistic user scenarios and avoid designing in a generic way. My
              persona work focused especially on students dealing with social
              anxiety, time management, study organisation, procrastination, and
              stress. <em>Sarah</em> centred on social anxiety, time management,
              and study organisation, with needs such as connecting with peers
              without feeling intimidated, tracking coursework, and having a
              flexible learning environment. <em>Michael</em> focused on time
              management, procrastination, stress, realistic study planning,
              and tools to help students stay on track and motivated while
              balancing academic and work responsibilities.
            </p>
            <p>
              <strong>HMW questions.</strong> The HMW exercise turned the broad
              challenge into clearer design opportunities. My own HMW questions
              focused on making virtual learning more interactive and engaging,
              making the platform simple to navigate, providing targeted support
              and resources, improving accessibility, rewarding students for
              staying on task, providing meaningful educational feedback,
              encouraging active participation, and making learning easier to
              access and more enjoyable.
            </p>
            <p>
              That stage matters because it shows the project was not only
              driven by visual ideas — it was being driven by a set of design
              questions about usability, support, motivation, and student
              engagement.
            </p>

            <DocImage
              src={hmwStatements}
              alt="My HMW (How Might We) statements list — twelve questions covering engagement, accessibility, support, feedback, and active participation"
              caption="My HMW statements — translating the problem into clear design opportunities around engagement, accessibility, targeted support, feedback, and keeping students on task."
            />
          </CaseStudySection>

          {/* Sketches & storyboards */}
          <CaseStudySection title="Exploring ideas through sketches and storyboards">
            <p>
              Once the problem had been defined more clearly, the project moved
              into sketching and storyboarding. My sketch contribution included
              interface ideas for a progress feature where students could see
              how much time they had spent studying and how many lectures and
              assignments they had completed, a possible lecture interface, home
              page layouts, and other directions such as a study clock and
              wearable-device ideas. I also sketched a dashboard page, a
              microphone idea for quick study-related questions, and a motion
              detector concept to prevent students from getting up and getting
              distracted.
            </p>
            <p>
              Even though not every idea made it into the final app, this stage
              defined what kind of learning companion LearnBetter could become.
              The Education Video feature and the Progress feature were taken
              from my sketch work, and a combination of my collaborator’s
              Support feature and my Help feature was also included.
            </p>
            <p>
              Storyboards developed the ideas further by showing how the app
              might work in realistic situations. My storyboard followed a
              student completing a quiz, receiving a notification that work had
              been completed, seeing the remaining work still left to do, and
              then receiving a 45-minute study break after everything was
              finished — intended to create structure in the student’s study
              routine and prevent procrastination.
            </p>

            <DocImage
              src={sketchDashboard}
              alt="Hand-drawn sketch of LearnGenie loading screen and dashboard concept with Progress, Education Videos, Entertainment, Help, and Weekly Goal"
              caption="Early sketch — my dashboard concept showing Progress, Education Videos, Entertainment, Help, and Weekly Goal. Several of these ideas (Progress, Education Videos, Help) carried directly into the final app."
            />

            <DocImage
              src={storyboard}
              alt="Six-panel hand-drawn storyboard following a student using StudyGenie to complete lessons and unlock a 45-minute break"
              caption="My storyboard — a student moves from distraction, to receiving a notification, to using the dashboard's Progress and Education Video features, and finally unlocking a 45-minute break after completing all lessons."
            />
          </CaseStudySection>

          {/* Concept to prototype */}
          <CaseStudySection title="From concept to prototype">
            <p>
              The low-fidelity prototype was made as a paper prototype and used
              to explore the app structure quickly and begin early user testing.
              It was created from paper phone screens showing what appeared when
              different feature buttons were pressed — the point being to get a
              rough sense of what the app might look like and identify areas
              that needed improvement before going further.
            </p>

            <DocImage
              src={lofiPrototype}
              alt="Low-fidelity paper prototype with home, welcome, chat, music, and performance screens hand-drawn"
              caption="Low-fidelity paper prototype — six hand-drawn screens covering home, welcome, chat, music, performance, and the supporting actions students could take."
            />

            <p>
              The medium-fidelity prototype marked the point where the project
              moved from early concepts into a more structured and coherent
              design. After further group brainstorming, the layout, features,
              and direction were developed in greater detail, with Figma used
              as the main collaborative prototyping tool. The LearnBetter name
              and logo were developed from our group sketches and storyboards,
              the Education Videos feature was carried forward from my own
              concept work, and the group learning feature was informed by my
              collaborator’s ideas. Feature labels were also refined for
              clarity — including renaming <em>Support</em> to{" "}
              <em>Settings</em> and <em>Lock/Restrict App on Device</em> to{" "}
              <em>Focus</em>.
            </p>

            <DocImage
              src={hifiOverview}
              alt="High-fidelity Figma overview board showing the full LearnBetter app structure across many connected mobile screens"
              caption="High-fidelity Figma overview — the refined app structure connecting modules, performance, education videos, chat, group learning, music, focus, and settings into one system."
            />
          </CaseStudySection>

          {/* User testing */}
          <CaseStudySection title="User testing and iteration">
            <p>
              <strong>Low-fidelity testing.</strong> The participant could
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
              <strong>Medium-fidelity testing.</strong> The participant liked
              the general design and colour scheme and found the app easy to
              navigate overall, but several specific problems appeared: the path
              to account settings was not clear, the profile picture did not
              look clickable enough, the shortcuts were not visible enough to be
              used, and some features (especially module information such as
              lecture videos and slides) were too hard to reach quickly.
            </p>
            <p>
              Those findings led directly into the high-fidelity refinements.
              The account settings path was improved by making the profile area
              more obviously interactive, shortcut visibility was improved, and
              a direct module button was added on the home screen to make
              module information easier to reach. The app did not just become
              more polished visually — it became more usable through iteration.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <DocImage
                src={userTest1}
                alt="User testing session — participant interacting with the People screen on an iPhone prototype"
                caption="Session 1 — participant navigating the People/chat screen."
              />
              <DocImage
                src={userTest2}
                alt="User testing session — participant tapping the Modules screen showing module list and mascot"
                caption="Session 2 — participant exploring the Modules screen."
              />
              <DocImage
                src={userTest3}
                alt="User testing session — participant using the home screen with Performance, Education Videos, Chat, and Focus shortcuts"
                caption="Session 2 — participant using the redesigned home screen with clearer shortcuts."
              />
            </div>
          </CaseStudySection>

          {/* Final prototype */}
          <CaseStudySection title="Final prototype">
            <p>
              The final high-fidelity version brought the different strands of
              the project together into a more polished mobile app concept. At
              this stage, LearnBetter functioned as a broader student e-learning
              companion rather than just a lectures app — covering sign in / sign
              up, dashboard, modules and lectures, performance tracking,
              education videos, chat, AI chat, class forum and lecturer contact,
              live group learning, focus tools, music, settings/profile, and
              help and support.
            </p>
            <p>
              Looking across the screens, the app was clearly trying to solve
              several connected parts of remote study at once. Progress screens
              made workload and performance more visible. Lecture and education
              video screens gave easier access to learning materials. Chat,
              forum, and group study screens addressed connection and academic
              help. Music and focus sections supported concentration. Settings
              and help added another layer of support and customisation. This is
              where the project became strongest as a concept: it did not only
              say “here is course material” — it tried to support the wider
              remote-learning experience around that material.
            </p>

            <DocImage
              src={hifiOnboarding}
              alt="High-fidelity LearnBetter onboarding flow — splash screen with graduation cap logo, sign in screen, and sign up form with university field"
              caption="Onboarding flow — splash, sign in, and sign up screens establishing the LearnBetter identity and student account setup."
            />
            <DocImage
              src={hifiModule}
              alt="High-fidelity module screens — My Module grid, CS4052 module page with class forum and lectures, and class forum chat threads"
              caption="Module navigation — students move from a module grid, into a module page with the lecturer, class forum, and lecture list, and into the forum and chat threads themselves."
            />
            <DocImage
              src={hifiProgress}
              alt="High-fidelity Performance and Module Progress screens with weekly study graph, lectures and assignments completed, and per-module breakdown"
              caption="Performance and Progress — built directly from my early sketch work, surfacing study hours, lectures watched, assignments completed, and per-module progress."
            />
            <DocImage
              src={hifiEducationVideos}
              alt="High-fidelity Education Videos screens — module list, topic list for CS4082, and an HTML video lesson with Help and Progress shortcuts"
              caption="Education Videos — also carried forward from my sketches: students browse modules, drill into topics, and watch lessons with Help and Progress always one tap away."
            />
            <DocImage
              src={hifiPeopleMessages}
              alt="High-fidelity People, Messages, and class forum chat screens with lecturer, teaching assistant, and class list contacts"
              caption="People, Messages, and class forum — making it easier for students to reach lecturers, TAs, and peers without switching apps."
            />
            <DocImage
              src={hifiAiChat}
              alt="High-fidelity Ask Me Anything AI chat screen with example questions, plus lecturer and class forum conversation screens"
              caption="Ask Me Anything — an AI study assistant for quick definitional questions, sitting alongside the lecturer and class forum chats."
            />
            <DocImage
              src={hifiStudyLive}
              alt="High-fidelity Study Live screens — live group study room landing page and a list of public and private study rooms to join"
              caption="Study Live — live group study rooms designed to recreate the social structure of in-person study and reduce the isolation of remote learning."
            />
            <DocImage
              src={hifiEntertainment}
              alt="High-fidelity Entertainment screen — recommended study music, new songs and albums, and a song list with a music player"
              caption="Entertainment — focus and study music to support concentration during longer remote study sessions."
            />
            <DocImage
              src={hifiFocus}
              alt="High-fidelity Focus Mode screens — set app limits for SnapCharlie, YouTube, and Netflix, schedule a focus window, and a confirmation state"
              caption="Focus Mode — students set app limits and a study schedule to block distractions, with a slide-to-activate control and a clear confirmation state."
            />
            <DocImage
              src={hifiHelpCenter}
              alt="High-fidelity Help Center screens — search, popular articles, topic categories, and Help & Support links"
              caption="Help Center — searchable support with popular articles, account and privacy topics, troubleshooting, safety, and community guidelines."
            />
          </CaseStudySection>

          {/* Reflection */}
          <CaseStudySection title="Reflection">
            <p>
              LearnBetter was valuable because it showed how a broad student
              problem can be shaped into a more structured product through
              collaborative design. The project started with a common
              frustration — students struggling with remote learning — but
              became much stronger once the team defined more precisely what
              that meant: distraction, weak boundaries, difficulty tracking
              work, and difficulty staying motivated.
            </p>
            <p>
              For me, one of the strongest lessons was the importance of the
              early concept stage. A lot of the most useful design work happened
              before the polished prototype existed: identifying the right
              problem, writing HMW questions that opened up better directions,
              building personas that reflected realistic student pressures, and
              sketching features that solved specific issues rather than just
              filling out an app. That stage taught me that strong UX work is
              often decided much earlier than the final UI.
            </p>
            <p>
              The project also reinforced how important structure is in
              educational UX. Students do not only need content. They need help
              staying on top of work, understanding their progress, knowing
              where to get support, and maintaining momentum in environments
              where distractions are everywhere. My own contributions to
              progress tracking, educational support, and study structure came
              directly out of that way of thinking, and that remains one of the
              clearest takeaways I would carry into future projects.
            </p>
            <p>
              Finally, this project was a good reminder of how to present group
              work honestly. The final prototype was shared work, but the
              process still included clear individual contributions that shaped
              its direction. For portfolio purposes, that matters: the work
              should be represented accurately — not understated, but not
              overclaimed either.
            </p>
          </CaseStudySection>

          <div className="section-divider mt-10 pt-6 flex justify-between text-sm">
            <Link to="/projects/mould-man" className="font-medium hover:text-accent transition-colors">
              ← Previous: Mould Man
            </Link>
            <Link to="/projects" className="font-medium hover:text-accent transition-colors">
              All projects →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default ProjectThree;
