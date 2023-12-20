// style
import styles from './Styles.module.css';

import { Link } from 'react-router-dom';

// icons
import { FaAngleLeft, FaHome, FaNewspaper } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

// Components
import BtnTheme from '../BtnTheme';
import Search from '../Search/Index';

// Context
import { useAuthContext } from '../../context/AuthContext';
import BtnLogout from '../BtnLogout';

const SideBar = ({ isOpen, handleClick }) => {
  const { user } = useAuthContext();

  return (
    <nav
      className={isOpen ? `${styles.sidebar} ${styles.active}` : styles.sidebar}
    >
      <div className={styles.navigation}>
        <button className={styles.exit} onClick={handleClick}>
          <FaAngleLeft />
        </button>
        <span>Menu</span>
        <Search />
        <ul>
          <Link to={'/'}>
            <FaHome /> Home
          </Link>
          {user && (
            <>
              {' '}
              <Link to={'/posts/create'}>
                <FaNewspaper />
                Criar Post
              </Link>
              <Link to={'/dashboard'}>
                <MdDashboard />
                Dashboard
              </Link>
            </>
          )}
        </ul>
      </div>
      <div className={styles.sidebarEnd}>
        {user && <BtnLogout />}
        <BtnTheme />
      </div>
    </nav>
  );
};

export default SideBar;
