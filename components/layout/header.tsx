"use client";

// External libraries
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

// Local shadcn/ui components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Local utilities
import { cn } from "@/lib/utils";

// Local layout components
import Wrapper from "./wrapper";

interface NavigationItem {
  id: number;
  name: string;
  path: string;
}

const navigation: NavigationItem[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "#about-section" },
  { id: 3, name: "Projects", path: "#projects-section" },
  { id: 4, name: "Contact", path: "#contact-section" },
];

export default function Header() {
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 @container sticky top-0 z-50 w-full border-b backdrop-blur">
      <Wrapper className="flex items-center justify-between py-3 @5xl:py-4">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Avatar className="size-10 @3xl:size-11">
            <AvatarImage src="/me.jpg" alt="Gaurav Shukla's DP" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
        </Link>
        {/* Navigation and togglers */}
        <div className="flex items-center gap-2 @3xl:gap-8 @5xl:gap-10 @7xl:gap-12">
          {/* Navigation */}
          <nav
            id="header-nav"
            className={cn(
              "@max-3xl:bg-background @max-3xl:absolute @max-3xl:inset-x-0 @max-3xl:top-full @max-3xl:border-y",
              {
                "@max-3xl:hidden": !isMenuOpen,
              }
            )}
          >
            <ul className="grid @3xl:flex @3xl:items-center @3xl:gap-8 @5xl:gap-10 @7xl:gap-12">
              {navigation.map((link) => (
                <li
                  key={link.id}
                  className="@max-3xl:px-6 @max-3xl:py-4 @max-3xl:text-right @max-3xl:not-first:border-t"
                >
                  <Link
                    href={link.path}
                    className="text-accent-foreground focus-visible:outline-primary text-sm font-bold tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-offset-2 @3xl:@max-5xl:text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Theme toggler */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
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
          {/* Navigation toggler */}
          <Button
            variant="outline"
            size="icon"
            className="@3xl:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
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
