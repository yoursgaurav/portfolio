// External dependencies
import Link from "next/link";

// Local layout components
import Wrapper from "./wrapper";

// Constants and data
import { socialLinks } from "@/constants/navigation";

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
            {socialLinks.map((link) => {
              const Icon = link.icon; // Type: ComponentType | undefined
              return (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {Icon ? (
                      <Icon className="size-5 xl:size-6" />
                    ) : (
                      <span>{link.name}</span> // Fallback if no icon
                    )}
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
