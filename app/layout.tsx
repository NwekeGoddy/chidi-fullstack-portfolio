import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Cursor } from "./components/Cursor";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Important for CSS variables
});

export const metadata: Metadata = {
  title: "Nweke Chidi - Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Next.js, Angular, and NestJS",
  keywords: "Full-Stack Developer, Next.js, Angular, NestJS, Software Engineer",
  authors: [{ name: "Nweke Chidi" }],
  openGraph: {
    title: "Nweke Chidi - Full-Stack Developer",
    description: "Building innovative solutions with modern technologies",
    url: "https://your-portfolio.com",
    siteName: "Nweke Chidi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <Providers>
          <Cursor />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
