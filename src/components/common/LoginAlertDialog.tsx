import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog.tsx';
import { useNavigate } from 'react-router-dom';

interface LoginAlertDialogProps {
  trigger: React.ReactNode;
}

const LoginAlertDialog = ({ trigger }: LoginAlertDialogProps) => {
  const navigate = useNavigate();
  return (
    <AlertDialog>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>로그인이 필요합니다!</AlertDialogTitle>
          <AlertDialogDescription>
            로그인하러 이동하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={'border-hc-grayLight'}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction
            className={'bg-hc-blue text-hc-white'}
            onClick={() => navigate('/users/login')}>
            로그인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoginAlertDialog;
