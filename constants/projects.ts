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
  };
  caseStudy?: {
    overview: string;
    challenges: string[];
    solutions: string[];
    outcome: string;
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
    },
    caseStudy: {
      overview:
        "Shortly is a URL shortening tool designed to simplify link sharing with a clean, accessible interface. Built as a solution to the Frontend Mentor challenge, it integrates the Spoo.me API for reliable shortening.",
      challenges: [
        "Ensuring accessibility across devices.",
        "Securing API key from network requests.",
        "Handling API rate limits efficiently.",
      ],
      solutions: [
        "Implemented ARIA labels and keyboard navigation for full accessibility.",
        "Utilized Next.js API routes to secure the API key on the server.",
        "Cached API responses in local storage to reduce API calls and improve performance.",
      ],
      outcome:
        "Achieved a Lighthouse score of 100 for performance, accessibility, and SEO, delivering a fast and inclusive user experience.",
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
    },
    caseStudy: {
      overview:
        "This tool tracks IP addresses in real-time, displaying location data on an interactive map using the IPify API.",
      challenges: [
        "Seamlessly integrating a third-party API.",
        "Optimizing map rendering performance on various devices.",
      ],
      solutions: [
        "Used the IPify API with robust error handling to ensure reliability.",
        "Optimized map updates with debouncing techniques to enhance performance.",
      ],
      outcome:
        "Attained a Lighthouse score of 99 with a 1.5-second load time, ensuring a smooth and efficient user experience.",
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
    },
    caseStudy: {
      overview:
        "A showcase of my skills and projects, designed to be responsive and accessible using Next.js and shadcn/ui.",
      challenges: [
        "Creating a consistent design system across all sections.",
        "Managing form submissions without a backend.",
      ],
      solutions: [
        "Built a custom component library with shadcn/ui for consistent styling.",
        "Integrated EmailJS for seamless contact form functionality without server-side code.",
      ],
      outcome:
        "Delivered a fully functional portfolio with a cohesive design and excellent user experience across devices.",
    },
  },
] as const;
