import { Ddeep } from '@/schemas/createDdeepSchema.ts';
import { baseInstance } from '@/apis/index.ts';

const createDdeep = async (data: Ddeep) => {
  try {
    const res = await baseInstance.post('/recruitments', data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default createDdeep;
