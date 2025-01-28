import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  // className?: string;
};

function FormInputDialog({
  name,
  type,
  label,
  defaultValue,
  placeholder,
  value,
  readOnly,
}: // value,
FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        // defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        // required
        // className="hidden"
        // value={value}
      />
    </div>
  );
}
export default FormInputDialog;
