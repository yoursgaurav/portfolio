// External dependencies
import Link from "next/link";
import Image from "next/image";

// Local UI components (Shadcn/UI)
import { AspectRatio } from "../ui/aspect-ratio";

// Local layout and typography components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";
import TypographyH3 from "../typography/typography-h3";

// Types
interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  techStack: string[];
  url: string;
}

// Constants
const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Shortly - URL Shortener",
    description: `
      Built a responsive URL-shortening app with ARIA labels for accessibility compliance.
      Integrated Next.js API routes for secure, efficient data processing. Achieved a
      Lighthouse score of 100 for performance, accessibility, and SEO.
    `,
    image: {
      src: "/projects/shortly/desktop-preview.jpg",
      alt: "Shortly - URL Shortener preview",
    },
    techStack: ["React", "Next.js", "Tailwind CSS"],
    url: "https://github.com/yoursgaurav/shortly",
  },
  {
    id: 2,
    title: "IP Address Tracker",
    description: `
      Created a real-time IP tracking tool with a responsive, device-optimized design.
      Utilized IPify API to provide accurate location data, improving functionality.
      Attained a Lighthouse score of 99 with a 1.5-second load time.
    `,
    image: {
      src: "/projects/ip-address-tracker/desktop-preview.jpg",
      alt: "IP Address Tracker preview",
    },
    techStack: ["React", "Next.js", "Tailwind CSS"],
    url: "https://github.com/yoursgaurav/ip-address-tracker",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: `
      Created my own portfolio website using Next.js and Shadcn/UI. The website is fully
      responsive and optimized for performance. It showcases my projects, skills, and
      contact information.
    `,
    image: {
      src: "/projects/portfolio/desktop-preview.png",
      alt: "Portfolio website preview",
    },
    techStack: ["React", "Next.js", "Tailwind CSS"],
    url: "https://github.com/yoursgaurav/portfolio",
  },
];

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
            {PROJECTS.map((project) => (
              <li
                key={project.id}
                className="bg-card text-card-foreground overflow-hidden rounded-lg border shadow-md"
              >
                {/* Project Image */}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={400}
                      height={300}
                      className="size-full object-cover object-top transition-all duration-300 hover:scale-105"
                    />
                  </AspectRatio>
                </Link>

                {/* Project Details */}
                <div className="grid gap-3 p-6">
                  <Link
                    href={project.url}
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
