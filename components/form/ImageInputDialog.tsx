import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { forwardRef, Ref } from "react";

type ImageInputDialogProps = {
  id?: string;
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  // ref: React.LegacyRef<HTMLInputElement>
  // ref: React.RefObject<HTMLInputElement>
  ref: React.LegacyRef<HTMLInputElement>;
};

function ImageInputDialog({
  // id
  name,
  type,
  label,
  defaultValue,
  placeholder,
  ref,
}: ImageInputDialogProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        // defaultValue={defaultValue}
        id={name}
        name={name}
        type={type}
        // required
        accept="image/*"
        // className='hidden'
        ref={ref}
      />
    </div>
  );
}
export default ImageInputDialog;
