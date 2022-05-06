import type { NextPage } from 'next';
import styles from './index.module.css';
import BlogList from '../components/BlogList';

const Home: NextPage = () => {
  return (
      <section className={styles.section}>
        <h1>
          Rusbloski blog
        </h1>
        <h2>Un desarrollador en progreso</h2>
        <BlogList />
      </section>
  );
};

export default Home;
