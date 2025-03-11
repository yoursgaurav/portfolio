// Local components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";

// Constants
import { skills } from "@/constants/skills";

export default function Skills() {
  return (
    <section id="skills-section">
      <Wrapper className="space-y-7 py-15 sm:py-19">
        {/* Section Header */}
        <header>
          <TypographyH2>Skills</TypographyH2>
        </header>

        {/* Main Content */}
        <main>
          <ul className="flex flex-wrap items-center gap-3 md:gap-4">
            {skills.map((skill) => {
              const Icon = skill.icon; // React component for the social icon
              return (
                <li
                  key={skill.name}
                  className="bg-secondary text-secondary-foreground flex items-center gap-2 rounded-md px-5 py-3 md:px-6 md:py-4"
                >
                  {Icon && <Icon className="size-5" aria-hidden="true" />}
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
