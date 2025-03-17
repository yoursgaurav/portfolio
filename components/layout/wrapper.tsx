import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface WrapperProps<T extends ElementType = "div"> {
  as?: T;
  className?: string;
  children: ReactNode;
}

export default function Wrapper<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: WrapperProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        "mx-auto max-w-6xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
