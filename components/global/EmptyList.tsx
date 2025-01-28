import { cn } from "@/lib/utils";

function EmptyList({
  heading = "No items found.",
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <h2
      className={cn("text-xl md:text-2xl xl:text-3xl text-center ", className)}
    >
      {heading}
    </h2>
  );
}
export default EmptyList;
