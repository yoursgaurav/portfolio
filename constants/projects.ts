export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: {
    challenges: string[];
    preview: {
      src: string;
      alt: string;
    };
    links: {
      sourceCodeUrl: string;
      liveSiteUrl: string;
    };
    results: string;
  };
  process: {
    builtWith: string[];
    whatILearned: string[];
  };
  lighthouse: {
    screenshot: {
      src: string;
      alt: string;
    };
    highlights: string[];
  };
}

export const projects: readonly Project[] = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "A responsive and accessible portfolio website built with Next.js to professionally showcase development skills and project accomplishments",
    overview: {
      challenges: [
        "Create a fully responsive layout that must adapt seamlessly across all device sizes and screen resolutions.",
        "Support user-preferred light and dark mode color schemes for enhanced viewing comfort.",
        "Incorporate WCAG-compliant accessibility features to ensure usability for people with disabilities.",
        "Provide complete keyboard navigation support for improved accessibility and user experience.",
      ],
      preview: {
        src: "/projects/personal-portfolio/desktop-preview.png",
        alt: "Screenshot of Personal Portfolio homepage",
      },
      links: {
        sourceCodeUrl: "https://github.com/yoursgaurav/portfolio",
        liveSiteUrl: "https://heygauravshukla.vercel.app",
      },
      results:
        "Successfully deployed in 5 days achieving perfect Lighthouse scores across all categories",
    },
    process: {
      builtWith: [
        "Next.js - React framework for production-grade web applications",
        "shadcn/ui - Accessible and customizable UI component library",
        "TypeScript - JavaScript with static typing capabilities",
        "Tailwind CSS - Utility-first CSS framework for rapid development",
        "Lucide - Consistent and beautiful icon library",
        "EmailJS - Client-side email integration service",
      ],
      whatILearned: [
        "Developed an efficient custom component library using shadcn/ui for reusable UI elements.",
        "Integrated EmailJS to create functional contact forms without server-side infrastructure.",
        "Applied TypeScript for type-safe component props and form data handling.",
        "Organized content in a centralized constants directory for easier maintenance.",
        "Implemented Next.js static site generation for consistent project case study pages.",
      ],
    },
    lighthouse: {
      screenshot: {
        src: "/projects/personal-portfolio/lighthouse-scores.png",
        alt: "Lighthouse audit results for Personal Portfolio",
      },
      highlights: [
        "Performance: 100",
        "Accessibility: 100",
        "Best Practices: 100",
        "SEO: 100",
      ],
    },
  },
  {
    slug: "shortly",
    title: "Shortly - URL Shortener",
    description:
      "A fast and reliable URL shortening service built with Next.js and integrated with the Spoo.me API",
    overview: {
      challenges: [
        "Design a responsive layout that needs to maintain optimal display across various screen sizes.",
        "Enable instant shortening of any valid URL with minimal user interaction.",
        "Persist shortened links across browser sessions for consistent user access.",
        "Implement one-click copy-to-clipboard functionality for improved user convenience.",
        "Provide input validation with clear error messaging for empty form submissions.",
      ],
      preview: {
        src: "/projects/shortly/desktop-preview.jpg",
        alt: "Screenshot of Shortly URL Shortener homepage",
      },
      links: {
        sourceCodeUrl: "https://github.com/yoursgaurav/shortly",
        liveSiteUrl: "https://shortly-by-yoursgaurav.vercel.app",
      },
      results:
        "Deployed in 2 weeks with excellent Lighthouse performance scores",
    },
    process: {
      builtWith: [
        "Next.js - React framework for production-grade web applications",
        "shadcn/ui - Accessible and customizable UI component library",
        "TypeScript - JavaScript with static typing capabilities",
        "Tailwind CSS - Utility-first CSS framework for rapid development",
        "Lucide - Consistent and beautiful icon library",
        "Spoo.me API - External service for URL shortening",
      ],
      whatILearned: [
        "Built a reusable component library using shadcn/ui for consistent UI development.",
        "Created utility functions with tailwind-merge and clsx for dynamic class management.",
        "Explored and implemented new features from Tailwind CSS v4.",
        "Ensured type safety across the application using TypeScript.",
        "Utilized React components for dynamic icon property modifications.",
        "Implemented Next.js API routes for efficient server-side functionality.",
        "Leveraged localStorage for persistent data without a backend database.",
        "Adopted pnpm for faster package management and reduced disk usage.",
      ],
    },
    lighthouse: {
      screenshot: {
        src: "/projects/shortly/lighthouse-scores.png",
        alt: "Lighthouse audit results for Shortly URL Shortener",
      },
      highlights: [
        "Performance: 100",
        "Accessibility: 96 - Limited by designer-provided color choices.",
        "Best Practices: 100",
        "SEO: 100",
      ],
    },
  },
  {
    slug: "ip-address-tracker",
    title: "IP Address Tracker",
    description:
      "An IP tracking application with real-time location mapping built using Next.js and Leaflet.js",
    overview: {
      challenges: [
        "Optimize layout responsiveness to ensure consistent display across different devices.",
        "Implement hover states for all interactive elements to enhance user feedback.",
        "Display user's IP address and location automatically upon initial page load.",
        "Develop search functionality to lookup and map any IP address or domain.",
      ],
      preview: {
        src: "/projects/ip-address-tracker/desktop-preview.jpg",
        alt: "Screenshot of IP Address Tracker homepage",
      },
      links: {
        sourceCodeUrl: "https://github.com/yoursgaurav/ip-address-tracker",
        liveSiteUrl: "https://ip-address-tracker-by-yoursgaurav.vercel.app",
      },
      results: "Deployed in 1 week with strong Lighthouse performance metrics",
    },
    process: {
      builtWith: [
        "Next.js - React framework for production-grade web applications",
        "Tailwind CSS - Utility-first CSS framework for rapid development",
        "Leaflet.js - Library for interactive map generation and rendering",
      ],
      whatILearned: [
        "Integrated external APIs into Next.js with proper response handling.",
        "Implemented interactive mapping features using Leaflet.js library.",
        "Secured API keys using environment variables to prevent exposure.",
        "Utilized Next.js SSR for secure API requests and data fetching.",
      ],
    },
    lighthouse: {
      screenshot: {
        src: "/projects/ip-address-tracker/lighthouse-scores.png",
        alt: "Lighthouse audit results for IP Address Tracker",
      },
      highlights: [
        "Performance: 100",
        "Accessibility: 91 - Limited by designer color contrast ratios.",
        "Best Practices: 96 - Affected by map library image resolutions.",
        "SEO: 100",
      ],
    },
  },
] as const;
