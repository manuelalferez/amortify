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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className=" antialiased bg-blue-50 font-sans">
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
