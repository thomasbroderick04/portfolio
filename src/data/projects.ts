import mindsparkHero from "@/assets/mindspark-hero-devices.png";
import mouldmanHero from "@/assets/mouldman-hero-devices.png";
import learnbetterHero from "@/assets/learnbetter-hero.png";

const guitarLooperPoster = `${import.meta.env.BASE_URL}media/guitar-looper-poster.jpg`;

export const categorySlugs = [
  "ui-ux-design",
  "graphic-design",
  "3d-modelling",
  "physical-computing",
  "animation",
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export interface ProjectCategory {
  slug: CategorySlug;
  label: string;
  shortLabel: string;
  description: string;
  introduction: string;
}

export interface PortfolioProject {
  title: string;
  path: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCategory: CategorySlug;
  categories: CategorySlug[];
  tags: string[];
  featured?: boolean;
}

export const projectCategories: ProjectCategory[] = [
  {
    slug: "ui-ux-design",
    label: "UI/UX Design",
    shortLabel: "UI/UX",
    description: "Research-led digital products, services and interfaces.",
    introduction:
      "Projects that use research, information architecture, prototyping and usability testing to make digital experiences clearer and easier to use.",
  },
  {
    slug: "graphic-design",
    label: "Graphic Design",
    shortLabel: "Graphic Design",
    description: "Visual communication through layout, type and imagery.",
    introduction:
      "A dedicated space for identity, editorial, promotional and visual communication work. New projects can be added here without changing the site structure.",
  },
  {
    slug: "3d-modelling",
    label: "3D Modelling",
    shortLabel: "3D Modelling",
    description: "Digital forms, enclosures and prototype development.",
    introduction:
      "Projects involving three-dimensional modelling, physical form development and the translation of digital models into prototypes.",
  },
  {
    slug: "physical-computing",
    label: "Physical Computing",
    shortLabel: "Physical Computing",
    description: "Interactive systems that connect software with physical input.",
    introduction:
      "Sensor-based projects that combine hardware and software, allowing movement, sound or other physical inputs to produce a digital response.",
  },
  {
    slug: "animation",
    label: "Animation",
    shortLabel: "Animation",
    description: "Motion, sequencing and time-based visual communication.",
    introduction:
      "A dedicated space for animation and motion work, including projects that use movement to explain, communicate or tell a story.",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "MindSpark",
    path: "/projects/mindspark",
    description:
      "An interactive cognitive assessment designed for independent use, combining accessible interface design with a physical Arduino prototype.",
    image: mindsparkHero,
    imageAlt: "MindSpark cognitive assessment shown across digital devices",
    primaryCategory: "ui-ux-design",
    categories: ["ui-ux-design", "physical-computing", "3d-modelling"],
    tags: ["UX Research", "Accessibility", "Figma", "Arduino", "FreeCAD"],
    featured: true,
  },
  {
    title: "MouldMan",
    path: "/projects/mould-man",
    description:
      "A research-led website for an Irish mould-remediation service, structured around customer concerns, trust and clear routes to contact.",
    image: mouldmanHero,
    imageAlt: "MouldMan responsive website shown on laptop and mobile",
    primaryCategory: "ui-ux-design",
    categories: ["ui-ux-design"],
    tags: ["User Research", "Information Architecture", "Figma", "Usability Testing"],
    featured: true,
  },
  {
    title: "LearnBetter",
    path: "/projects/project-three",
    description:
      "A student e-learning companion designed to support focus, organisation and connection during remote learning.",
    image: learnbetterHero,
    imageAlt: "LearnBetter learning app screens",
    primaryCategory: "ui-ux-design",
    categories: ["ui-ux-design"],
    tags: ["Interaction Design", "Personas", "Ideation", "Prototyping"],
    featured: true,
  },
  {
    title: "Motion-Controlled Guitar Looper",
    path: "/projects/guitar-looper",
    description:
      "An augmented guitar prototype that records and changes a loop through a button, an accelerometer, Arduino and Max/MSP.",
    image: guitarLooperPoster,
    imageAlt: "Max/MSP patch used for the motion-controlled guitar looper",
    primaryCategory: "physical-computing",
    categories: ["physical-computing"],
    tags: ["Max/MSP", "Arduino", "Sensors", "Audio Interaction"],
  },
];

export const getCategory = (slug: string) =>
  projectCategories.find((category) => category.slug === slug);

export const getProjectsForCategory = (slug: CategorySlug) =>
  portfolioProjects.filter((project) => project.categories.includes(slug));

export const getPrimaryCategory = (project: PortfolioProject) =>
  getCategory(project.primaryCategory);

export const getProjectByPath = (path: string) =>
  portfolioProjects.find((project) => project.path === path);
