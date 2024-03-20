import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import HFLayout from '@/routes/HFLayout.tsx';

const PageRouter = () => {
  return (
    <Routes>
      <Route element={<HFLayout />}>
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
