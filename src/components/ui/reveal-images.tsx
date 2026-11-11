import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative flex cursor-pointer items-center gap-4 border-b border-border py-2 md:py-6">
      <div className="flex items-center justify-center">
        <p className="relative z-10 text-3xl text-foreground transition-all group-hover:text-primary group-hover:translate-x-5 group-hover:scale-110 md:text-7xl md:group-hover:translate-x-10">
          {text}
        </p>
      </div>
      <div
        className={cn(
          container,
          "right-32 rotate-6 transition-all duration-300 group-hover:right-48 group-hover:rotate-12 md:right-48 md:group-hover:right-96"
        )}
      >
        <div className={cn(effect)}>
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        className={cn(
          container,
          "right-24 -rotate-12 transition-all group-hover:right-32 group-hover:-rotate-6 md:right-36 md:group-hover:right-72"
        )}
      >
        <div className={cn(effect)}>
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

interface RevealImageListProps {
  title?: string;
  items: ShowImageListItemProps[];
}

function RevealImageList({ title, items }: RevealImageListProps) {
  return (
    <div className="relative w-full">
      {title && (
        <p className="mb-6 text-sm uppercase text-muted-foreground">{title}</p>
      )}
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList, type ShowImageListItemProps };
