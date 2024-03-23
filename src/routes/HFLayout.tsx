import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header.tsx';
import Footer from '@/components/common/Footer.tsx';

interface HFLayoutProps {
  headerVariant?: 'default' | 'back';
  backPath?: string;
  headerTitle?: string;
}

const HFLayout = ({ headerVariant, backPath, headerTitle }: HFLayoutProps) => {
  return (
    <div className={'w-[390px] h-dvh mx-auto border-2 border-hc-blue-light'}>
      {headerVariant === 'back' ? (
        <Header
          variant={'back'}
          backPath={backPath}
          headerTitle={headerTitle}
        />
      ) : (
        <Header />
      )}
      <main className={'h-[calc(100dvh-118px)] overflow-scroll scrollbar-hide'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HFLayout;
