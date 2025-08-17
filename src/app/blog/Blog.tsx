"use client";

import { useSearchParams } from "next/navigation";
import BlogPage from "./page";

const Blog = () => {
  const searchParams = useSearchParams();

  const filter = {
    category_name: searchParams.get("category_name") ?? undefined,
    tag_names:
      searchParams.get("tag_names") ?? searchParams.get("tag") ?? undefined,
    page: searchParams.get("page") ?? undefined,
  };

  return <BlogPage filter={filter} />;
};

export default Blog;
