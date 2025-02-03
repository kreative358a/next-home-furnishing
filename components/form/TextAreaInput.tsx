import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className="mb-2 p-2 bg-foreground/20 border-2 border-foreground/20 rounded-md text-sm lg:text-base 3xl:text-lg">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className="leading-loose"
        style={{ boxShadow: "0px 0px 0px 2px rgba(120, 160, 220, 0.6)" }}
      />
    </div>
  );
}
export default TextAreaInput;
