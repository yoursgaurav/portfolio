import { Github, Twitter, Linkedin } from "lucide-react";

export interface NavigationItem {
  name: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const websiteLinks: NavigationItem[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "/#about-section" },
  { name: "Projects", url: "/#projects-section" },
  { name: "Contact", url: "/#contact-section" },
] as const;

export const socialLinks: NavigationItem[] = [
  {
    name: "GitHub",
    url: "https://github.com/yoursgaurav",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/heygauravshukla",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/heygauravshukla",
    icon: Linkedin,
  },
] as const;
