interface ImagePlaceholderProps {
  label: string;
  description: string;
  aspectRatio?: string;
  items?: string[];
}

/**
 * Visible placeholder describing exactly which image/screenshot/video belongs here.
 * Replace with an <img /> or <video /> when the asset is ready.
 */
const ImagePlaceholder = ({
  label,
  description,
  aspectRatio = "min-h-[220px]",
  items,
}: ImagePlaceholderProps) => {
  return (
    <figure className={`image-placeholder ${aspectRatio} my-6`}>
      <div className="w-full max-w-xl">
        <p className="project-tag mb-2">Photo documentation</p>
        <h3 className="text-base font-semibold text-foreground mb-2">{label}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        {items && items.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
            {items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </figure>
  );
};

export default ImagePlaceholder;
