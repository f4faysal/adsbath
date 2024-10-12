import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const featuredPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Digital Marketing',
    description: 'Learn the basics of digital marketing and how it can benefit your business.',
    imageUrl: '/images/digital-marketing.jpg',
    slug: 'understanding-digital-marketing',
  },
  {
    id: '2',
    title: 'SEO Best Practices for 2023',
    description: 'Stay ahead of the competition with these SEO tips for the current year.',
    imageUrl: '/images/seo-practices.jpg',
    slug: 'seo-best-practices-2023',
  },
  // Add more featured posts as needed
];

const FeaturedBlogPosts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredPosts.map((post) => (
        <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:underline">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedBlogPosts;
