import { Link } from "react-router-dom";
import { caseStudyStyles as s } from "./styles";

interface NavTarget {
  to: string;
  label: string;
}

interface CaseStudyFooterNavProps {
  allProjectsTo?: string;
  previous?: NavTarget;
  next?: NavTarget;
}

const CaseStudyFooterNav = ({
  allProjectsTo = "/projects",
  previous,
  next,
}: CaseStudyFooterNavProps) => (
  <nav className={s.footerNav}>
    {previous ? (
      <Link to={previous.to} className={s.footerLink}>
        ← {previous.label}
      </Link>
    ) : (
      <Link to={allProjectsTo} className={s.footerLink}>
        ← All projects
      </Link>
    )}

    {next ? (
      <Link to={next.to} className={s.footerLink}>
        {next.label} →
      </Link>
    ) : (
      <span />
    )}
  </nav>
);

export default CaseStudyFooterNav;
