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
      className={cn("text-2xl font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}
