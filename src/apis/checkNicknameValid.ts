import { baseInstance } from '@/apis/index.ts';

const checkNicknameValid = async (nickname: string) => {
  try {
    const res = await baseInstance.post('users/nickname', {
      nickname: nickname
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default checkNicknameValid;
