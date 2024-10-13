import ContentSection from "./_components/content-section/content-section";
import HeaderSection from "./_components/header-section/header-section";
import HeroWithWhatWeDid from "./_components/hero-with-what-we-do/hero-with-what-we-do";
import OpportunitiesSection from "./_components/opportunities-section/opportunities-section";
import ResultsSection from "./_components/result-section/result-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderSection />
      <ContentSection />
      <OpportunitiesSection />
      <HeroWithWhatWeDid />
      <ResultsSection />
    </div>
  );
}
