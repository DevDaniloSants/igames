import { RouterProvider } from 'react-router-dom';

import router from './router';
import { onAuthStateChanged } from 'firebase/auth';

// Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
import { useFormModal } from './hooks/useFormModal';

// Context
import { ThemeContextProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';

// Components
import Loader from './components/Loader';

const App = () => {
  const [user, setuser] = useState(undefined);
  const { auth } = useAuthentication();
  const { modal, handleModal } = useFormModal();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setuser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <Loader />;
  }

  return (
    <AuthProvider value={{ user }}>
      <ThemeContextProvider>
        <ModalProvider value={{ modal, handleModal }}>
          <RouterProvider router={router} />
        </ModalProvider>
      </ThemeContextProvider>
    </AuthProvider>
  );
};

export default App;
