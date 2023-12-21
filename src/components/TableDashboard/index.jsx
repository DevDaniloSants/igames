import { Link } from 'react-router-dom';
import styles from './styles.module.css';

import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const CardDashboard = ({ uid }) => {
  const { documents: posts } = useFetchDocuments('posts', null, uid);
  const { deleteDocument } = useDeleteDocument('posts');

  return (
    <div className={styles.table_container}>
      <table border={1}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr key={post.id} className={styles.post}>
                <td className={styles.title_post}>
                  <p>{post.title}</p>
                </td>
                <td className={styles.btns}>
                  <Link to={`/posts/${post.id}`} className="btn btn_default">
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn_default"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btn_danger"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardDashboard;
