// styles
import styles from './Styles.module.css';

import { FaUser } from 'react-icons/fa';

// hook
import { useModalProvider } from '../../context/ModalContext';

const BtnLogin = () => {
  const { handleModal } = useModalProvider();
  return (
    <button className={styles.login} onClick={handleModal}>
      <span>
        {' '}
        <FaUser />
      </span>
      <div>
        <span>Login / </span>
        <span> Registre-se</span>
      </div>
    </button>
  );
};

export default BtnLogin;
