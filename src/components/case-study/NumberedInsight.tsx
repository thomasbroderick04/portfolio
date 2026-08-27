import type { ReactNode } from "react";
import { caseStudyStyles as s } from "./styles";

interface NumberedInsightListProps {
  children: ReactNode;
}

interface NumberedInsightProps {
  number: string;
  title: string;
  children: ReactNode;
}

export const NumberedInsightList = ({ children }: NumberedInsightListProps) => (
  <div className={s.numberedInsightList}>{children}</div>
);

export const NumberedInsight = ({
  number,
  title,
  children,
}: NumberedInsightProps) => (
  <article className={s.numberedInsightRow}>
    <p className={s.number}>{number}</p>
    <div className="max-w-3xl">
      <h3 className={s.numberedInsightHeading}>{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  </article>
);
