import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Website Demo | The Techcorner AI",
  description:
    "Modern AI-powered websites that answer questions, capture leads, and help small businesses book more appointments.",
  keywords: [
    "AI websites",
    "small business websites",
    "AI chatbot",
    "lead capture website",
    "The Techcorner AI",
  ],
  authors: [{ name: "The Techcorner AI" }],
  creator: "The Techcorner AI",
  openGraph: {
    title: "AI Website Demo | The Techcorner AI",
    description:
      "Turn website visitors into real customers with AI-powered websites for small businesses.",
    type: "website",
    siteName: "The Techcorner AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Website Demo | The Techcorner AI",
    description:
      "Modern AI-powered websites that answer questions, capture leads, and help small businesses book more appointments.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
