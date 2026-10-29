import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";

import "./globals.css";
import Navbar from "@/componantes/(navbar)/Navbar";
import Markquue from "@/componantes/Markquue";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${hindSiliguri.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-hind">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
