import React from "react";

import "@/themes/blog.css";
import RenderBodyContent from "@/components/blog/RenderBodyContent";
import { getPostBySlug } from "@/sanity/sanity-utils";

// type Props = {
//   params: string;
//   searchParams: { [key: string]: string | string[] | undefined };
// };

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
    <div className="relative z-20 mx-auto flex w-full max-w-3xl flex-col gap-4 overflow-hidden px-4">
      <article className="my-10">
        <div className="mb-5 text-center">
          <h1 className="py-2 text-4xl font-bold lg:text-8xl">{post.title}</h1>
          <p className="pb-1 text-lg">
            <span className="mr-2 font-semibold text-green-500">
              Published:
            </span>
            {new Date(post.publishedAt).toDateString()}
            <span className="pl-2 font-semibold text-green-500">by </span>
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
