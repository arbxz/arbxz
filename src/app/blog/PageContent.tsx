import Image from "next/image";

import BlogItem from "@/components/blog/BlogItem";
import ClockClient from "@/components/main-section/ClockClient";
import Card from "@/components/shared/Card";
import { getPosts } from "@/sanity/sanity-utils";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className="flex gap-4 flex-col w-full max-w-5xl mx-auto px-4 relative overflow-hidden z-20">
      <div className="flex flex-col md:flex-row gap-4">
        <Card>
          <div className="p-6 md:p-10 overflow-hidden group">
            <h1 className="text-6xl font-bold -translate-y-48 group-hover:translate-y-0 transition-transform duration-200">
              Welcome to <br />
              my Blog.
            </h1>
            <h1 className="text-6xl font-bold group-hover:translate-y-48 transition-transform duration-200">
              Hello <div className="animate-bounce">👋</div>
            </h1>
          </div>
        </Card>

        <Card
          background="bg-indigo-500"
          styles="group flex items-center p-8 text-white text-5xl text-center">
          <div className="-translate-y-80 translate-x-1/2 group-hover:translate-y-0 transition-transform duration-200">
            <ClockClient />
          </div>
          <Image
            className="group-hover:translate-y-80 -translate-x-1/2 transition-transform duration-200 brightness-0 invert"
            src="/icons/logo.png"
            width={100}
            height={100}
            alt="arbxz-logo"
          />
        </Card>
      </div>

      <Card>
        <div className="px-4 py-4 font-semibold text-center">
          Checkout my articles below 👀
          <div className="inline-block animate-bounce">👇</div>
        </div>
      </Card>

      <div className="grid grid-flow-col gap-4 py-5 w-full">
        {posts?.length > 0 ? (
          posts.map((post: any) => <BlogItem key={post._id} blog={post} />)
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
