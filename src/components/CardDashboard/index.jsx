import { Link } from 'react-router-dom';
import styles from './styles.module.css';

import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const CardDashboard = ({ id, title }) => {
  const { deleteDocument } = useDeleteDocument('posts');

  return (
    <tr key={id} className={styles.post}>
      <td className={styles.title_post}>
        <p>{title}</p>
      </td>
      <td className={styles.btns}>
        <Link to={`/posts/${id}`} className="btn btn_default">
          Ver
        </Link>
        <Link to={`/posts/edit/${id}`} className="btn btn_default">
          Editar
        </Link>
        <button onClick={() => deleteDocument(id)} className="btn btn_danger">
          Excluir
        </button>
      </td>
    </tr>
  );
};

export default CardDashboard;
