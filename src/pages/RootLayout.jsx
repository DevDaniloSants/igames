// React router
import { Outlet } from 'react-router-dom';

// Icons
import { FaBars } from 'react-icons/fa';

// Context
import { useTheme } from '../context/ThemeContext';
import { useAuthContext } from '../context/AuthContext';

//Components
import SideBar from '../components/SideBar/Index';
import BtnLogin from '../components/BtnLogin/Index';
import Modal from '../components/Modal/Index';
import Login from '../components/FormLogin';

// Hooks
import { useSidebar } from '../hooks/useSidebar';
import Socials from '../components/Socials';

const RootLayout = () => {
  {
    /* Context */
  }
  const { theme } = useTheme();
  const { user } = useAuthContext();

  {
    /* Hooks */
  }
  const { sidebar, handleClick: handleSidebar } = useSidebar();

  return (
    <div className={theme ? 'container dark-theme' : 'container ligth-theme'}>
      <header>
        <button className="hamburguer" onClick={handleSidebar}>
          <FaBars />
        </button>
        <span className="logo">
          <span>IG</span>ames
        </span>
        <div className="header_end">
          <Socials />
          {!user && <BtnLogin />}
        </div>
      </header>
      <SideBar isOpen={sidebar} handleClick={handleSidebar} />
      <main>
        <Outlet />
      </main>
      <Modal>
        <Login />
      </Modal>
      <footer>&copy; Todos os direitos reservados 2023</footer>
    </div>
  );
};

export default RootLayout;
