import { baseInstance } from '@/apis/index.ts';
import { Notification } from '@/types';

interface NotificationListResponse {
  result: {
    notificationList: Notification[];
  };
}

const getNotificationList = async () => {
  try {
    const res =
      await baseInstance.get<NotificationListResponse>('/notifications');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getNotificationList;
