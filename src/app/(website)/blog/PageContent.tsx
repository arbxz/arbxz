import Image from "next/image";

import BlogItem from "@/components/blog/BlogItem";
import ClockClient from "@/components/main-section/ClockClient";
import Card from "@/components/shared/Card";
import { getPosts } from "@/sanity/sanity-utils";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className="flex gap-4 flex-col w-full max-w-5xl mx-auto px-4 relative overflow-hidden z-20">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="h-full hidden lg:block">
          <Card
            background="bg-green-400"
            styles="grid grid-row p-8 text-white text-5xl text-center">
            <Image
              className="brightness-0 invert"
              src="/icons/logo.png"
              width={100}
              height={100}
              alt="arbxz-logo"
            />
          </Card>
        </div>

        <Card styles="flex-1" background="bg-green-400">
          <div className="h-full w-full px-4 py-4 text-white font-semibold flex items-center justify-center text-center text-3xl">
            <div className="text-right">
              Checkout my articles below 👀
              <div className="inline-block animate-bounce">👇</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 py-5 w-full">
        <Card>
          <div className="p-6 md:p-10 overflow-hidden group">
            <h1 className="text-6xl font-bold -translate-y-80 group-hover:translate-y-0 transition-transform duration-200">
              Welcome to <br />
              my Blog.
            </h1>
            <h1 className="text-6xl font-bold group-hover:translate-y-80 transition-transform duration-200">
              Hello <div className="animate-bounce">👋</div>
            </h1>
          </div>
        </Card>

        {posts?.length > 0 ? (
          posts.map((post: any) => (
            <BlogItem key={post.title + posts.indexOf} blog={post} />
          ))
        ) : (
          <p className="text-center py-8 font-semibold">
            Sadly we don&apos;t have anything here right now 🥲
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
