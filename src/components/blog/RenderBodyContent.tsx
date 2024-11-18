import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';
import { Blog } from '@/types/blog';

// lazy-loaded image component
const ImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="my-10 overflow-hidden rounded-[15px]">
      <Image
        src={urlFor(value).url()}
        width={width}
        height={height}
        alt={value.alt || 'blog image'}
        loading="lazy"
        style={{
          display: isInline ? 'inline-block' : 'block',
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const components = {
  types: {
    image: ImageComponent,
  },
};

const RenderBodyContent = ({ post }: { post: Blog }) => {
  return (
    <>
      <PortableText value={post?.body as any} components={components} />
    </>
  );
};

export default RenderBodyContent;
