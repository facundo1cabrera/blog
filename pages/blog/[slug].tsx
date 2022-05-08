import { GetStaticPaths, GetStaticProps } from 'next'
import type { NextPage } from 'next';
import { Blog } from '../../interfaces/blog';
import { blogPosts } from '../../lib/data';

const BlogPage: NextPage<Blog> = ({ title, date, content}) => {

  return (
      <div>
        <main>
          <h1>{title}</h1>
          <div>{content}</div>
          <p>{date}</p>
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
