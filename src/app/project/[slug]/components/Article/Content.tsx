import { BlogPost } from "@/types/blogPosts";

const Content = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-12">
      <div className="text-foreground leading-relaxed">{blog.content}</div>
    </div>
  );
};

export default Content;