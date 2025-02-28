import Link from "next/link";
import Wrapper from "../layout/wrapper";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section>
      <Wrapper className="relative isolate">
        {/* Top blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* Text box */}
        <div className="max-w-md py-20 md:max-w-lg md:py-24 lg:max-w-xl lg:py-28 xl:max-w-2xl">
          <div className="grid gap-4 lg:gap-5">
            <h1 className="text-[clamp(2rem,1.2857142857142858rem+3.571428571428571vw,4.5rem)] leading-tight font-semibold tracking-tight text-balance">
              Nice to meet you! I'm Gaurav Shukla
            </h1>
            <p className="text-muted-foreground text-[clamp(1rem,0.9285714285714286rem+0.35714285714285715vw,1.25rem)] font-medium text-pretty md:leading-7 lg:leading-8">
              A Frontend developer skilled in building accessible, responsive,
              and SEO-optimized web applications. Passionate about learning new
              tools.
            </p>
            <Button asChild size="lg" className="w-fit">
              <Link href="#projects-section">
                View Projects <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
        {/* Bottom blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </Wrapper>
    </section>
  );
}
