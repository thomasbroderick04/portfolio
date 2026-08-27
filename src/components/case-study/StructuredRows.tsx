import type { ReactNode } from "react";
import { caseStudyStyles as s } from "./styles";

export interface StructuredRowItem {
  label: string;
  title?: string;
  description: ReactNode;
}

interface StructuredRowsProps {
  items: StructuredRowItem[];
}

const StructuredRows = ({ items }: StructuredRowsProps) => (
  <div className={s.structuredList}>
    {items.map(({ label, title, description }) => (
      <div key={`${label}-${title ?? "row"}`} className={s.structuredRow}>
        <p className={s.structuredLabel}>{label}</p>

        {title ? (
          <div>
            <p className={s.structuredTitle}>{title}</p>
            <div className={s.structuredDescription}>{description}</div>
          </div>
        ) : (
          <div className={s.structuredSimpleDescription}>{description}</div>
        )}
      </div>
    ))}
  </div>
);

export default StructuredRows;
