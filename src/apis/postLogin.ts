import { baseInstance } from '@/apis/index.ts';

interface LoginData {
  loginId: string;
  password: string;
}

const postLogin = async (data: LoginData) => {
  try {
    const res = await baseInstance.post('/users/login', data);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default postLogin;
