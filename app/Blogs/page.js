import React from "react";
import Image from "next/image";
import blogImage from '@/image/Dish2.svg';  // Replace with your blog image path
import calender from '@/image/Calendar.svg';  // Replace with your blog image path
import comments from '@/image/Chats.svg';  // Replace with your blog image path
import arrow from '@/image/ArrowRight.svg';  // Replace with your blog image path
import Link from "next/link";

function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Chocolate Truffle Cake With Honey Flavor",
      date: "02 Jan 2022",
      comments: "(03)",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.",
      image: blogImage,
    },
    {
      id: 2,
      title: "Chocolate Truffle Cake With Honey Flavor",
      date: "02 Jan 2022",
      comments: "(03)",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.",
      image: blogImage,
    },
    {
      id: 3,
      title: "Chocolate Truffle Cake With Honey Flavor",
      date: "02 Jan 2022",
      comments: "(03)",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.",
      image: blogImage,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-5 md:px-40 text-center font-roboto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4">Latest News & Blog</h2>
        <p className="text-gray-500 mb-12 text-sm px-10 md:px-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Blog Image */}
              <div className="w-full h-48 relative">
                <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Post Meta */}
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <div className="flex gap-2 items-center mr-4">
                  <Image src={calender} alt='calender'/>
                    {blog.date}
                  </div>
                  <div className="flex gap-2 items-center">
                  <Image src={comments} alt='comments'/>
                   Comments {blog.comments}
                  </div>
                </div>

                {/* Blog Title */}
                <h3 className="text-xl  text-left font-semibold mb-2">{blog.title}</h3>

                {/* Blog Description */}
                <p className="text-gray-500 text-left mb-4">{blog.description}</p>

                {/* Read More Link */}
                <Link href="#" className="text-gray-500 flex gap-2 items-center font-semibold hover:underline">
                  Read more <Image src={arrow} alt='Arrow'/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
