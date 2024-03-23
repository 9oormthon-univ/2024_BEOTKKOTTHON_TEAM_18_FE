import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

const Login = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loginIdError, setLoginIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (idRef.current && !idRef.current.value) {
      setLoginIdError(idRef.current.value === '');
    }

    if (passwordRef.current && !passwordRef.current.value) {
      setPasswordError(passwordRef.current.value === '');
    }

    console.log('loginId : ', idRef.current?.value);
    console.log('password : ', passwordRef.current?.value);
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
          <p>
            <Link
              to="/users/signup"
              className={
                'underline hover:text-hc-blue hover:font-semibold underline-offset-4 ml-2'
              }>
              회원가입
            </Link>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Login;
