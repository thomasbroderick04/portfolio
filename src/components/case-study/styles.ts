/**
 * Case-study visual tokens.
 *
 * Change the shared portfolio rhythm here instead of editing individual pages.
 * Project pages should not contain Tailwind presentation classes.
 */
export const caseStudyStyles = {
  pagePadding: "px-6 py-16 md:px-12 md:py-24 lg:px-16",
  backLink:
    "mb-16 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground",

  projectTitle: "mb-5",
  projectDescription:
    "max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl",

  subsectionHeading:
    "!mb-6 !mt-12 text-lg font-semibold leading-snug text-foreground",

  bodyCopy: "max-w-3xl space-y-4",

  number: "text-lg font-semibold tabular-nums text-muted-foreground",
  contentHeading: "text-lg font-semibold leading-snug text-foreground",
  numberedInsightHeading:
    "mb-4 text-lg font-semibold leading-snug text-foreground",
  numberedInsightList: "mt-8 divide-y divide-border border-y border-border",
  numberedInsightRow:
    "grid gap-3 py-7 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8 md:py-8",

  firstStage: "mt-8 border-t border-border pt-7 md:pt-8",
  laterStage: "mt-16 border-t border-border pt-10",
  stageHeadingRow: "mb-6 flex items-baseline gap-6",

  structuredList: "mt-6 divide-y divide-border border-y border-border",
  structuredRow:
    "grid gap-2 py-5 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-8",
  structuredLabel: "text-sm font-semibold text-foreground",
  structuredTitle: "mb-2 text-sm font-semibold leading-snug text-foreground",
  structuredDescription: "text-sm leading-relaxed text-muted-foreground",
  structuredSimpleDescription: "text-sm leading-relaxed text-foreground",

  feedbackList: "divide-y divide-border border-y border-border",
  feedbackRow:
    "grid gap-6 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-8",
  feedbackTitle: "mb-2 text-sm font-semibold text-foreground",
  feedbackBody: "text-sm leading-relaxed text-foreground",
  feedbackArrow:
    "hidden items-center justify-center text-muted-foreground md:flex",

  figure: "my-8",
  figureFrame:
    "overflow-hidden rounded-md border border-border bg-secondary/40",
  figureContentPadding: "p-3 md:p-4",
  figureImage: "mx-auto h-auto w-full object-contain",
  figureContentImage: "max-h-[80vh]",
  figureCaption: "mt-3 text-center text-xs text-muted-foreground",

  bulletList: "mt-3 list-disc space-y-2 pl-5 marker:text-muted-foreground",

  actionLinks: "flex flex-wrap gap-3 not-prose",
  actionLinkPrimary:
    "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
  actionLinkSecondary:
    "inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary",

  footerNav: "section-divider mt-10 flex justify-between pt-6 text-sm",
  footerLink: "font-medium transition-colors hover:text-accent",
} as const;
