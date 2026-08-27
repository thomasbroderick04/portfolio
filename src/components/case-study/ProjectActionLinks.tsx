import { caseStudyStyles as s } from "./styles";

interface ProjectActionLink {
  label: string;
  href: string;
  primary?: boolean;
}

interface ProjectActionLinksProps {
  links: ProjectActionLink[];
}

const ProjectActionLinks = ({ links }: ProjectActionLinksProps) => (
  <div className={s.actionLinks}>
    {links.map(({ label, href, primary }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={primary ? s.actionLinkPrimary : s.actionLinkSecondary}
      >
        {label}
      </a>
    ))}
  </div>
);

export default ProjectActionLinks;
