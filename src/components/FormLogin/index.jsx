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
          <div className={styles.start}>
            <img src="/logo.svg" alt="logo" />
            <h1>Login</h1>
          </div>
          <LoginForm />
          <div className={styles.end}>
            <span>Não possui uma conta ?</span>
            <button className={styles.btnToggle} onClick={handleToggle}>
              Registre-se
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.start}>
            <img src="/logo.svg" alt="logo" />
            <h1>Login</h1>
          </div>
          <Register />
          <div className={styles.end}>
            <span>Já possui uma conta ?</span>
            <button className={styles.btnToggle} onClick={handleToggle}>
              Login
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Login;
