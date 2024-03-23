import { Card, CardContent } from '@/components/ui/card.tsx';
import { XIcon } from 'lucide-react';
import { blue300Hex } from '@/constants';

const Notification = () => {
  return (
    <div className={'w-full flex flex-col justify-center items-center pt-4'}>
      <Card
        className={
          'w-[358px] h-[166px] border-hc-blue-300 border-2 rounded-2xl'
        }>
        <CardContent className={'px-3.5 py-2.5 flex flex-col'}>
          <div className={'flex'}>
            <h1 className={'font-bold text-[16px]'}>
              ~~~ 띱이 성사되었습니다!
            </h1>
            <XIcon
              className={'w-6 h-6 ml-auto cursor-pointer'}
              stroke={blue300Hex}
              strokeWidth={1.5}
            />
          </div>
          <div className={'flex flex-col'}>
            {/* TODO: 대체 필요*/}
            <div className={'flex gap-x-1 my-1'}>
              <div className={'text-[12px] font-semibold text-hc-blue-darker'}>
                연락링크 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                https://open.kakao.com/o/g7g7g7g7
              </div>
            </div>
            <div className={'flex gap-x-1'}>
              <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                이름 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                김헤쳐
              </div>
            </div>
            <div className={'flex gap-x-1'}>
              <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                인원 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                4명/5명
              </div>
            </div>
            <div className={'flex gap-x-1'}>
              <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                설명 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                전시회 가서 예쁜 그림도 보고 사진도 찍어요~
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notification;
