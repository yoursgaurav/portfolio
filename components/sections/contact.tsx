"use client";

// External dependencies
import { useState } from "react";
import { Send } from "lucide-react";

// Local UI components (Shadcn/UI)
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

// Local layout and typography components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";

// Types
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Constants
const SECTION_HEADER = {
  title: "Contact Me",
  subtitle: "Let's work together on your next project!",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Netlify handles the form submission automatically via the `data-netlify` attribute
    // On success, we’ll simulate a reset (no actual fetch needed)
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

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
          {isSubmitted ? (
            <p className="text-primary text-lg font-medium">
              Thank you! Your message has been sent. I’ll get back to you soon.
            </p>
          ) : (
            <form
              name="contact" // Required for Netlify Forms
              method="POST"
              data-netlify="true" // Enables Netlify Forms
              data-netlify-honeypot="bot-field" // Spam protection
              onSubmit={handleSubmit}
              className="grid gap-6"
            >
              {/* Hidden field for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field (hidden from users, catches bots) */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              {/* Name Field */}
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
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
          )}
        </main>
      </Wrapper>
    </section>
  );
}
