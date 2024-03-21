import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

const SignUp = () => {
  return (
    <div>
      <form>
        <legend>아이디*</legend>
        <div className="flex">
          <Input variant="white" />
          <Button
            variant="primary"
            size="sm"
            children="중복확인"
          />
        </div>

        <legend>닉네임*</legend>
        <div className="flex">
          <Input variant="white" />
          <Button
            variant="primary"
            size="sm"
            children="중복확인"
          />
        </div>

        <legend>비밀번호*</legend>
        <Input
          variant="white"
          placeholder="영어, 특수문자 포함 8자리 이상"
        />

        <legend>비밀번호 확인*</legend>
        <Input variant="white" />
      </form>

      <Button
        variant="primary"
        size="lg"
        children="회원가입"
      />
    </div>
  );
};

export default SignUp;
