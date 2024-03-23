import { z } from 'zod';

export const isSingupValidSchema = z
  .object({
    nickname: z.string().min(1, { message: '한 글자 이상 입력해주세요' }),
    loginId: z.string().min(1, { message: '한 글자 이상 입력해주세요' }),
    password: z
      .string()
      .min(8, { message: '영어, 특수문자 포함 8자리 이상이어야 합니다. ' })
      .regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-])/, {
        message: '영어, 특수문자 포함 8자리 이상이어야 합니다. '
      }),
    checkPassword: z.string()
  })
  .refine((data) => data.password !== data.checkPassword, {
    path: ['checkPassword'],
    message: '비밀번호가 일치하지 않습니다.'
  });
export type Sign = z.infer<typeof isSingupValidSchema>;
