import { z } from 'zod';

export const createDdeepSchema = z.object({
  name: z.string().min(2, { message: '이름은 2글자 이상이어야 합니다!' }),
  type: z.string().min(1),
  participantLimit: z.string().min(1),
  contactUrl: z.string().min(1),
  description: z.string().min(1)
});

export type Ddeep = z.infer<typeof createDdeepSchema>;
