import styles from './Styles.module.css';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';

import { useRedirect } from '../../hooks/useRedirect';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';


// Components
import CardDashboard from '../../components/CardDashboard';

const Dashboard = () => {
  const { user } = useAuthContext();
  const uid = user.uid;

  const { redirect } = useRedirect();
  redirect();

  // posts do usuário
  const { documents: posts } = useFetchDocuments('posts', null, uid);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      {posts && posts.length === 0 ? (
        <div>
          <p>Você não possui posts</p>
          <Link to={'/posts/create'}>Criar primeiro post</Link>
        </div>
      ) : (
        <div className={styles.table_container}>
          <table border={1}>
            <tr>
              <th>Título</th>
              <th>Ações</th>
            </tr>
            {posts &&
              posts.map((post) => (
                <CardDashboard id={post.id} title={post.title} key={post.id} />
              ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
