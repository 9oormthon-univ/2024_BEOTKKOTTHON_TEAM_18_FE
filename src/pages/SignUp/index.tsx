import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormItem } from '@/components/ui/form.tsx';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { isSingupValidSchema, Sign } from '@/schemas/signupSchema';

//TODO: @승연 헤더 회원가입으로 수정

const SignUp = () => {
  const form = useForm<Sign>({
    resolver: zodResolver(isSingupValidSchema)
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className={'w-full flex flex-col justify-center items-center pt-4'}>
      <Form {...form}>
        <form onSubmit={handleSubmit}>
          {/* 아이디 */}
          <FormItem className={'flex flex-col mb-4'}>
            <p className={'text-lg font-semibold text-hc-grayDark'}>아이디 *</p>
            <div className="flex justify-between">
              <div>
                <Input
                  variant={'white'}
                  {...form.register('loginId')}
                  className={'w-[238px] mb-[5px]'}
                />

                {form.formState.errors.loginId && (
                  <div className={'text-hc-coral text-[12px] mt-[3px] ml-3 '}>
                    <hr className="border w-[210px]" />
                    {form.formState.errors.loginId.message}
                  </div>
                )}
              </div>
              <Button
                variant={'primary'}
                size={'sm'}
                type={'submit'}>
                중복확인
              </Button>
            </div>
          </FormItem>

          {/* 닉네임 */}
          <FormItem className={'flex flex-col mb-4'}>
            <p className={'text-lg font-semibold  text-hc-grayDark'}>
              닉네임 *
            </p>
            <div className="flex justify-between">
              <div>
                <Input
                  variant={'white'}
                  {...form.register('nickname')}
                  className={'w-[238px] mb-[5px]'}
                />
                {form.formState.errors.nickname && (
                  <div className={'text-hc-coral text-[12px] mt-[3px] ml-3 '}>
                    <hr className="border w-[210px]" />
                    {form.formState.errors.nickname.message}
                  </div>
                )}
              </div>

              <Button
                variant={'primary'}
                size={'sm'}
                type={'submit'}>
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
