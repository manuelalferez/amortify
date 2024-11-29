import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "amortify",
  description:
    "A real estate investment calculator to help you make smarter investment decisions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" antialiased bg-blue-50 font-sans">
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
