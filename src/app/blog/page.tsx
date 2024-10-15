import BlogItem from "@/components/blog/BlogItem";
import { getPosts } from "@/sanity/sanity-utils";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <main>
      <div className="py-5">
        {posts?.length > 0 ? (
          posts.map((post: any) => <BlogItem key={post._id} blog={post} />)
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </main>
  );
};

export default BlogPage;
