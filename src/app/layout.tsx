import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/componantes/(navbar)/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "@/app/componantes/Footer";

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
      data-theme="mytheme"
      className={`${hindSiliguri.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-hind">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToastContainer
          position="top-left"
          autoClose={3000}
          newestOnTop
          style={{ top: "200px" }}
        />
      </body>
    </html>
  );
}
