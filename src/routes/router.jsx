import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from '../pages/Home/index.jsx';
import Login from '../pages/Login/index.jsx';

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
