// External dependencies
import Link from "next/link";

// Local components
import Wrapper from "@/components/layout/wrapper";
import TypographyH1 from "@/components/typography/typography-h1";

export default function NotFound() {
  return (
    <section className="min-h-screen content-center">
      <Wrapper className="mx-auto max-w-2xl space-y-6 text-center">
        <TypographyH1>404 - Page Not Found</TypographyH1>
        <p className="text-muted-foreground">
          Oops! It looks like this page doesn’t exist.
        </p>
        <Link href="/" className="text-primary font-medium hover:underline">
          Return Home
        </Link>
      </Wrapper>
    </section>
  );
}
