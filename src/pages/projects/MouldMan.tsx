import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";

import mouldmanHero from "@/assets/mouldman-hero-devices.png";
import personaRachel from "@/assets/mouldman-persona-rachel.png";
import servicesPage from "@/assets/mouldman-services-page.png";
import informationPage from "@/assets/mouldman-information-page.png";
import usabilityTask1 from "@/assets/mouldman-usability-task1.png";
import journeyMark from "@/assets/mouldman-journey-mark.png";
import storyboardSarah from "@/assets/mouldman-storyboard-sarah.png";
import siteFlow from "@/assets/mouldman-site-flow.png";
import wireframes from "@/assets/mouldman-wireframes.png";
import testimonials from "@/assets/mouldman-testimonials.png";
import bookingForm from "@/assets/mouldman-booking-form.png";
import mobileHomeAbout from "@/assets/mouldman-mobile-home-about.png";
import mobileInformation from "@/assets/mouldman-mobile-information.png";

interface DocImageProps {
  src: string;
  alt: string;
  caption: string;
}

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

const MouldMan = () => {
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

          <h1 className="mb-5">MouldMan</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A research-led UX project for an Irish mould-remediation service,
            translating real customer anxieties into an information architecture
            that builds trust and makes contact effortless.
          </p>

          <ProjectMeta
            items={[
              {
                label: "Role",
                value: "UX Designer & Lead Visual/Prototype Implementer (group of 4)",
              },
              { label: "Duration", value: "Jan 2026 – May 2026" },
              {
                label: "Module",
                value: "CS4088 — User Experience in Practice",
              },
              { label: "Tools", value: "Figma" },
            ]}
          />

          <figure className="my-8">
            <div className="rounded-md overflow-hidden border border-border bg-secondary/40">
              <img
                src={mouldmanHero}
                alt="MouldMan — final responsive website shown on laptop and mobile"
                className="w-full h-auto object-contain"
                width={1600}
                height={900}
              />
            </div>
          </figure>

          <CaseStudySection title="Overview">
            <p>
              Mould Man is a real Irish mould-remediation service run by a
              client we partnered with in a final year module. Our objective was
              to design a website that not only presents the company’s services
              clearly, but also builds trust with customers who may be dealing
              with health concerns, property damage, or disputes with landlords.
            </p>
            <p>
              The project ran across two assignments: a Requirements Gathering
              phase grounded in thematic analysis of real customer reviews, and
              a Design Specification phase that produced a fully accessible
              interactive prototype tested with users.
            </p>
            <p>
              Within a group of four, I contributed to the thematic analysis,
              persona development, information architecture, and usability
              testing synthesis. Beyond that shared work, I was solely
              responsible for implementing the visual design of the website in
              Figma, building out the full high-fidelity prototype, establishing
              the type scale, colour system, component library, spacing, and
              interaction states, and translating the group’s wireframes and
              Information Architecture (IA) decisions into the final clickable
              interface that was tested with users and delivered to the client.
            </p>
          </CaseStudySection>

          <CaseStudySection title="User Research — What Customers Actually Want">
            <p>
              Mould growth is a stressful problem to deal with. By the time
              someone is looking for a remediation service, they are often
              already worried about their health, their home, or a dispute with
              a landlord or tenant. That meant the project had to begin with
              understanding those concerns properly before moving into design.
            </p>
            <p>
              We carried out a structured thematic analysis of real customer
              reviews from Irish and international mould-removal services,
              alongside a small number of stakeholder interviews with our
              client. Reviews were coded line by line, grouped into recurring
              patterns, and refined through a group discussion until four clear
              themes consistently emerged across the dataset. We also kept a
              direct link between each theme and the original quotes it was
              based on. This became important later, because if the group
              disagreed on how the website should present information or what
              language it should use, we could go back to the review data and
              justify the decision.
            </p>
            <p>
              The four themes below were the clearest outcomes of that process,
              and each one informed specific decisions in the final structure,
              wording, or interaction design of the website.
            </p>

            <div className="mt-6 divide-y divide-border border-y border-border">
              <div className="py-5">
                <p className="project-tag mb-1">Theme 1</p>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Root-cause resolution &amp; diagnostic communication
                </h3>
                <p className="text-sm">
                  Customers <em>do not</em> want surface cleaning; they want a
                  service who diagnoses <em>why</em> the mould is there and
                  explains it in plain language.
                </p>
                <p className="text-sm mt-2 text-foreground">
                  <strong>➜ Design response:</strong> a Services page that
                  leads with diagnosis and process rather than price, and a
                  Booking flow that frames every job as starting with a
                  professional survey.
                </p>
              </div>

              <div className="py-5">
                <p className="project-tag mb-1">Theme 2</p>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Health risks, safety anxiety &amp; the need for reassurance
                </h3>
                <p className="text-sm">
                  Many reviews reflected worry about health, especially when
                  children, asthma, or older relatives were involved. That made
                  trust and credibility essential before users would feel
                  confident making contact.
                </p>
                <p className="text-sm mt-2 text-foreground">
                  <strong>➜ Design response:</strong> testimonials and
                  before/after evidence on the homepage, a calm navy palette,
                  and reassurance copy alongside the booking form rather than
                  hard sales language.
                </p>
              </div>

              <div className="py-5">
                <p className="project-tag mb-1">Theme 3</p>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Responsiveness &amp; ease of contact
                </h3>
                <p className="text-sm">
                  Slow replies and hidden contact details were the most common
                  complaint. Speed and visibility of contact matter more than
                  polish.
                </p>
                <p className="text-sm mt-2 text-foreground">
                  <strong>➜ Design response:</strong> phone number anchored in
                  the top bar on every page, a persistent “urgent help” card,
                  and a single, unmissable primary CTA (“Book A Survey”).
                </p>
              </div>

              <div className="py-5">
                <p className="project-tag mb-1">Theme 4</p>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Educational &amp; informative content
                </h3>
                <p className="text-sm">
                  Customers valued websites that clearly explained the causes of
                  mould, how to prevent it, and what to expect from the service.
                </p>
                <p className="text-sm mt-2 text-foreground">
                  <strong>➜ Design response:</strong> A dedicated top-level
                  Information Hub was treated as a central part of the
                  information architecture, with articles on causes, prevention,
                  and health. It was designed to give renters useful supporting
                  information, while also reassuring homeowners by clearly
                  explaining the problem.
                </p>
              </div>
            </div>

            <p className="mt-6">
              These four themes became the foundation of the project. From that
              point on, decisions about the site structure, page content, and
              reassuring language were shaped by them.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Personas — Three Very Different Customers">
            <p>
              The themes revealed three clear user types, and these became the
              basis for our personas. Each one was grounded in recurring
              concerns, behaviours, and needs found in the customer reviews.
            </p>

            <div className="mt-6 space-y-6">
              <div className="border border-border rounded-md p-6 bg-card">
                <p className="project-tag mb-1">Persona 1</p>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Sarah O’Brien — The Concerned Homeowner
                </h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  “I just want to know my home is safe for my kids.”
                </p>
                <p className="text-sm">
                  A young mother dealing with visible mould in a family home.
                  Anxious about her children’s health, wants long-term
                  prevention rather than a quick fix, and needs reassurance
                  before she will fill out a form.
                </p>
              </div>

              <div className="border border-border rounded-md p-6 bg-card">
                <p className="project-tag mb-1">Persona 2</p>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Mark Flynn — The Busy Landlord / Property Manager
                </h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  “I need it done properly the first time.”
                </p>
                <p className="text-sm">
                  Manages multiple rental properties. Driven by efficiency,
                  compliance, and avoiding repeat callouts. Wants speed, clear
                  scope, and a professional service he can rely on between
                  tenancies.
                </p>
              </div>

              <div className="border border-border rounded-md p-6 bg-card">
                <p className="project-tag mb-1">Persona 3</p>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Rachel O’Connor — The Health-Conscious Renter
                </h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  “I need proof that this is a real health issue.”
                </p>
                <p className="text-sm">
                  A renter using the site as evidence in a dispute with her
                  landlord. Needs downloadable information, clear explanations
                  of causes vs. surface mould, and authoritative educational
                  content she can cite.
                </p>
              </div>
            </div>

            <DocImage
              src={personaRachel}
              alt="Persona sheet for Rachel O’Connor — the Health-Conscious Renter"
              caption="Example persona sheet — Rachel O'Connor (representative of the format used for all three personas)."
            />
          </CaseStudySection>

          <CaseStudySection title="Customer Journey Maps &amp; Storyboards">
            <p>
              For each persona, we mapped the full journey from first noticing a
              mould problem, to searching for help online, comparing services,
              and deciding whether to make contact. The pain points and needs
              identified at each stage directly informed the structure of the
              site and the content included on its pages.
            </p>

            <DocImage
              src={journeyMark}
              alt="Customer journey map for Mark Flynn, the busy landlord"
              caption="Customer journey map for Mark Flynn (Busy Landlord): awareness → consideration → decision → service → loyalty."
            />

            <div className="mt-8">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Storyboards
              </h3>
              <p>
                Storyboards turned each journey into a concrete user scenario.
                They helped us show how each persona would arrive at the
                MouldMan website, what they would need to see, and what would
                encourage them to make contact.
              </p>
            </div>

            <DocImage
              src={storyboardSarah}
              alt="Storyboard showing Sarah’s emergency mould scenario from discovery to inspection"
              caption="Storyboard showing the persona Sarah's scenario: discovering mould, searching online, finding MouldMan, booking, and the technician's visit."
            />
          </CaseStudySection>

          <CaseStudySection title="Site Flows &amp; Wireframes">
            <p>
              From the personas and journeys we defined the site’s backbone:{" "}
              <strong>Home</strong>, <strong>Services</strong>,{" "}
              <strong>About</strong>, an <strong>Information</strong> hub, a{" "}
              <strong>Booking &amp; Feedback</strong> page, and persistent{" "}
              <strong>Contact</strong> entry points. Every top-level page exists
              because it answers something at least one persona actively needs.
            </p>

            <DocImage
              src={siteFlow}
              alt="Site flow diagram showing primary navigation paths through the MouldMan website"
              caption="Site flow diagram mapping how each persona moves from the top-level pages (Home, About, Services, Information, Book) into key actions such as booking an inspection, submitting contact details, reading information, and reaching the feedback page."
            />

            <div className="mt-6 divide-y divide-border border-y border-border">
              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Home
                </h3>
                <p className="text-sm">
                  Trust signals up front showing reviews, credentials, and a
                  clear primary CTA. Designed for both passive scanners and
                  active researchers.
                </p>
              </div>

              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Services
                </h3>
                <p className="text-sm">
                  Clear scope of work, the difference between surface and root
                  treatment, and what a customer can expect on the day.
                </p>
              </div>

              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  About
                </h3>
                <p className="text-sm">
                  The service’s background and credentials; important for Sarah
                  and Rachel, who both need to feel they are dealing with a
                  credible expert.
                </p>
              </div>

              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Information
                </h3>
                <p className="text-sm">
                  Educational hub: causes of mould, prevention, health
                  considerations, FAQs. Establishes authority before any sales
                  conversation begins.
                </p>
              </div>

              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Booking &amp; Feedback
                </h3>
                <p className="text-sm">
                  Inspection booking form designed with reassuring supporting
                  text, clear field labels, and a distinct confirmation screen
                  so users knew their request had been submitted successfully.
                </p>
              </div>

              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Contact
                </h3>
                <p className="text-sm">
                  Phone, email, and booking options were repeated across key
                  pages so that contact was always quick and easy to access.
                </p>
              </div>
            </div>

            <DocImage
              src={wireframes}
              alt="Wireframes for the MouldMan website — Home, About, Services, Booking, and Information pages"
              caption="Early wireframes showing Home, About, Services, Booking, and Information pages laid out side-by-side, showing layout structure, content hierarchy, and shared components across the site."
            />
          </CaseStudySection>

          <CaseStudySection title="Usability Testing — Validating the Prototype">
            <p>
              Before considering the design complete, we tested the interactive
              prototype with real users. The aim was not to confirm that
              everything worked, but to identify what was still unclear,
              ineffective, or missing while there was still time to improve it.
            </p>

            <div className="mt-4">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Method
              </h3>
              <p>
                We followed a structured approach informed by the Nielsen Norman
                Group’s guidance on moderated usability testing. Five
                participants were recruited to mirror our target audience: three
                renters, one homeowner, and one landlord. This was a deliberate
                match to the three personas. Sessions ran 10–15 minutes each,
                individually, in a quiet environment.
              </p>
              <p className="mt-3">
                Each participant was given written instructions and asked to
                read them aloud before starting, so differences in performance
                were less likely to come from misunderstanding the task. We used
                a think-aloud protocol throughout the sessions so we could
                capture not only what users did, but how they understood the
                website while using it. This made it easier to identify
                hesitation, misunderstood labels, and moments where the design
                gave users confidence. Two tasks were selected because,
                together, they tested what the website most needed to do:
              </p>
              <ul className="mt-3 space-y-2 text-base pl-5 list-disc marker:text-muted-foreground">
                <li>
                  <strong>Task 1 — Book a survey from the homepage.</strong>{" "}
                  Tests the primary conversion flow and the trust signals around
                  it.
                </li>
                <li>
                  <strong>
                    Task 2 — View the Services and Information pages.
                  </strong>{" "}
                  Tests whether the information architecture supports users who
                  want to understand their mould issue before making contact
                  with the service.
                </li>
              </ul>
              <p className="mt-3">
                For each task we recorded likes, dislikes, suggestions, and
                time-on-task as a basic efficiency metric.
              </p>
            </div>

            <DocImage
              src={usabilityTask1}
              alt="Usability testing findings table for Task 1 — Book a Survey"
              caption="Findings table — Task 1 (Book a Survey). Per-participant likes, dislikes, suggestions, and time-on-task; equivalent data was captured for Task 2."
            />

            <div className="mt-2">
              <h3 className="text-base font-semibold text-foreground mb-2">
                What we found
              </h3>
              <p>
                Task completion was high and times were short across both tasks
                (most under 20 seconds), suggesting the IA and primary flow were
                broadly intuitive. The richer signal came from the qualitative
                feedback, which clustered into a small number of consistent
                patterns:
              </p>
              <ul className="mt-3 space-y-2 text-base pl-5 list-disc marker:text-muted-foreground">
                <li>
                  <strong>Trust signals worked.</strong> Multiple participants
                  spontaneously called out the before/after photos and the FAQs
                  as reasons they felt comfortable progressing.
                </li>
                <li>
                  <strong>Form language was ambiguous.</strong> One participant
                  did not understand “Property Location” on the booking form and
                  suggested “Address”.
                </li>
                <li>
                  <strong>Contact options were not flexible enough.</strong> A
                  participant wanted to text rather than call. This is useful for
                  users who feel anxious about phone conversations.
                </li>
                <li>
                  <strong>Services pages were too text-heavy.</strong>{" "}
                  Participants found the educational content useful, but felt it
                  needed to be broken up more clearly with icons, bullet points,
                  and shorter sections.
                </li>
                <li>
                  <strong>Information hub needed search.</strong> One
                  participant expected to be able to search the article library
                  and could not, which highlighted a clear gap as the amount of
                  content grows.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-semibold text-foreground mb-2">
                What we changed
              </h3>
              <p>
                Each pattern translated into a specific revision before the
                final design:
              </p>
              <ul className="mt-3 space-y-2 text-base pl-5 list-disc marker:text-muted-foreground">
                <li>
                  Renamed “Property Location” → “Address” on the booking form.
                </li>
                <li>
                  Added a “Text Now” option alongside the existing call action.
                </li>
                <li>
                  The dense ‘Services’ content was restructured with icons,
                  bullet points, and clearer sectioning to improve readability.
                </li>
                <li>
                  We identified search as a clear improvement to add in the next
                  iteration as the article library grows.
                </li>
              </ul>
              <p className="mt-3">
                User testing let us check whether the research-based design
                decisions were effectively working in practice. Where users
                interacted with the design differently than expected, we refined
                it.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Final Design — MouldMan Website">
            <p>
              The high-fidelity design translates the research findings into the
              final interface through a calm, trustworthy navy colour palette,
              prominent contact details in the top bar, a single clear primary
              CTA (“Book A Survey”), and educational content treated as a
              central part of the information architecture.
            </p>

            <DocImage
              src={servicesPage}
              alt="Services page of the final MouldMan website"
              caption="Services page showing a clear scope of work, transparent process, and reassurance that every job starts with a professional survey."
            />

            <DocImage
              src={informationPage}
              alt="Information section of the final MouldMan website"
              caption="Information hub showing educational articles on damp proofing, mould prevention, and home protection."
            />

            <DocImage
              src={testimonials}
              alt="Testimonials section of the final MouldMan website"
              caption="Testimonials section showing addressing the 'health anxiety / need for reassurance' theme directly on the homepage."
            />

            <DocImage
              src={bookingForm}
              alt="Booking page of the final MouldMan website"
              caption="Booking page designed with clear labels, supportive wording, and an “urgent help” panel for users needing immediate support."
            />
          </CaseStudySection>

          <CaseStudySection title="Mobile Prototype">
            <p>
              Most users arrive on mobile often in the moment they discover
              mould, so the prototype was designed mobile-first. Navigation
              collapses into a clear menu, the primary CTA stays anchored, and
              the educational content remains scannable on small screens.
            </p>

            <DocImage
              src={mobileHomeAbout}
              alt="Mobile prototype screens for the MouldMan Home and About pages"
              caption="Mobile prototype showing the navigation drawer, Home page, and About page."
            />

            <DocImage
              src={mobileInformation}
              alt="Mobile prototype screens for the MouldMan Information section and article page"
              caption="Mobile prototype showing the Information section and article page, with the user's location clearly shown and a clear back link."
            />
          </CaseStudySection>

          <CaseStudySection title="Research as a Design Tool">
            <p>
              Across both assignments, research continued to shape decisions
              long after wireframing began.
            </p>
            <ul className="space-y-2 text-base pl-5 list-disc marker:text-muted-foreground">
              <li>
                <strong>Thematic analysis:</strong> Each top-level page
                responded to a theme or persona need identified in the research.
              </li>
              <li>
                <strong>Persona evidence:</strong> When the group disagreed, we
                returned to the research to judge which direction best supported
                user needs.
              </li>
              <li>
                <strong>Stakeholder constraints vs. evidence:</strong> Research
                pointed to visible pricing for trust, but the client’s jobs vary
                too widely. We honoured both by designing around quote requests
                and clear reassurance instead.
              </li>
              <li>
                <strong>Usability testing:</strong> The prototype was evaluated
                with users completing two tasks (submit an enquiry; find
                services and information), and findings drove revisions to
                navigation labels, CTA placement, and FAQ structure.
              </li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Reflection">
            <p>
              MouldMan changed how I think about the relationship between
              research, design, and trust. Working on a real service for a real
              client meant the design had to do more than look professional; it
              also had to reassure users who were anxious, answer questions
              before they were asked, and translate a technical remediation
              process into something that felt approachable. That responsibility
              influenced almost every design decision, from the tone of the
              content and the site structure to the placement of calls to action
              and the organisation of the FAQ.
            </p>
            <p>
              The thematic analysis and persona work showed me how much UX gets
              completed before a single wireframe is drawn. The three personas
              did merely describe users. They became the criteria we used to
              test ideas. Whenever the group disagreed on navigational or
              layout-related elements, we returned to which persona it served
              and what evidence supported it. That made the design process more
              disciplined and reduced opinion-led decisions.
            </p>
            <p>
              Working with a client also taught me how to apply research
              evidence within real-world constraints. The research showed that
              visible pricing could help build trust, but the variability of
              mould remediation work meant fixed prices were not realistic. In
              response, we designed a quote request flow that was supported by
              clear explanations, reassuring language, and obvious next steps.
              This taught me that good design often involves balancing user
              needs with practical business constraints.
            </p>
            <p>
              Designing for three very different personas within one
              information architecture reinforced an important lesson for me.
              Good information architecture is <em>not</em> only about
              hierarchy. It also has to support the various ways in which
              different users move through the same content. Working on this
              website therefore turned that idea from being theory-based into a
              practical and visible outcome.
            </p>
            <p>
              The project also gave me clear ownership of the visual
              implementation. While the research, information architecture, and
              content decisions were shared across the group, I was responsible
              for building the full high-fidelity prototype in Figma. This meant
              I was responsible for translating our agreed decisions into a
              coherent interface that stayed aligned with the research, the
              personas, and the accessibility standards we had set. It was the
              part of the project where I had the most direct creative control,
              and where I learned most about turning UX decisions into a working
              interface.
            </p>
            <p>
              Finally, the project strengthened how I work in a team. When
              disagreements came up, we returned to the research to guide
              decisions rather than relying on personal preference. That
              experience gave me more confidence in collaborative UX work and in
              arguing for research-led decisions within a team.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Project Links">
            <div className="flex flex-wrap gap-3 not-prose">
              <a
                href="https://drive.google.com/file/d/1EKVERXX_2CRYpdCRF8DOIjJX08OjlUD-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Report 1
              </a>
              <a
                href="https://drive.google.com/file/d/173n-zfY4X8oIXepk5kYSrLVM7IXmZj5L/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Report 2
              </a>
              <a
                href="https://www.figma.com/design/08dryDTbDbK1PxdI55bBY0/CS4088-Design-Specification---Thomas-Broderick--Yvonne-Morrissey--Samuel-Hellqvist--Zoe-Flannery?node-id=0-1&p=f&t=c5A4NlZ1q6mbWld4-0"
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
              to="/projects/mindspark"
              className="font-medium hover:text-accent transition-colors"
            >
              ← Previous: MindSpark
            </Link>
            <Link
              to="/projects/project-three"
              className="font-medium hover:text-accent transition-colors"
            >
              Next: LearnBetter →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default MouldMan;
