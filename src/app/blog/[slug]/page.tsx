import { getBlog, getBlogs } from "@/services/blog";
import { BlogPost } from "@/types/blogPosts";
import { notFound } from "next/navigation";
import Breadcrumb from "./components/Article/Breadcrumb";
import Content from "./components/Article/Content";
import FeaturedImage from "./components/Article/FeaturedImage";
import Footer from "./components/Article/Footer";
import Header from "./components/Article/Header";
import RelatedArticles from "./components/Sidebar/RelatedArticles";
import ShareCard from "./components/Sidebar/ShareCard";
import TagList from "./components/Sidebar/TagList";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: slug,
  };
}
export default async function BlogId({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  const filter = {
    category_name: blog.category_id.name,
  };
  const blogPosts = await getBlogs({ filter });
  const blogRelate: BlogPost[] = blogPosts.data.filter(
    (item: BlogPost) => item._id !== blog._id
  );

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br mt-28">
      <div className=" mx-auto py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <Breadcrumb blog={blog} />
            <Header blog={blog} />
            <FeaturedImage blog={blog} />
            <Content blog={blog} />
            <Footer />
          </article>
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6 ">
              <TagList blog={blog} />
              <ShareCard />
              <RelatedArticles blogRelate={blogRelate} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
