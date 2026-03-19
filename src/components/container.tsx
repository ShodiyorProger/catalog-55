import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ContainerType = "left" | "right" | "default";

export const Container = ({
  className,
  children,
  type = "default",
  ...props
}: ComponentProps<"div"> & { type?: ContainerType }) => {
  return (
    <div
      data-type={type}
      className={cn(
        "mx-auto",
        {
          "w-full overflow-x-hidden pl-container-left": type === "left",
          "w-full overflow-x-hidden pr-container-left": type === "right",
          "w-container px-container": type === "default",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};