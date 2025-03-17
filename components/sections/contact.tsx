"use client";

// External dependencies
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CircleAlert, Mail, MailCheck } from "lucide-react";

// Local components
import Wrapper from "../layout/wrapper";
import TypographyH2 from "../typography/typography-h2";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

// Constants
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

// Types
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      if (result.status !== 200) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to send your message. Please try again later.");
    }
  };

  return (
    <section id="contact-section" className="mt-32 scroll-mt-28">
      <Wrapper className="space-y-6">
        {/* Section Header */}
        <header>
          <TypographyH2>Contact</TypographyH2>
        </header>

        {/* Main Content */}
        <main>
          {isSubmitted ? (
            // Success Alert
            <section className="border-chart-2 text-chart-2 flex items-start gap-4 rounded-md border p-4">
              <MailCheck className="mt-1" />
              <div>
                <span className="font-medium tracking-tight">Sent</span>
                <p className="text-sm">
                  Thank you! Your message has been sent. I’ll get back to you
                  soon.
                </p>
              </div>
            </section>
          ) : (
            // Contact Form
            <form onSubmit={handleSubmit} className="grid gap-6 sm:gap-8">
              {/* Personal details */}
              <fieldset className="grid gap-6 sm:gap-8 md:grid-cols-2">
                <legend className="sr-only">Personal details</legend>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>
              </fieldset>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="min-h-40"
                />
              </div>

              {/* Error Alert */}
              {error && (
                <div className="text-destructive border-destructive flex items-start gap-4 rounded-md border p-4">
                  <CircleAlert className="mt-1" />
                  <div>
                    <span className="font-medium tracking-tight">Error</span>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="cursor-pointer justify-self-end"
              >
                <Mail /> Send Message
              </Button>
            </form>
          )}
        </main>
      </Wrapper>
    </section>
  );
}
