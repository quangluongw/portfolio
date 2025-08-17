import { Category } from "./category";

export interface BlogPost {
  _id: string;
  name: string;
  image: string;
  category_id: Category;
  tags: [
    {
      _id: string;
      name: string;
      slug: string;
    }
  ];
  slug: string;
  excerpt: string;
  content: string;
  status: string;
  created_at:string;
}
export interface Filter {
  category_name?: string | string[];
  tag_names?: string | string[];
  page?: string | string[];
}