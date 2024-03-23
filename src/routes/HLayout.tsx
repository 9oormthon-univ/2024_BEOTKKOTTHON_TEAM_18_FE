import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header.tsx';

interface HLayoutProps {
  headerVariant?: 'default' | 'back';
  backPath?: string;
  headerTitle?: string;
}

const HLayout = ({ headerVariant, backPath, headerTitle }: HLayoutProps) => {
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
      <main className={'h-[calc(100dvh-53px)] overflow-scroll scrollbar-hide'}>
        <Outlet />
      </main>
    </div>
  );
};

export default HLayout;
