import AdvertisersSection from "./_components/advertise-section/advertiser-section";
import AnalysisSection from "./_components/analysis-section/analysis-section";
import BusinessGrow from "./_components/business-grow/business-grow";
import CTASection from "./_components/cta-section/cta-section";
import GrowthSprintsRocketSection from "./_components/growth-sprint-rocket-section/growth-spring-rocket-section";
import GrowthSprintsSection from "./_components/growth-sprint-section/growth-sprint-section";
import HeaderSection from "./_components/header-section/header-section";
import PromisesSection from "./_components/promise-section/promise-section";
import ResultsSection from "./_components/result-section/result-section";

const ServicePage = () => {
  return <div className="min-h-screen ">
    <HeaderSection />
    <CTASection />
    <PromisesSection />
    <AnalysisSection />
    <AdvertisersSection />
    <BusinessGrow />
    <ResultsSection />
    <GrowthSprintsSection />
    <GrowthSprintsRocketSection />
  </div>;
};

export default ServicePage;
