import { type QueryParams } from 'next-sanity';

import { client } from '@/sanity/lib/client';
import { Blog } from '@/types/blog';
import { Project } from '@/types/project';

import { postQuery, postQueryBySlug, projectQuery } from './sanity-query';

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    next: { tags, revalidate: 30 },
  });
}

export const getPosts = async () => {
  const data: Blog[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ['post', 'author', 'category'],
  });
  return data;
};

export const getProjects = async () => {
  const data: Project[] = await sanityFetch({
    query: projectQuery,
    qParams: {},
    tags: ['project', 'category'],
  });

  return data;
};

export const getPostBySlug = async (slug: string) => {
  const data: Blog = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ['post', 'author', 'category'],
  });

  return data;
};
