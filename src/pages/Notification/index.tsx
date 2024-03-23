import { Card, CardContent } from '@/components/ui/card.tsx';
import { XIcon } from 'lucide-react';
import { blue300Hex } from '@/constants';
import tokenStore from '@/store/tokenStore.ts';
import { useQuery } from '@tanstack/react-query';
import getNotificationList from '@/apis/getNotificationList.ts';
import deleteNotification from '@/apis/deleteNotification.ts';
const Notification = () => {
  const { token } = tokenStore();
  const { data, refetch } = useQuery({
    queryKey: ['notification'],
    queryFn: getNotificationList,
    enabled: !!token
  });

  const handleDeleteNotification = (id: string) => {
    deleteNotification(id).then(() => {
      refetch();
    });
  };

  return (
    <div className={'w-full flex flex-col justify-center items-center pt-4'}>
      {data?.result.notificationList.map((notification, idx) => (
        <Card
          className={
            'w-[358px] h-[166px] border-hc-blue-300 border-2 rounded-2xl'
          }
          key={`notification-${idx}`}>
          <CardContent className={'px-3.5 py-2.5 flex flex-col'}>
            <div className={'flex'}>
              <h1 className={'font-bold text-[16px]'}>{notification.name}</h1>
              <XIcon
                className={'w-6 h-6 ml-auto cursor-pointer'}
                stroke={blue300Hex}
                strokeWidth={1.5}
                onClick={() =>
                  handleDeleteNotification(
                    notification.notificationIdx.toString()
                  )
                }
              />
            </div>
            <div className={'flex flex-col'}>
              <div className={'flex gap-x-1 my-1'}>
                <div
                  className={'text-[12px] font-semibold text-hc-blue-darker'}>
                  연락링크 |
                </div>
                <div className={'text-[12px] font-semibold text-hc-black'}>
                  {notification.contactUrl}
                </div>
              </div>
              <div className={'flex gap-x-1'}>
                <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                  이름 |
                </div>
                <div className={'text-[12px] font-semibold text-hc-black'}>
                  {notification.leader}
                </div>
              </div>
              <div className={'flex gap-x-1'}>
                <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                  인원 |
                </div>
                <div className={'text-[12px] font-semibold text-hc-black'}>
                  {`${notification.participantNumber}명/${notification.participantLimit}명`}
                </div>
              </div>
              <div className={'flex gap-x-1'}>
                <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                  설명 |
                </div>
                <div className={'text-[12px] font-semibold text-hc-black'}>
                  {notification.description}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Notification;
