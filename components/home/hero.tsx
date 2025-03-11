// External dependencies
import Link from "next/link";

// Local components
import Wrapper from "../layout/wrapper";
import TypographyH1 from "../typography/typography-h1";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Constants
import { AVATAR_CONFIG, HERO_CONTENT } from "@/constants/hero";
import { socialLinks } from "@/constants/navigation";

export default function Hero() {
  return (
    <section>
      <Wrapper className="py-7">
        <article className="max-w-2xl space-y-7">
          {/* Avatar */}
          <Avatar className="size-16">
            <AvatarImage src={AVATAR_CONFIG.src} alt={AVATAR_CONFIG.alt} />
            <AvatarFallback>{AVATAR_CONFIG.fallback}</AvatarFallback>
          </Avatar>

          {/* Hero Title */}
          <TypographyH1>{HERO_CONTENT.title}</TypographyH1>

          {/* Hero Description */}
          <p className="text-muted-foreground text-base/7">
            {HERO_CONTENT.description}
          </p>

          {/* Social Links Navigation */}
          <ul className="flex items-center gap-7">
            {socialLinks.map((link) => {
              const Icon = link.icon; // React component for the social icon
              return (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Icon ? (
                      <Icon
                        className="text-muted-foreground hover:text-primary size-5 transition-colors"
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </span> // Fallback if no icon
                    )}
                    <span className="sr-only">{`Visit ${link.name} profile`}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      </Wrapper>
    </section>
  );
}
