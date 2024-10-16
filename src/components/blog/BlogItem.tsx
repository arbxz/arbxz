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
      className="group block text-foreground w-full p-5 rounded-xl border-2 border-background bg-glass hover:border-indigo-500 transition-all duration-300">
      <article>
        <h3 className="mb-1 text-2xl font-bold tracking-tight group-hover:text-indigo-600">
          {blog.title}
        </h3>
        <div className="mb-4">
          <div className="text-sm text-foreground-shade font-semibold">
            <span className="text-indigo-500 mr-1">#</span>Hashtag
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start">
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
          <div className="text-xs flex items-center gap-2 text-foreground ml-auto">
            <Eye size={16} className="text-indigo-500" /> 75 Impressions
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogItem;
