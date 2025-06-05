import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bookmark Manager | Save, Organize, and Rediscover",
  description:
    "A modern web bookmark manager to save links, organize resources, add notes, and rediscover your favorite content across the web.",
  keywords: [
    "Bookmark Manager",
    "Link Saver",
    "Notes",
    "Read Later",
    "Web Library",
    "Save Articles",
    "Productivity Tools",
  ],
  authors: [{ name: "Aryan Bhattacharya" }],
  openGraph: {
    title: "Bookmark Manager",
    description:
      "Never lose another article. Save and organize your favorite web content in one place.",
    url: "https://bookmark-manager-s62g.vercel.app/",
    siteName: "Bookmark Manager",
    images: [
      {
        url: "https://bookmark-manager-s62g.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bookmark Manager Preview",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://bookmark-manager-s62g.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933"}}}>
        <Navbar />
        {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
