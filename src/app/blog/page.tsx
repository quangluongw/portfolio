import BlogItem from "@/components/BlogItem";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/ui/Pagination";
import { getBlogs } from "@/services/blog";
import { Filter } from "@/types/blogPosts";
import { Suspense } from "react";

const BlogPage = async ({ searchParams }: { searchParams: Filter }) => {

    const filter = {
      category_name:searchParams?.category_name,
      tag_names:searchParams?.tag_names,
      page:searchParams?.page,
    };
  const blogPosts = await getBlogs({ filter });

  return (
    <section className="relative mt-32 mb-10 pb-10">
      <div className="md:flex justify-between gap-12 mb-10">
        <Suspense fallback={<div>Đang tải sidebar…</div>}>
          <Sidebar />
        </Suspense>
        <Suspense fallback={<div>Đang tải bài viết…</div>}>
          <BlogItem blogPosts={blogPosts.data} cols={3} />
        </Suspense>
      </div>
      {blogPosts.data.length > 0 && (
        <Suspense fallback={<div>Đang tải phân trang…</div>}>
          <Pagination totalPages={blogPosts.totalPages} />
        </Suspense>
      )}
    </section>
  );
};

export default BlogPage;
