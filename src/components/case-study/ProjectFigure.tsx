import { caseStudyStyles as s } from "./styles";

interface ProjectFigureProps {
  src: string;
  alt: string;
  caption?: string;
  variant?: "hero" | "content";
}

const ProjectFigure = ({
  src,
  alt,
  caption,
  variant = "content",
}: ProjectFigureProps) => {
  const isHero = variant === "hero";

  return (
    <figure className={s.figure}>
      <div
        className={[s.figureFrame, isHero ? "" : s.figureContentPadding].join(
          " ",
        )}
      >
        <img
          src={src}
          alt={alt}
          loading={isHero ? "eager" : "lazy"}
          className={[s.figureImage, isHero ? "" : s.figureContentImage].join(
            " ",
          )}
        />
      </div>

      {caption ? <figcaption className={s.figureCaption}>{caption}</figcaption> : null}
    </figure>
  );
};

export default ProjectFigure;
