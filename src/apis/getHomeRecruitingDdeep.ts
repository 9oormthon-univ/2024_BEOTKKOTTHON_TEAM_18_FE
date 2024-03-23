import { baseInstance } from '@/apis/index.ts';

const getHomeRecruitingDdeep = async () => {
  try {
    const response = await baseInstance.get('/recruitments/recruiting');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getHomeRecruitingDdeep;
