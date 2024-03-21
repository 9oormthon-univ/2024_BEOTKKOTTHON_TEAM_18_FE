import { z } from 'zod';

export const createDdeepSchema = z.object({
  name: z.string().min(2, { message: '이름은 2글자 이상이어야 합니다!' }),
  purpose: z.string().min(1),
  recruitingNumber: z.string().min(1),
  contact: z.string().min(1),
  description: z.string().min(1)
});

export type Ddeep = z.infer<typeof createDdeepSchema>;
