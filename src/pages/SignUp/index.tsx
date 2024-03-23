import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormItem } from '@/components/ui/form.tsx';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { isSingupValidSchema, Sign } from '@/schemas/signupSchema';
import { useState } from 'react';
import checkIdValid from '@/apis/checkIdValid.ts';
import { toast } from 'sonner';
import checkNicknameValid from '@/apis/checkNicknameValid.ts';
import postSignup from '@/apis/postSignup.ts';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [isIdValid, setIsIdValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const navigate = useNavigate();

  const form = useForm<Sign>({
    resolver: zodResolver(isSingupValidSchema)
  });

  const handleCheckId = async (id: string) => {
    const res = await checkIdValid(id);
    if (res.isSuccess === true) {
      toast.success('사용 가능한 아이디입니다.');
      setIsIdValid(true);
    }
    if (res.isSuccess === false) {
      toast.error('이미 사용중인 아이디입니다.');
    }
  };

  const handleCheckNickname = async (nickname: string) => {
    const res = await checkNicknameValid(nickname);
    if (res.isSuccess === true) {
      toast.success('사용 가능한 닉네임입니다.');
      setIsNicknameValid(true);
    }
    if (res.isSuccess === false) {
      toast.error('이미 사용중인 닉네임입니다.');
    }
  };

  const handleSubmit = form.handleSubmit((data) => {
    if (!isIdValid || !isNicknameValid) {
      toast.error('아이디와 닉네임 중복확인을 해주세요.');
      return;
    }
    const signupData = {
      loginId: data.loginId,
      password: data.password,
      nickname: data.nickname
    };
    postSignup(signupData).then((res) => {
      if (res.isSuccess === true) {
        toast.success('회원가입이 완료되었습니다.');
        navigate('/');
      }
      if (res.isSuccess === false) {
        toast.error('회원가입에 실패했습니다.');
      }
    });
  });

  return (
    <div className={'w-full flex flex-col justify-center items-center pt-4'}>
      <Form {...form}>
        <form onSubmit={handleSubmit}>
          {/* 아이디 */}
          <FormItem className={'flex flex-col mb-4'}>
            <p className={'text-lg font-semibold text-hc-grayDark'}>아이디 *</p>
            <div className="flex justify-between">
              <div className={'flex flex-col'}>
                <Input
                  variant={'white'}
                  {...form.register('loginId')}
                  className={'w-[238px] mb-[5px]'}
                />

                {form.formState.errors.loginId && (
                  <div
                    className={
                      'flex flex-col text-hc-coral text-[12px] mt-[3px] ml-3'
                    }>
                    <hr className="border w-[210px]" />
                    {form.formState.errors.loginId.message}
                  </div>
                )}
              </div>
              <Button
                variant={'primary'}
                size={'sm'}
                type={'submit'}
                onClick={(event) => {
                  event.preventDefault();
                  handleCheckId(form.getValues('loginId'));
                }}>
                중복확인
              </Button>
            </div>
          </FormItem>

          {/* 닉네임 */}
          <FormItem className={'flex flex-col mb-4'}>
            <p className={'text-lg font-semibold text-hc-grayDark'}>닉네임 *</p>
            <div className="flex justify-between items-center">
              <Input
                variant={'white'}
                {...form.register('nickname')}
                className={'w-[238px] mb-[5px]'}
              />
              {form.formState.errors.nickname && (
                <div className={'text-hc-coral text-[12px] mt-[3px] ml-3'}>
                  <hr className="border w-[210px]" />
                  {form.formState.errors.nickname.message}
                </div>
              )}
              <Button
                variant={'primary'}
                size={'sm'}
                type={'submit'}
                onClick={(event) => {
                  event.preventDefault();
                  handleCheckNickname(form.getValues('nickname'));
                }}>
                중복확인
              </Button>
            </div>
          </FormItem>

          {/* 비밀번호 */}
          <FormItem className={'flex flex-col mb-4'}>
            <p className={'text-lg font-semibold  text-hc-grayDark'}>
              비밀번호 *
            </p>
            <Input
              variant={'white'}
              {...form.register('password')}
              type="password"
              placeholder="영어, 특수문자 포함 8자리 이상 "
            />
            {form.formState.errors.password && (
              <div className={'text-hc-coral text-[12px] mt-[3px] ml-3 '}>
                <hr className="border w-[310px]" />
                {form.formState.errors.password.message}
              </div>
            )}
          </FormItem>

          {/* 비밀번호 확인  */}
          <FormItem className={'flex flex-col mb-4'}>
            <p className={'text-lg font-semibold  text-hc-grayDark'}>
              비밀번호 확인 *
            </p>
            <Input
              variant={'white'}
              {...form.register('checkPassword')}
              type="password"
            />
            {form.formState.errors.checkPassword && (
              <div className={'text-hc-coral text-[12px] mt-[3px] ml-3 '}>
                <hr className="border w-[310px]" />
                {form.formState.errors.checkPassword.message}
              </div>
            )}
          </FormItem>

          <Button
            variant={'primary'}
            size={'lg'}
            type={'submit'}
            onClick={handleSubmit}
            className={'mt-[30px]'}>
            회원가입
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default SignUp;
