import { Link } from "react-router-dom";
// icons removed
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

const MouldMan = () => {
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

          <p className="project-tag mb-3">Client Website · CS4088 · Group of 4</p>
          <h1 className="mb-5">MouldMan</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A research-led UX project for an Irish mould-remediation service —
            translating real customer anxieties into an information
            architecture that builds trust and makes contact effortless.
          </p>

          <ProjectMeta
            items={[
              { label: "Role", value: "UX Designer (team of 4)" },
              { label: "Duration", value: "Sept – Dec 2025" },
              { label: "Module", value: "CS4088 — UX Design" },
              { label: "Tools", value: "Figma · Thematic Analysis" },
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

          {/* ---------- 1. OVERVIEW ---------- */}
          <CaseStudySection title="Overview">
            <p>
              MouldMan is a mould-remediation service based in Limerick,
              Ireland, run by our client, Steve. The brief was to design a website that
              doesn&rsquo;t just present services, but actively builds trust
              with customers facing health anxiety, property concerns, or
              rental disputes.
            </p>
            <p>
              The project ran across two assignments: a Requirements Gathering
              phase grounded in thematic analysis of real customer reviews,
              and a Design Specification phase that produced a fully
              accessible interactive prototype tested with users.
            </p>
            <p>
              Within a team of four (Yvonne Morrissey, Samuel Hellqvist, Zoe
              Flannery, and myself), I contributed to the thematic analysis,
              persona development, information architecture, visual design,
              and usability testing synthesis.
            </p>
          </CaseStudySection>

          {/* ---------- 2. USER RESEARCH ---------- */}
          <CaseStudySection title="User Research — What Customers Actually Want">
            <p>
              Mould isn&rsquo;t a neutral subject. By the time someone is
              searching for a remediation service they&rsquo;re usually
              already worried — about their family&rsquo;s health, the value
              of their property, or a tenancy dispute. Designing for that
              emotional state meant our first job wasn&rsquo;t to design at
              all; it was to listen.
            </p>
            <p>
              We carried out a structured <strong>thematic analysis</strong> of
              real customer reviews drawn from Irish and international
              mould-removal services, plus a small set of stakeholder
              interviews with the client. Reviews were coded line-by-line,
              clustered into candidate themes, and then refined through team
              discussion until four dominant themes held together across the
              dataset. Crucially, we kept a traceable link between every
              theme and the underlying quotes — which meant later, when the
              team disagreed on a layout or a label, we could resolve the
              argument by going back to the evidence rather than to opinion.
            </p>
            <p>
              The four themes below are the ones that survived that process,
              and every single one of them maps onto a concrete decision in
              the final Information Architecture (IA), copy, or interaction design.
            </p>

            <div className="mt-6 divide-y divide-border border-y border-border">
              <div className="py-5">
                <p className="project-tag mb-1">Theme 1</p>
                <h3 className="text-base font-semibold text-foreground mb-1">Root-cause resolution &amp; diagnostic communication</h3>
                <p className="text-sm">
                  Customers don&rsquo;t want surface cleaning — they want
                  someone who diagnoses <em>why</em> the mould is there and
                  explains it in plain language.
                </p>
                <p className="text-sm mt-2 text-foreground">
                  <strong>→ Design response:</strong> a Services page that
                  leads with diagnosis and process rather than price, and a
                  Booking flow that frames every job as starting with a
                  professional survey.
                </p>
              </div>
              <div className="py-5">
                <p className="project-tag mb-1">Theme 2</p>
                <h3 className="text-base font-semibold text-foreground mb-1">Health risks, safety anxiety &amp; the need for reassurance</h3>
                <p className="text-sm">
                  Reviews are full of fear — for children, asthma sufferers,
                  elderly relatives. People need credibility signals before
                  they&rsquo;ll even pick up the phone.
                </p>
                <p className="text-sm mt-2 text-foreground">
                  <strong>→ Design response:</strong> testimonials and
                  before/after evidence on the homepage, a calm navy
                  palette, and reassurance copy alongside the booking form
                  rather than hard sales language.
                </p>
              </div>
              <div className="py-5">
                <p className="project-tag mb-1">Theme 3</p>
                <h3 className="text-base font-semibold text-foreground mb-1">Responsiveness &amp; ease of contact</h3>
                <p className="text-sm">
                  Slow replies and hidden contact details were the most
                  common complaint. Speed and visibility of contact matter
                  more than polish.
                </p>
                <p className="text-sm mt-2 text-foreground">
                  <strong>→ Design response:</strong> phone number anchored
                  in the top bar on every page, a persistent
                  &ldquo;urgent help&rdquo; card, and a single, unmissable
                  primary CTA (&ldquo;Book A Survey&rdquo;).
                </p>
              </div>
              <div className="py-5">
                <p className="project-tag mb-1">Theme 4</p>
                <h3 className="text-base font-semibold text-foreground mb-1">Educational &amp; informative content</h3>
                <p className="text-sm">
                  Customers reward sites that <em>teach</em> — explaining
                  causes, prevention, and what to expect — over those that
                  simply sell.
                </p>
                <p className="text-sm mt-2 text-foreground">
                  <strong>→ Design response:</strong> a top-level
                  Information hub treated as a first-class part of the IA,
                  with articles on causes, prevention and health — usable
                  as evidence by renters and as reassurance by homeowners.
                </p>
              </div>
            </div>

            <p className="mt-6">
              These four themes — not aesthetics, not trends — became the
              real brief. From this point on, every IA decision, every page
              that earned its place in the sitemap, and every piece of
              reassurance copy can be traced back to one of them.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Personas — Three Very Different Customers">
            <p>
              The themes pointed clearly to three distinct user types. Each
              persona was built directly from the review data — quotes,
              behaviours, and pain points all traceable back to evidence.
            </p>

            <div className="mt-6 space-y-6">
              <div className="border border-border rounded-md p-6 bg-card">
                <p className="project-tag mb-1">Persona 1</p>
                <h3 className="text-lg font-semibold text-foreground mb-1">Sarah O&rsquo;Brien — The Concerned Homeowner</h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  &ldquo;I just want to know my home is safe for my kids.&rdquo;
                </p>
                <p className="text-sm">
                  A young mother dealing with visible mould in a family home.
                  Anxious about her children&rsquo;s health, wants long-term
                  prevention rather than a quick fix, and needs reassurance
                  before she&rsquo;ll even fill out a form.
                </p>
              </div>

              <div className="border border-border rounded-md p-6 bg-card">
                <p className="project-tag mb-1">Persona 2</p>
                <h3 className="text-lg font-semibold text-foreground mb-1">Mark Flynn — The Busy Landlord / Property Manager</h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  &ldquo;I need it done properly the first time.&rdquo;
                </p>
                <p className="text-sm">
                  Manages multiple rental properties. Driven by efficiency,
                  compliance, and avoiding repeat callouts. Wants speed,
                  clear scope, and a professional service he can rely on
                  between tenancies.
                </p>
              </div>

              <div className="border border-border rounded-md p-6 bg-card">
                <p className="project-tag mb-1">Persona 3</p>
                <h3 className="text-lg font-semibold text-foreground mb-1">Rachel O&rsquo;Connor — The Health-Conscious Renter</h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  &ldquo;I need proof that this is a real health issue.&rdquo;
                </p>
                <p className="text-sm">
                  A renter using the site as evidence in a dispute with her
                  landlord. Needs downloadable information, clear
                  explanations of causes vs. surface mould, and authoritative
                  educational content she can cite.
                </p>
              </div>
            </div>

            <DocImage
              src={personaRachel}
              alt="Persona sheet for Rachel O'Connor — the Health-Conscious Renter"
              caption="Example persona sheet — Rachel O'Connor (representative of the format used for all three personas)."
            />
          </CaseStudySection>

          {/* ---------- 4. JOURNEY MAPS & STORYBOARDS ---------- */}
          <CaseStudySection title="Customer Journey Maps &amp; Storyboards">
            <p>
              For each persona we mapped the full journey — from the moment
              they noticed mould, through searching online, evaluating
              services, and finally making contact. Pain points and
              opportunities at each stage fed directly into the IA and page
              content.
            </p>

            <DocImage
              src={journeyMark}
              alt="Customer journey map for Mark Flynn, the busy landlord"
              caption="Customer journey map — Mark Flynn (Busy Landlord): awareness → consideration → decision → service → loyalty."
            />

            <div className="mt-8">
              <h3 className="text-base font-semibold text-foreground mb-2">Storyboards</h3>
              <p>
                Storyboards turned each journey into a concrete narrative —
                the scenario in which each persona would actually arrive at
                MouldMan, what they&rsquo;d need on screen, and what would
                push them to act.
              </p>
            </div>

            <DocImage
              src={storyboardSarah}
              alt="Storyboard showing Sarah's emergency mould scenario from discovery to inspection"
              caption="Storyboard — Sarah's scenario: discovering mould, searching online, finding MouldMan, booking, and the technician's visit."
            />
          </CaseStudySection>

          {/* ---------- 5. SITE FLOWS & WIREFRAMES ---------- */}
          <CaseStudySection title="Site Flows &amp; Wireframes">
            <p>
              From the personas and journeys we defined the site&rsquo;s
              backbone: <strong>Home</strong>, <strong>Services</strong>,{" "}
              <strong>About</strong>, an <strong>Information</strong> hub, a{" "}
              <strong>Booking &amp; Feedback</strong> page, and persistent
              <strong> Contact</strong> entry points. Every top-level page
              exists because it answers something at least one persona
              actively needs.
            </p>

            <DocImage
              src={siteFlow}
              alt="Site flow diagram showing primary navigation paths through the MouldMan website"
              caption="Site flow diagram — mapping how each persona moves from the top-level pages (Home, About, Services, Information, Book) into key actions like booking an inspection, submitting contact details, reading information, and reaching the feedback page."
            />

            <div className="mt-6 divide-y divide-border border-y border-border">
              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Home</h3>
                <p className="text-sm">
                  Trust signals up front — reviews, credentials, and a clear
                  primary CTA. Designed for both passive scanners and active
                  researchers.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Services</h3>
                <p className="text-sm">
                  Clear scope of work, the difference between surface and
                  root treatment, and what a customer can expect on the day.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">About</h3>
                <p className="text-sm">
                  Steve&rsquo;s background and credentials — important for
                  Sarah and Rachel, who both need to feel they&rsquo;re
                  dealing with a credible expert.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Information</h3>
                <p className="text-sm">
                  Educational hub: causes of mould, prevention, health
                  considerations, FAQs. Establishes authority before any
                  sales conversation begins.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Booking &amp; Feedback</h3>
                <p className="text-sm">
                  Inspection booking form with reassurance copy, clear
                  labels, and an explicit thank-you / confirmation state.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-base font-semibold text-foreground mb-1">Contact</h3>
                <p className="text-sm">
                  Phone, email, and form repeated across key pages — never
                  more than one tap away.
                </p>
              </div>
            </div>

            <DocImage
              src={wireframes}
              alt="Wireframes for the MouldMan website — Home, About, Services, and Booking pages"
              caption="Mid-fidelity wireframes — Home, About, Services, Booking, and Information pages laid out side-by-side, showing layout structure, content hierarchy, and shared components across the site."
            />
          </CaseStudySection>

          {/* ---------- 6. USABILITY TESTING ---------- */}
          <CaseStudySection title="Usability Testing — Validating the Prototype">
            <p>
              Before treating the design as finished, we put the interactive
              prototype in front of real users. The goal wasn&rsquo;t to
              prove it worked — it was to find the parts that didn&rsquo;t,
              while there was still time to fix them.
            </p>

            <div className="mt-4">
              <h3 className="text-base font-semibold text-foreground mb-2">Method</h3>
              <p>
                We followed a structured approach informed by the Nielsen
                Norman Group&rsquo;s guidance on moderated usability
                testing. Five participants were recruited to mirror our
                target audience: <strong>three renters, one homeowner, and
                one landlord</strong> — a deliberate match to the three
                personas. Sessions ran 10–15 minutes each, individually, in
                a quiet environment.
              </p>
              <p className="mt-3">
                Each participant was given written instructions and asked
                to read them aloud before starting, to remove
                misinterpretation as a variable. We used the{" "}
                <strong>think-aloud protocol</strong> throughout, so we
                could capture not just <em>what</em> users did but{" "}
                <em>why</em> — the hesitations, the misread labels, the
                moments of reassurance. Two tasks were chosen because
                together they cover the website&rsquo;s core value:
              </p>
              <ul className="mt-3 space-y-2 text-base pl-5 list-disc marker:text-muted-foreground">
                <li>
                  <strong>Task 1 — Book a survey from the homepage.</strong>{" "}
                  Tests the primary conversion flow and the trust signals around it.
                </li>
                <li>
                  <strong>Task 2 — View the Services and Information pages.</strong>{" "}
                  Tests whether the educational IA actually supports the
                  &ldquo;research before contact&rdquo; behaviour the themes predicted.
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
              <h3 className="text-base font-semibold text-foreground mb-2">What we found</h3>
              <p>
                Task completion was high and times were short across both
                tasks (most under 20 seconds), suggesting the IA and primary
                flow were broadly intuitive. The richer signal came from the
                qualitative feedback, which clustered into a small number of
                consistent patterns:
              </p>
              <ul className="mt-3 space-y-2 text-base pl-5 list-disc marker:text-muted-foreground">
                <li>
                  <strong>Trust signals worked.</strong> Multiple
                  participants spontaneously called out the before/after
                  photos and the FAQs as reasons they felt comfortable
                  progressing — direct validation of the &ldquo;need for
                  reassurance&rdquo; theme.
                </li>
                <li>
                  <strong>Form language was ambiguous.</strong> One
                  participant didn&rsquo;t understand &ldquo;Property
                  Location&rdquo; on the booking form and suggested
                  &ldquo;Address&rdquo;.
                </li>
                <li>
                  <strong>Contact options weren&rsquo;t flexible enough.</strong>{" "}
                  A participant wanted to text rather than call — useful
                  for users who feel anxious about phone conversations.
                </li>
                <li>
                  <strong>Services pages were too text-heavy.</strong>{" "}
                  Participants asked for icons, bullet points, and shorter
                  blocks — the educational content was right, the density
                  was wrong.
                </li>
                <li>
                  <strong>Information hub needed search.</strong> One
                  participant tried to search the article library and
                  couldn&rsquo;t — a clear gap as the content scales.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-semibold text-foreground mb-2">What we changed</h3>
              <p>Each pattern translated into a specific revision before the final design:</p>
              <ul className="mt-3 space-y-2 text-base pl-5 list-disc marker:text-muted-foreground">
                <li>Renamed &ldquo;Property Location&rdquo; → &ldquo;Address&rdquo; on the booking form.</li>
                <li>Added a &ldquo;Text Now&rdquo; option alongside the existing call action.</li>
                <li>Broke up dense Services copy with icons, bullets, and tighter sectioning.</li>
                <li>Promoted FAQs and before/after content nearer the top of the booking journey.</li>
                <li>Logged the search-the-Info-hub feedback as the next iteration to ship once the article library grows.</li>
              </ul>
              <p className="mt-3">
                The testing effectively closed the research loop — the same
                themes that had shaped the IA were now being checked by the
                people they were designed for, and the design was tightened
                where their behaviour disagreed with our assumptions.
              </p>
            </div>
          </CaseStudySection>

          {/* ---------- 7. FINAL DESIGN ---------- */}
          <CaseStudySection title="Final Design — The Live Website">
            <p>
              The high-fidelity design carries every research decision through
              to the surface: a calm, trustworthy navy palette, prominent
              contact details in the top bar, a single primary CTA
              (&ldquo;Book A Survey&rdquo;), and educational content
              positioned as a first-class part of the IA.
            </p>

            <DocImage
              src={servicesPage}
              alt="Services page of the live MouldMan website"
              caption="Services page — clear scope of work, transparent process, and reassurance that every job starts with a professional survey."
            />

            <DocImage
              src={informationPage}
              alt="Information / blog hub of the live MouldMan website"
              caption="Information hub — educational articles on damp proofing, mould prevention, and home protection. Authority before sales."
            />

            <DocImage
              src={testimonials}
              alt="Testimonials section of the live MouldMan website"
              caption="Testimonials section — addressing the 'health anxiety / need for reassurance' theme directly on the homepage."
            />

            <DocImage
              src={bookingForm}
              alt="Book Your Free Survey form on the live MouldMan website"
              caption="Booking page — clear labels, reassurance copy, and an 'urgent help' panel for high-anxiety users."
            />
          </CaseStudySection>

          {/* ---------- 7. MOBILE PROTOTYPE ---------- */}
          <CaseStudySection title="Mobile Prototype">
            <p>
              Most users arrive on mobile — often in the moment they discover
              mould — so the prototype was designed mobile-first. Navigation
              collapses into a clear menu, the primary CTA stays anchored,
              and the educational content remains scannable on small screens.
            </p>

            <DocImage
              src={mobileHomeAbout}
              alt="Mobile prototype screens for the MouldMan Home and About pages"
              caption="Mobile prototype — navigation drawer, Home page, and About page."
            />

            <DocImage
              src={mobileInformation}
              alt="Mobile prototype screens for the MouldMan Information section and an article page"
              caption="Mobile prototype — Information hub and article view, with breadcrumbs and a clear back link."
            />
          </CaseStudySection>

          {/* ---------- 8. RESEARCH AS A DESIGN TOOL ---------- */}
          <CaseStudySection title="Research as a Design Tool">
            <p>
              Across both assignments, research wasn&rsquo;t a phase that
              ended once wireframing began — it stayed live as a
              decision-making tool throughout the project.
            </p>
            <ul className="space-y-2 text-base pl-5 list-disc marker:text-muted-foreground">
              <li>
                <strong>Thematic analysis</strong> shaped the IA: each top-level
                page maps to a theme or persona need.
              </li>
              <li>
                <strong>Persona evidence</strong> resolved internal disagreements —
                when the team disagreed on a layout, we returned to which
                persona&rsquo;s need it served.
              </li>
              <li>
                <strong>Stakeholder constraints vs. evidence</strong>: research
                pointed to visible pricing for trust, but the client&rsquo;s
                jobs vary too widely. We honoured both by designing around
                quote requests with strong reassurance copy.
              </li>
              <li>
                <strong>Usability testing</strong> closed the loop: the prototype
                was evaluated with users completing two tasks (submit an
                enquiry; find services and information), and findings drove
                revisions to navigation labels, CTA placement, and FAQ
                structure.
              </li>
            </ul>

          </CaseStudySection>

          {/* ---------- 9. REFLECTION ---------- */}
          <CaseStudySection title="Reflection">
            <p>
              MouldMan changed how I think about the relationship between
              research, design, and trust. Working on a real service for a
              real client meant the design had to do more than look
              professional — it had to reassure people who were anxious,
              answer questions before they were asked, and translate a
              technical remediation process into something that felt
              approachable. That responsibility shaped almost every decision,
              from tone of voice and IA to the placement of CTAs and the
              structure of the FAQ.
            </p>
            <p>
              The thematic analysis and persona work showed me how much UX
              gets done before a single wireframe is drawn. The three
              personas didn&rsquo;t just describe users — they became the
              criteria we used to test ideas. Whenever the team disagreed on
              navigation, layout, or copy, we returned to which persona it
              served and what evidence supported it. That made the design
              process more disciplined and reduced opinion-led decisions.
            </p>
            <p>
              Working with Steve also taught me how to balance evidence with
              real-world constraint. Research pointed toward visible pricing
              to build trust, but the variability of remediation jobs made
              fixed prices impossible. The compromise — quote requests
              wrapped in strong reassurance copy and clear next steps —
              honoured both the data and the client&rsquo;s reality. That
              kind of negotiation between user needs and business
              constraints is something I&rsquo;ll carry into every future
              project.
            </p>
            <p>
              Designing for three very different personas under a single IA
              also reinforced something I keep returning to: good
              information architecture isn&rsquo;t about hierarchy alone.
              It&rsquo;s about respecting that different users take
              different routes through the same content, and that the
              structure has to support all of them without privileging one.
              MouldMan made that idea concrete for me in a way no theoretical
              exercise could.
            </p>
            <p>
              Finally, the project sharpened how I work in a team. Splitting
              ownership of pages, holding shared standards for typography,
              spacing, and tone, and resolving disagreements through
              evidence rather than preference made the final site feel
              coherent despite multiple hands shaping it. That experience
              gave me more confidence in collaborative UX work and in
              advocating for research-led decisions inside a group.
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
            <Link to="/projects/mindspark" className="font-medium hover:text-accent transition-colors">
              ← Previous: MindSpark
            </Link>
            <Link to="/projects/project-three" className="font-medium hover:text-accent transition-colors">
              Next: Project Three →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default MouldMan;
