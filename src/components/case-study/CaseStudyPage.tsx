import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { caseStudyStyles as s } from "./styles";

interface CaseStudyPageProps {
  children: ReactNode;
  backTo?: string;
  backLabel?: string;
}

const CaseStudyPage = ({
  children,
  backTo = "/projects",
  backLabel = "Back to projects",
}: CaseStudyPageProps) => (
  <Layout>
    <div className={s.pagePadding}>
      <article className="container-content">
        <Link to={backTo} className={s.backLink}>
          ← {backLabel}
        </Link>
        {children}
      </article>
    </div>
  </Layout>
);

export default CaseStudyPage;
