import { getBlogs } from "@/services/blog";
import { ArrowRight, TrendingUp } from "lucide-react";
import BlogItem from "./BlogItem";
import { Button } from "./ui/button";
import Link from "next/link";

const BlogSection = async () => {
  const blogPosts = await getBlogs();

  return (
    <section id="blog" className="relative py-24 overflow-hidden">
      <div className=" px-4 relative ">
        <div className=" space-y-16">
          <div className="text-center space-y-6 ">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">
                Bài viết mới nhất
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold ">Blog của tôi</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chia sẻ kiến thức và kinh nghiệm trong lập trình, thiết kế và công
              nghệ. Những dự án tôi đã làm.
            </p>
          </div>

          <BlogItem blogPosts={blogPosts.data} />

          <Link href="/blog" className="text-center flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg rounded-md"
            >
              Xem tất cả bài viết
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
