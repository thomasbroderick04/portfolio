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
import siteFlow from "@/assets/mouldman-site-flow.jpg";
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
          <h1 className="mb-5">Mould Man</h1>
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
                alt="Mould Man — final responsive website shown on laptop and mobile"
                className="w-full h-auto object-contain"
                width={1600}
                height={900}
              />
            </div>
          </figure>

          {/* ---------- 1. OVERVIEW ---------- */}
          <CaseStudySection title="Overview">
            <p>
              Mould Man is a real Irish mould-remediation service run by our
              client, Steve. The brief was to design a website that
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
              the final IA, copy, or interaction design.
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
              </div>
              <div className="py-5">
                <p className="project-tag mb-1">Theme 2</p>
                <h3 className="text-base font-semibold text-foreground mb-1">Health risks, safety anxiety &amp; the need for reassurance</h3>
                <p className="text-sm">
                  Reviews are full of fear — for children, asthma sufferers,
                  elderly relatives. People need credibility signals before
                  they&rsquo;ll even pick up the phone.
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
              </div>
              <div className="py-5">
                <p className="project-tag mb-1">Theme 4</p>
                <h3 className="text-base font-semibold text-foreground mb-1">Educational &amp; informative content</h3>
                <p className="text-sm">
                  Customers reward sites that <em>teach</em> — explaining
                  causes, prevention, and what to expect — over those that
                  simply sell.
                </p>
              </div>
            </div>
          </CaseStudySection>

          {/* ---------- 3. PERSONAS ---------- */}
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
                Mould Man, what they&rsquo;d need on screen, and what would
                push them to act.
              </p>
            </div>

            <DocImage
              src={storyboardSarah}
              alt="Storyboard showing Sarah's emergency mould scenario from discovery to inspection"
              caption="Storyboard — Sarah's scenario: discovering mould, searching online, finding Mould Man, booking, and the technician's visit."
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
              alt="Site flow diagram showing primary navigation paths through the Mould Man website"
              caption="Site flow diagram — primary user paths from Home and About through Booking, Info, and Feedback."
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
              alt="Wireframes for the Mould Man website — Home, About, Services, and Booking pages"
              caption="Mid-fidelity wireframes — Home, About, Services, and Booking pages laid out side-by-side."
            />
          </CaseStudySection>

          {/* ---------- 6. FINAL DESIGN ---------- */}
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
              alt="Services page of the live Mould Man website"
              caption="Services page — clear scope of work, transparent process, and reassurance that every job starts with a professional survey."
            />

            <DocImage
              src={informationPage}
              alt="Information / blog hub of the live Mould Man website"
              caption="Information hub — educational articles on damp proofing, mould prevention, and home protection. Authority before sales."
            />

            <DocImage
              src={testimonials}
              alt="Testimonials section of the live Mould Man website"
              caption="Testimonials section — addressing the 'health anxiety / need for reassurance' theme directly on the homepage."
            />

            <DocImage
              src={bookingForm}
              alt="Book Your Free Survey form on the live Mould Man website"
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
              alt="Mobile prototype screens for the Mould Man Home and About pages"
              caption="Mobile prototype — navigation drawer, Home page, and About page."
            />

            <DocImage
              src={mobileInformation}
              alt="Mobile prototype screens for the Mould Man Information section and an article page"
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
            <ul className="space-y-1.5 text-sm pl-5 list-disc marker:text-muted-foreground">
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

            <div className="mt-8">
              <h3 className="text-base font-semibold text-foreground mb-2">Usability testing findings</h3>
              <p>
                Participants worked through several tasks on the prototype —
                booking a survey, locating service information, finding
                educational content, and contacting the business. For each
                task we recorded likes, dislikes, suggestions, and
                time-on-task, then translated the patterns into concrete
                revisions: clearer form labels, an added &ldquo;text now&rdquo;
                contact option, stronger visibility of the FAQ and
                before/after content, and tightened navigation labels.
              </p>
            </div>

            <DocImage
              src={usabilityTask1}
              alt="Usability testing findings table — example task from the prototype evaluation"
              caption="Example usability findings table (one of several tasks tested) — per-participant likes, dislikes, suggestions, and time-on-task."
            />
          </CaseStudySection>

          {/* ---------- 9. REFLECTION ---------- */}
          <CaseStudySection title="Reflection">
            <p>
              Mould Man taught me how much UX gets done <em>before</em> the
              first wireframe. The thematic analysis and persona work
              determined nearly every meaningful design decision that
              followed — and made it possible to defend those decisions to
              the team and the client with evidence rather than opinion.
            </p>
            <p>
              Working with a real client also sharpened how I balance
              evidence with constraint. The pricing decision is a good
              example: data suggested one direction, the client&rsquo;s
              reality required another, and the design had to honour both.
            </p>
            <p>
              Designing for three very different personas under one IA
              reinforced something I keep returning to: good information
              architecture isn&rsquo;t about hierarchy alone — it&rsquo;s
              about respecting different routes through the same content.
            </p>
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
