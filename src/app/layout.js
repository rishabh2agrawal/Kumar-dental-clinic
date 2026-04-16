import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Kumar Dental & Eye Care | Premium Healthcare",
  description: "Complete Dental & Eye Care under one roof. Experience premium medical care with state-of-the-art technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-primary/30 selection:text-primary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
