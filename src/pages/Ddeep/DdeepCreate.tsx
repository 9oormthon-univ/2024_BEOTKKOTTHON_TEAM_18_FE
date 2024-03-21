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

const DdeepCreate = () => {
  const form = useForm<Ddeep>({
    resolver: zodResolver(createDdeepSchema)
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
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
              name={'purpose'}
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
                      {form.formState.errors.purpose?.message}
                    </FormMessage>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name={'recruitingNumber'}
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
                      {form.formState.errors.purpose?.message}
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
              {...form.register('contact')}
            />
            {form.formState.errors.contact && (
              <div className={'text-hc-coral text-[12px] mt-1'}>
                {form.formState.errors.contact.message}
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
