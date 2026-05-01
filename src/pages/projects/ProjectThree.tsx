import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";
import ImagePlaceholder from "@/components/ImagePlaceholder";

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

          <p className="project-tag mb-3">In Development · 2026</p>
          <h1 className="mb-5">Project Three</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A forthcoming case study currently in research and definition.
          </p>

          <ProjectMeta
            items={[
              { label: "Role", value: "TBC" },
              { label: "Duration", value: "TBC" },
              { label: "Domain", value: "TBC" },
              { label: "Tools", value: "TBC" },
            ]}
          />

          <ImagePlaceholder
            label="Hero image"
            description="A representative hero image for this project — final visual once the work is complete."
            items={[
              "One strong final image that clearly shows the finished interface, artefact, or experience.",
              "A short caption explaining the project domain and why this image represents the work.",
            ]}
          />

          <CaseStudySection title="Process Documentation">
            <p>
              Once the project is finalised, this section should show the work
              developing over time rather than only showing the finished result.
            </p>
            <ImagePlaceholder
              label="Research & early thinking"
              description="Use this space for material that explains the problem before the design solution appears."
              items={[
                "Research notes, interview snippets, observations, or desk-research screenshots.",
                "Early sketches, maps, or problem-framing diagrams.",
                "A short annotation explaining what this evidence changed in the project direction.",
              ]}
            />
            <ImagePlaceholder
              label="Wireframes, prototypes & iterations"
              description="Use this space to show how the design changed through decisions, testing, and critique."
              items={[
                "Low-fidelity wireframes or structural explorations.",
                "Mid/high-fidelity screens showing key interaction states.",
                "Before/after examples that explain one or two important design revisions.",
              ]}
            />
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
