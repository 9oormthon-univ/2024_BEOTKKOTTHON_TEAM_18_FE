import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem
} from '@/components/ui/carousel.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';
import { DdeepInfo } from '@/types';
import enterDdeep from '@/apis/enterDdeep.ts';
import { toast } from 'sonner';

interface RecruitingCarouselProps {
  data: DdeepInfo[];
  refetch: () => void;
}

const RecruitingCarousel = ({ data, refetch }: RecruitingCarouselProps) => {
  const navigate = useNavigate();
  const handleEnterDdeep = async (id: string) => {
    const res = await enterDdeep(id);
    if (res.isSuccess === true) {
      toast.success('띱 참여에 성공했습니다!');
      refetch();
    }
    if (!res.isSuccess) {
      toast.error('띱 참여에 실패했습니다!');
      refetch();
    }
  };
  return (
    <Carousel className={'w-full max-w-sm'}>
      <CarouselContent className={'w-full mx-auto'}>
        {data.map((ddeep, index) => (
          <CarouselItem
            needBasisFull={false}
            className={'flex justify-center px-0.5'}
            key={`recruiting-item-${index}`}>
            <Card
              className={
                'border-hc-blue border-2 bg-hc-white w-[220px] h-[125px] rounded-2xl'
              }>
              <CardContent className={'flex flex-col gap-y-1 px-3.5'}>
                <div className={'w-full mt-2 flex'}>
                  <Badge
                    className={
                      'w-11 h-4 bg-hc-blue-dark text-hc-white text-[8px]'
                    }>
                    {ddeep.type}
                  </Badge>
                </div>
                <div className={'w-full flex justify-between'}>
                  <div className={'text-[10px] font-bold text-hc-black'}>
                    {ddeep.name}
                  </div>
                  <div
                    className={
                      'text-[8px] text-hc-grayDark cursor-pointer underline'
                    }
                    onClick={() => navigate(`/ddeep/${ddeep.recruitmentIdx}`)}>
                    상세보기
                  </div>
                </div>
                <div className={'flex flex-col gap-y-1'}>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[8px] font-semibold text-hc-blue-dark'}>
                      이름 |
                    </div>
                    <div className={'text-[8px] font-semibold text-hc-black'}>
                      {ddeep.leader}
                    </div>
                  </div>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[8px] font-semibold text-hc-blue-dark'}>
                      인원 |
                    </div>
                    <div className={'text-[8px] font-semibold text-hc-black'}>
                      {`${ddeep.participantNumber}명/${ddeep.participantLimit}명`}
                    </div>
                  </div>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[8px] font-semibold text-hc-blue-dark'}>
                      설명 |
                    </div>
                    <div className={'text-[8px] font-semibold text-hc-black'}>
                      {ddeep.description}
                    </div>
                  </div>
                </div>
                {!ddeep.isLeader && (
                  <div className={'w-full flex justify-end mt-1'}>
                    <Button
                      className={
                        'w-[45px] h-[18px] bg-hc-blue-300 text-hc-white text-[8px] rounded-[12px]'
                      }
                      onClick={() =>
                        handleEnterDdeep(ddeep.recruitmentIdx.toString())
                      }>
                      참여하기
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={'w-full flex justify-center'}>
        <CarouselDot
          className={'my-3 border-none'}
          focusedDotType={'long'}
        />
      </div>
    </Carousel>
  );
};

export default RecruitingCarousel;
