import {
  Chrome,
  GitBranch,
  ListChecks,
  MonitorSmartphone,
  PersonStanding,
  Target,
} from "lucide-react";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa6";
import {
  RiNextjsFill,
  RiSeoLine,
  RiTailwindCssFill,
  RiVercelFill,
} from "react-icons/ri";
import { SiNetlify } from "react-icons/si";

export interface SkillItem {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const skills: SkillItem[] = [
  // Core Languages
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: BiLogoTypescript },

  // Frameworks/Libraries
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },

  // Version Control/Deployment
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vercel", icon: RiVercelFill },
  { name: "Netlify", icon: SiNetlify },

  // Design/Tools
  { name: "Figma", icon: FaFigma },

  // Development Practices
  { name: "API integration", icon: GitBranch },
  { name: "Attention to detail", icon: Target },
  { name: "Responsive design", icon: MonitorSmartphone },
  { name: "Cross-browser compatibility", icon: Chrome },
  { name: "Accessibility", icon: PersonStanding },
  { name: "SEO", icon: RiSeoLine },
  { name: "Agile methodology", icon: ListChecks },
];
