import styles from './styles.module.css';

import { useRedirect } from '../../hooks/useRedirect';
import EditPostForm from '../../components/EditPostForm';

const EditPost = () => {
  const { redirect } = useRedirect();

  // Verifica se o usuário está cadastrado
  redirect();

  return (
    <div className={styles.default}>
      <EditPostForm />
    </div>
  );
};

export default EditPost;
