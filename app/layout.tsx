import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/structure/NavBar";
import Footer from "@/components/structure/Footer";
import Line from "@/components/ui/Line";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UFA - Ultra Footwear Accelerator",
  description:
    "Founded in 2016 and based in Waltham, Massachusetts, Ultra Footwear Accelerator is dedicated to helping brands bring innovative footwear and accessories to life. We collaborate with a wide network of global suppliers, offering expertise in materials such as leathers, recycled leathers, advanced outsoles, insoles, and high-performance components. In addition to footwear, we support the development of premium accessories, including bags and other complementary products. Our mission is to empower brands in creating cutting-edge solutions. For inquiries, please reach out to us through our contact form.",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" }, // Standard favicon
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} `}>
        <Navbar />
        <Line />
        {children}
        <Footer />
      </body>
    </html>
  );
}
