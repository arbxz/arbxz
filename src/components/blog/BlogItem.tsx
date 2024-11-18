import { Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/sanity/lib/image';
import { Blog } from '@/types/blog';

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="group block w-full rounded-xl border-background text-foreground transition-all duration-300"
    >
      <article className="grid grid-flow-row">
        <Image
          src={urlFor(blog.mainImage).url()}
          alt={blog.title}
          width={500}
          height={300}
          className="mb-4 h-auto w-full rounded-xl bg-cover transition-all duration-300 group-hover:-translate-y-4 group-hover:translate-x-4 group-hover:shadow"
        />

        <div className="rounded-xl bg-background p-4 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:shadow">
          <div className="mb-2">
            <h3 className="mb-1 text-2xl font-bold tracking-tight group-hover:text-blue-600">
              {blog.title}
            </h3>
            {blog.excerpt && (
              <p>
                {blog.excerpt} <br />
                <span className="block w-full text-right font-semibold text-blue-500">
                  Read more...
                </span>
              </p>
            )}
          </div>
          {blog.tags && (
            <div className="mb-4 text-sm font-semibold text-foreground-shade">
              {blog.tags.map((tag, index) => (
                <span key={`${tag}-${index}`}>
                  <span className="mr-1 text-blue-500">#</span> {tag[index]}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-row items-start gap-4">
            <div className="flex items-start gap-4">
              <Image
                src={urlFor(blog.author.image).url()}
                alt={blog.author.name}
                width={50}
                height={50}
                className="rounded-xl"
              />
              <div>
                <div>{blog.author.name}</div>
                <small>
                  {new Date(blog.publishedAt).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </small>
              </div>
            </div>
            <div className="ml-auto mt-auto flex items-center gap-2 text-xs text-foreground">
              <Eye size={16} className="text-blue-500" /> 75
            </div>
          </div>
        </div>
        <div className="mt-2 h-2 w-full rounded-xl bg-blue-600 transition-all duration-300 group-hover:w-2 group-hover:translate-x-4 group-hover:translate-y-4"></div>
      </article>
    </Link>
  );
};

export default BlogItem;
