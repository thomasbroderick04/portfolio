import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
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
            aspectRatio="aspect-[16/9]"
          />

          <p className="mt-8 text-base text-muted-foreground leading-relaxed">
            Once finalised, this case study will follow the same structure as
            the others: summary, context, role, process, design decisions,
            visual documentation, testing, outcome, and reflection.
          </p>

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
