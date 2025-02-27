"use client";

// External libraries
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Local shadcn/ui components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="@container sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Wrapper className="flex items-center justify-between py-3 @5xl:py-4">
        {/* Logo */}
        <Link href="/">
          <Avatar className="size-10 @3xl:size-11">
            <AvatarImage src="/me.jpg" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
        </Link>
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
        {/* Navigation */}
        <nav
          id="header-nav"
          className={cn(
            "@max-3xl:absolute @max-3xl:top-full @max-3xl:inset-x-0 @max-3xl:bg-background @max-3xl:border-y",
            {
              "@max-3xl:hidden": !isMenuOpen,
            }
          )}
        >
          <ul className="grid @3xl:flex @3xl:items-center @3xl:gap-8 @5xl:gap-10 @6xl:gap-11 @7xl:gap-12">
            {navigation.map((link) => (
              <li
                key={link.id}
                className="@max-3xl:not-first:border-t @max-3xl:px-6 @max-3xl:py-4 @max-3xl:text-right"
              >
                <Link
                  href={link.path}
                  className="uppercase text-sm font-bold tracking-widest text-accent-foreground @3xl:@max-5xl:text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
}
