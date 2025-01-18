import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";
import { Tiro_Bangla } from "next/font/google";
import "./globals.css";

const TiroBangla = Tiro_Bangla({
  variable: "--font-tiro-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jade Reforestry",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${TiroBangla.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
