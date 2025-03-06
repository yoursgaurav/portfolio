// External dependencies
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";

// Local components and providers
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

// Styles
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurav Shukla - Frontend developer, creator, and tech enthusiast",
  description:
    "I’m Gaurav, a frontend developer and innovator based in India. I specialize in crafting modern web experiences with Next.js, React, and cutting-edge technologies, empowering users through seamless design and functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${robotoSlab.variable} antialiased scroll-smooth`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
