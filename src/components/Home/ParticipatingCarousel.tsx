import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem
} from '@/components/ui/carousel.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { DdeepInfo } from '@/types';
import leaveDdeep from '@/apis/leaveDdeep.ts';
import { toast } from 'sonner';
import cancelDdeep from '@/apis/cancelDdeep.ts';
import doneDdeep from '@/apis/doneDdeep.ts';

interface ParticipatingCarouselProps {
  data: DdeepInfo[];
  refetch: () => void;
}

const ParticipatingCarousel = ({
  data,
  refetch
}: ParticipatingCarouselProps) => {
  const handleLeaveDdeep = async (id: string) => {
    const res = await leaveDdeep(id);
    if (res.isSuccess === true) {
      toast.success('띱 탈퇴에 성공했습니다!');
      refetch();
    }
    if (!res.isSuccess) {
      toast.error('띱 탈퇴에 실패했습니다!');
      refetch();
    }
  };

  const handleCancelDdeep = async (id: string) => {
    const res = await cancelDdeep(id);
    if (res.isSuccess === true) {
      toast.success('띱 모집이 취소되었습니다!');
      refetch();
    }
    if (res.isSuccess === false) {
      toast.error('띱 모집 취소에 실패했습니다!');
      refetch();
    }
  };

  const handleDoneDdeep = async (id: string) => {
    const res = await doneDdeep(id);
    if (res.isSuccess === true) {
      toast.success('띱 모집을 완료했습니다!');
      refetch();
    }
    if (res.isSuccess === false) {
      toast.error('띱 모집을 완료하는 데 실패했습니다!');
      refetch();
    }
  };

  return (
    <Carousel className={'w-full max-w-sm'}>
      <CarouselContent className={'w-full mx-auto'}>
        {data.map((ddeep, index) => (
          <CarouselItem
            needBasisFull={true}
            className={'flex justify-center'}
            key={`participating-item-${index}`}>
            <Card
              className={
                'border-hc-blue border-2 bg-hc-white w-[340px] h-[190px] rounded-2xl'
              }>
              <CardContent className={'flex flex-col gap-y-1'}>
                <div className={'w-full mt-5 flex justify-between'}>
                  <Badge
                    className={'bg-hc-blue-dark text-hc-white text-[10px]'}>
                    {ddeep.type}
                  </Badge>
                  <div
                    className={
                      'h-5 w-5 rounded-full bg-hc-gray flex justify-center items-center cursor-pointer'
                    }>
                    <RotateCw
                      size={14}
                      stroke={'#848484'}
                    />
                  </div>
                </div>
                <div className={'text-[14px] font-bold text-hc-black'}>
                  {ddeep.name}
                </div>
                <div className={'flex flex-col gap-y-1'}>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[12px] font-semibold text-hc-blue-dark'}>
                      이름 |
                    </div>
                    <div className={'text-[12px] font-semibold text-hc-black'}>
                      {ddeep.leader}
                    </div>
                  </div>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[12px] font-semibold text-hc-blue-dark'}>
                      인원 |
                    </div>
                    <div className={'text-[12px] font-semibold text-hc-black'}>
                      {`${ddeep.participantNumber}명/${ddeep.participantLimit}명`}
                    </div>
                  </div>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[12px] font-semibold text-hc-blue-dark'}>
                      설명 |
                    </div>
                    <div className={'text-[12px] font-semibold text-hc-black'}>
                      {ddeep.description}
                    </div>
                  </div>
                </div>
                {!ddeep.isLeader ? (
                  <div className={'w-full flex justify-end mt-1'}>
                    <Button
                      className={
                        'w-[75px] h-[30px] bg-hc-blue-300 text-hc-white text-[12px] rounded-[12px]'
                      }
                      onClick={() =>
                        handleLeaveDdeep(ddeep.recruitmentIdx.toString())
                      }>
                      나가기
                    </Button>
                  </div>
                ) : (
                  <div className={'w-full flex justify-end mt-1 gap-x-1'}>
                    <Button
                      className={
                        'w-[75px] h-[30px] bg-hc-white border-[1px] border-hc-blue-300 text-hc-blue-300 text-[12px] rounded-[12px]'
                      }
                      onClick={() =>
                        handleCancelDdeep(ddeep.recruitmentIdx.toString())
                      }>
                      모집취소
                    </Button>
                    <Button
                      className={
                        'w-[75px] h-[30px] bg-hc-blue-300 text-hc-white text-[12px] rounded-[12px]'
                      }
                      onClick={() =>
                        handleDoneDdeep(ddeep.recruitmentIdx.toString())
                      }>
                      모집완료
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={'w-full flex justify-center'}>
        <CarouselDot className={'mt-5 border-none'} />
      </div>
    </Carousel>
  );
};

export default ParticipatingCarousel;
