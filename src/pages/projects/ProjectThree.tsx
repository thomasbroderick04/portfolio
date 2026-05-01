import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectMeta from "@/components/ProjectMeta";

const ProjectThree = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <article className="container-wide">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} /> All work
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-accent">03</span>
            <span className="h-px w-8 bg-accent" aria-hidden />
            <p className="project-tag">In Development · 2026</p>
          </div>

          <h1 className="mb-6 max-w-4xl">Project Three</h1>
          <p className="lead max-w-3xl mb-12">
            A forthcoming case study currently in research and definition.
            This space is reserved for upcoming UX work — the structure below
            mirrors how I document each project.
          </p>

          <ProjectMeta
            items={[
              { label: "Role", value: "TBC" },
              { label: "Duration", value: "TBC" },
              { label: "Domain", value: "TBC" },
              { label: "Stack", value: "TBC" },
            ]}
          />

          <div className="bg-card border border-border p-10 my-12 text-center">
            <p className="project-tag mb-3">Coming soon</p>
            <p className="font-serif text-2xl mb-3">In progress</p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Once finalised, this case study will follow the same structure
              as the others — context, role, process, design decisions,
              testing, outcome, and reflection.
            </p>
          </div>

          <div className="section-divider pt-8">
            <Link
              to="/projects/mould-man"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} /> Previous: Mould Man
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default ProjectThree;
