import { FaTasks } from "react-icons/fa";
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
import { BiLogoTypescript } from "react-icons/bi";
import { PiPlugsFill } from "react-icons/pi";
import { MdImportantDevices } from "react-icons/md";
import { IoAccessibility } from "react-icons/io5";

export interface SkillItem {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const skills: SkillItem[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "TypeScript", icon: BiLogoTypescript },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vercel", icon: RiVercelFill },
  { name: "Netlify", icon: SiNetlify },
  { name: "Figma", icon: FaFigma },
  { name: "API integration", icon: PiPlugsFill },
  { name: "Responsive design", icon: MdImportantDevices },
  { name: "Accessibility", icon: IoAccessibility },
  { name: "SEO", icon: RiSeoLine },
  { name: "Agile Methodology", icon: FaTasks },
];
