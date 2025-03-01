"use client";

// External dependencies (React, Next.js, and third-party libraries)
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

// Local UI components (Shadcn/UI)
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Local utilities and layout components
import { cn } from "@/lib/utils";
import Wrapper from "./wrapper";

// Types
interface NavigationItem {
  id: number;
  name: string;
  path: string;
}

// Constants
const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "#about-section" },
  { id: 3, name: "Projects", path: "#projects-section" },
  { id: 4, name: "Contact", path: "#contact-section" },
];

const AVATAR_CONFIG = {
  src: "/me.jpg",
  alt: "Gaurav Shukla's Profile Picture",
  fallback: "GS",
};

export default function Header() {
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile navigation menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 @container sticky top-0 z-50 w-full border-b backdrop-blur">
      <Wrapper className="flex items-center justify-between py-3 @5xl:py-4">
        {/* User logo */}
        <Link href="/" aria-label="Navigate to homepage">
          <Avatar className="size-10 @3xl:size-11">
            <AvatarImage src={AVATAR_CONFIG.src} alt={AVATAR_CONFIG.alt} />
            <AvatarFallback>{AVATAR_CONFIG.fallback}</AvatarFallback>
          </Avatar>
        </Link>

        {/* Navigation and Controls */}
        <div className="flex items-center gap-2 @3xl:gap-8 @5xl:gap-10 @7xl:gap-12">
          {/* Navigation */}
          <nav
            id="header-nav"
            className={cn(
              "@max-3xl:bg-background @max-3xl:absolute @max-3xl:inset-x-0 @max-3xl:top-full @max-3xl:border-y",
              { "@max-3xl:hidden": !isMenuOpen }
            )}
          >
            <ul className="grid @3xl:flex @3xl:items-center @3xl:gap-8 @5xl:gap-10 @7xl:gap-12">
              {NAVIGATION_ITEMS.map((link) => (
                <li
                  key={link.id}
                  className="@max-3xl:px-6 @max-3xl:py-4 @max-3xl:text-right @max-3xl:not-first:border-t"
                >
                  <Link
                    href={link.path}
                    className="text-muted-foreground hover:text-primary focus-visible:outline-primary text-sm font-bold tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-offset-2 transition-all @3xl:@max-5xl:text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Switch theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Navigation Toggler */}
          <Button
            variant="outline"
            size="icon"
            className="@3xl:hidden"
            onClick={toggleMenu}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="header-nav"
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
          </Button>
        </div>
      </Wrapper>
    </header>
  );
}
