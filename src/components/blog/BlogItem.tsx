import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Blog } from "@/types/blog";

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <Link
        href={`/blog/${blog.slug.current}`}
        className="block p-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-8">
        <article>
          <Image
            src={blog.mainImage}
            alt={blog.title}
            width={250}
            height={150}
            className="rounded-full"
          />
          <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-700">
            {blog.title}
          </h3>
          <p className="mb-3 font-normal text-sm text-gray-600">
            {new Date(blog.publishedAt).toDateString()}
          </p>

          <Image
            src={blog.author.image}
            alt={blog.author.name}
            width={50}
            height={50}
            className="rounded-full"
          />

          {/* <p className="mb-3 font-normal text-gray-600">
          {blog.body.slice(0, 140)}...
        </p> */}
        </article>
      </Link>
    </>
  );
};

export default BlogItem;
