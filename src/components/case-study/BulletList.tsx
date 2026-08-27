import type { ReactNode } from "react";
import { caseStudyStyles as s } from "./styles";

interface BulletListProps {
  children: ReactNode;
}

const BulletList = ({ children }: BulletListProps) => (
  <ul className={s.bulletList}>{children}</ul>
);

export default BulletList;
