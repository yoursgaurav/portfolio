// External dependencies
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Local UI components
import { Button } from "../ui/button";

// Local Layout components
import Wrapper from "../layout/wrapper";
import TypographyH1 from "../typography/typography-h1";

// Constants
const HERO_CONTENT = {
  name: "Gaurav Shukla",
  title: "Frontend Developer",
  description: `
    I'm a skilled Frontend developer specializing in creating accessible,
    responsive, and SEO-optimized web applications. I’m driven by a passion
    for mastering new technologies and delivering high-quality user
    experiences.
  `,
  ctaText: "View Projects",
  ctaLink: "#projects-section",
};

const BLOB_CONFIG = {
  clipPath: `
    polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%,
    72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%,
    27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%,
    74.1% 44.1%)
  `,
  gradient: "bg-linear-to-tr from-primary to-secondary",
  opacity: "opacity-30",
};

export default function Hero() {
  return (
    <section>
      <Wrapper className="relative isolate">
        {/* Top Decorative Blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{ clipPath: BLOB_CONFIG.clipPath }}
            className={`relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] ${BLOB_CONFIG.gradient} ${BLOB_CONFIG.opacity} sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]`}
          />
        </div>

        {/* Hero Content */}
        <main className="max-w-md py-20 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <article className="grid gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <TypographyH1>
              Nice to meet you! I&apos;m{" "}
              <span className="border-primary border-b-4 md:border-b-5 lg:border-b-6">
                {HERO_CONTENT.name}
              </span>
              .
            </TypographyH1>
            <p className="text-muted-foreground text-[clamp(1rem,0.96rem+0.17vw,1.125rem)]/relaxed font-medium text-pretty">
              {HERO_CONTENT.description.trim()}
            </p>
            <Button asChild size="lg" className="w-fit">
              <Link href={HERO_CONTENT.ctaLink}>
                {HERO_CONTENT.ctaText} <ArrowRight />
              </Link>
            </Button>
          </article>
        </main>

        {/* Bottom Decorative Blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{ clipPath: BLOB_CONFIG.clipPath }}
            className={`relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 ${BLOB_CONFIG.gradient} ${BLOB_CONFIG.opacity} sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]`}
          />
        </div>
      </Wrapper>
    </section>
  );
}
