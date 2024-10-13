import Image from "next/image";
import image1 from "@/assets/AdsBath/Basic_Complete_Kit_Thermometer_I.jpg.png";
import image2 from "@/assets/AdsBath/AdobeStock_277600927_720x.jpg.png";

export default function ContentSection() {
  return (
    <section className="p-6 md:p-12 container space-y-16">
      {/* First Row: What They Wanted */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What They Wanted:
          </h2>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            Although they are a fairly established B2B brand, Waxy Flower was
            seeing nothing but negative ROI’s across all their marketing
            channels. Their top performing campaigns were on Google Ads, but
            even there they were struggling to make a positive return. Meta was
            an even bigger struggle as they could not get their ads up and
            running at all.
          </p>
          <p className="mt-4 text-gray-100 text-sm md:text-base leading-relaxed">
            So what they wanted was simple: build out a strategy on Google that
            would increase results so they can begin scaling, retarget their
            past traffic (which wasn’t being done at all at the time), and build
            out a Meta Ads strategy to both prospect new customers (which is
            usually very challenging in B2B) and retarget/upsell previous
            website traffic or purchasers.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={image1}
            alt="Candle Making Supplies"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Second Row: Who They Are */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center">
          <Image
            src={image2}
            alt="Products"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who They Are:</h2>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            Waxy Flower specializes in providing premium candle-making supplies
            tailored for businesses looking to produce and sell candles. With a
            focus on meeting the needs of candle-making entrepreneurs, Waxy
            Flower offers a comprehensive range of high-quality materials,
            including waxes, fragrances, molds, and tools.
          </p>
          <p className="mt-4 text-gray-100 text-sm md:text-base leading-relaxed">
            Trusted by businesses for their reliability and quality, Waxy Flower
            is the preferred supplier for those seeking to create and market
            their own line of candles.
          </p>
        </div>
      </div>
    </section>
  );
}
