// External dependencies
import Link from "next/link";

// Local components
import TypographyH1 from "@/components/typography/typography-h1";
import Wrapper from "@/components/layout/wrapper";

export default function NotFound() {
  return (
    <section className="grid min-h-[85vh] content-center">
      <Wrapper className="grid gap-6 text-center md:gap-8 lg:gap-10">
        <TypographyH1>404 - Page Not Found</TypographyH1>
        <p className="text-muted-foreground text-lg">
          Oops! It looks like this page doesn’t exist.
        </p>
        <Link
          href="/"
          className="text-primary text-lg font-medium hover:underline"
        >
          Return Home
        </Link>
      </Wrapper>
    </section>
  );
}
