import { Label } from "../ui/label";
import { Input } from "../ui/input";

function ImageInput() {
  const name = "image";

  return (
    <div className="mb-2 bg-foreground/40 border-2 border-foreground/40 rounded-md text-sm lg:text-base 3xl:text-lg">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        required
        accept="image/*"
        style={{ boxShadow: "0px 0px 0px 2px rgba(120, 160, 220, 0.6)" }}
      />
    </div>
  );
}
export default ImageInput;
