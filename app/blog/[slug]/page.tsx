import Image from "next/image";
import { Metadata } from "next";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

const blogPosts = [
  {
    slug: "digital-agency-guide",
    image: "blog-image.png",
    title: "We Are Digital Agency",
    description:
      "What is a Facebook Advertising Agency and How to Choose One for Your Business?",
  },
  {
    slug: "facebook-ads-ecommerce",
    image: "/blog-image.png",
    title: "Facebook Ads for E-Commerce",
    description:
      "Facebook Ads for Ecommerce Full Guideline: 15 Best Strategies in 2024",
  },
  {
    slug: "facebook-marketing-guide",
    image: "/blog-image.png",
    title: "Facebook Marketing",
    description:
      "What is Facebook Marketing: A Complete Guide for any Business",
  },
  {
    slug: "seo-link-building",
    image: "/blog-image.png",
    title: "SEO Link Building",
    description:
      "White Label Link Building Services – Choosing the Best One for Your Business In 2024",
  },
  {
    slug: "best-software-companies-bangladesh",
    image: "/blog-image.png",
    title: "Best Software Companies",
    description: "Top 20 Best Software Companies in Bangladesh (2024)",
  },
  {
    slug: "digital-agency-selection",
    image: "/blog-image.png",
    title: "We Are Digital Agency",
    description:
      "What is a Facebook Advertising Agency and How to Choose One for Your Business?",
  },
];

export async function generateMetadata({
  params,
}: BlogPostParams): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | AdsBath Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} | AdsBath Blog`,
      description: post.description,
      type: "article",
      url: `https://www.adsbath.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@adsbath",
      creator: "@adsbath",
    },
  };
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <div className="bg-[#080711] min-h-screen text-white mt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p>The requested blog post could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#080711] min-h-screen text-white">
      <div
        className="relative w-full h-[424px] mb-8 bg-cover bg-center"
        style={{ backgroundImage: `url("/blog-image.png")` }}
      >
        <div className="absolute inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold font-['Anton'] text-center px-4">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Author and Post Info Sidebar */}
          <div className="lg:w-1/4">
            <div className=" rounded-xl p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-[#fc0778]">
                  Author:
                </h3>
                <p className="text-lg">Allison Volpe</p>
              </div>
              <div className="mb-6 border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold mb-2 text-[#fc0778]">
                  Publication Date:
                </h3>
                <p className="text-lg">August 7, 2024</p>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <article className=" rounded-xl p-6 shadow-lg">
              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl mb-8 text-gray-300">{post.description}</p>
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mb-4">
                  Pitfalls of Searching for Your Own Google Ads
                </h2>
                <p className="mb-6">
                  Searching for your own ads can be tempting, but it's not an
                  accurate representation of how your ads appear to others.
                  Heres why:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Your search history influences the results</li>
                  <li>Geographic location affects ad visibility</li>
                  <li>Ad rotation and testing can change results</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4">
                  Effective Alternatives to Searching for Your Own Ads
                </h2>
                <p className="mb-6">
                  Instead of searching for your own ads, try these methods:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Use Google Ads Preview and Diagnosis tool</li>
                  <li>Analyze performance data in Google Ads dashboard</li>
                  <li>Set up automated reports and alerts</li>
                </ol>
              </div>
            </article>

            {/* form */}
            <div className="rounded-xl p-6 shadow-lg bg-[#16072c] mt-8">
              <h3 className="text-2xl font-semibold mb-4">Leave a Reply</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded-md bg-[#2a0d34] text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-md bg-[#2a0d34] text-white"
                  />
                </div>
                <textarea
                  placeholder="Website"
                  rows={1}
                  className="w-full px-4 py-2 rounded-md bg-[#2a0d34] text-white mb-4 h-10"
                ></textarea>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    className="mr-2"
                  />
                  <label htmlFor="saveInfo" className="text-sm text-gray-300">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-[#2a0d34] text-white px-6 py-2 rounded-md hover:bg-[#3a1d44] transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}
