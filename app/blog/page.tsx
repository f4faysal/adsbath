import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AdsBath Blog - Journey Through Ideas",
  description:
    "Explore insightful articles on digital marketing, SEO, and more from AdsBath experts.",
  openGraph: {
    title: "AdsBath Blog - Journey Through Ideas",
    description:
      "Explore insightful articles on digital marketing, SEO, and more from AdsBath experts.",
    type: "website",
    url: "https://www.adsbath.com/blog",
    images: [
      {
        url: "/blog-banner.png",
        width: 1200,
        height: 630,
        alt: "AdsBath Blog Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adsbath",
    creator: "@adsbath",
  },
};

const blogPosts = [
  {
    slug: "digital-agency-guide",
    image: "/agency.jpg",
    title: "We Are Digital Agency",
    description:
      "What is a Facebook Advertising Agency and How to Choose One for Your Business?",
  },
  {
    slug: "facebook-ads-ecommerce",
    image: "/ecommerce.jpg",
    title: "Facebook Ads for E-Commerce",
    description:
      "Facebook Ads for Ecommerce Full Guideline: 15 Best Strategies in 2024",
  },
  {
    slug: "facebook-marketing-guide",
    image: "/marketing.jpg",
    title: "Facebook Marketing",
    description:
      "What is Facebook Marketing: A Complete Guide for any Business",
  },
  {
    slug: "seo-link-building",
    image: "/seo.jpg",
    title: "SEO Link Building",
    description:
      "White Label Link Building Services – Choosing the Best One for Your Business In 2024",
  },
  {
    slug: "best-software-companies-bangladesh",
    image: "/software.jpg",
    title: "Best Software Companies",
    description: "Top 20 Best Software Companies in Bangladesh (2024)",
  },
  {
    slug: "digital-agency-selection",
    image: "/agency.jpg",
    title: "We Are Digital Agency",
    description:
      "What is a Facebook Advertising Agency and How to Choose One for Your Business?",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#080711] min-h-screen text-white mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="relative w-full h-64 rounded-[24px] overflow-hidden mb-8">
          <Image
            src="/blog-banner.png"
            alt="Journey Through Ideas"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-[#2a0d34] bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-2xl md:text-6xl font-bold mt-16 font-['Anton']">
              JOURNEY THROUGH IDEAS
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index}>
              <div className="bg-white text-black rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
