import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import HFLayout from '@/routes/HFLayout.tsx';
import HLayout from '@/routes/HLayout.tsx';
import DdeepCreate from '@/pages/Ddeep/DdeepCreate.tsx';
import DdeepDetail from '@/pages/Ddeep/DdeepDetail.tsx';
import Message from '@/pages/Message';
import MyPage from '@/pages/MyPage';

const PageRouter = () => {
  return (
    <Routes>
      <Route element={<HFLayout />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path={'/ddeep/create'}
          element={<DdeepCreate />}
        />
        <Route
          path={'/message'}
          element={<Message />}
        />
        <Route
          path={'/mypage'}
          element={<MyPage />}
        />
      </Route>
      <Route element={<HLayout />}>
        <Route
          path={'/ddeep/:id'}
          element={<DdeepDetail />}
        />
        <Route
          path={'/signup'}
          element={<SignUp />}
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
