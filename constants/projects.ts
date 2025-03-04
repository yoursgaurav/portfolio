export interface Project {
  slug: string;
  title: string;
  description: string;
  images: {
    preview: { src: string; alt: string; width: number; height: number };
  };
  techStack: string[];
  urls: {
    sourceCodeUrl: string | "#";
    liveSiteUrl: string | "#";
    caseStudyUrl: string | "#";
  };
}

export const projects: Project[] = [
  {
    slug: "shortly",
    title: "Shortly - URL Shortener",
    description:
      "A responsive URL-shortening app with ARIA labels for accessibility compliance.",
    images: {
      preview: {
        src: "/projects/shortly/desktop-preview.jpg",
        alt: "Shortly preview",
        width: 400,
        height: 300,
      },
    },
    techStack: ["React", "Next.js", "Tailwind CSS"],
    urls: {
      sourceCodeUrl: "https://github.com/yoursgaurav/shortly",
      liveSiteUrl: "https://shortly-by-yoursgaurav.vercel.app",
      caseStudyUrl: "https://github.com/yoursgaurav/shortly",
    },
  },
  {
    slug: "ip-address-tracker",
    title: "IP Address Tracker",
    description:
      "A real-time IP tracking tool with a responsive, device-optimized design.",
    images: {
      preview: {
        src: "/projects/ip-address-tracker/desktop-preview.jpg",
        alt: "IP Address Tracker preview",
        width: 400,
        height: 300,
      },
    },
    techStack: ["React", "Next.js", "Tailwind CSS"],
    urls: {
      sourceCodeUrl: "https://github.com/yoursgaurav/ip-address-tracker",
      liveSiteUrl: "https://ip-address-tracker-by-yoursgaurav.vercel.app",
      caseStudyUrl: "https://github.com/yoursgaurav/ip-address-tracker",
    },
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with Next.js and shadcn/ui.",
    images: {
      preview: {
        src: "/projects/portfolio/desktop-preview.png",
        alt: "Portfolio preview",
        width: 400,
        height: 300,
      },
    },
    techStack: ["React", "Next.js", "Tailwind CSS"],
    urls: {
      sourceCodeUrl: "https://github.com/yoursgaurav/portfolio",
      liveSiteUrl: "https://heygauravshukla.vercel.app",
      caseStudyUrl: "https://github.com/yoursgaurav/portfolio",
    },
  },
] as const;
