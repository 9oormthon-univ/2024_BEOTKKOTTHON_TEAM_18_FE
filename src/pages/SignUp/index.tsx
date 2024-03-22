import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

const SignUp = () => {
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
            />
            <Button
              variant="primary"
              size="sm"
              children="중복확인"
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
            />
            <Button
              variant="primary"
              size="sm"
              children="중복확인"
            />
          </div>

          <legend className="mt-[9px] ml-[3px]  font-semibold text-hc-grayDark">
            비밀번호 *
          </legend>
          <Input
            variant="white"
            placeholder="영어, 특수문자 포함 8자리 이상"
            size="lg"
            type="password"
          />

          <legend className="mt-[9px] ml-[3px]  font-semibold text-hc-grayDark">
            비밀번호 확인 *
          </legend>
          <Input
            variant="white"
            size="lg"
            type="password"
          />
        </form>

        <Button
          variant="primary"
          size="lg"
          children="회원가입"
        />
      </div>
    </div>
  );
};

export default SignUp;
