// page.tsx (hoặc file page của bạn)
import BlogItem from "@/components/BlogItem";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/ui/Pagination";
import { getBlogs } from "@/services/blog";
import { Filter } from "@/types/blogPosts";
import { JSX } from "react";

type Props = {
  searchParams?: Filter;
};

const BlogPage = async (props: Props): Promise<JSX.Element> => {
  const { searchParams } = props;
  const { category_name, tag_names, page } = searchParams ?? {};

  const filter = { category_name, tag_names, page };

  const blogPosts = await getBlogs({ filter });

  return (
    <section className="relative mt-32 mb-10 pb-10 ">
      <div className="md:flex justify-between gap-12 mb-10">
        <Sidebar />
        <BlogItem blogPosts={blogPosts.data} />
      </div>
      {blogPosts.data.length > 0 && (
        <Pagination totalPages={blogPosts.totalPages} />
      )}
    </section>
  );
};

export default BlogPage;
