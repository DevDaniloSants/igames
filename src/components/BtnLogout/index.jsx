import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Styles.module.css';

import { IoLogOutOutline } from 'react-icons/io5';

const BtnLogout = () => {
  const { logout } = useAuthentication();
  const navigate = useNavigate();

  const logoutRedirect = () => {
    navigate('/');
    logout();
  };

  return (
    <button className={styles.logout} onClick={logoutRedirect}>
      <IoLogOutOutline />
      <span>Logout</span>
    </button>
  );
};

export default BtnLogout;
