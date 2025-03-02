// External dependencies
import { Send } from "lucide-react";

// Local UI components (Shadcn/UI)
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

// Local layout and typography components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";

// Constants
const SECTION_HEADER = {
  title: "Contact Me",
  subtitle: "Let's work together on your next project!",
};

export default function Contact() {
  return (
    <section id="contact-section" className="scroll-my-16 py-12 md:py-16">
      <Wrapper className="grid gap-10 md:gap-12 lg:gap-14">
        {/* Section Header */}
        <header className="grid max-w-md gap-2">
          <TypographyH2>
            <span className="border-primary border-b-3">
              {SECTION_HEADER.title}
            </span>
          </TypographyH2>
          <p className="text-muted-foreground text-pretty">
            {SECTION_HEADER.subtitle}
          </p>
        </header>

        {/* Contact Form */}
        <main className="max-w-md md:max-w-lg lg:max-w-xl">
          <form className="grid gap-6">
            {/* Name Field */}
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your email"
              />
            </div>

            {/* Message Field */}
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="How can I assist you?"
                className="min-h-[120px]"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="justify-self-end">
              Send Message <Send />
            </Button>
          </form>
        </main>
      </Wrapper>
    </section>
  );
}
