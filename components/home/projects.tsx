// External dependencies
import Link from "next/link";
import Image from "next/image";

// Local components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";
import TypographyH3 from "../typography/typography-h3";
import { AspectRatio } from "../ui/aspect-ratio";

// Constants
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects-section" className="mt-32 scroll-mt-28">
      <Wrapper className="space-y-6">
        {/* Section Header */}
        <header>
          <TypographyH2>Projects</TypographyH2>
        </header>

        {/* Main Content */}
        <main>
          {/* Projects List */}
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-4 md:gap-8">
            {projects.map((project) => (
              // Project Card
              <li
                key={project.slug}
                className="bg-card text-card-foreground overflow-hidden rounded-md border shadow-md"
              >
                {/* Project Image */}
                <Link href={`/projects/${project.slug}`}>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={project.overview.preview.src}
                      alt={project.overview.preview.alt}
                      width={400}
                      height={300}
                      className="size-full object-cover object-top transition-all duration-300 hover:scale-106"
                    />
                  </AspectRatio>
                </Link>

                {/* Project Details */}
                <div className="space-y-2 p-4">
                  {/* Project Title */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block"
                  >
                    <TypographyH3 className="line-clamp-1 hover:underline">
                      {project.title}
                    </TypographyH3>
                  </Link>

                  {/* Project Description */}
                  <p className="text-muted-foreground line-clamp-4">
                    {project.description}
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
