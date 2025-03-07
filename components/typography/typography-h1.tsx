import { cn } from "@/lib/utils";

interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH1({
  className,
  children,
  ...props
}: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight sm:text-5xl/15",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
