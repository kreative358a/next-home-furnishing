import { Separator } from "@/components/ui/separator";

function SectionTitleSmall({ text }: { text: string }) {
  return (
    <div className="w-[100%] sm:w-auto text-primary bg-muted/60 shadow p-2 text-center rounded-md pt-4">
      <p className="text-lg lg:text-xl 2xl:text-2xl font-medium tracking-wider capitalize mb-2">
        {text}
      </p>
      <Separator className="h-1 mt-2" />
    </div>
  );
}
export default SectionTitleSmall;
