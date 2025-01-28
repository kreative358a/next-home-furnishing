import { Separator } from "@/components/ui/separator";

function SectionTitle({ text }: { text: string }) {
  return (
    <div className="text-primary bg-muted/60 shadow p-2 text-center rounded-md pt-4">
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-2">
        {text}
      </h2>
      <Separator className="h-1 mt-2" />
    </div>
  );
}
export default SectionTitle;
