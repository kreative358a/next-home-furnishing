import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { JsonArray } from '@prisma/client/runtime/library';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  // value?: JsonArray;
  // value?: string;
  // valueImage?: string;
};

function FormInputImagesDialog({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="hidden"
        // required
      />
    </div>
  );
}
export default FormInputImagesDialog;
