// style
import styles from './Styles.module.css';

import { Link } from 'react-router-dom';

// icons
import {
  FaAngleLeft,
  FaHome,
  FaNewspaper,
  FaXbox,
  FaPlaystation,
} from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';
import { FaComputer } from 'react-icons/fa6';
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
          <Link to={'/posts/playstation'}>
            <FaPlaystation /> Playstation
          </Link>
          <Link to={'/posts/xbox'}>
            <FaXbox /> Xbox
          </Link>
          <Link to={'/posts/switch'}>
            <BsNintendoSwitch /> Switch
          </Link>
          <Link to={'/posts/pc'}>
            <FaComputer /> Pc
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
