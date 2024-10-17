import { PortableTextBlock } from "sanity";

export type Author = {
  name: string;
  image: string;
  bio?: string;
  slug: {
    current: string;
  };
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  excerpt: string;
  slug: any;
  body: PortableTextBlock[];
  mainImage: any;
  author: Author;
  tags: string[];
  publishedAt: string;
};
