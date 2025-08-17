
import BlogItem from "@/components/BlogItem";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/ui/Pagination";
import { getBlogs } from "@/services/blog";
import { Suspense } from "react";

const BlogPage = async () => {
  // const { searchParams } = props;
  // const { category_name, tag_names, page } = searchParams ?? {};

  // const filter = { category_name, tag_names, page };

  const blogPosts = await getBlogs();

  return (
    <section className="relative mt-32 mb-10 pb-10 ">
      <div className="md:flex justify-between gap-12 mb-10">
        {/* <Suspense fallback={<div>Đang tải sidebar…</div>}>
          <Sidebar />
        </Suspense> */}
        <BlogItem blogPosts={blogPosts.data} />
      </div>
      {blogPosts.data.length > 0 && (
        <Pagination totalPages={blogPosts.totalPages} />
      )}
    </section>
  );
};

export default BlogPage;
