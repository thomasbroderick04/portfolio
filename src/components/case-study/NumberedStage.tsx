import type { ReactNode } from "react";
import { caseStudyStyles as s } from "./styles";

interface NumberedStageProps {
  number: string;
  title: string;
  children: ReactNode;
  first?: boolean;
}

const NumberedStage = ({
  number,
  title,
  children,
  first = false,
}: NumberedStageProps) => (
  <div className={first ? s.firstStage : s.laterStage}>
    <div className="max-w-3xl">
      <div className={s.stageHeadingRow}>
        <p className={s.number}>{number}</p>
        <h3 className={s.contentHeading}>{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  </div>
);

export default NumberedStage;
