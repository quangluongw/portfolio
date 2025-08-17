import { BlogPost } from "@/types/blogPosts";
import Link from "next/link";

type Props = { blog: BlogPost };

const Breadcrumb = ({ blog }: Props) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-foreground transition-colors">
        Trang chủ
      </Link>
      <span>/</span>
      <Link href="/blog" className="hover:text-foreground transition-colors">
        Blog
      </Link>
      <span>/</span>
      <Link
        href={`/category/${blog?.category_id.slug}`}
        className="hover:text-foreground transition-colors"
      >
        {blog?.category_id.name}
      </Link>
      <span>/</span>
      <span className="text-foreground">{blog.name}</span>
    </nav>
  );
};

export default Breadcrumb;
