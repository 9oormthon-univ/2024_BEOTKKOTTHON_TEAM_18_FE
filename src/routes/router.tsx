import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.tsx';
import Home from '@/pages/Home';
import Login from '@/pages/Login';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

export default router;
