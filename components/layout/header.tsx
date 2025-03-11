"use client";

// External dependencies
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown, Moon, Sun } from "lucide-react";

// Local components
import Wrapper from "./wrapper";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Constants
import { websiteLinks } from "@/constants/navigation";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50">
      <Wrapper className="flex items-center justify-end gap-3 py-7 md:justify-between">
        {/* Empty div for layout purposes */}
        <div aria-hidden="true" />

        {/* Navigation Section */}
        <nav>
          {/* Mobile Navigation Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="lg"
                className="border md:hidden"
              >
                Menu <ChevronDown className="opacity-50" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Browse website navigation links
                </SheetDescription>
              </SheetHeader>
              <ul className="space-y-3 px-5 py-11">
                {websiteLinks.map((link) => (
                  <li key={link.name}>
                    <SheetClose asChild>
                      <Link href={link.url} className="text-lg font-medium">
                        {link.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation Menu */}
          <ul className="bg-secondary text-secondary-foreground hidden items-center gap-7 rounded-md border px-6 py-2 md:flex">
            {websiteLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Switcher Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="lg"
              className="cursor-pointer border"
            >
              <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
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
      </Wrapper>
    </header>
  );
}
