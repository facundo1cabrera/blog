import { GetStaticPaths, GetStaticProps } from 'next'
import type { NextPage } from 'next';
import { Blog } from '../../interfaces/blog';
import { blogPosts } from '../../lib/data';

const BlogPage: NextPage<Blog> = ({ title, content}) => {

  return (
      <div>
        <main>
          <h2 className="text-2xl font-bold">{title}</h2>
          <div>{content}</div>
        </main>
      </div>
  );
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    

    return {
        paths: blogPosts.map((item) => ({
            params: {
                slug: item.slug,
            },
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { slug } = ctx.params!;

    const post = blogPosts.find((item) => item.slug === slug)!;

    return {
        props: post,
    }
}

export default BlogPage;
