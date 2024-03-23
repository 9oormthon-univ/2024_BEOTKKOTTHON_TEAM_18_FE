import Input from '@/components/common/Input.tsx';
import { useForm } from 'react-hook-form';
import { createDdeepSchema, Ddeep } from '@/schemas/createDdeepSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form.tsx';
import Button from '@/components/common/Button.tsx';
import SingleSelect from '@/components/common/SingleSelect.tsx';
import {
  DdeepPurpose,
  DdeepRecruitingNumber
} from '@/constants/selectOptions.ts';
import Textarea from '@/components/common/Textarea.tsx';
import createDdeep from '@/apis/createDdeep.ts';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const DdeepCreate = () => {
  const navigate = useNavigate();
  const form = useForm<Ddeep>({
    resolver: zodResolver(createDdeepSchema)
  });

  const handleSubmit = form.handleSubmit((data) => {
    createDdeep(data).then((res) => {
      if (res.isSuccess === true) {
        toast.success('띱 생성에 성공했습니다!');
        navigate('/');
      }
      if (res.isSuccess === false) {
        toast.error('띱 생성에 실패했습니다!');
      }
    });
  });

  return (
    <div className={'w-full flex flex-col justify-center items-center pt-4'}>
      <Form {...form}>
        <form onSubmit={handleSubmit}>
          <FormItem className={'flex flex-col mb-4'}>
            <p className={'text-lg font-semibold'}>띱 이름</p>
            <Input
              variant={'white'}
              {...form.register('name')}
            />
            {form.formState.errors.name && (
              <div className={'text-hc-coral text-[12px] mt-1'}>
                {form.formState.errors.name.message}
              </div>
            )}
          </FormItem>
          <div className={'flex gap-4'}>
            <FormField
              name={'type'}
              render={({ field }) => (
                <FormItem className={'mb-4'}>
                  <div className={'flex flex-col gap-y-2 justify-center'}>
                    <p className={'text-lg font-semibold'}>목적</p>
                    <SingleSelect
                      className={'w-[160px] h-12 rounded-3xl'}
                      items={DdeepPurpose}
                      initialLabel={'모집 목적'}
                      onSelectedChange={field.onChange}
                    />
                    <FormMessage className={'text-hc-coral text-[12px]'}>
                      {form.formState.errors.type?.message}
                    </FormMessage>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name={'participantLimit'}
              render={({ field }) => (
                <FormItem>
                  <div className={'flex flex-col gap-y-2 justify-center'}>
                    <p className={'text-lg font-semibold'}>모집 인원</p>
                    <SingleSelect
                      className={'w-[160px] h-12 rounded-3xl'}
                      items={DdeepRecruitingNumber}
                      initialLabel={'모집 인원'}
                      onSelectedChange={field.onChange}
                    />
                    <FormMessage className={'text-hc-coral text-[12px]'}>
                      {form.formState.errors.participantLimit?.message}
                    </FormMessage>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <FormItem className={'flex flex-col mb-4'}>
            <p className={'text-lg font-semibold'}>연락 링크</p>
            <Input
              variant={'white'}
              {...form.register('contactUrl')}
            />
            {form.formState.errors.contactUrl && (
              <div className={'text-hc-coral text-[12px] mt-1'}>
                {form.formState.errors.contactUrl.message}
              </div>
            )}
          </FormItem>
          <FormItem className={'flex flex-col mb-4'}>
            <p className={'text-lg font-semibold'}>띱 설명</p>
            <Textarea {...form.register('description')} />
            {form.formState.errors.description && (
              <div className={'text-hc-coral text-[12px] mt-1'}>
                {form.formState.errors.description.message}
              </div>
            )}
          </FormItem>
          <Button
            variant={'primary'}
            size={'lg'}
            type={'submit'}>
            띱!
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DdeepCreate;
