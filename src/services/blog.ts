import { Filter as FilterType } from "@/types/blogPosts";

export const getBlogs = async ({ filter }: { filter?: FilterType } = {}) => {
  try {
    const queryParams = new URLSearchParams();

    if (filter?.category_name)
      queryParams.append("category_name", filter.category_name);
    if (filter?.tag_names) queryParams.append("tag_names", filter.tag_names);
    if (filter?.page) queryParams.append("page", filter.page);

    const res = await fetch(
      ` https://be-blog-eight.vercel.app/api/post?${queryParams}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.log(`Failed to fetch blogs: ${res.status}`);
    }

    const blogs = await res.json();
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const getBlog = async (slug: string) => {
  try {
    const res = await fetch(
      `https://be-blog-eight.vercel.app/api/post/${slug}`
    );
    const blog = await res.json();
    return blog;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};
