import Image from "next/image";
import waxRose from "@/assets/AdsBath/wax-rose.jpg"

export default function HeroWithWhatWeDid() {
  return (
    <section className="w-full container py-10">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={waxRose}
          alt="In Full Bloom"
          width={1920}
          height={400}
          className="object-cover w-full h-[300px] md:h-[300px] lg:h-[400px] rounded-md"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              In Full Bloom
            </h1>
            <p className="mt-2 text-xl md:text-2xl">Explore Fragrances</p>
          </div>
        </div>
      </div>

      {/* What We Did Section */}
      <div className="rounded-md py-12 px-6 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-100">
          What we did:
        </h2>
        <p className="text-gray-100 text-base md:text-lg leading-relaxed">
          Step 1, get Meta ads up and running. We created campaigns focused on
          finding the right audiences and mitigating wasted spend on irrelevant
          ones. With B2B, this isnt always as easy on Meta since advertisers
          either go too broad, or run into an ultra-small audience that doesnt
          deliver.
        </p>
        <p className="mt-4 text-gray-100 text-base md:text-lg leading-relaxed">
          Once we found their audience and began producing high ROAS’s, we
          scaled that budget. We also created retargeting campaigns with their
          top offers to bring back website traffic that had failed to purchase
          products while on the site. For Google Ads, we built out performance
          max campaigns and did what most agencies don’t, we optimized these
          performance max campaigns. This led to a high ROAS, and budget scaling
          as well.
        </p>
      </div>
    </section>
  );
}
