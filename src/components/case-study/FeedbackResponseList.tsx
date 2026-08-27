import { caseStudyStyles as s } from "./styles";

export interface FeedbackResponseItem {
  leftTitle: string;
  leftBody: string;
  rightTitle: string;
  rightBody: string;
}

interface FeedbackResponseListProps {
  items: FeedbackResponseItem[];
}

const FeedbackResponseList = ({ items }: FeedbackResponseListProps) => (
  <div className={s.feedbackList}>
    {items.map(({ leftTitle, leftBody, rightTitle, rightBody }) => (
      <div key={`${leftTitle}-${rightTitle}`} className={s.feedbackRow}>
        <div>
          <p className={s.feedbackTitle}>{leftTitle}</p>
          <p className={s.feedbackBody}>{leftBody}</p>
        </div>

        <div className={s.feedbackArrow} aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>

        <div>
          <p className={s.feedbackTitle}>{rightTitle}</p>
          <p className={s.feedbackBody}>{rightBody}</p>
        </div>
      </div>
    ))}
  </div>
);

export default FeedbackResponseList;
