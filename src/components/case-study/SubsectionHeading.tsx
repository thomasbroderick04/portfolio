import type { ReactNode } from "react";
import { caseStudyStyles as s } from "./styles";

interface SubsectionHeadingProps {
  children: ReactNode;
}

const SubsectionHeading = ({ children }: SubsectionHeadingProps) => (
  <h3 className={s.subsectionHeading}>{children}</h3>
);

export default SubsectionHeading;
