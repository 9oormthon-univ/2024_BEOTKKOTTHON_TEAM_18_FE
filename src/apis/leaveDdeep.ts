import { baseInstance } from '@/apis/index.ts';

const leaveDdeep = async (id: string) => {
  try {
    const res = await baseInstance.patch(`/recruitments/${id}/withdraw`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default leaveDdeep;
