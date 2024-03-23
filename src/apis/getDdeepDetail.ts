import { baseInstance } from '@/apis/index.ts';
import { DdeepDetail } from '@/types';

const getDdeepDetail = async (id: string) => {
  try {
    const res = await baseInstance.get<{ result: DdeepDetail }>(
      `/recruitments/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getDdeepDetail;
