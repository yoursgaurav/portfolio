// External dependencies
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Local UI components (Shadcn/UI)
import { Button } from "../ui/button";

// Local layout and typography components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";
import TypographyH3 from "../typography/typography-h3";

// Types
interface SkillItem {
  id: number;
  name: string;
}

// Constants
const BIO_CONTENT = {
  title: "About Me",
  subtitle: "Discover my journey as a developer",
  intro: `
    I'm a dedicated web developer passionate about crafting intuitive and
    high-performance applications. With extensive experience in front-end
    development, I specialize in turning complex requirements into elegant,
    maintainable code that prioritizes user experience. My approach combines
    technical expertise with creative problem-solving to deliver solutions
    that make a real impact.
  `,
  ctaText: "Contact Me",
  ctaLink: "#contact-section",
};

const SKILLS: SkillItem[] = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React" },
  { id: 5, name: "Next.js" },
  { id: 6, name: "TypeScript" },
  { id: 7, name: "Tailwind CSS" },
  { id: 8, name: "Git" },
  { id: 9, name: "GitHub" },
  { id: 10, name: "Vercel" },
  { id: 11, name: "Netlify" },
  { id: 12, name: "Figma" },
  { id: 13, name: "API Integration" },
  { id: 14, name: "Responsive Design" },
  { id: 15, name: "Accessibility" },
  { id: 16, name: "SEO" },
];

export default function About() {
  return (
    <section
      id="about-section"
      className="scroll-my-16 py-6 md:py-8 lg:py-10 xl:py-12"
    >
      <Wrapper className="grid gap-10 md:gap-12 lg:gap-14 xl:gap-16">
        {/* Section Header */}
        <header className="grid max-w-md gap-2">
          <TypographyH2>
            <span className="border-primary border-b-3">
              {BIO_CONTENT.title}
            </span>
          </TypographyH2>
          <p className="text-muted-foreground text-pretty">
            {BIO_CONTENT.subtitle}
          </p>
        </header>

        {/* Main Content */}
        <main className="grid gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-22">
          <article className="grid max-w-md content-start gap-3 md:max-w-lg lg:max-w-xl lg:gap-4">
            <TypographyH3>Who I Am</TypographyH3>
            <p className="text-muted-foreground leading-relaxed tracking-wide text-pretty">
              {BIO_CONTENT.intro.trim()}
            </p>
            <Button asChild className="mt-2 w-fit">
              <Link href={BIO_CONTENT.ctaLink}>
                {BIO_CONTENT.ctaText} <ArrowRight />
              </Link>
            </Button>
          </article>

          <section className="grid max-w-md content-start gap-3 md:max-w-lg lg:max-w-xl lg:gap-4">
            <TypographyH3>Technical Skills</TypographyH3>
            <ul className="mt-2 flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <li
                  key={skill.id}
                  className="bg-muted text-muted-foreground rounded px-4 py-2 text-sm font-medium"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </Wrapper>
    </section>
  );
}
