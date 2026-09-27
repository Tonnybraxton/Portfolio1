import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maaka-portfolio.vercel.app"),
  title: "Maaka Braxton Orioki | Junior Developer & IT Professional",
  description:
    "Portfolio of Maaka Braxton Orioki — developer in Nairobi building with React, Next.js, Django, FastAPI, PostgreSQL, AI document search, and automated testing.",
  keywords: [
    "Maaka Braxton Orioki",
    "Software Developer",
    "IT Professional",
    "Web Developer",
    "PHP Developer",
    "Python Developer",
    "Nairobi Kenya",
    "KCA University",
    "CodeIgniter",
    "MySQL",
    "React",
    "Next.js",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "AI Document Search",
    "Portfolio",
  ],
  authors: [{ name: "Maaka Braxton Orioki" }],
  creator: "Maaka Braxton Orioki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maaka-portfolio.vercel.app",
    title: "Maaka Braxton Orioki | Software Developer",
    description:
      "Developer in Nairobi building web applications with React, Next.js, Django, FastAPI, PostgreSQL, and AI document search.",
    siteName: "Maaka Braxton Orioki Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maaka Braxton Orioki - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maaka Braxton Orioki | Software Developer",
    description:
      "Developer in Nairobi building web applications, document search with AI, and tested backend APIs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0F172A] text-[#F8FAFC] antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
