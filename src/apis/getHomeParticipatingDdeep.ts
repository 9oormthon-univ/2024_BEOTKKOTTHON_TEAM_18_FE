import { baseInstance } from '@/apis/index.ts';

const getHomeParticipatingDdeep = async () => {
  try {
    const response = await baseInstance.get('/recruitments/participating');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getHomeParticipatingDdeep;
