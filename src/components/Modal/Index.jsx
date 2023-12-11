// style
import { FaTimes } from 'react-icons/fa';
import styles from './Styles.module.css';

// Context
import { useModalProvider } from '../../context/ModalContext';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const Modal = ({ children }) => {
  const { user } = useAuthContext();

  useEffect(() => {
    if (user && modal) {
      handleModal();
    }
  }, [user]);

  const { modal, handleModal } = useModalProvider();
  if (modal) {
    return (
      <div
        className={
          modal ? `${styles.background} ${styles.active} ` : styles.background
        }
      >
        <section className={styles.modal}>
          <button onClick={handleModal}>
            <FaTimes />
          </button>
          {children}
        </section>
      </div>
    );
  }
};

export default Modal;
