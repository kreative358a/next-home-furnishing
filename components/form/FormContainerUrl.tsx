/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  useFormState,
  // useFormStatus
} from "react-dom";
import { useEffect } from "react";
// import { useToast } from '@/components/ui/use-toast';
import { useToast } from "@/hooks/use-toast";
import {
  actionFunction,
  // actionFunctionCreateProduct,
  // actionFunctionSaveAndAdd,
  // actionFunctionProductMessage,
  // actionFunctionCreateAndAddNew,
} from "@/utils/types";

const initialStateCreateAddProduct = {
  // id: "",
  message: "",
};

function FormContainerDialog({
  actionCreateProduct,
  actionAddProduct,
  children,
}: {
  actionCreateProduct: actionFunction;
  actionAddProduct: actionFunction;
  // action:actionFunctionProductMessage;
  children: React.ReactNode;
}) {
  const [stateCreateProduct, formActionCreateProduct] = useFormState(
    actionCreateProduct,
    initialStateCreateAddProduct
  );
  const [stateAddProduct, formActionAddProduct] = useFormState(
    actionAddProduct,
    initialStateCreateAddProduct
  );
  const { toast } = useToast();
  useEffect(() => {
    if (stateCreateProduct.message === "product created") {
      toast({ description: stateCreateProduct.message });
      if (stateAddProduct.message) {
        toast({ description: stateAddProduct.message });
      }
    }
  }, [stateCreateProduct]);
  const formActionCreateAddProduct = [
    formActionCreateProduct,
    formActionAddProduct,
  ];
  return <form action={formActionCreateProduct}>{children}</form>;
}

export default FormContainerDialog;
