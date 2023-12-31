import styles from './styles.module.css';

import { useRedirect } from '../../hooks/useRedirect';
import CreatePostForm from '../../components/CreatePostForm';

const CreatePost = () => {
  const { redirect } = useRedirect();

  // Verifica se o usuário está cadastrado
  redirect();

  return (
    <div className={styles.default}>
      <h1>Criar Post</h1>
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
