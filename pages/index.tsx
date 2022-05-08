import { blogPosts } from '../lib/data';
import type { NextPage } from 'next';


const Home: NextPage = () => {

  return (
      <div>
        <main>
          <h1>Rusbloski Blog</h1>
        </main>

        <div>
          {
            blogPosts.map((item) => (
              <div key={item.slug}>
                <div>{item.title}</div>
                <div>{item.date.toString()}</div>
                <div>{item.content}</div>
              </div>
            ))
          }
        </div>
      </div>
  );
};

export default Home;
