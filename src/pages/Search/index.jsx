import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

// styles
import styles from './Styles.module.css';

// components
import PostDetails from '../../components/PostDetails';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');

  const { documents: posts, loading } = useFetchDocuments('posts', search);

  return (
    <div>
      <h1>Search</h1>
      <div>
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontradas buscas para {search}</p>
          </>
        )}
        {posts && (
          <>
            <div className={styles.news}>
              {posts.map((post) => (
                <PostDetails key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
