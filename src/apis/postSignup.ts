import { baseInstance } from '@/apis/index.ts';

interface SignupData {
  loginId: string;
  password: string;
  nickname: string;
}

const postSignup = async (data: SignupData) => {
  try {
    const res = await baseInstance.post('/users/signup', data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default postSignup;
