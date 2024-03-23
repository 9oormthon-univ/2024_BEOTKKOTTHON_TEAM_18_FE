import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import HFLayout from '@/routes/HFLayout.tsx';
import HLayout from '@/routes/HLayout.tsx';
import DdeepCreate from '@/pages/Ddeep/DdeepCreate.tsx';
import DdeepDetail from '@/pages/Ddeep/DdeepDetail.tsx';
import MyPage from '@/pages/MyPage';
import DdeepMoreParticipating from '@/pages/Ddeep/DdeepMoreParticipating.tsx';
import DdeepMoreRecruiting from '@/pages/Ddeep/DdeepMoreRecruiting.tsx';
import Notification from '@/pages/Notification';

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
      </Route>
      <Route
        element={
          <HFLayout
            headerVariant={'back'}
            backPath={'/'}
            headerTitle={'알림'}
          />
        }>
        <Route
          path={'/notification'}
          element={<Notification />}
        />
        <Route
          path={'/mypage'}
          element={<MyPage />}
        />
      </Route>
      <Route
        element={
          <HLayout
            headerVariant={'back'}
            backPath={'/'}
            headerTitle={'모집중인 띱'}
          />
        }>
        <Route
          path={'/ddeep/:id'}
          element={<DdeepDetail />}
        />
      </Route>

      <Route
        element={
          <HLayout
            headerVariant={'back'}
            backPath={'/users/login'}
            headerTitle={'회원가입'}
          />
        }>
        <Route
          path={'/users/signup'}
          element={<SignUp />}
        />
      </Route>

      <Route
        element={
          <HLayout
            headerVariant={'back'}
            headerTitle={'참여중인 띱'}
            backPath={'/'}
          />
        }>
        <Route
          path={'/ddeep/more/participating'}
          element={<DdeepMoreParticipating />}
        />
      </Route>
      <Route
        element={
          <HLayout
            headerVariant={'back'}
            headerTitle={'모집중인 띱'}
            backPath={'/'}
          />
        }>
        <Route
          path={'/ddeep/more/recruiting'}
          element={<DdeepMoreRecruiting />}
        />
      </Route>
      <Route
        element={<Login />}
        path={'/users/login'}
      />
    </Routes>
  );
};

export default PageRouter;
