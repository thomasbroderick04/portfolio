import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ImageBlock from "@/components/ImageBlock";
import mouldmanHero from "@/assets/mouldman-hero.jpg";

const MouldMan = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
              ← Back to projects
            </Link>
            <p className="project-tag mb-3">Client Project · Web Design / UX</p>
            <h1 className="mb-4">Mould Man Website</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A responsive website designed for a mould removal service — focused on clear 
              information architecture, user trust, and accessible design for a real client.
            </p>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 py-6 section-divider border-b border-border">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Role</p>
              <p className="text-sm">Designer &amp; Developer</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Duration</p>
              <p className="text-sm">TBD</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Tools</p>
              <p className="text-sm">Figma, HTML/CSS/JS</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Type</p>
              <p className="text-sm">Client Work</p>
            </div>
          </div>

          {/* Hero Image */}
          <ImageBlock
            src={mouldmanHero}
            alt="Mould Man website shown on desktop and mobile devices"
            caption="Mould Man — Responsive website for a mould removal service"
          />

          {/* Summary */}
          <CaseStudySection title="Summary">
            <p className="text-base text-muted-foreground leading-relaxed">
              The Mould Man project involved designing and developing a professional website 
              for a mould removal service. The goal was to create a clear, trustworthy online 
              presence that communicates the service offering effectively and makes it easy 
              for potential customers to understand, navigate, and take action.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4 italic">
              Detailed content for this case study is being prepared. The structure below 
              outlines the sections that will be populated with real project documentation.
            </p>
          </CaseStudySection>

          {/* Client Context */}
          <CaseStudySection title="Client Context">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                This section will cover: who the client is, what their business does, what 
                their existing online presence looked like (if any), and why they needed a 
                new website. It will frame the project within the context of real client needs.
              </p>
            </div>
          </CaseStudySection>

          {/* Website Goals */}
          <CaseStudySection title="Website Goals">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                This section will outline the specific goals for the website — what it needed 
                to achieve for the business and for users. Goals may include: establishing 
                credibility, explaining services clearly, supporting enquiry generation, and 
                working effectively across devices.
              </p>
            </div>
          </CaseStudySection>

          {/* User Needs */}
          <CaseStudySection title="User Needs">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                This section will describe the target users, their needs, and the key tasks 
                they need to accomplish on the site. It will cover user personas or profiles, 
                common questions, and the user journey from arrival to enquiry.
              </p>
            </div>
          </CaseStudySection>

          {/* Information Architecture */}
          <CaseStudySection title="Information Architecture">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                This section will document the site's information architecture — how content 
                is organised, the navigation structure, page hierarchy, and the rationale 
                behind content grouping decisions.
              </p>
            </div>
          </CaseStudySection>

          {/* Design Development */}
          <CaseStudySection title="Design & Development">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                This section will show the design process: wireframes, visual design direction, 
                typography and colour choices, content hierarchy decisions, responsive design 
                thinking, and key UI decisions. It will include visual documentation of the 
                design evolution.
              </p>
            </div>
            <div className="mt-6 image-frame aspect-[16/10] flex items-center justify-center bg-secondary">
              <p className="text-sm text-muted-foreground italic">Design process images — wireframes, mockups, iterations</p>
            </div>
          </CaseStudySection>

          {/* Usability & Accessibility */}
          <CaseStudySection title="Usability & Accessibility">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                This section will detail specific usability and accessibility decisions made 
                during the project: contrast, readability, navigation clarity, tap targets, 
                semantic structure, and how these considerations served the target audience.
              </p>
            </div>
          </CaseStudySection>

          {/* Outcome */}
          <CaseStudySection title="Outcome">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                This section will present the final website, key screens, and any measurable 
                outcomes or client feedback. It will show the finished product in context.
              </p>
            </div>
            <div className="mt-6 image-frame aspect-[16/10] flex items-center justify-center bg-secondary">
              <p className="text-sm text-muted-foreground italic">Final website screenshots — desktop and mobile</p>
            </div>
          </CaseStudySection>

          {/* Reflection */}
          <CaseStudySection title="Reflection">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                This section will cover reflections on working with a real client, lessons 
                learned about communication, scope management, and designing for a specific 
                business context. It will also address what I would do differently.
              </p>
            </div>
          </CaseStudySection>

          {/* Navigation */}
          <div className="section-divider pt-8 flex justify-between items-center">
            <Link to="/projects/mindspark" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              ← Previous: MindSpark
            </Link>
            <Link to="/projects/project-three" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Next: Project Three →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default MouldMan;
