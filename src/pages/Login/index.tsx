import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import React, { useState } from 'react';

const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [loginIdError, setLoginIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    setLoginIdError(loginId === '');
    setPasswordError(password === '');

    if (loginId === '' || password === '') {
      return;
    }

    console.log('loginId : ', loginId);
    console.log('password : ', password);
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
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              error={loginIdError}
              size={'lg'}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        <p className={'mt-5 text-hc-grayDark text-xs'}>
          아직 회원가입을 안하셨나요?
          <a
            href="/users/signup"
            className={
              'ml-2 underline hover:text-hc-blue hover:font-semibold underline-offset-4'
            }>
            회원가입
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
