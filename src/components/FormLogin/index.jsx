import styles from './styles.module.css';

// Components
import LoginForm from './Login';
import Register from './Register';

// Hooks
import { useFormModal } from '../../hooks/useFormModal';

const Login = () => {
  const { toggleForm, handleToggle } = useFormModal();
  return (
    <section className={styles.bodyForm}>
      {toggleForm ? (
        <>
          <button className={styles.btnToggle} onClick={handleToggle}>
            Registre-se
          </button>
          <LoginForm />
        </>
      ) : (
        <>
          <button className={styles.btnToggle} onClick={handleToggle}>
            Login
          </button>
          <Register />
        </>
      )}
    </section>
  );
};

export default Login;
