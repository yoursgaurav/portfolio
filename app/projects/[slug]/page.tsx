// External dependencies
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { ArrowLeft, Mail } from "lucide-react";

// Local components
import Wrapper from "@/components/layout/wrapper";
import TypographyH1 from "@/components/typography/typography-h1";
import TypographyH2 from "@/components/typography/typography-h2";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

// Constants
import { projects, type Project } from "@/constants/projects";

function Article({
  title,
  paragraph,
  listItems,
  children,
}: {
  title: string;
  paragraph?: string;
  listItems?: string[];
  children?: ReactNode;
}) {
  return (
    <article className="space-y-4">
      <TypographyH2 className="text-xl sm:text-2xl">{title}</TypographyH2>
      {paragraph && (
        <p className="text-muted-foreground text-pretty">{paragraph}</p>
      )}
      {listItems && (
        <ul className="list-disc space-y-2 pl-8">
          {listItems.map((item, index) => (
            <li key={index} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      )}
      {children}
    </article>
  );
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project: Project = projects.find((p) => p.slug === slug) || notFound();

  return (
    <section className="mt-24">
      <Wrapper className="space-y-10">
        {/* Back Button */}
        <Button asChild variant="secondary" size="icon">
          <Link href="/#projects-section" aria-label="Back to Projects">
            <ArrowLeft />
          </Link>
        </Button>

        {/* Content */}
        <div className="mx-auto max-w-2xl space-y-10">
          <header className="space-y-10">
            <article className="space-y-6">
              <TypographyH1>{project.title}</TypographyH1>
              <p className="text-muted-foreground text-pretty">
                {project.description}
              </p>
              <div className="space-x-4">
                <Button asChild>
                  <Link
                    href={project.overview.links.liveSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live site for ${project.title}`}
                  >
                    View Live
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link
                    href={project.overview.links.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${project.title}`}
                  >
                    Source Code
                  </Link>
                </Button>
              </div>
            </article>
            <AspectRatio ratio={4 / 3}>
              <Image
                src={project.overview.preview.src}
                alt={project.overview.preview.alt}
                fill
                priority
                sizes="(max-width: 672px) 100vw, 672px"
                className="rounded-md object-cover object-top"
              />
            </AspectRatio>
          </header>

          <main className="space-y-10">
            <Article
              title="Challenges"
              listItems={project.overview.challenges}
            />
            <Article title="Results" paragraph={project.overview.results} />
            <Article title="Built With" listItems={project.process.builtWith} />
            <Article
              title="What I Learned"
              listItems={project.process.whatILearned}
            />
            <Article
              title="Lighthouse Score"
              paragraph="Performance metrics from Google Chrome's Lighthouse audit:"
            >
              <figure className="space-y-4">
                <Image
                  src={project.lighthouse.screenshot.src}
                  alt={project.lighthouse.screenshot.alt}
                  width={500}
                  height={150}
                  className="h-auto w-full rounded-md"
                />
                <figcaption className="text-muted-foreground">
                  <ul className="list-none space-y-2">
                    {project.lighthouse.highlights.map((highlight, index) => (
                      <li key={index}>✓ {highlight}</li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            </Article>
          </main>

          <footer>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contact-section">
                <Mail /> Get in Touch
              </Link>
            </Button>
          </footer>
        </div>
      </Wrapper>
    </section>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
