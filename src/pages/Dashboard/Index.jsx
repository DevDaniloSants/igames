import styles from './Styles.module.css';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';

import { useRedirect } from '../../hooks/useRedirect';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

// Components
import CardDashboard from '../../components/TableDashboard';

const Dashboard = () => {
  const { user } = useAuthContext();
  const uid = user.uid;

  const { redirect } = useRedirect();

  // Verifica se o usuário está cadastrado
  redirect();

  // posts do usuário
  const { documents: posts } = useFetchDocuments('posts', null, uid);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      {posts && posts.length === 0 ? (
        <div className={styles.notPost}>
          <p>Você não possui posts</p>
          <Link to={'/posts/create'}>Criar primeiro post</Link>
        </div>
      ) : (
        <CardDashboard uid={uid} />
      )}
    </div>
  );
};

export default Dashboard;
