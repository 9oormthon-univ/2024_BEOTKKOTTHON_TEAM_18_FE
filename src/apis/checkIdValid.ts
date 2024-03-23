import { baseInstance } from '@/apis/index.ts';

const checkIdValid = async (id: string) => {
  try {
    const res = await baseInstance.post('users/loginId', { loginId: id });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default checkIdValid;
