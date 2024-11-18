import Image from "next/image";

import BlogItem from "@/components/blog/BlogItem";
import Card from "@/components/shared/Card";
import { getPosts } from "@/sanity/sanity-utils";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className="relative z-20 mx-auto mt-24 flex w-full max-w-5xl flex-col gap-4 overflow-hidden px-4 xl:max-w-6xl">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="hidden h-full lg:block">
          <Card
            background="bg-blue-600"
            styles="grid grid-row p-8 text-white text-5xl text-center"
          >
            <Image
              className="brightness-0 invert"
              src="/icons/logo.png"
              width={100}
              height={100}
              alt="arbxz-logo"
            />
          </Card>
        </div>

        <Card styles="flex-1" background="bg-blue-600">
          <div className="flex h-full w-full items-center justify-center px-4 py-4 text-center text-3xl font-semibold text-white">
            <div className="text-right">
              Checkout my articles below 👀
              <div className="inline-block animate-bounce">👇</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="group overflow-hidden p-6 md:p-10">
            <h1 className="-translate-y-80 text-6xl font-bold transition-transform duration-200 group-hover:translate-y-0">
              Welcome to <br />
              my Blog.
            </h1>
            <h1 className="text-6xl font-bold transition-transform duration-200 group-hover:translate-y-80">
              Hello <div className="animate-bounce">👋</div>
            </h1>
          </div>
        </Card>

        {posts?.length > 0 ? (
          posts.map((post: any) => (
            <BlogItem key={post.title + posts.indexOf} blog={post} />
          ))
        ) : (
          <p className="py-8 text-center font-semibold">
            Sadly we don&apos;t have anything here right now 🥲
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
