// External dependencies
import Link from "next/link";
import { Heart } from "lucide-react";

// Local components
import Wrapper from "./wrapper";

// Constants
import { socialLinks } from "@/constants/navigation";

export default function Footer() {
  // Get Twitter URL from socialLinks with fallback
  const { url: twitterLink } = socialLinks.find(
    (link) => link.name === "Twitter",
  ) || { url: "https://twitter.com/heygauravshukla" };

  return (
    <footer className="bg-secondary text-secondary-foreground mt-32">
      <Wrapper className="py-6">
        <p className="text-center leading-relaxed text-pretty">
          <span>
            Built with <span className="sr-only">love</span>
            <Heart
              className="fill-destructive inline stroke-transparent"
              aria-hidden="true"
            />{" "}
            and Next.js by
          </span>{" "}
          <Link
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary underline"
          >
            Gaurav Shukla
          </Link>
        </p>
      </Wrapper>
    </footer>
  );
}
