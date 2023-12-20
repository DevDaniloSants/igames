import { createBrowserRouter } from 'react-router-dom';

// Pages
import RootLayout from './pages/RootLayout';
import Home from './pages/Home/Index';
import CreatePost from './pages/CreatePost/Index';
import Dashboard from './pages/Dashboard/Index';
import Search from './pages/Search';
import Post from './pages/Post';
import EditPost from './pages/EditPost/Index';

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
        path: '/posts/create',
        element: <CreatePost />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/search/',
        element: <Search />,
      },
      {
        path: '/posts/:id',
        element: <Post />,
      },
      {
        path: '/posts/edit/:id',
        element: <EditPost />,
      },
    ],
  },
]);

export default router;
