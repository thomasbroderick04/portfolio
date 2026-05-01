import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";
import mouldmanHero from "@/assets/mouldman-hero.jpg";

const MouldMan = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <article className="container-wide">
          <header className="mb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft size={14} /> All work
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-accent">02</span>
              <span className="h-px w-8 bg-accent" aria-hidden />
              <p className="project-tag">Client UX · CS4088 · Group Project</p>
            </div>

            <h1 className="mb-6 max-w-4xl">Mould Man</h1>
            <p className="lead max-w-3xl">
              A research-led UX project for an Irish mould-remediation service.
              Translating real customer anxieties into an information
              architecture that builds trust, communicates expertise, and
              makes contact effortless.
            </p>
          </header>

          <ProjectMeta
            items={[
              { label: "Role", value: "UX Designer (team of 4)" },
              { label: "Duration", value: "Sept – Dec 2025" },
              { label: "Module", value: "CS4088 — UX Design" },
              { label: "Stack", value: "Figma · Thematic Analysis" },
            ]}
          />

          <figure className="image-frame aspect-[16/10] my-12">
            <img
              src={mouldmanHero}
              alt="Mould Man — responsive client website preview"
              className="w-full h-full object-cover"
              width={1600}
              height={1000}
            />
          </figure>

          {/* 01 Summary */}
          <CaseStudySection title="Summary" num="01">
            <p>
              Mould Man is a real Irish mould-remediation service run by our
              client, Steve. The brief: design a website that doesn&rsquo;t
              just present services but actively builds trust with customers
              who are often dealing with health anxiety, property concerns,
              or rental disputes.
            </p>
            <p>
              Our team approached this not as a marketing site but as a
              service-design problem. Two assignments — requirements
              gathering and design specification — produced a fully
              researched, evidence-based UX foundation followed by a
              functional, accessible interactive prototype.
            </p>
          </CaseStudySection>

          {/* 02 Design context */}
          <CaseStudySection title="Design context" num="02">
            <p>
              Through thematic analysis of customer reviews across the Irish
              and international mould-remediation sector, four insights
              consistently surfaced:
            </p>
            <ul className="list-none space-y-3 pl-0 mt-4">
              {[
                ["Root-cause expertise", "Customers value providers who diagnose and explain underlying causes — not just remove visible mould."],
                ["Health anxiety & reassurance", "Mould is health-coded. Trust signals must address fear before they address service."],
                ["Responsiveness & ease of contact", "Negative reviews cluster around delays. Multiple visible contact paths are essential."],
                ["Educational content", "Users want to be informed, not sold to. Educational content establishes authority."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="font-mono text-xs text-accent mt-1.5 shrink-0">→</span>
                  <div>
                    <p className="font-medium">{t}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <blockquote className="pull-quote">
              Customers aren&rsquo;t looking for a cleaning service. They&rsquo;re
              looking for a credible partner who can diagnose, explain, and
              reassure.
            </blockquote>
          </CaseStudySection>

          {/* 03 My role */}
          <CaseStudySection title="My role" num="03">
            <p>
              In a team of four (Yvonne Morrissey, Samuel Hellqvist, Zoe
              Flannery, and myself), the work was deeply collaborative — but
              I led and contributed substantively to:
            </p>
            <ul className="list-none space-y-2 pl-0">
              {[
                "Thematic analysis of customer reviews across competitor websites",
                "Persona development — particularly the Concerned Homeowner and Health-Conscious Renter profiles",
                "Information architecture analysis of competing services (CleanTech, ChemDryMidwest, XtremeCarpetCleaning, DampMaster)",
                "User goals, target audience definitions, and success-metric framing in the design specification",
                "Visual design contributions (typography hierarchy, colour system, accessibility evaluation)",
                "Usability testing facilitation and synthesis of findings into design revisions",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base">
                  <span className="font-mono text-xs text-accent mt-1.5">→</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          {/* 04 Process */}
          <CaseStudySection title="Process" num="04">
            <p>
              We worked across two assignments — requirements first,
              specification second — applying a deliberately evidence-led
              approach.
            </p>
            <ol className="grid md:grid-cols-2 gap-4 mt-6 list-none pl-0">
              {[
                ["01", "User research", "Thematic analysis of real customer reviews across Irish & international competitors."],
                ["02", "Personas & scenarios", "Three evidence-based personas: Sarah (Homeowner), Mark (Landlord), Rachel (Renter)."],
                ["03", "Journey maps & storyboards", "Mapping pain points and opportunities across each persona's path to enquiry."],
                ["04", "IA analysis", "Comparative IA review of four competitor sites; identified usable patterns and pitfalls."],
                ["05", "Vision & criteria", "Functional, UX, and content criteria; success metrics aligned with client goals."],
                ["06", "Wireframing", "Site flows and full-page wireframes; iteration based on team review and client input."],
                ["07", "Visual design", "Colour, typography, spacing, components — evaluated for accessibility & brand-fit."],
                ["08", "Prototype & testing", "Figma interactive prototype tested with users; iterated on findings."],
              ].map(([n, t, d]) => (
                <li key={n} className="border-t border-foreground pt-4">
                  <p className="font-mono text-xs text-accent mb-1">{n}</p>
                  <h4 className="font-serif text-lg mb-1">{t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
          </CaseStudySection>

          {/* 05 Personas */}
          <CaseStudySection title="Designing for three audiences" num="05">
            <p>
              The thematic analysis surfaced not one user but three —
              motivated by very different things, yet served by a single site.
              The IA had to accommodate all three without fragmenting.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  name: "Sarah O'Brien",
                  role: "Concerned Homeowner",
                  drive: "Health anxiety & long-term property protection",
                  needs: "Diagnostic clarity, detailed explanations, safety reassurance",
                },
                {
                  name: "Mark Flynn",
                  role: "Landlord / Property Manager",
                  drive: "Operational efficiency, compliance, tenant satisfaction",
                  needs: "Fast turnaround, structured reports, no repeat callouts",
                },
                {
                  name: "Rachel O'Connor",
                  role: "Health-Conscious Renter",
                  drive: "Validation & evidence to escalate to landlord",
                  needs: "Simple, communicable evidence; educational content",
                },
              ].map((p) => (
                <div key={p.name} className="p-6 bg-card border border-border">
                  <p className="font-mono text-xs text-accent mb-2">Persona</p>
                  <h4 className="font-serif text-xl mb-1">{p.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{p.role}</p>
                  <p className="project-tag mb-1">Drive</p>
                  <p className="text-sm mb-3">{p.drive}</p>
                  <p className="project-tag mb-1">Needs</p>
                  <p className="text-sm">{p.needs}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          {/* 06 Key decisions */}
          <CaseStudySection title="Key design decisions" num="06">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-2">Trust signals up front</h3>
                <p className="text-muted-foreground">
                  Reviews surfaced on the homepage, even for users not actively
                  searching for them. Prior research showed that visible
                  testimonials reassure passive scanners and active researchers
                  alike.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Multiple, persistent contact paths</h3>
                <p className="text-muted-foreground">
                  Phone, email, and contact form — repeated across key pages.
                  Customers under time pressure (Mark&rsquo;s persona) needed
                  immediate access; anxious homeowners (Sarah) needed
                  reassurance that contact was always one tap away.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Educational content as authority</h3>
                <p className="text-muted-foreground">
                  A dedicated information section explaining causes,
                  prevention, and the difference between surface and root
                  treatment — establishing expertise before the customer even
                  considered making contact.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Familiar, scannable patterns</h3>
                <p className="text-muted-foreground">
                  Drawing on Jakob&rsquo;s Law and Nielsen&rsquo;s scanning
                  research, the IA followed conventions users had already
                  internalised. New ground was avoided where familiarity
                  served the user better.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Stakeholder-led pricing decision</h3>
                <p className="text-muted-foreground">
                  Although research suggested visible pricing supports trust,
                  Steve&rsquo;s jobs vary too widely for fixed prices. We
                  designed instead around <em>quote requests</em>, mirroring
                  competitor patterns so users were not surprised.
                </p>
              </div>
            </div>
          </CaseStudySection>

          {/* 07 Accessibility */}
          <CaseStudySection title="Accessibility commitments" num="07">
            <p>
              Mould Man&rsquo;s audience skews older and more health-anxious
              than typical service customers. Accessibility shaped:
            </p>
            <ul className="space-y-2 mt-4">
              {[
                "Readable typography and clear, jargon-free language throughout",
                "Strong contrast ratios in both colour system and component states",
                "Generous tap targets and consistent navigation behaviour",
                "Semantic structure, headings, and meaningful link text",
                "Form design with clear labels, errors, and success feedback",
              ].map((c) => (
                <li key={c} className="flex gap-3 text-sm md:text-base text-muted-foreground">
                  <span className="font-mono text-xs text-accent mt-1.5">→</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          {/* 08 Testing */}
          <CaseStudySection title="Usability testing" num="08">
            <p>
              The interactive prototype was evaluated with users completing
              two key tasks: (1) submitting an enquiry and (2) finding service
              and information content. Task completion times, observed
              hesitations, likes, and dislikes were captured.
            </p>
            <p>
              Findings drove revisions to navigation labelling, the position
              of contact CTAs, and the FAQ structure — strengthening the
              path between curiosity and enquiry.
            </p>
          </CaseStudySection>

          {/* 09 Reflection */}
          <CaseStudySection title="Reflection" num="09">
            <p>
              Mould Man taught me how much UX gets done <em>before</em> the
              first wireframe. The thematic analysis and persona work
              determined nearly every meaningful design decision that
              followed. When the design felt right, it was almost always
              because the research had done the heavy lifting first.
            </p>
            <p>
              Working with a real client also sharpened how I balance
              evidence with constraint. The pricing decision is a good
              example: data suggested one direction, the client&rsquo;s
              reality required another, and the design had to honour both.
              That negotiation is, for me, one of the most interesting parts
              of UX work.
            </p>
            <p>
              Finally, designing for three very different personas under one
              IA reinforced something I keep returning to: good information
              architecture isn&rsquo;t about hierarchy alone — it&rsquo;s
              about <em>respecting different routes through the same content</em>.
            </p>
          </CaseStudySection>

          {/* Footer nav */}
          <div className="section-divider mt-12 pt-8 flex justify-between items-center">
            <Link
              to="/projects/mindspark"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} /> Previous: MindSpark
            </Link>
            <Link
              to="/projects/project-three"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              Next: Project Three <ArrowUpRight size={14} />
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default MouldMan;
