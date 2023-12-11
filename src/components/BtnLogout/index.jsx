import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Styles.module.css';

import { IoLogOutOutline } from 'react-icons/io5';

const BtnLogout = () => {
  const { logout } = useAuthentication();
  return (
    <button className={styles.logout} onClick={logout}>
      <IoLogOutOutline />
      <span>Logout</span>
    </button>
  );
};

export default BtnLogout;
