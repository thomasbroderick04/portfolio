import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import mouldmanHero from "@/assets/mouldman-hero.jpg";

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

          <figure className="image-frame aspect-[16/9] my-8">
            <img
              src={mouldmanHero}
              alt="Mould Man — responsive client website preview"
              className="w-full h-full object-cover"
              width={1600}
              height={900}
            />
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
              Before sketching anything, we ran a thematic analysis of
              customer reviews from existing Irish and international
              mould-removal services. Four themes consistently surfaced — and
              every one of them drove a concrete design decision later.
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

            <ImagePlaceholder
              label="Raw customer review quotes"
              description="Screenshot of the raw customer quotes pulled from competitor websites and review platforms (Dampdoctor, TrustIndex, etc.)."
            />
            <ImagePlaceholder
              label="Thematic analysis board"
              description="Quotes grouped under the four themes: root-cause resolution, health anxiety, responsiveness, and educational content."
            />
            <ImagePlaceholder
              label="Theme → design implication"
              description="One annotated example showing how a theme translated into a concrete website requirement (e.g. health anxiety → reviews surfaced on the homepage)."
            />
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

            <ImagePlaceholder
              label="Persona sheet — Sarah O'Brien"
              description="Full persona sheet for Sarah: portrait, quote, goals, frustrations, and behaviours — the Concerned Homeowner."
            />
            <ImagePlaceholder
              label="Persona sheet — Mark Flynn"
              description="Full persona sheet for Mark: portrait, quote, goals, frustrations, and behaviours — the Busy Landlord."
            />
            <ImagePlaceholder
              label="Persona sheet — Rachel O'Connor"
              description="Full persona sheet for Rachel: portrait, quote, goals, frustrations, and behaviours — the Health-Conscious Renter."
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

            <ImagePlaceholder
              label="Journey map — Sarah (Concerned Homeowner)"
              description="Journey map showing Sarah's stages: discovery, anxiety, credibility checks, evaluation, and the contact decision — with pain points and opportunities at each stage."
            />
            <ImagePlaceholder
              label="Journey map — Mark (Busy Landlord)"
              description="Journey map for Mark: urgency between tenancies, service comparison, scheduling, quote request, and follow-up."
            />
            <ImagePlaceholder
              label="Journey map — Rachel (Health-Conscious Renter)"
              description="Journey map for Rachel: searching for evidence, gathering authoritative content, and using the site to support a landlord dispute."
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

            <ImagePlaceholder
              label="Storyboard — Sarah's emergency mould scenario"
              description="Storyboard panels showing Sarah discovering mould in a child's room, searching online, finding Mould Man, and booking an inspection."
            />
            <ImagePlaceholder
              label="Storyboard — Mark's between-tenancy turnaround"
              description="Storyboard panels showing Mark needing fast turnaround between tenants and using the quote flow."
            />
            <ImagePlaceholder
              label="Storyboard — Rachel's rental-dispute scenario"
              description="Storyboard panels showing Rachel using Mould Man's educational content as evidence in a dispute with her landlord."
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

            <ImagePlaceholder
              label="Site flow diagram"
              description="The full Mould Man site-flow diagram showing the sitemap, primary navigation, sub-pages, and contact entry points across the site."
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

            <ImagePlaceholder
              label="Wireframe — Home page"
              description="Annotated home-page wireframe showing hero, trust signals, services preview, reviews, and the primary contact CTA."
            />
            <ImagePlaceholder
              label="Wireframe — Services page"
              description="Annotated services-page wireframe showing service breakdown, root-cause vs. surface treatment, and what to expect."
            />
            <ImagePlaceholder
              label="Wireframe — About page"
              description="Annotated About-page wireframe showing Steve's background, credentials, and trust-building content."
            />
            <ImagePlaceholder
              label="Wireframe — Information / educational page"
              description="Annotated information-page wireframe showing the educational content hierarchy: causes, prevention, health, FAQs."
            />
            <ImagePlaceholder
              label="Wireframe — Booking & Feedback page"
              description="Annotated wireframe of the Book-an-Inspection form with reassurance copy and the thank-you / confirmation state."
            />
            <ImagePlaceholder
              label="Mobile prototype — key screens"
              description="Selected mobile-prototype screens showing how the site adapts: navigation, home hero, information hub, and booking form."
            />
          </CaseStudySection>

          {/* ---------- 6. RESEARCH AS A DESIGN TOOL ---------- */}
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
                <strong>Competitor IA analysis</strong> (CleanTech, ChemDryMidwest,
                XtremeCarpetCleaning, DampMaster) informed our navigation
                labels and content patterns.
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

            <ImagePlaceholder
              label="Competitor IA comparison"
              description="Side-by-side IA comparison of CleanTech.ie, Chemdrymidwest.ie, XtremeCarpetCleaning.ie, and DampMaster.ie — with the patterns we adopted highlighted."
            />
            <ImagePlaceholder
              label="Usability testing — findings table"
              description="Findings table from the prototype tests showing task, success, time, observed issue, and the resulting design change."
            />
            <ImagePlaceholder
              label="Before / after — design revision from testing"
              description="A before/after screenshot showing one navigation, CTA, or FAQ revision made directly in response to user-testing findings."
            />
          </CaseStudySection>

          {/* ---------- 7. REFLECTION ---------- */}
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
