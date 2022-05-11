import { blogPosts } from '../lib/data';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Blog } from '../interfaces/blog';


const Home: NextPage = () => {
// lol
  return (
    <div>

      <div className="space-y-4">
        {
          blogPosts.map((item) => (
            <BlogListItem key={item.slug} {...item}/>
          ))
        }
      </div>
    </div>
  );
};

export default Home;

function BlogListItem({ slug, title, content }: Blog) {
  return (
    <div className="border border-black-400 rounded p-4 hover:shadow-md hover:border-black-600 transition duration-500 ease-in-out">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <div>{content}</div>
    </div>
  )
}