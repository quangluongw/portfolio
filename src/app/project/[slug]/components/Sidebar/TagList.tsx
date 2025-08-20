import { BlogPost } from '@/types/blogPosts';
import { Tags } from '@/types/tag';
import Link from 'next/link';
import React from 'react';

const TagList = ({ blog }: { blog: BlogPost }) => {
  return (
    <div>
      {blog.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 ">
          {blog.tags.map((tag: Tags) => (
            <Link
              key={tag._id}
              href={`/project?tag=${tag._id}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm transition-colors bg-purple-500/20 text-purple-500 font-medium"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagList;