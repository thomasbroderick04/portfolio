import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ImageBlock from "@/components/ImageBlock";
import placeholderHero from "@/assets/placeholder-project.jpg";

const ProjectThree = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
              ← Back to projects
            </Link>
            <p className="project-tag mb-3">Category · Type</p>
            <h1 className="mb-4">Project Three</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A brief summary of this project will go here. This is a placeholder for a 
              third portfolio project that can be swapped in when ready.
            </p>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 py-6 section-divider border-b border-border">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Role</p>
              <p className="text-sm">TBD</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Duration</p>
              <p className="text-sm">TBD</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Tools</p>
              <p className="text-sm">TBD</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Type</p>
              <p className="text-sm">TBD</p>
            </div>
          </div>

          {/* Hero Image */}
          <ImageBlock
            src={placeholderHero}
            alt="Placeholder for project three hero image"
            caption="Project image will be added here"
          />

          <CaseStudySection title="Summary">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                Project summary will go here — a concise overview of what the project is, 
                why it matters, and what it explores.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Context & Problem">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                Background context, problem framing, and the design opportunity.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Goals">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                What the project aimed to achieve — listed as clear objectives.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Process">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                Documentation of the design process — research, ideation, wireframing, 
                prototyping, testing, and iteration.
              </p>
            </div>
            <div className="mt-6 image-frame aspect-[16/10] flex items-center justify-center bg-secondary">
              <p className="text-sm text-muted-foreground italic">Process images</p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Design Development">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                Key design decisions, interface evolution, and development documentation.
              </p>
            </div>
            <div className="mt-6 image-frame aspect-[16/10] flex items-center justify-center bg-secondary">
              <p className="text-sm text-muted-foreground italic">Design evolution images</p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Accessibility & Usability">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                Specific accessibility and usability decisions and their rationale.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Outcome">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                Final outcome, deliverables, and any measurable results.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Reflection">
            <div className="bg-secondary rounded-sm p-6">
              <p className="text-sm text-muted-foreground italic">
                What I learned, what I would do differently, and how this project 
                shaped my development as a designer.
              </p>
            </div>
          </CaseStudySection>

          {/* Navigation */}
          <div className="section-divider pt-8 flex justify-between items-center">
            <Link to="/projects/mould-man" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              ← Previous: Mould Man
            </Link>
            <Link to="/projects" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              All projects →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default ProjectThree;
