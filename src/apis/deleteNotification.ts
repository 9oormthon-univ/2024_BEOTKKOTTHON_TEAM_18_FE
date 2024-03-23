import { baseInstance } from '@/apis/index.ts';

const deleteNotification = async (id: string) => {
  try {
    const res = await baseInstance.delete(`/notifications/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default deleteNotification;
