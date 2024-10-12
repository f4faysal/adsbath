import PartnerLogosSection from "@/components/PartnerLogosSection";
import HeroSection from "@/components/ui/hero-section";
import TheService from "@/components/the-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AdsBath - Premier Digital Marketing Agency | Web Design & SEO Services",
  description:
    "AdsBath is a leading digital marketing agency in Bangladesh, specializing in creating modern, user-friendly websites, SEO, and digital marketing strategies. We help businesses build amazing online presence that drives results.",
  keywords:
    "digital marketing agency, web design, website development, user-friendly websites, modern websites, SEO, Bangladesh, online marketing, social media marketing",
  openGraph: {
    title:
      "AdsBath - Premier Digital Marketing Agency | Web Design & SEO Services",
    description:
      "AdsBath is a leading digital marketing agency in Bangladesh, specializing in creating modern, user-friendly websites, SEO, and digital marketing strategies. We help businesses build amazing online presence that drives results.",
    type: "website",
    url: "https://www.adsbath.com",
    images: [
      {
        url: "/adsbath-logo.png",
        width: 1200,
        height: 630,
        alt: "AdsBath Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adsbath",
    creator: "@adsbath",
  },
  alternates: {
    canonical: "https://www.adsbath.com",
  },
};

function Page() {
  return (
    <>
      <HeroSection />
      <PartnerLogosSection />
      <TheService />
    </>
  );
}

export default Page;
