import ProjectMeta from "@/components/ProjectMeta";
import { caseStudyStyles as s } from "./styles";

interface ProjectMetaItem {
  label: string;
  value: string;
}

interface ProjectHeaderProps {
  title: string;
  description: string;
  meta: ProjectMetaItem[];
}

const ProjectHeader = ({ title, description, meta }: ProjectHeaderProps) => (
  <header>
    <h1 className={s.projectTitle}>{title}</h1>
    <p className={s.projectDescription}>{description}</p>
    <ProjectMeta items={meta} />
  </header>
);

export default ProjectHeader;
