import styles from './Styles.module.css';

// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

// Components
import PostDetails from '../../components/PostDetails';

const Home = () => {
  const { documents: posts, loading, error } = useFetchDocuments('posts');

  return (
    <div className={styles.home}>
      <h1>Notícias</h1>
      {posts && posts.map((post) => <PostDetails post={post} key={post.id} />)}
      {posts && posts.length === 0 && (
        <>
          <button>Criar uma postagem</button>
        </>
      )}
    </div>
  );
};

export default Home;
