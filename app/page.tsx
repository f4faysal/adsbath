import PartnerLogosSection from "@/components/PartnerLogosSection";
import HeroSection from "@/components/ui/hero-section";
import TheService from "@/components/the-service";
import Head from "next/head";

export const metadata = {
  title: "AdsBath - Digital Marketing Agency",
  description:
    "Create modern and user-friendly websites with AdsBath. We help you build amazing company websites.",
  keywords:
    "web design, website development, user-friendly websites, modern websites",
};

function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adsbath.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://www.adsbath.com" />
      </Head>
      <HeroSection />
      <PartnerLogosSection />
      <TheService />
    </>
  );
}

export default Page;
