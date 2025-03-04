// External dependencies
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

// Local layout components
import Wrapper from "./wrapper";

// Types
interface FooterLink {
  id: number;
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Constants
const FOOTER_LINKS: FooterLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/yoursgaurav",
    icon: Github,
  },
  {
    id: 2,
    name: "X",
    url: "https://x.com/heygauravshukla",
    icon: Twitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/heygauravshukla/",
    icon: Linkedin,
  },
];

const FOOTER_CONTENT = {
  brand: "gauravshukla",
  brandUrl: "/",
};

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-10 md:py-12 lg:py-14 xl:py-18">
      <Wrapper className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Brand */}
        <Link
          href={FOOTER_CONTENT.brandUrl}
          className="text-xl font-bold hover:underline md:text-2xl xl:text-3xl"
        >
          {FOOTER_CONTENT.brand}
        </Link>

        {/* Social Links */}
        <nav>
          <ul className="flex gap-5 md:gap-6">
            {FOOTER_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Icon className="size-5 xl:size-6" />
                    <span className="sr-only">{`Visit ${link.name} profile`}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Wrapper>
    </footer>
  );
}
