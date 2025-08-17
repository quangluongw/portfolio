"use client";
import { Category } from "@/types/category";
import { Tags } from "@/types/tag";
import { Tag } from "antd";
import { FolderOpen, Hash } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
const FilterBlog = ({
  category,
  tag,
}: {
  category: Category[];
  tag: Tags[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      
      newParams.set(key, value);
    }
    else {
      newParams.delete(key);
      
    }
    router.push(`?${newParams.toString()}`);
  };
  return (
    <CardContent className="space-y-6 ">
      {/* Categories Section */}
      <div className="space-y-3 ">
        <div className="flex items-center gap-2">
          <FolderOpen className="h-4 w-4 text-muted-foreground" />
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
            Danh mục
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="ghost"
            onClick={() => search("category_name", "")}
            className=" justify-center h-auto py-2 px-3 text-left  transition-colors border rounded-md"
          >
            <span className="truncate">Tất cả</span>
          </Button>
          {category.map((item) => (
            // <Link
            //   href={`?category_name=${item.name}`}
            //   className="block"
            // >
            <Button
              key={item._id}
              variant="ghost"
              onClick={() => search("category_name", item.name)}
              className=" justify-center h-auto py-2 px-3 text-left  transition-colors border rounded-md"
            >
              <span className="truncate">{item.name}</span>
            </Button>
            // </Link>
          ))}
        </div>
      </div>

      <Separator />

      {/* Tags Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Hash className="h-4 w-4 text-muted-foreground" />
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
            Thẻ
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {tag.map((item) => (
            // <Link href={`/${item.slug}`} >
            <Tag
              className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              onClick={() => search("tag_names", item.name)}
              key={item._id}
            >
              {item.name}
            </Tag>
            // </Link>
          ))}
        </div>
      </div>
    </CardContent>
  );
};

export default FilterBlog;
