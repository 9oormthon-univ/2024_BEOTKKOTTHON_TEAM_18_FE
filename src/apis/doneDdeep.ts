import { baseInstance } from '@/apis/index.ts';

const doneDdeep = async (id: string) => {
  try {
    const res = await baseInstance.patch(`/recruitments/${id}/done`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default doneDdeep;
