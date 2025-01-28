import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { Prisma } from '@prisma/client';

// Prisma.ProductScalarFieldEnum.price

const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // price: number | string;
};

function PriceInputDialog({ defaultValue }: FormInputNumberProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        // value={price}
        defaultValue={defaultValue}
        // required
      />
    </div>
  );
}
export default PriceInputDialog;
