import React from "react";

import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import { Blog } from "@/types/blog";

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="group block text-foreground w-full rounded-xl border-background transition-all duration-300">
      <article className="grid grid-flow-row">
        <Image
          src={urlFor(blog.mainImage).url()}
          alt={blog.title}
          width={500}
          height={300}
          className="w-full h-auto bg-cover group-hover:translate-x-4 group-hover:-translate-y-4 rounded-xl mb-4 group-hover:shadow transition-all duration-300"
        />

        <div className="p-4 group-hover:translate-x-4 group-hover:translate-y-4 rounded-xl bg-background group-hover:shadow transition-all duration-300">
          <div className="mb-2">
            <h3 className="mb-1 text-2xl font-bold tracking-tight group-hover:text-green-600">
              {blog.title}
            </h3>
            {blog.excerpt && (
              <p>
                {blog.excerpt} <br />
                <span className="block text-right text-green-500 font-semibold w-full">
                  Read more...
                </span>
              </p>
            )}
          </div>
          {blog.tags && (
            <div className="mb-4 text-sm text-foreground-shade font-semibold">
              {blog.tags.map((tag, index) => (
                <span key={`${tag}-${index}`}>
                  <span className="text-green-500 mr-1">#</span> {tag[index]}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-row gap-4 items-start">
            <div className="flex gap-4 items-start">
              <Image
                src={urlFor(blog.author.image).url()}
                alt={blog.author.name}
                width={50}
                height={50}
                className="rounded-xl"
              />
              <div>
                <div>{blog.author.name}</div>
                <small>
                  {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </small>
              </div>
            </div>
            <div className="text-xs flex items-center gap-2 text-foreground ml-auto mt-auto">
              <Eye size={16} className="text-green-500" /> 75
            </div>
          </div>
        </div>
        <div className="bg-green-400 w-full h-2 mt-2 rounded-xl group-hover:translate-x-4 group-hover:w-2 group-hover:translate-y-4 transition-all duration-300"></div>
      </article>
    </Link>
  );
};

export default BlogItem;
