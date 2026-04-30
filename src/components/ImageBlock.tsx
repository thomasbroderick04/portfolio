interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
}

const ImageBlock = ({ src, alt, caption, aspectRatio = "aspect-[16/10]" }: ImageBlockProps) => {
  return (
    <figure className="my-8">
      <div className={`image-frame ${aspectRatio}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          width={1200}
          height={800}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageBlock;
