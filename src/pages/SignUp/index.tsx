import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useState } from 'react';

//TODO: @승연 헤더 회원가입으로 수정

const SignUp = () => {
  const [loginId, setLoginId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginIdValid, setIsLoginIdValid] = useState(true);
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  //아이디 중복 확인 함수
  const validateLoginId = () => {};

  //닉네임 중복 확인 함수
  const validateNickname = () => {};

  //비밀번호 유효성 검사 함수
  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  // 비밀번호 입력 시 호출되는 함수
  const handlePasswordChange = (error) => {
    setPassword(error.target.value);
    setIsPasswordValid(validatePassword());
  };

  // 비밀번호 확인 입력 시 호출되는 함수
  const handleConfirmPasswordChange = (error) => {
    setConfirmPassword(error.target.value);
  };

  // 회원가입 버튼 클릭 시 호출되는 함수
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log('nickname : ', nickname);
    console.log('loginId : ', loginId);
    console.log('password : ', password);
  };

  return (
    <div className={'flex justify-center items-center h-screen'}>
      <div className="flex-row items-center justify-center h-screen">
        <form className="mb-[30px]">
          <legend className="mt-[27px] ml-[3px] font-semibold text-hc-grayDark">
            아이디 *
          </legend>
          <div className="flex justify-between">
            <Input
              variant="white"
              size="sm"
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
            <Button
              variant="primary"
              size="sm"
              children="중복확인"
              onClick={validateLoginId}
            />
          </div>

          <legend className="mt-[9px] ml-[3px]  font-semibold text-hc-grayDark">
            닉네임 *
          </legend>
          <div className="flex justify-between">
            <Input
              variant="white"
              size="sm"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button
              variant="primary"
              size="sm"
              children="중복확인"
              onClick={validateNickname}
            />
          </div>

          <legend className="mt-[9px] ml-[3px]  font-semibold text-hc-grayDark">
            비밀번호 *
          </legend>
          <Input
            variant="white"
            placeholder="영어, 특수문자 포함 8자리 이상"
            size="lg"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isPasswordValid && (
            <div>
              <hr className="w-5/6 mt-1 border ml-7 text-hc-coral" />
              <p className="text-[12px] text-hc-coral ml-[16px]">
                영어, 특수문자 포함 8자리 이상이어야 합니다.
              </p>
            </div>
          )}

          <legend className="mt-[9px] ml-[3px]  font-semibold text-hc-grayDark">
            비밀번호 확인 *
          </legend>
          <Input
            variant="white"
            size="lg"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          {password !== confirmPassword && confirmPassword.length > 0 && (
            <div>
              <hr className="w-5/6 mt-1 border ml-7 text-hc-coral" />
              <p className="text-hc-coral text-[12px] ml-[16px]">
                비밀번호가 일치하지 않습니다.
              </p>
            </div>
          )}
        </form>

        <Button
          variant="primary"
          size="lg"
          children="회원가입"
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
};
export default SignUp;
