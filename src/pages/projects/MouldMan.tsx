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
            A research-led UX project for an Irish mould-remediation service.
            Translating real customer anxieties into an information
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

          <CaseStudySection title="Summary">
            <p>
              Mould Man is a real Irish mould-remediation service run by our
              client, Steve. The brief: design a website that doesn&rsquo;t
              just present services but actively builds trust with customers
              dealing with health anxiety, property concerns, or rental
              disputes.
            </p>
            <p>
              Our team approached this as a service-design problem. Two
              assignments — requirements gathering and design specification —
              produced a fully researched UX foundation followed by a
              functional, accessible interactive prototype.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Design Context &amp; Problem">
            <p>
              Through thematic analysis of customer reviews across the Irish
              and international mould-remediation sector, four insights
              consistently surfaced: a need for root-cause expertise,
              health-related reassurance, fast and easy contact, and
              educational rather than salesy content.
            </p>
            <p className="text-foreground italic">
              &ldquo;Customers aren&rsquo;t looking for a cleaning service.
              They&rsquo;re looking for a credible partner who can diagnose,
              explain, and reassure.&rdquo;
            </p>

            <ImagePlaceholder
              label="Raw customer review quotes"
              description="Photo or screenshot of the raw quotes collected from real customer reviews across the Irish and international mould-remediation sector."
            />
            <ImagePlaceholder
              label="Thematic analysis board"
              description="Quotes grouped under the four key themes: root-cause expertise, health anxiety, responsiveness, and educational content."
            />
            <ImagePlaceholder
              label="Insight → requirement"
              description="One annotated insight showing how a research theme translated into a concrete website requirement."
            />
          </CaseStudySection>

          <CaseStudySection title="My Role">
            <p>
              In a team of four (Yvonne Morrissey, Samuel Hellqvist, Zoe
              Flannery, and myself), I led and contributed substantively to:
            </p>
            <ul className="space-y-1.5 text-sm pl-5 list-disc marker:text-muted-foreground">
              <li>Thematic analysis of customer reviews across competitor websites</li>
              <li>Persona development — particularly the Concerned Homeowner and Health-Conscious Renter profiles</li>
              <li>Information architecture analysis of competing services (CleanTech, ChemDryMidwest, XtremeCarpetCleaning, DampMaster)</li>
              <li>User goals, target audience definitions, and success-metric framing in the design specification</li>
              <li>Visual design contributions (typography hierarchy, colour system, accessibility evaluation)</li>
              <li>Usability testing facilitation and synthesis of findings into design revisions</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Design &amp; Development Process">
            <p>
              We worked across two assignments — requirements first,
              specification second — applying a deliberately evidence-led
              approach.
            </p>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {[
                ["User research", "Thematic analysis of real customer reviews."],
                ["Personas & scenarios", "Three evidence-based personas: Sarah (Homeowner), Mark (Landlord), Rachel (Renter)."],
                ["Journey maps & storyboards", "Pain points and opportunities mapped per persona."],
                ["IA analysis", "Comparative review of four competitor sites."],
                ["Vision & criteria", "Functional, UX, and content criteria with success metrics."],
                ["Wireframing", "Site flows and full-page wireframes."],
                ["Visual design", "Colour, typography, spacing, components."],
                ["Prototype & testing", "Figma interactive prototype tested with users."],
              ].map(([t, d]) => (
                <div key={t} className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-8 py-4">
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <ImagePlaceholder
              label="Persona — Sarah O'Brien (Concerned Homeowner)"
              description="Persona sheet for Sarah: portrait, quote, goals, frustrations, and behaviours — focused on health anxiety and family safety."
            />
            <ImagePlaceholder
              label="Persona — Mark Flynn (Busy Landlord)"
              description="Persona sheet for Mark: focused on speed, compliance, and property management efficiency."
            />
            <ImagePlaceholder
              label="Persona — Rachel O'Connor (Health-Conscious Renter)"
              description="Persona sheet for Rachel: focused on evidence, landlord communication, and reassurance."
            />
            <ImagePlaceholder
              label="Competitor IA analysis"
              description="Comparative information-architecture diagram of CleanTech, ChemDryMidwest, XtremeCarpetCleaning, and DampMaster."
            />
            <ImagePlaceholder
              label="Site map / IA diagram"
              description="Final Mould Man site map showing top-level pages, sub-sections, and primary contact entry points."
            />
            <ImagePlaceholder
              label="Wireframe — homepage"
              description="Annotated homepage wireframe showing trust signals, services, reviews, and primary contact CTA."
            />
            <ImagePlaceholder
              label="Wireframe — services / information page"
              description="Annotated wireframe of the services and education-led information page."
            />
            <ImagePlaceholder
              label="Wireframe — contact / quote flow"
              description="Annotated wireframe of the quote/contact flow with form fields, reassurance copy, and confirmation state."
            />
          </CaseStudySection>

          <CaseStudySection title="Designing for Three Audiences">
            <p>
              Three personas, three different motivations, one IA. Each had to
              find what they needed without fragmenting the site.
            </p>
            <ImagePlaceholder
              label="Journey map — Sarah (Homeowner)"
              description="Journey map for Sarah showing discovery, anxiety, credibility checks, and the contact decision."
            />
            <ImagePlaceholder
              label="Journey map — Mark (Landlord)"
              description="Journey map for Mark showing urgency, service comparison, scheduling, and quote request."
            />
            <ImagePlaceholder
              label="Storyboard — Rachel (Renter)"
              description="Storyboard or scenario for Rachel showing how Mould Man's content supports her communication with a landlord."
            />
            <div className="divide-y divide-border border-y border-border">
              {[
                {
                  name: "Sarah O'Brien",
                  role: "Concerned Homeowner",
                  drive: "Health anxiety & long-term property protection",
                },
                {
                  name: "Mark Flynn",
                  role: "Landlord / Property Manager",
                  drive: "Operational efficiency, compliance, tenant satisfaction",
                },
                {
                  name: "Rachel O'Connor",
                  role: "Health-Conscious Renter",
                  drive: "Validation & evidence to escalate to landlord",
                },
              ].map((p) => (
                <div key={p.name} className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-8 py-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{p.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{p.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.drive}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Key Design Decisions">
            <div className="divide-y divide-border border-y border-border">
              <div>
                <h3 className="text-base font-semibold text-foreground pt-4 mb-1">Trust signals up front</h3>
                <p className="text-sm pb-4">
                  Reviews surfaced on the homepage, even for users not actively
                  searching for them — reassuring passive scanners and active
                  researchers alike.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground pt-4 mb-1">Multiple, persistent contact paths</h3>
                <p className="text-sm pb-4">
                  Phone, email, and form repeated across key pages. Customers
                  under time pressure needed instant access; anxious homeowners
                  needed reassurance contact was always one tap away.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground pt-4 mb-1">Educational content as authority</h3>
                <p className="text-sm pb-4">
                  A dedicated information section explaining causes, prevention,
                  and the difference between surface and root treatment —
                  establishing expertise before contact.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground pt-4 mb-1">Stakeholder-led pricing decision</h3>
                <p className="text-sm pb-4">
                  Research suggested visible pricing supports trust, but the
                  client&rsquo;s jobs vary too widely. We designed around{" "}
                  <em>quote requests</em> instead, mirroring competitor patterns.
                </p>
              </div>
            </div>

            <ImagePlaceholder
              label="Visual style — colour & typography"
              description="Style tile showing the final colour palette, typography hierarchy, button states, and key UI components."
            />
            <ImagePlaceholder
              label="Final desktop — homepage"
              description="Final desktop homepage showing hero, trust signals, reviews, and contact routes."
            />
            <ImagePlaceholder
              label="Final desktop — services / mould information"
              description="Final desktop services or mould-information page showing the educational content hierarchy."
            />
            <ImagePlaceholder
              label="Final desktop — FAQ"
              description="Final desktop FAQ page showing question grouping and answer formatting."
            />
            <ImagePlaceholder
              label="Final desktop — contact / quote"
              description="Final desktop contact/quote page showing form structure, labels, and confirmation state."
            />

            <ImagePlaceholder
              label="Final mobile — homepage"
              description="Mobile homepage showing the first screen and primary CTA placement."
            />
            <ImagePlaceholder
              label="Final mobile — navigation"
              description="Mobile navigation/menu state showing access to services, information, FAQ, and contact."
            />
            <ImagePlaceholder
              label="Final mobile — quote / contact flow"
              description="Mobile quote/contact flow showing readable form fields and large tap targets."
            />
          </CaseStudySection>

          <CaseStudySection title="Accessibility Commitments">
            <p>
              Mould Man&rsquo;s audience skews older and more health-anxious
              than typical service customers. Accessibility shaped:
            </p>
            <ul className="space-y-1.5 text-sm pl-5 list-disc marker:text-muted-foreground">
              <li>Readable typography and clear, jargon-free language throughout</li>
              <li>Strong contrast ratios in both colour system and component states</li>
              <li>Generous tap targets and consistent navigation behaviour</li>
              <li>Semantic structure, headings, and meaningful link text</li>
              <li>Forms with clear labels, errors, and success feedback</li>
            </ul>
            <ImagePlaceholder
              label="Contrast checks"
              description="Contrast-check screenshots for the final colour palette and CTA states (e.g. WebAIM contrast results)."
            />
            <ImagePlaceholder
              label="Form accessibility"
              description="Annotated form screen showing labels, helper text, error states, and success feedback."
            />
            <ImagePlaceholder
              label="Mobile tap-target check"
              description="Responsive screenshot or annotated mobile screen showing spacing and tap-target size around key actions."
            />
          </CaseStudySection>

          <CaseStudySection title="Usability Testing">
            <p>
              The interactive prototype was evaluated with users completing two
              key tasks: (1) submitting an enquiry, and (2) finding service and
              information content. Task completion times, observed hesitations,
              likes, and dislikes were captured. Findings drove revisions to
              navigation labelling, the position of contact CTAs, and FAQ
              structure.
            </p>

            <ImagePlaceholder
              label="Test session"
              description="Photo or screenshot from a prototype test session, anonymised if needed."
            />
            <ImagePlaceholder
              label="Findings table"
              description="Findings table with task, success, time/hesitation, observed issue, and the resulting design change."
            />
            <ImagePlaceholder
              label="Before / after — design revision"
              description="Before/after screenshot showing at least one navigation, CTA, or FAQ revision made after testing."
            />
          </CaseStudySection>

          <CaseStudySection title="Reflection">
            <p>
              Mould Man taught me how much UX gets done <em>before</em> the
              first wireframe. The thematic analysis and persona work
              determined nearly every meaningful design decision that
              followed.
            </p>
            <p>
              Working with a real client also sharpened how I balance evidence
              with constraint. The pricing decision is a good example: data
              suggested one direction, the client&rsquo;s reality required
              another, and the design had to honour both.
            </p>
            <p>
              Designing for three very different personas under one IA also
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
