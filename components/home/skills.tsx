// Local components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";

// Constants
import { skills } from "@/constants/skills";

export default function Skills() {
  return (
    <section id="skills-section" className="mt-32 scroll-mt-28">
      <Wrapper className="space-y-6">
        {/* Section Header */}
        <header>
          <TypographyH2>Skills</TypographyH2>
        </header>

        {/* Main Content */}
        <main>
          <ul className="flex flex-wrap items-center gap-4">
            {skills.map((skill) => {
              const Icon = skill.icon; // React component for the social icon
              return (
                <li
                  key={skill.name}
                  className="text-secondary-foreground hover:border-primary flex cursor-default items-center gap-2 rounded-full border px-4 py-2 transition-colors md:px-6 md:py-4"
                >
                  {Icon && <Icon className="size-4" aria-hidden="true" />}
                  <span className="text-sm font-semibold">{skill.name}</span>
                </li>
              );
            })}
          </ul>
        </main>
      </Wrapper>
    </section>
  );
}
