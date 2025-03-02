import { cn } from "@/lib/utils";

interface TypographyH2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH2({
  className,
  children,
  ...props
}: TypographyH2Props) {
  return (
    <h2
      className={cn(
        "text-[clamp(1.5rem,1.107rem+1.964vw,2.875rem)]/tight font-bold tracking-tight text-balance",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
