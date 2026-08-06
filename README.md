# Thomas Broderick Portfolio

A Vite, React, TypeScript and Tailwind portfolio deployed to GitHub Pages.

## Information architecture

The work section now uses three levels:

```text
Projects
  → Discipline
    → Project case study
```

Current discipline routes:

- `/projects/ui-ux-design`
- `/projects/graphic-design`
- `/projects/3d-modelling`
- `/projects/physical-computing`
- `/projects/animation`

Existing case-study URLs have been preserved, so old links continue to work.

## Adding or changing a project

Project cards, category membership and homepage features are controlled from:

```text
src/data/projects.ts
```

Add a project to `portfolioProjects` and provide:

- `title`
- `path`
- `description`
- `image`
- `imageAlt`
- `primaryCategory`
- `categories`
- `tags`
- `featured` when it should appear on the homepage

A project can appear in more than one discipline by adding multiple values to `categories`. It still needs one `primaryCategory` for labels and breadcrumbs.

When adding a new discipline, update `categorySlugs`, `projectCategories` and the icon mapping in `src/components/projects/CategoryCard.tsx`.

## Local development

```bash
npm install
npm run dev
```

The Vite base and React Router basename are set to `/portfolio/` for the current GitHub Pages repository.

## Build and deployment

```bash
npm run build
```

Pushing to `main` runs `.github/workflows/deploy.yml`. The workflow builds the Vite site and publishes `dist` to GitHub Pages. It also creates a `404.html` copy so direct visits to nested React routes work on GitHub Pages.

## Guitar project files

The Max/MSP walkthrough and downloadable source files are stored in `public` so they work outside Lovable:

```text
public/media/CS4174MaxPatchWalkthroughBroderick.mp4
public/media/guitar-looper-poster.jpg
public/project-files/CS4174Arduino_Broderick.ino
public/project-files/CS4174Receiver_Max_Broderick.maxpat
public/project-files/CS4174WrittenReportBroderick.pdf
```
