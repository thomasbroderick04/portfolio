import type { ReactNode } from "react";
import { caseStudyStyles as s } from "./styles";

interface BodyCopyProps {
  children: ReactNode;
}

const BodyCopy = ({ children }: BodyCopyProps) => (
  <div className={s.bodyCopy}>{children}</div>
);

export default BodyCopy;
