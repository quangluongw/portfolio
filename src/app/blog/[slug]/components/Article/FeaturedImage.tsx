import { BlogPost } from "@/types/blogPosts";
import Image from "next/image";

const FeaturedImage = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="relative mb-8 group">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={
            blog.image ||
            "/placeholder.svg?height=400&width=800&query=blog featured image"
          }
          width={800}
          height={400}
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
          alt={blog.name}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default FeaturedImage;