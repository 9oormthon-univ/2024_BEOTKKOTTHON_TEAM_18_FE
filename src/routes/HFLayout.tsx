import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header.tsx';
import Footer from '@/components/common/Footer.tsx';

const HFLayout = () => {
  return (
    <div className={'w-[390px] h-dvh mx-auto border-2 border-hc-blue-light'}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HFLayout;
