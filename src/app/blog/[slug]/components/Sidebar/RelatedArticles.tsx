import { Separator } from '@/components/ui/separator';
import { BlogPost } from '@/types/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedArticles = ({ blogRelate }: { blogRelate: BlogPost[] }) => {
  return (
    <div className="shadow-lg border-1 backdrop-blur-sm rounded-md">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Bài viết liên quan
        </h3>
        <div className="space-y-4">
          {blogRelate.map((item) => (
            <div key={item._id} className="py-2">
              <div className="flex gap-3 pb-2">
                <Image
                  src={item.image}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover flex-shrink-0"
                  alt="Related article"
                />
                <div>
                  <Link
                    href={item.slug}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-2"
                  >
                    {item.name}
                  </Link>
                </div>
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;