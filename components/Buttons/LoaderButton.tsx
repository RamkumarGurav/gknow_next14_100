import React from "react";
// import { Button, ButtonProps } from "../ui/button";
import { Button, ButtonProps, Spinner } from "@chakra-ui/react";

type LoaderButtonProps = ButtonProps & {
  isLoading?: boolean;
  isDisabled?: boolean;
  loadingText?: string;
  children: React.ReactNode;
};

export default function LoaderButton({
  children,
  isLoading,
  isDisabled,
  loadingText = "Please wait..",
  ...rest
}: LoaderButtonProps) {
  if (isLoading) {
    return (
      <Button isDisabled={true} {...rest}>
        <Spinner size="xs" className="!mr-1" />
        {isLoading ? loadingText : children}
      </Button>
    );
  }
  return (
    <Button isDisabled={isDisabled} {...rest}>
      {children}
    </Button>
  );
}
