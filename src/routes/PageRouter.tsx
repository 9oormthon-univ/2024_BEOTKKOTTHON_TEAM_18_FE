import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.tsx';
import Home from '@/pages/Home';
import Login from '@/pages/Login';

const PageRouter = () => {
  return (
    <Routes>
      {/* Layout을 사용하는 Route 내부는 헤더와 푸터가 적용됩니다! */}
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Home />}
        />
      </Route>
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
};

export default PageRouter;
