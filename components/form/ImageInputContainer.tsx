"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";
import { type actionFunction } from "@/utils/types";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  return (
    <span className="text-accent-foreground mb-8 p-2 bg-foreground/20 border-2 border-foreground/20 rounded-md ext-sm lg:text-base 3xl:text-lg 3xl:text-lg flex flex-col w-[280px] h-[340px]">
      <Image
        src={image}
        width={200}
        height={200}
        className="rounded object-cover mb-4 w-[260px] h-[260px]"
        alt={name}
        priority
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
        className="w-[260px] text-base xl:te 3xl:text:xl"
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </span>
  );
}
export default ImageInputContainer;
