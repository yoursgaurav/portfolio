// External dependencies
import Link from "next/link";
import { Rabbit } from "lucide-react";

// Local components
import Wrapper from "@/components/layout/wrapper";
import TypographyH1 from "@/components/typography/typography-h1";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mt-32 content-center">
      <Wrapper className="mx-auto grid max-w-2xl justify-items-center gap-4 text-center md:gap-6">
        <Rabbit className="size-24 stroke-1 lg:size-36" aria-hidden="true" />
        <TypographyH1>Page not found</TypographyH1>
        <p className="text-muted-foreground text-pretty">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button asChild variant="outline">
          <Link href="/">Go back home</Link>
        </Button>
      </Wrapper>
    </section>
  );
}
