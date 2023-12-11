import { createBrowserRouter } from 'react-router-dom';

// Pages
import RootLayout from './pages/RootLayout';
import Home from './pages/Home/Index';
import CreatePost from './pages/CreatePost/Index';
import Dashboard from './pages/Dashboard/Index';
import Pc from './pages/Pc';
import Playstation from './pages/Playstation';
import Xbox from './pages/Xbox';
import NSwitch from './pages/Switch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/posts/pc',
        element: <Pc />,
      },
      {
        path: '/posts/playstation',
        element: <Playstation />,
      },
      {
        path: '/posts/xbox',
        element: <Xbox />,
      },
      {
        path: '/posts/switch',
        element: <NSwitch />,
      },
      {
        path: '/posts/create',
        element: <CreatePost />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
