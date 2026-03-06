import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Computer Vision Lab",
  description: "Computer Vision Laboratory at Sungkyunkwan University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 w-full bg-background pt-8 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
