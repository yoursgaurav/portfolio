// External dependencies
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

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
    <footer className="bg-muted text-muted-foreground">
      <Wrapper className="py-7">
        <p className="text-center leading-relaxed text-pretty">
          <span>
            Built with <span className="sr-only">love</span>
            <FaHeart
              className="text-destructive inline"
              aria-hidden="true"
            />{" "}
            and too much React by
          </span>{" "}
          <Link
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary tracking-tight underline"
          >
            Gaurav Shukla
          </Link>
        </p>
      </Wrapper>
    </footer>
  );
}
