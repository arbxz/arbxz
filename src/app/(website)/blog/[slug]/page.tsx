import React from "react";

import type { Metadata, ResolvingMetadata } from "next";

import "@/themes/blog.css";
import RenderBodyContent from "@/components/blog/RenderBodyContent";
import { urlFor } from "@/sanity/lib/image";
import { getPostBySlug } from "@/sanity/sanity-utils";

type Props = {
  params: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const id = params;

//   const post = await getPostBySlug(id);

//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: post.title,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       images: [urlFor(post.mainImage).url(), ...previousImages],
//       type: "article",
//     },
//   };
// }

const SingleBlogPage = async ({ params }: { params: any }) => {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="flex gap-4 flex-col w-full max-w-3xl mx-auto px-4 relative overflow-hidden z-20">
      <article className="my-10">
        <div className="mb-5 text-center">
          <h1 className="text-4xl lg:text-8xl py-2 font-bold">{post.title}</h1>
          <p className="pb-1 text-lg">
            <span className="font-semibold mr-2 text-green-500">
              Published:
            </span>
            {new Date(post.publishedAt).toDateString()}
            <span className="font-semibold pl-2 text-green-500">by </span>
            {post.author.name}
          </p>
        </div>

        <article className="blog-css">
          <RenderBodyContent post={post} />
        </article>
      </article>
    </div>
  );
};

export default SingleBlogPage;
