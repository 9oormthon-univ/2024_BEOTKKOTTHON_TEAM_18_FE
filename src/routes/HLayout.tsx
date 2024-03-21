import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header.tsx';

const HLayout = () => {
  return (
    <div className={'w-[390px] h-dvh mx-auto border-2 border-hc-blue-light'}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HLayout;
