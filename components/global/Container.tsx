import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-2 sm:px-4 mx-auto w-[90%] xl:w-[80%] md:px-8 2xl:w-[70%]",
        className
      )}
    >
      {children}
    </div>
  );
}
export default Container;
