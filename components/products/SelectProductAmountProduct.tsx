import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export enum Mode {
  SingleProduct = "singleProduct",
  CartItem = "cartItem",
}

type SelectProductAmountProps = {
  mode: Mode.SingleProduct;
  amount: number;
  // W tym komponencie zamierzamy przekazać funkcję, która
  // będzie kontrolować tę kwotę w komponencie nadrzędnym.
  setAmount: (value: number) => void;
  className?: string;
};

type SelectCartItemAmountProps = {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => Promise<void>;
  isLoading: boolean;
  className?: string;
};

function SelectProductAmountProduct(
  props: SelectProductAmountProps | SelectCartItemAmountProps
) {
  const { mode, amount, setAmount } = props;

  const cartItem = mode === Mode.CartItem;

  return (
    <>
      {/* <h4 className="mb-2">Amount : </h4> */}
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
        disabled={cartItem ? props.isLoading : false}
      >
        <SelectTrigger
          className={
            cartItem
              ? "w-[100px] border-2 border-blue-600/60 "
              : "w-[80px] sm:w-[120px] md:w-[160px] border-2 border-blue-600/60"
          }
        >
          <SelectValue placeholder={amount} />
        </SelectTrigger>
        <SelectContent className="rounded-sm">
          {Array.from({ length: cartItem ? 10 : 6 }, (_, index) => {
            const selectValue = (index + 1).toString();
            return (
              <SelectItem key={selectValue} value={selectValue}>
                {selectValue}
              </SelectItem>
            );
          })}

          {/* {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, index) => {
            const selectValue = (index + 1).toString();
            return (
              <SelectItem key={selectValue} value={selectValue}>
                {selectValue}
              </SelectItem>
            );
          })} */}
        </SelectContent>
      </Select>
    </>
  );
}
export default SelectProductAmountProduct;
