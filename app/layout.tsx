import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Khademul Islam — Front-End Developer",
  description:
    "Front-End Developer with 4+ years of experience building modern web applications with React, Next.js and TypeScript.",
  openGraph: {
    title: "Md Khademul Islam — Front-End Developer",
    description:
      "4+ years of experience building modern web applications with React, Next.js and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
