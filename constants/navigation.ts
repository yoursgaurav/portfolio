import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

export interface NavigationItem {
  name: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const websiteLinks: NavigationItem[] = [
  { name: "Home", url: "/" },
  { name: "Skills", url: "/#skills-section" },
  { name: "Projects", url: "/#projects-section" },
  { name: "Contact", url: "/#contact-section" },
] as const;

export const socialLinks: NavigationItem[] = [
  {
    name: "GitHub",
    url: "https://github.com/yoursgaurav",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/heygauravshukla",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/heygauravshukla",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/heygauravshukla",
    icon: FaInstagram,
  },
] as const;
