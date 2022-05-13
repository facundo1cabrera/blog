import type { GetStaticProps, NextPage } from 'next';
import { postsApi } from '../apis'
import { Blog } from '../interfaces/blog';
import { BlogListItem } from '../components/BlogListItem';



const Home: NextPage<{blogPosts: Blog[]}> = ({ blogPosts }) => {




  

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

export const getStaticProps: GetStaticProps = async (ctx) => {

  const blogPosts = await postsApi.get<Blog[]>('/blogs');

  return {
    props: {
      blogPosts
    }
  }
}


export default Home;
