import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import postLogin from '@/apis/postLogin.ts';
import { toast } from 'sonner';
import tokenStore from '@/store/tokenStore.ts';

const Login = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setToken } = tokenStore();

  const [loginIdError, setLoginIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (idRef.current && !idRef.current.value) {
      setLoginIdError(idRef.current.value === '');
      return;
    }

    if (passwordRef.current && !passwordRef.current.value) {
      setPasswordError(passwordRef.current.value === '');
      return;
    }

    if (idRef.current && passwordRef.current) {
      const loginData = {
        loginId: idRef.current.value,
        password: passwordRef.current.value
      };

      postLogin(loginData).then((res) => {
        if (res.isSuccess === true) {
          toast.success('로그인 성공!');
          setToken(res.result.accessToken);
          navigate('/');
        }
        if (res.isSuccess === false) {
          toast.error('로그인 실패!');
        }
      });
    }
  };

  return (
    <div className={'flex justify-center items-center h-screen'}>
      <div
        className={
          'w-[390px] h-dvh flex flex-col items-center justify-center mb-40'
        }>
        <img
          src="/public/assets/images/loginLogo.png"
          alt="login-logo"
        />
        <form className={'flex flex-col mt-10'}>
          <div className="mb-[20px]">
            <Input
              variant="gray"
              placeholder="아이디를 입력해주세요"
              ref={idRef}
            />
            {loginIdError && (
              <div>
                <hr className="w-5/6 mt-1 border ml-7 text-hc-coral" />
                <p className="mt-1 text-sm ml-7 text-hc-coral">
                  아이디를 입력해주세요!
                </p>
              </div>
            )}
          </div>

          <div className="mb-[20px]">
            <Input
              variant="gray"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              ref={passwordRef}
            />
            {passwordError && (
              <div>
                <hr className="w-5/6 mt-1 border ml-7 text-hc-coral" />
                <p className="mt-1 text-sm ml-7 text-hc-coral">
                  비밀번호를 입력해주세요!
                </p>
              </div>
            )}
          </div>
        </form>

        <Button
          variant="primary"
          size="lg"
          onClick={handleLogin}>
          로그인
        </Button>

        <p className={'mt-5 text-hc-grayDark text-xs flex'}>
          아직 회원가입을 안하셨나요?
          <Link
            to="/users/signup"
            className={
              'underline hover:text-hc-blue hover:font-semibold underline-offset-4 ml-2'
            }>
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
