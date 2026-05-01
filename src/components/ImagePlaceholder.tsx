interface ImagePlaceholderProps {
  label: string;
  description: string;
  aspectRatio?: string;
}

/**
 * Visible placeholder describing exactly which image/screenshot/video belongs here.
 * Replace with an <img /> or <video /> when the asset is ready.
 */
const ImagePlaceholder = ({
  label,
  description,
  aspectRatio = "aspect-[16/10]",
}: ImagePlaceholderProps) => {
  return (
    <figure className={`image-placeholder ${aspectRatio} my-6`}>
      <div className="max-w-md">
        <p className="project-tag mb-2">Image · {label}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </figure>
  );
};

export default ImagePlaceholder;
