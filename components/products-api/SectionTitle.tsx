import { Separator } from "@/components/ui/separator";

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <Separator />
      <div className="text-center">
        <button className="bg-muted/60 my-2 rounded-md">
          <h2 className="px-6 text-blue-600 text-3xl font-medium tracking-wider capitalize my-6 ">
            {text}
          </h2>
        </button>
      </div>
      <Separator />
    </div>
  );
}
export default SectionTitle;
