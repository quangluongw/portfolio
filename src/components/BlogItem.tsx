import { BlogPost } from "@/types/blogPosts";
import { ArrowRight, Calendar, Clock, Eye } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Empty } from "antd";
const BlogItem = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  return blogPosts.length > 0 ? (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-[760px]:w-full ">
      {blogPosts.map((post, index) => (
        <Card
          key={post._id}
          className="group overflow-hidden border shadow-xl transition-all duration-500 cursor-pointer bg-gradient-to-br from-card to-card/90 hover:scale-105 "
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative overflow-hidden">
            <Image
              src={post.image}
              alt={post.name}
              width={999}
              height={999}
              className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
              <Eye className="h-3 w-3" />
              {/* {post.?.toLocaleString()} */}5
            </div>
          </div>

          <CardHeader className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post?.tags?.map((tag) => (
                <Badge
                  key={tag._id}
                  variant="outline"
                  className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`}>
              <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {post.name}
              </CardTitle>
            </Link>

            <CardDescription className="line-clamp-3 leading-relaxed">
              {post.excerpt}
            </CardDescription>
          </CardHeader>

          <CardContent className="pb-6 space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {/* {post.date} */}
                  44
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {/* {post.readTime} */}5
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 rounded-md"
            >
              Đọc thêm
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  ) : (
    <Empty className="flex justify-center items-center w-full "/>
  );
};

export default BlogItem;
