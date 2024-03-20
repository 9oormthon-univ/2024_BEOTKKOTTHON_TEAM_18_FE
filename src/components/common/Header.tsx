import HcLogoLabel from '@/components/icons/HcLogoLabel.tsx';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  variant?: 'default' | 'back';
  backPath?: string;
  headerTitle?: string;
}

const Header = ({
  variant = 'default',
  backPath,
  headerTitle
}: HeaderProps) => {
  const navigate = useNavigate();
  const handleGoToBack = () => {
    if (backPath) {
      navigate(backPath);
    }
    if (!backPath) {
      navigate(-1);
    }
  };
  return (
    <header
      className={'flex flex-col w-full h-[54px] justify-center items-center'}>
      {variant === 'default' ? (
        <div className={'flex w-full h-full justify-center items-center mt-1'}>
          <HcLogoLabel
            width={85}
            height={20}
          />
        </div>
      ) : (
        <div className={'flex w-full h-full justify-start items-center mt-1'}>
          <ChevronLeft
            className={'cursor-pointer absolute'}
            onClick={handleGoToBack}
            size={30}
            color={'#003CD2'}
          />
          <div className={'w-full flex justify-center items-center'}>
            <div className={'text-[18px] font-bold text-hc-blue-darker'}>
              {headerTitle ?? '기본 타이틀'}
            </div>
          </div>
        </div>
      )}
      <div className={'w-full h-1 bg-gray-300 shadow-md shadow-hc-grayDark'} />
    </header>
  );
};

export default Header;
