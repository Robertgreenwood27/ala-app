import React from 'react';
import Image from 'next/image';

const BlogPost = ({ post }) => (
  <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full">
    {/* Blog Image */}
    <div className="relative h-40">
      <Image src={post.imageUrl} alt={post.title || "Blog Post Image"} layout="fill" objectFit="cover" />
    </div>

    {/* Blog Content */}
    <div className="p-4">
      <h3 className="text-xl font-medium mb-2">{post.title}</h3>
      <p className="text-gray-600">{post.excerpt}</p>
      {/* Consider adding a link or button to the full blog post */}
      {/* <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read More</a> */}
    </div>
  </div>
);

const BlogComponent = () => {
  // Sample blog posts data
  const blogPosts = [
    { id: 1, title: "Demystifying the Financial Cleanup Process", excerpt: "...", imageUrl: "/papers.jpg" },
    { id: 2, title: "The Rise of Digital Accounting: What You Need to Know", excerpt: "...", imageUrl: "/business.png" },
    { id: 3, title: "Detecting Financial Irregularities: Signs and Solutions", excerpt: "...", imageUrl: "/business.png" },
    { id: 4, title: "Empower Your Financial Journey: Tips for Sustainable Growth", excerpt: "...", imageUrl: "/business.png" }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
