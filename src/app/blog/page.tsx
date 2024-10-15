import BlogItem from "@/components/blog/BlogItem";
import Container from "@/components/shared/Container";
import { getPosts } from "@/sanity/sanity-utils";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <Container>
      <div className="py-5">
        {posts?.length > 0 ? (
          posts.map((post: any) => <BlogItem key={post._id} blog={post} />)
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </Container>
  );
};

export default BlogPage;
