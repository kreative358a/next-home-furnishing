import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { Prisma } from '@prisma/client';

// Prisma.ProductScalarFieldEnum.price

const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className="mb-2 p-2 bg-foreground/20 border-2 border-foreground/20 rounded-md text-sm lg:text-base 3xl:text-lg">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
        style={{ boxShadow: "0px 0px 0px 2px rgba(120, 160, 220, 0.6)" }}
      />
    </div>
  );
}
export default PriceInput;
