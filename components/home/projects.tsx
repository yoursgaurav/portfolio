// External dependencies
import Link from "next/link";
import Image from "next/image";

// Local UI components (Shadcn/UI)
import { AspectRatio } from "../ui/aspect-ratio";

// Local layout and typography components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";
import TypographyH3 from "../typography/typography-h3";

// Constants and data
import { projects } from "@/constants/projects";

const SECTION_HEADER = {
  title: "My Projects",
  subtitle: "Discover projects that I have built",
};

export default function Projects() {
  return (
    <section id="projects-section" className="scroll-my-16 py-12 md:py-16">
      <Wrapper className="grid gap-10 md:gap-12 lg:gap-14">
        {/* Section Header */}
        <header className="grid max-w-md gap-2">
          <TypographyH2>
            <span className="border-primary border-b-3">
              {SECTION_HEADER.title}
            </span>
          </TypographyH2>
          <p className="text-muted-foreground text-pretty">
            {SECTION_HEADER.subtitle}
          </p>
        </header>

        {/* Project List */}
        <main>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li
                key={project.slug}
                className="bg-card text-card-foreground overflow-hidden rounded-lg border shadow-md"
              >
                {/* Project Image */}
                <Link
                  href={project.urls.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={project.images.preview.src}
                      alt={project.images.preview.alt}
                      width={400}
                      height={300}
                      className="size-full object-cover object-top transition-all duration-300 hover:scale-105"
                    />
                  </AspectRatio>
                </Link>

                {/* Project Details */}
                <div className="grid gap-3 p-6">
                  <Link
                    href={project.urls.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TypographyH3 className="line-clamp-1 transition-all duration-300 hover:underline">
                      {project.title}
                    </TypographyH3>
                  </Link>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="text-primary text-xs font-semibold uppercase"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground line-clamp-4 leading-relaxed text-pretty">
                    {project.description.trim()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </Wrapper>
    </section>
  );
}
