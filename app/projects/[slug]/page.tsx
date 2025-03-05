// External dependencies
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Local components
import Wrapper from "@/components/layout/wrapper";
import TypographyH1 from "@/components/typography/typography-h1";
import TypographyH2 from "@/components/typography/typography-h2";
import TypographyH3 from "@/components/typography/typography-h3";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

// Constants and data
import { projects, type Project } from "@/constants/projects";

// Case Study Card
function CSCard({
  title,
  paragraph,
  listItems,
}: {
  title: string;
  paragraph?: string;
  listItems?: string[];
}) {
  return (
    <div className="bg-card text-card-foreground grid gap-3 rounded-lg border p-6">
      <TypographyH3 className="text-primary">{title}</TypographyH3>
      {paragraph && (
        <p className="text-muted-foreground leading-relaxed tracking-wide text-pretty">
          {paragraph}
        </p>
      )}
      {listItems && (
        <ul className="grid list-disc gap-1 pl-5">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="text-muted-foreground leading-relaxed tracking-wide text-pretty"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // Explicitly type the project variable with Project
  const project: Project = projects.find((p) => p.slug === slug) || notFound();

  return (
    <section>
      <Wrapper className="grid gap-6 py-6">
        {/* Project Header */}
        <header className="bg-card text-card-foreground grid items-start gap-6 rounded-lg border p-6 shadow-md md:grid-cols-2 lg:gap-12">
          {/* Image gallery */}
          <section className="md:order-2 lg:self-end">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={project.images.preview.src}
                alt={project.images.preview.alt}
                width={400}
                height={300}
                className="size-full rounded-lg border object-cover object-top"
              />
            </AspectRatio>
          </section>

          {/* Overview */}
          <article className="grid gap-3 md:order-1 xl:gap-6">
            {/* Tech stack */}
            <ul className="flex flex-wrap gap-3 xl:gap-6">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="text-muted-foreground text-xs font-medium tracking-wide uppercase"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {/* Title */}
            <TypographyH1 className="text-primary">
              {project.title}
            </TypographyH1>
            {/* Description  */}
            <p className="text-muted-foreground leading-relaxed tracking-wide lg:text-lg">
              {project.description}
            </p>
            {/* Button group */}
            <div className="flex items-center gap-3 xl:gap-6">
              <Button asChild variant="default">
                <Link
                  href={project.urls.liveSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link
                  href={project.urls.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </Link>
              </Button>
            </div>
          </article>
        </header>

        {/* Project content */}
        <main>
          {/* Case Study (if available) */}
          {project.caseStudy && (
            <>
              <TypographyH2 className="sr-only">Case Study</TypographyH2>
              <section className="grid items-start gap-6 md:grid-cols-2">
                {/* Overview */}
                <CSCard
                  title="Overview"
                  paragraph={project.caseStudy.overview}
                />

                {/* Challenges */}
                <CSCard
                  title="Challenges"
                  listItems={project.caseStudy.challenges}
                />

                {/* Solutions */}
                <CSCard
                  title="Solutions"
                  listItems={project.caseStudy.solutions}
                />

                {/* Outcome */}
                <CSCard
                  title="Outcomes"
                  paragraph={project.caseStudy.outcome}
                />
              </section>
            </>
          )}
        </main>
      </Wrapper>
    </section>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
