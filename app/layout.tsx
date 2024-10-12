import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdsBath - Your Trusted Digital Marketing Partner",
  description:
    "AdsBath offers expert digital marketing services including SEO, PPC, social media marketing, and content strategy to boost your online presence and drive results.",
  keywords:
    "digital marketing, SEO, PPC, social media marketing, content strategy, online advertising, brand awareness, lead generation",
  openGraph: {
    title: "AdsBath - Expert Digital Marketing Solutions",
    description:
      "Boost your online presence with AdsBath's comprehensive digital marketing services. SEO, PPC, social media, and more!",
    type: "website",
    url: "https://www.adsbath.com",
    images: [
      {
        url: "https://www.adsbath.com/adsbath-logo.png",
        width: 1200,
        height: 630,
        alt: "AdsBath Digital Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adsbath",
    creator: "@adsbath",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.adsbath.com",
  },
  authors: [{ name: "AdsBath Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
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
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://github.hubspot.com/odometer/themes/odometer-theme-minimal.css"
        />
        {/*  */}

        {/*  */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
