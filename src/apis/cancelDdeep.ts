import { baseInstance } from '@/apis/index.ts';

const cancelDdeep = async (id: string) => {
  try {
    const res = await baseInstance.patch(`/recruitments/${id}/cancel`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default cancelDdeep;
