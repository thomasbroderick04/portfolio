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
    <figure className={`my-8 overflow-hidden rounded-md border-2 border-dashed border-border bg-secondary/60 ${aspectRatio}`}>
      {/* Visual image area */}
      <div className="relative flex aspect-[16/9] w-full items-center justify-center border-b-2 border-dashed border-border bg-secondary">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <p className="project-tag">Image placeholder</p>
        </div>
      </div>

      {/* Caption / instructions */}
      <figcaption className="p-6 md:p-8">
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
      </figcaption>
    </figure>
  );
};

export default ImagePlaceholder;
