import { baseInstance } from '@/apis/index.ts';

const enterDdeep = async (ddeepId: string) => {
  try {
    const res = await baseInstance.post(`recruitments/${ddeepId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default enterDdeep;
