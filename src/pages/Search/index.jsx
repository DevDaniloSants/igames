// hooks
import { useEffect } from 'react';
import PostDetails from '../../components/PostDetails';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');

  const { documents: posts } = useFetchDocuments('posts', search);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Search</h1>
      <div>
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontradas buscas para {search}</p>
          </>
        )}
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
