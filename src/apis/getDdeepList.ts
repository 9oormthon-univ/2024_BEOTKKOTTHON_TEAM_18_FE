import { baseInstance } from '@/apis/index.ts';

const getDdeepList = async (
  type: 'recruiting' | 'participating' | 'interest',
  interest?: string
) => {
  const endpoint = () => {
    if (type === 'recruiting') {
      return '/recruitments?isParticipant=false';
    }
    if (type === 'participating') {
      return '/recruitments?isParticipant=true';
    }
    if (type === 'interest') {
      return `/recruitments?isParticipant=false&type=${interest}`;
    }
    return '/recruitments?recruiting';
  };
  try {
    const res = await baseInstance.get(endpoint());
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getDdeepList;
