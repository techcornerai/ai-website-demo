import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-demo.techcorner.ai"),
  title: {
    default: "AI Website Demo | The Techcorner AI",
    template: "%s | The Techcorner AI",
  },
  description:
    "The Techcorner AI builds modern AI-powered websites that answer customer questions, capture leads, and help small businesses book more appointments.",
  keywords: [
    "AI websites for small business",
    "AI chatbot website",
    "lead capture website",
    "appointment booking website",
    "small business web design",
    "AI website assistant",
    "The Techcorner AI",
    "Techcorner AI",
  ],
  authors: [{ name: "The Techcorner AI" }],
  creator: "The Techcorner AI",
  publisher: "The Techcorner AI LLC",
  applicationName: "AI Website Demo",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Website Demo | The Techcorner AI",
    description:
      "Turn website visitors into real customers with modern AI-powered websites for small businesses.",
    url: "https://ai-demo.techcorner.ai",
    siteName: "The Techcorner AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Website Demo | The Techcorner AI",
    description:
      "Modern AI-powered websites that answer questions, capture leads, and help small businesses book more appointments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}