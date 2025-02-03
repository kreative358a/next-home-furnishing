import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
    <div className="bg-foreground/20 p-2 border-2 border-foreground/20 rounded-md text-sm lg:text-base 3xl:text-lg">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
        style={{ boxShadow: "0px 0px 0px 2px rgba(120, 160, 220, 0.6)" }}
      />
    </div>
  );
}
export default FormInput;
