# Portfolio Case-Study Design System

## Core rule

Project pages contain content and semantic components. They do **not** contain visual Tailwind decisions.

If a new project page needs `text-*`, `mt-*`, `mb-*`, `gap-*`, `border-*`, `rounded-*`, or similar presentation classes, first ask whether the information already fits an existing pattern. If it does, use the component. If it genuinely represents a new information type, add one shared component and document why.

## Source of truth

`src/components/case-study/styles.ts` is the visual token file. Change spacing, typography, dividers, and other shared presentation rules there rather than editing pages.

## Approved vocabulary

1. **ProjectHeader** — project title, description, metadata.
2. **CaseStudySection** — major chapter of the case study.
3. **SubsectionHeading** — named topic inside a major section.
4. **NumberedInsight** — a small number of important findings/challenges with explanations indented under the title.
5. **NumberedStage** — chronological progression; number and title share one row, body returns to the normal text column.
6. **StructuredRows** — compact label + title/description information such as research questions, process steps, design implications, requirements.
7. **FeedbackResponseList** — evidence/cause on the left and resulting design response/outcome on the right.
8. **ProjectFigure** — every project visual and caption.
9. **BodyCopy** — grouped normal narrative text. Never use small muted typography for ordinary case-study explanation.
10. **BulletList** — ordinary semantic outcome lists.
11. **ProjectActionLinks / CaseStudyFooterNav** — shared project-page utility patterns.

## Typography rules

- Main section typography stays inside `CaseStudySection`.
- Subsection and content headings use the same `text-lg font-semibold leading-snug` family.
- Numbers use one shared token: `text-lg font-semibold tabular-nums text-muted-foreground`.
- Normal narrative prose is not manually reduced to `text-sm` or muted.
- `text-sm` is reserved for structured secondary information, labels, feedback details, metadata, and utility UI.
- Captions are the smallest text treatment.

## Spacing rules

The shared spacing vocabulary is encoded in `styles.ts`:

- `mb-2`: label → supporting text
- `mb-4`: numbered insight title → explanation
- `mb-6`: subsection/stage title → content
- `mt-6`: intro → structured rows
- `my-8`: figures
- `mt-8`: intro → numbered insights
- `mt-12`: subsection
- 'mt-16`: first chronological stage
- `mt-16 pt-10 border-t`: later chronological stages

Do not invent intermediate spacing values in project pages.

## When to use each pattern

### NumberedInsight
Use when there are a few important concepts that deserve substantial explanation: research findings or major design problems.

Do not use for long lists, chronological prototype stages, or ordinary subsections.

### NumberedStage
Use only when order/progression matters: Low → Medium → High Fidelity, Discovery → Development → Validation, etc.

### StructuredRows
Use for compact reference information: RQ1–RQ4, design implications, process stages, requirements. Prefer this over cards when the card itself adds no meaning.

### FeedbackResponseList
Use when the layout communicates causality: user feedback → design implication, testing result → outcome.

### ProjectFigure
Never directly style images inside a project page. Add a controlled `variant` to the shared component if a genuinely reusable image treatment is required.

## Adding a new project

1. Duplicate `src/pages/projects/ProjectTemplate.tsx`.
2. Replace content and metadata.
3. Add project images using `ProjectFigure`.
4. Delete sections the project does not need.
5. Add more instances of existing patterns as needed.
6. Search the new page for `className=`. Ideally there should be none.
7. If you think you need a new visual treatment, check the design-system preview first.

## Visual QA

Use `CaseStudyDesignSystemPreview.tsx` as the approval page for the system. When adjusting the appearance of a component, inspect the preview and at least one real project page. Once approved, every project receives the change through the shared component.
