import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export const buttonVariants = cva(
  "inline-block px-10 py-1.5 cursor-pointer border text-[16px] leading-[28px]",
  {
    variants: {
      variant: {
        black: "border-black text-white bg-black",
        default: "bg-transparent border-black text-black",
      },
      rounded: {
        full: "rounded-full",
        default: "rounded-[8px]",
      },
      size: {
        xl: "text-[26px] leading-[38px]",
        lg: "text-[22px] leading-[34px]",
        md: "text-[18px] leading-[32px]",
        sm: "text-[16px] leading-[28px]",
        xs: "text-[14px] leading-[24px]",
      }
    },

    defaultVariants: {
      rounded: "default",
      variant: "default",
    },
  },
);

export const Button = ({
  children,
  className,
  type = "button",
  variant,
  rounded,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, rounded }))}
      {...props}
    >
      {children}
    </button>
  );
};
