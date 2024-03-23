import { Card, CardContent } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';

const DdeepMoreParticipating = () => {
  return (
    <div className={'w-full flex flex-col justify-center items-center'}>
      <div className={'px-3.5 pt-4 w-full flex justify-start items-center'}>
        <h1 className={'text-[18px] font-bold'}>참여중인 띱!</h1>
      </div>
      <Card
        className={
          'bg-hc-white border-hc-blue border-2 w-[358px] h-[158px] rounded-3xl mt-3'
        }>
        <CardContent className={'flex flex-col gap-y-1 px-3.5'}>
          <div className={'w-full mt-3 flex'}>
            <Badge
              className={
                'w-12 h-5 bg-hc-blue-dark text-hc-white text-[10px] flex justify-center'
              }>
              {/* TODO: 대체 필요 */}
              전시회
            </Badge>
          </div>
          <div className={'w-full flex justify-between'}>
            <div className={'text-[16px] font-bold text-hc-black'}>
              띱! 같이 전시회 가실 분 구합니다!
            </div>
          </div>
          <div className={'flex flex-col'}>
            <div className={'flex gap-x-1'}>
              {/* TODO: 대체 필요*/}
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
          <div className={'w-full flex justify-end'}>
            <Button
              className={
                'w-[70px] h-[28px] bg-hc-blue-300 text-hc-white text-[12px] rounded-[12px] -mt-1'
              }>
              나가기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DdeepMoreParticipating;
