import Button from '@/components/common/Button.tsx';
import tokenStore from '@/store/tokenStore.ts';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const { removeToken } = tokenStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    toast.success('로그아웃 되었습니다!');
    navigate('/');
  };
  return (
    <div
      className={
        'w-full h-full flex flex-col justify-center items-center gap-y-4'
      }>
      <div className={'text-[18px] font-semibold text-hc-grayDark'}>
        준비중입니다!
      </div>
      <Button
        variant={'primary'}
        size={'sm'}
        className={'h-8'}
        onClick={handleLogout}>
        로그아웃
      </Button>
    </div>
  );
};

export default MyPage;
