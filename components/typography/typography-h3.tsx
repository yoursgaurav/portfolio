import { cn } from "@/lib/utils";

interface TypographyH3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH3({
  className,
  children,
  ...props
}: TypographyH3Props) {
  return (
    <h3
      className={cn(
        "text-[clamp(1.25rem,1.071rem+0.892vw,1.875rem)]/tight font-bold tracking-tight text-balance",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
