import { BlogPost } from "@/types/blogPosts";
import { Calendar, User } from "lucide-react";

const Header = ({ blog }: { blog: BlogPost }) => {
  return (
    <header className="space-y-6 mb-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
        {blog.name}
      </h1>

      <p className="text-lg text-muted-foreground leading-relaxed">
        {blog.excerpt}
      </p>

      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <time dateTime={blog.created_at}>
            {/* {FormatDate(blog.created_at)} */}
          </time>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;