"use client";
// import { useState } from "react";
// import SelectProductAmount from "../single-product/SelectProductAmount";
// import { Mode } from "../single-product/SelectProductAmount";
// import FormContainer from "../form/FormContainer";
// import { SubmitButton } from "../form/Buttons";
// import {
//   removeCartItemAction,
//   updateCartItemAction,
// } from "@/utils/actionsClient";
// import { useToast } from '../ui/use-toast';
// import { useToast } from "@/hooks/use-toast";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  return <div className="md:ml-8">amount: {quantity}</div>;
}
export default ThirdColumn;
