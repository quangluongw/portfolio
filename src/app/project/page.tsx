import BlogItem from "@/components/BlogItem";
import { getBlogs } from "@/services/blog";

const BlogPage = async () => {
  const blogPosts = await getBlogs();

  return (
    <section className="relative mt-32 mb-10 pb-10">
      <div className="md:flex justify-between gap-12 mb-10">
        <BlogItem blogPosts={blogPosts.data} />
      </div>
    </section>
  );
};

export default BlogPage;
